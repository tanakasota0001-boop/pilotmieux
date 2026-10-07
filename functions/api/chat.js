// Cloudflare Pages Functions: /api/chat
// Gemini API を呼び出してサイト内知識に基づいた回答を生成するエンドポイント
// 503混雑時やエラー時の複数モデル自動フェイルオーバー（フォールバック）対応

import { SYSTEM_PROMPT } from "../data/knowledge.js";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// プリフライトリクエスト対応 (OPTIONS)
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

function getRawApiKey(env) {
  if (!env) return "";
  if (env.GEMINI_API_KEY) return env.GEMINI_API_KEY;
  for (const [k, v] of Object.entries(env)) {
    if (k.trim().toLowerCase() === "gemini_api_key" && v) {
      return v;
    }
  }
  return "";
}

function cleanApiKey(key) {
  if (!key) return "";
  let cleaned = String(key).trim().replace(/^["']|["']$/g, "").trim();

  // 改行や空白・カンマ等で複数行/複数トークンある場合は最初の有効なものを採用
  const tokens = cleaned.split(/[\r\n\s,]+/).filter(Boolean);
  if (tokens.length > 0) {
    cleaned = tokens[0];
  }

  // もし "AQ." が2回連結されて貼り付けられている場合（例: AQ.xxxAQ.xxx）、最初のAQキー（30〜60文字）を抽出
  const aqMatch = cleaned.match(/(AQ\.[A-Za-z0-9_-]{30,70})/);
  if (aqMatch && aqMatch[1]) {
    cleaned = aqMatch[1];
  }

  return cleaned;
}

// 疎通確認・ヘルスチェック (GET)
export async function onRequestGet(context) {
  const { env } = context;
  const rawKey = getRawApiKey(env);
  const cleanedKey = cleanApiKey(rawKey);
  const maskedKey = cleanedKey.length > 8
    ? `${cleanedKey.slice(0, 4)}...${cleanedKey.slice(-4)} (length: ${cleanedKey.length})`
    : (cleanedKey ? `length: ${cleanedKey.length}` : "not configured");

  const envKeys = Object.keys(env || {}).filter((k) => k !== "ASSETS");

  return jsonResponse({
    status: "ok",
    service: "pilotmieux-chat-api",
    apiKeyConfigured: Boolean(cleanedKey),
    keyMask: maskedKey,
    hasExtraQuotesOrWhitespace: rawKey !== cleanedKey,
    availableEnvKeys: envKeys,
  });
}

// チャットAPI (POST)
export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const rawKey = getRawApiKey(env);
    const apiKey = cleanApiKey(rawKey);

    if (!apiKey) {
      const detectedKeys = Object.keys(env || {}).filter((k) => k !== "ASSETS");
      return jsonResponse(
        {
          error: "APIキーが設定されていないか、値が空です。",
          details: `Cloudflareダッシュボードの「設定」＞「変数とシークレット」に GEMINI_API_KEY を設定してください。（認識中のキー: ${detectedKeys.length > 0 ? detectedKeys.join(", ") : "なし"}）`,
        },
        500
      );
    }

    // リクエストのパース
    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: "リクエスト形式が不正です。" }, 400);
    }

    const { message, history = [] } = body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return jsonResponse({ error: "メッセージを入力してください。" }, 400);
    }

    // 文字数上限チェック (スパム・トークン浪費防止)
    if (message.length > 800) {
      return jsonResponse(
        { error: "メッセージは800文字以内で入力してください。" },
        400
      );
    }

    // 会話履歴の整形 (直近最大6ターンに制限)
    const validHistory = Array.isArray(history) ? history.slice(-6) : [];
    const contents = [];

    for (const h of validHistory) {
      if (h && typeof h.text === "string" && (h.role === "user" || h.role === "model")) {
        contents.push({
          role: h.role,
          parts: [{ text: h.text }],
        });
      }
    }

    // 今回のユーザーメッセージを追加
    contents.push({
      role: "user",
      parts: [{ text: message.trim() }],
    });

    const geminiPayload = {
      system_instruction: {
        parts: [{ text: SYSTEM_PROMPT }],
      },
      contents: contents,
      generationConfig: {
        temperature: 0.6,
        maxOutputTokens: 800,
        topP: 0.95,
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
      ],
    };

    // 試行するモデル候補（503混雑時や一時障害時に自動で次に切り替え）
    const candidateModels = [
      env.GEMINI_MODEL,
      "gemini-flash-latest",
      "gemini-flash-lite-latest",
      "gemini-3.8-flash",
      "gemini-3.5-flash-lite",
      "gemini-3.7-flash",
    ].filter(Boolean);

    // 重複を削除した一意のモデル順序リスト
    const modelsToTry = [...new Set(candidateModels)];

    let lastError = null;

    for (const model of modelsToTry) {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      try {
        const response = await fetch(geminiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey,
          },
          body: JSON.stringify(geminiPayload),
        });

        if (response.ok) {
          const data = await response.json();
          const replyText =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "申し訳ございません。回答を生成できませんでした。";

          return jsonResponse({ reply: replyText });
        }

        const errorText = await response.text();
        console.warn(`[Gemini API] Model ${model} returned ${response.status}:`, errorText);
        lastError = { status: response.status, text: errorText };

        // 400（リクエスト不正）や 401/403（キー無効）はモデル変えても解決しないため即リターン
        if (response.status === 400 || response.status === 401 || response.status === 403) {
          let msg = "リクエスト内容またはAPIキーに問題があります。";
          if (response.status === 401 || response.status === 403) {
            msg = "APIキーが無効、またはアクセス権限がありません。Cloudflareダッシュボードの環境変数（GEMINI_API_KEY）をご確認ください。";
          }
          return jsonResponse(
            {
              error: msg,
              status: response.status,
              details: errorText,
              keyLength: apiKey.length,
              model: model,
            },
            response.status
          );
        }

        // 503（混雑）、429（レート制限）、404（廃止）などの場合は次のモデルを試行
        continue;
      } catch (fetchErr) {
        console.warn(`[Gemini API] Network exception for ${model}:`, fetchErr.message);
        lastError = { status: 500, text: fetchErr.message };
        continue;
      }
    }

    // 全てのモデル候補で失敗した場合
    console.error("All Gemini candidate models failed:", lastError);
    return jsonResponse(
      {
        error:
          "現在AIサーバーが非常に混み合っております。恐れ入りますが、少し時間をおいてから再度お試しいただくか、直接お問い合わせフォームよりご連絡ください。",
        status: lastError?.status || 503,
      },
      503
    );
  } catch (err) {
    console.error("Chat Function Error:", err);
    return jsonResponse(
      { error: "サーバー内部でエラーが発生しました。", details: err.message },
      500
    );
  }
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
