
import { useEffect, useRef, useState } from "react";
import {
  answerFromPortfolio,
  chatWelcome,
  suggestedQuestions,
} from "../../data/chatbot";

interface Message {
  id: string;
  from: "bot" | "user";
  text: string;
}

function uid(): string {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

async function getReply(message: string): Promise<string> {
  const endpoint = import.meta.env.VITE_CHAT_API_URL;

  if (endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("Chat service unavailable");
      }

      const data = (await response.json()) as { reply?: string };

      if (data.reply) {
        return data.reply;
      }
    } catch {
      return answerFromPortfolio(message);
    }
  }

  return answerFromPortfolio(message);
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "welcome", from: "bot", text: chatWelcome },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing, open]);

  async function send(text: string) {
    const trimmed = text.trim();

    if (!trimmed || typing) {
      return;
    }

    setInput("");
    setMessages((current) => [
      ...current,
      { id: uid(), from: "user", text: trimmed },
    ]);

    setTyping(true);

    const reply = await getReply(trimmed);

    setMessages((current) => [
      ...current,
      { id: uid(), from: "bot", text: reply },
    ]);

    setTyping(false);
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {open && (
        <div
          className="mb-3 flex h-[min(32rem,calc(100dvh-6.5rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[1.6rem] border border-sand bg-ivory shadow-2xl"
          role="dialog"
          aria-label="Ask about Jannat"
        >
          <div className="flex items-center justify-between border-b border-sand bg-charcoal px-4 py-3 text-ivory">
            <div>
              <p className="font-serif text-lg">Ask about Jannat</p>
              <p className="text-[11px] uppercase tracking-wider text-gold">
                Portfolio Assistant
              </p>
            </div>

            <button
              type="button"
              className="rounded-full px-2 text-xl"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div
            ref={listRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[90%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  message.from === "user"
                    ? "ml-auto bg-charcoal text-ivory"
                    : "bg-cream text-ink"
                }`}
              >
                {message.text}
              </div>
            ))}

            {typing && (
              <div
                className="flex w-16 items-center justify-center gap-1 rounded-2xl bg-cream px-4 py-3"
                aria-label="Typing"
              >
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-mute" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-mute" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-mute" />
              </div>
            )}

            {messages.length < 3 && suggestedQuestions.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    className="rounded-full border border-sand px-3 py-1.5 text-left text-xs text-ink hover:border-bronze"
                    onClick={() => void send(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            className="flex gap-2 border-t border-sand p-3"
            onSubmit={(event) => {
              event.preventDefault();
              void send(input);
            }}
          >
            <label className="sr-only" htmlFor="chat-input">
              Ask about Jannat
            </label>

            <input
              id="chat-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about Jannat..."
              className="min-w-0 flex-1 rounded-full border border-sand bg-paper px-4 py-2 text-sm outline-none focus:border-bronze"
            />

            <button
              type="submit"
              disabled={!input.trim() || typing}
              className="rounded-full bg-charcoal px-4 py-2 text-xs uppercase tracking-wider text-ivory transition-colors hover:bg-bronze disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="ml-auto flex items-center gap-3 rounded-full border border-bronze/30 bg-charcoal px-5 py-4 text-sm font-medium text-ivory shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-bronze"
        aria-expanded={open}
        aria-label={open ? "Close portfolio assistant" : "Ask about Jannat"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="text-xl text-gold" aria-hidden="true">
          ✦
        </span>
        <span>{open ? "Close Assistant" : "Ask about Jannat"}</span>
        <span aria-hidden="true">{open ? "×" : "↗"}</span>
      </button>
    </div>
  );
}
