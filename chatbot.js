/**
 * 株式会社パイロットミュー（pilotmieux）AIチャット ウィジェット
 * ノイズレス・エディトリアルデザイン & ページ間セッション維持（sessionStorage）
 */

(() => {
  if (window.__PM_CHATBOT_INITIALIZED__) return;
  window.__PM_CHATBOT_INITIALIZED__ = true;

  // セッションストレージ用キー
  const STORAGE_KEY_MESSAGES = "pilotmieux_chat_msgs_v1";
  const STORAGE_KEY_CONTEXT = "pilotmieux_chat_ctx_v1";
  const STORAGE_KEY_IS_OPEN = "pilotmieux_chat_open_v1";

  // 画面描画用メッセージ履歴 [{ role: "bot"|"user", text: string, time: string, suggestions?: string[] }]
  let renderedMessages = [];
  // API送信用文脈履歴 [{ role: "user"|"model", text: string }]
  let conversationHistory = [];
  let isSending = false;
  let isOpen = false;

  const QUICK_QUESTIONS = [
    "どんなサービスを提供していますか？",
    "「伴走型経営支援」の具体的な特徴は？",
    "どんな課題の相談に乗ってもらえますか？",
    "相談の流れや費用の考え方を教えてください",
  ];

  const INITIAL_MESSAGE =
    "こんにちは。株式会社パイロットミューのAI窓口です。\n\n" +
    "当社の**経営伴走支援**、**AI・DX導入**、**業務改善**などのサービス内容や企業情報についてご案内します。\n" +
    "気になる点がございましたら、下の質問をタップするか、自由にお尋ねください。";

  function getCurrentTime() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    return `${h}:${m}`;
  }

  // セッション保存
  function saveState() {
    try {
      sessionStorage.setItem(STORAGE_KEY_MESSAGES, JSON.stringify(renderedMessages));
      sessionStorage.setItem(STORAGE_KEY_CONTEXT, JSON.stringify(conversationHistory));
      sessionStorage.setItem(STORAGE_KEY_IS_OPEN, isOpen ? "true" : "false");
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  }

  // 会話リセット
  function resetState() {
    try {
      sessionStorage.removeItem(STORAGE_KEY_MESSAGES);
      sessionStorage.removeItem(STORAGE_KEY_CONTEXT);
    } catch (e) {}
    renderedMessages = [];
    conversationHistory = [];
  }

  function initWidget() {
    const root = document.createElement("div");
    root.id = "pm-chatbot-root";
    root.innerHTML = `
      <!-- Launcher Button (物理モーフィング: ピル型 ⇄ 正円×ボタン) -->
      <button class="pm-launcher-btn" id="pmLauncher" aria-label="AI相談窓口を開く" aria-expanded="false">
        <div class="pm-launcher-icon-box">
          <img src="images/icon.png" alt="pilotmieux" class="pm-icon-pm" width="20" height="20">
          <svg class="pm-icon-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <span class="pm-launcher-text-wrap">
          <span>AIに相談する</span>
        </span>
      </button>

      <!-- Chat Window -->
      <div class="pm-chat-window" id="pmChatWindow" role="dialog" aria-modal="true" aria-label="pilotmieux AI">
        <!-- Header (ロゴのみのノイズレス配置) -->
        <header class="pm-chat-header">
          <div class="pm-header-brand">
            <img src="images/logo.png" alt="pilotmieux" class="pm-header-logo-img">
          </div>
          <div class="pm-header-actions">
            <!-- Reset Button -->
            <button class="pm-header-btn" id="pmResetBtn" aria-label="会話を最初からやり直す" title="会話をリセット">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="1 4 1 10 7 10"></polyline>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
              </svg>
            </button>
            <!-- Close Button (純粋な×) -->
            <button class="pm-header-btn" id="pmCloseBtn" aria-label="閉じる" title="閉じる">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </header>

        <!-- Message List -->
        <div class="pm-chat-messages" id="pmMessages"></div>

        <!-- Footer Input Area -->
        <div class="pm-chat-footer">
          <div class="pm-input-bar">
            <textarea
              class="pm-textarea"
              id="pmInput"
              rows="1"
              placeholder="質問を入力してください..."
              aria-label="質問入力"></textarea>
            <button class="pm-submit-btn" id="pmSendBtn" aria-label="送信" disabled title="送信">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
          <div class="pm-footer-note">
            ※回答はサイト情報に基づきます。正確な内容は<a href="contact.html" style="color:inherit; text-decoration:underline;">お問い合わせフォーム</a>よりご相談ください。
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(root);

    // 要素取得
    const launcher = document.getElementById("pmLauncher");
    const windowEl = document.getElementById("pmChatWindow");
    const closeBtn = document.getElementById("pmCloseBtn");
    const resetBtn = document.getElementById("pmResetBtn");
    const messagesEl = document.getElementById("pmMessages");
    const inputEl = document.getElementById("pmInput");
    const sendBtn = document.getElementById("pmSendBtn");

    // セッションから過去の会話を復元（なければ初期メッセージ）
    restoreSession();

    // イベントリスナー
    launcher.addEventListener("click", () => toggleChat());
    closeBtn.addEventListener("click", () => toggleChat(false));
    resetBtn.addEventListener("click", () => {
      resetState();
      messagesEl.innerHTML = "";
      renderInitialView();
      saveState();
    });

    sendBtn.addEventListener("click", () => handleSend());

    inputEl.addEventListener("input", () => {
      inputEl.style.height = "auto";
      inputEl.style.height = Math.min(inputEl.scrollHeight, 80) + "px";
      sendBtn.disabled = !inputEl.value.trim() || isSending;
    });

    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        if (e.isComposing) return;
        e.preventDefault();
        handleSend();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen) {
        toggleChat(false);
      }
    });
  }

  // セッション復元処理
  function restoreSession() {
    try {
      const savedMessagesStr = sessionStorage.getItem(STORAGE_KEY_MESSAGES);
      const savedContextStr = sessionStorage.getItem(STORAGE_KEY_CONTEXT);
      const wasOpen = sessionStorage.getItem(STORAGE_KEY_IS_OPEN) === "true";

      if (savedContextStr) {
        conversationHistory = JSON.parse(savedContextStr) || [];
      }

      if (savedMessagesStr) {
        const list = JSON.parse(savedMessagesStr);
        if (Array.isArray(list) && list.length > 0) {
          renderedMessages = list;
          // DOMに復元描画
          list.forEach((msg) => {
            if (msg.role === "user") {
              renderUserMessageDOM(msg.text, msg.time);
            } else {
              renderBotMessageDOM(msg.text, msg.suggestions, msg.time);
            }
          });

          // 前のページで開いていたなら、開いた状態を維持
          if (wasOpen) {
            toggleChat(true);
          }
          return;
        }
      }
    } catch (e) {
      console.warn("Restore session error:", e);
    }

    // 初回表示
    renderInitialView();
  }

  function renderInitialView() {
    appendBotMessage(INITIAL_MESSAGE, QUICK_QUESTIONS);
  }

  function toggleChat(forceState) {
    const windowEl = document.getElementById("pmChatWindow");
    const launcher = document.getElementById("pmLauncher");
    const inputEl = document.getElementById("pmInput");

    isOpen = typeof forceState === "boolean" ? forceState : !isOpen;

    if (isOpen) {
      windowEl.classList.add("is-open");
      launcher.classList.add("is-active");
      launcher.setAttribute("aria-expanded", "true");
      setTimeout(() => inputEl.focus(), 200);
    } else {
      windowEl.classList.remove("is-open");
      launcher.classList.remove("is-active");
      launcher.setAttribute("aria-expanded", "false");
    }

    // 開閉状態をセッションに記憶
    saveState();
  }

  async function handleSend(textToSend) {
    const inputEl = document.getElementById("pmInput");
    const sendBtn = document.getElementById("pmSendBtn");
    const message = (textToSend || inputEl.value).trim();

    if (!message || isSending) return;

    inputEl.value = "";
    inputEl.style.height = "auto";
    sendBtn.disabled = true;
    isSending = true;

    // ユーザー発言描画 & 保存
    appendUserMessage(message);

    // タイピング表示
    const typingBox = showTypingIndicator();

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: message,
          history: conversationHistory,
        }),
      });

      typingBox.remove();

      if (!response.ok) {
        let errData = {};
        try {
          errData = await response.json();
        } catch {}
        let errorMsg =
          errData.error ||
          "現在アクセスが集中しております。少し時間をおいて再度お試しください。";
        if (errData.details) {
          const detailStr = typeof errData.details === "object" 
            ? JSON.stringify(errData.details, null, 2) 
            : String(errData.details);
          errorMsg += `\n\n【詳細情報】\n${detailStr}`;
        }
        appendBotMessage(
          `申し訳ございません。${errorMsg}\n\nお急ぎの場合は [お問い合わせフォーム](contact.html) よりご連絡ください。`
        );
        return;
      }

      const data = await response.json();
      const reply = data.reply || "お答えが見つかりませんでした。";

      // AI回答描画 & 保存
      appendBotMessage(reply);

      // 履歴管理（API用文脈）
      conversationHistory.push({ role: "user", text: message });
      conversationHistory.push({ role: "model", text: reply });

      if (conversationHistory.length > 6) {
        conversationHistory.splice(0, conversationHistory.length - 6);
      }

      saveState();
    } catch (err) {
      console.error("Chat Fetch Error:", err);
      typingBox.remove();
      appendBotMessage(
        "通信エラーが発生しました。インターネット接続をご確認のうえ、再度お試しいただくか、[お問い合わせフォーム](contact.html) よりご連絡ください。"
      );
    } finally {
      isSending = false;
      sendBtn.disabled = !inputEl.value.trim();
    }
  }

  // ユーザーメッセージ描画＆記録
  function appendUserMessage(text) {
    const time = getCurrentTime();
    renderedMessages.push({ role: "user", text, time });
    renderUserMessageDOM(text, time);
    saveState();
  }

  function renderUserMessageDOM(text, time) {
    const messagesEl = document.getElementById("pmMessages");
    const row = document.createElement("div");
    row.className = "pm-row pm-row-user";
    row.innerHTML = `
      <div class="pm-bubble-wrap">
        <div class="pm-bubble">
          ${escapeHtml(text).replace(/\n/g, "<br>")}
        </div>
        <span class="pm-time">${time || getCurrentTime()}</span>
      </div>
    `;
    messagesEl.appendChild(row);
    scrollToBottom();
  }

  // ボットメッセージ描画＆記録
  function appendBotMessage(text, suggestions) {
    const time = getCurrentTime();
    renderedMessages.push({ role: "bot", text, time, suggestions });
    renderBotMessageDOM(text, suggestions, time);
    saveState();
  }

  function renderBotMessageDOM(text, suggestions, time) {
    const messagesEl = document.getElementById("pmMessages");
    const row = document.createElement("div");
    row.className = "pm-row pm-row-bot";

    let bodyHtml = `<div class="pm-bubble">${formatMarkdown(text)}</div>`;

    if (suggestions && suggestions.length > 0) {
      bodyHtml += `<div class="pm-suggestions-container">`;
      suggestions.forEach((item) => {
        bodyHtml += `
          <button type="button" class="pm-suggest-btn" data-query="${escapeHtml(item)}">
            <span>${escapeHtml(item)}</span>
            <span class="pm-suggest-arrow" aria-hidden="true">→</span>
          </button>
        `;
      });
      bodyHtml += `</div>`;
    }

    row.innerHTML = `
      <div class="pm-bot-avatar" aria-hidden="true">
        <img src="images/icon.png" alt="pilotmieux" width="16" height="16">
      </div>
      <div class="pm-bubble-wrap">
        ${bodyHtml}
        <span class="pm-time">${time || getCurrentTime()}</span>
      </div>
    `;

    messagesEl.appendChild(row);

    // クイック質問イベント登録
    const btns = row.querySelectorAll(".pm-suggest-btn");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const query = btn.getAttribute("data-query");
        handleSend(query);
      });
    });

    scrollToBottom();
  }

  function showTypingIndicator() {
    const messagesEl = document.getElementById("pmMessages");
    const row = document.createElement("div");
    row.className = "pm-row pm-row-bot";
    row.innerHTML = `
      <div class="pm-bot-avatar" aria-hidden="true">
        <img src="images/icon.png" alt="pilotmieux" width="16" height="16">
      </div>
      <div class="pm-typing-box">
        <span class="pm-dot"></span>
        <span class="pm-dot"></span>
        <span class="pm-dot"></span>
      </div>
    `;
    messagesEl.appendChild(row);
    scrollToBottom();
    return row;
  }

  function scrollToBottom() {
    const messagesEl = document.getElementById("pmMessages");
    setTimeout(() => {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }, 40);
  }

  function formatMarkdown(text) {
    if (!text) return "";
    let formatted = escapeHtml(text);

    formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    formatted = formatted.replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    const lines = formatted.split("\n");
    let inList = false;
    const processedLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const listMatch = line.match(/^(\s*)[-*]\s+(.*)$/);

      if (listMatch) {
        if (!inList) {
          processedLines.push("<ul>");
          inList = true;
        }
        processedLines.push(`<li>${listMatch[2]}</li>`);
      } else {
        if (inList) {
          processedLines.push("</ul>");
          inList = false;
        }
        if (line.trim() === "") {
          processedLines.push("<br>");
        } else {
          processedLines.push(`<p>${line}</p>`);
        }
      }
    }
    if (inList) {
      processedLines.push("</ul>");
    }

    return processedLines.join("");
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWidget);
  } else {
    initWidget();
  }
})();
