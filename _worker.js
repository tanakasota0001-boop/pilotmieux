// Cloudflare Workers / Pages 共通エントリポイント (_worker.js)
// /api/chat へのリクエストを処理し、それ以外のパスは静的アセット（HTML/CSS/JS）を配信

import { SYSTEM_PROMPT } from "./functions/data/knowledge.js";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. /api/chat へのルーティング
    if (url.pathname === "/api/chat") {
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: CORS_HEADERS,
        });
      }

      if (request.method === "GET") {
        return handleGet(env);
      }

      if (request.method === "POST") {
        return handleChat(request, env);
      }

      return new Response("Method Not Allowed", { status: 405 });
    }

    // 2. 静的アセット（HTML/CSS/JS/画像）の配信
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response("Not Found", { status: 404 });
  },
};

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
  return String(key).trim().replace(/^["']|["']$/g, "").trim();
}

function handleGet(env) {
  const rawKey = getRawApiKey(env);
  const apiKey = cleanApiKey(rawKey);

  const maskedKey = apiKey.length > 8
    ? `${apiKey.slice(0, 4)}...${apiKey.slice(-4)} (length: ${apiKey.length})`
    : (apiKey ? `length: ${apiKey.length}` : "not configured");

  const envKeys = Object.keys(env || {}).filter((k) => k !== "ASSETS");

  return jsonResponse({
    status: "ok",
    service: "pilotmieux-chat-api",
    apiKeyConfigured: Boolean(apiKey),
    keyMask: maskedKey,
    hasExtraQuotesOrWhitespace: rawKey !== apiKey,
    availableEnvKeys: envKeys,
  });
}

async function handleChat(request, env) {
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

    if (message.length > 800) {
      return jsonResponse(
        { error: "メッセージは800文字以内で入力してください。" },
        400
      );
    }

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
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      ],
    };

    const candidateModels = [
      env.GEMINI_MODEL,
      "gemini-flash-latest",
      "gemini-flash-lite-latest",
      "gemini-3.8-flash",
      "gemini-3.5-flash-lite",
      "gemini-3.7-flash",
    ].filter(Boolean);

    const modelsToTry = [...new Set(candidateModels)];
    let lastError = null;

    for (const model of modelsToTry) {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      try {
        const response = await fetch(geminiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
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
        lastError = { status: response.status, text: errorText, model: model };

        if (response.status === 400 || response.status === 401 || response.status === 403) {
          let msg = "リクエスト内容またはAPIキーに問題があります。";
          if (response.status === 401 || response.status === 403) {
            msg = "APIキーが無効、またはアクセス権限がありません。Cloudflareダッシュボードの環境変数（GEMINI_API_KEY）の設定値をご確認ください。";
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

        continue;
      } catch (fetchErr) {
        console.warn(`[Gemini API] Network exception for ${model}:`, fetchErr.message);
        lastError = { status: 500, text: fetchErr.message, model: model };
        continue;
      }
    }

    console.error("All Gemini candidate models failed:", lastError);
    return jsonResponse(
      {
        error:
          "現在AIサーバーが非常に混み合っております。恐れ入りますが、少し時間をおいて再度お試しいただくか、直接お問い合わせフォームよりご連絡ください。",
        status: lastError?.status || 503,
        details: lastError?.text || null,
      },
      503
    );
  } catch (err) {
    console.error("Chat Error:", err);
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
