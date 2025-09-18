import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Maximize2, Minimize2, Send, Bot, User } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  id: number;
  text: string;
  sender: "user" | "monk";
  timestamp: Date;
}

// Gemini API key is read from Vite env at runtime

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "🙏 Greetings, peaceful soul. I am MONKBOT, your guide to the monasteries of Sikkim. How may I assist you today?",
      sender: "monk",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Log whether the API key is present (not the value) for debugging
  useEffect(() => {
    const hasKey = Boolean(import.meta.env.VITE_GOOGLE_API_KEY);
    // eslint-disable-next-line no-console
    console.log("[MONKBOT] VITE_GOOGLE_API_KEY present:", hasKey);
    if (!hasKey) {
      // eslint-disable-next-line no-console
      console.warn("[MONKBOT] Missing VITE_GOOGLE_API_KEY. Gemini answers will fallback.");
    }
  }, []);

  // Static keyword fallbacks (used only if Gemini fails)
  const responses = [
    {
      keywords: ["meditation", "meditate", "mindfulness"],
      response: "🧘‍♂️ Meditation is like tending a garden of the mind. Begin with just 5 minutes daily, focusing on your breath.",
    },
    {
      keywords: ["stress", "anxiety", "worried", "overwhelmed"],
      response: "🌿 In moments of stress, remember: 'This too shall pass.' Breathe deeply three times and ground yourself in the present.",
    },
    {
      keywords: ["purpose", "meaning", "lost", "direction"],
      response: "✨ The path to purpose is found in small, mindful steps. Ask yourself: 'How can I reduce suffering—my own and others'?'",
    },
    {
      keywords: ["monastery", "monk", "buddhism", "temple"],
      response: "🏮 Monasteries are sanctuaries of wisdom, preserving teachings that have guided seekers for centuries.",
    },
  ];

  // Generic Sikkim-specific fallback when Gemini fully fails
  const getSikkimFallback = (): string =>
    "I can guide you about Sikkim’s monasteries. Try asking about Rumtek, Pemayangtse, Enchey, Tashiding, or Ralang—history, rituals, or best visiting times.";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isFullscreen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isFullscreen]);

  const getMonkResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    for (const responseObj of responses) {
      if (responseObj.keywords.some((keyword) => lowerMessage.includes(keyword))) {
        return responseObj.response;
      }
    }
    return getSikkimFallback();
  };

  // ✅ Gemini API call
  const callGeminiAPI = async (userMessage: string): Promise<string> => {
    try {
      const apiKey = import.meta.env.VITE_GOOGLE_API_KEY as string | undefined;
      if (!apiKey) {
        // eslint-disable-next-line no-console
        console.error("[MONKBOT] VITE_GOOGLE_API_KEY is undefined. Using fallback.");
        return getMonkResponse(userMessage);
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `
You are MONKBOT, a wise digital monk guide for Monastery360.
Your strict scope: Always answer in the context of Sikkim, India and its monasteries.
Prioritize real monasteries (Rumtek, Pemayangtse, Enchey, Tashiding, Ralang, Phodong, Labrang, etc.),
their history, legends, lineages, rituals (pujas, cham dances), architecture, etiquette, visiting tips,
and festivals (Losar, Saga Dawa, Pang Lhabsol). If the user asks about unrelated topics,
briefly and politely steer the conversation back to Sikkim monasteries and provide a relevant angle.
Tone: calm, compassionate, concise (2–4 sentences), factual and practical.

User question: ${userMessage}
Answer as MONKBOT:`;

      const result = await model.generateContent(prompt);
      const text = await result.response.text();

      if (!text || !text.trim()) {
        // eslint-disable-next-line no-console
        console.error("[MONKBOT] Empty response from Gemini. Using fallback.");
        return getMonkResponse(userMessage);
      }

      return text.trim();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("[MONKBOT] Error calling Gemini API:", error);
      return getMonkResponse(userMessage); // fallback
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText("");
    setIsTyping(true);

    try {
      const apiResponse = await callGeminiAPI(currentInput);
      const monkResponse: Message = {
        id: messages.length + 2,
        text: apiResponse,
        sender: "monk",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, monkResponse]);
    } catch (error) {
      console.error("Error in handleSendMessage:", error);
      const fallbackResponse: Message = {
        id: messages.length + 2,
        text: getMonkResponse(currentInput),
        sender: "monk",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, fallbackResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsFullscreen(false);
  };

  // Floating chat icon
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="w-14 h-14 bg-gradient-to-r from-warm-terracotta to-deep-walnut text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Open chat"
        >
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
    );
  }

  // Chat window
  return (
    <div
      className={`fixed z-50 transition-all duration-300 ${
        isFullscreen ? "top-0 left-0 w-full h-full" : "bottom-6 right-6 w-80 h-96"
      }`}
    >
      {isFullscreen && (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={closeChat} />
      )}

      <div
        className={`relative bg-white rounded-2xl shadow-2xl border monastery-border overflow-hidden ${
          isFullscreen ? "w-full h-full" : "w-80 h-96"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-warm-terracotta to-deep-walnut text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-muted-gold rounded-full flex items-center justify-center">
              <Bot size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">MONKBOT</h3>
              <p className="text-xs text-white/80">Sikkim Monastery Guide</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleFullscreen}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label={isFullscreen ? "Minimize" : "Maximize"}
            >
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
            <button
              onClick={closeChat}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div
          className={`overflow-y-auto p-4 bg-soft-ivory/50 ${
            isFullscreen ? "flex-1" : "h-64"
          }`}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 mb-3 ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "monk" && (
                <div className="w-6 h-6 bg-warm-terracotta rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot size={12} className="text-white" />
                </div>
              )}

              <div
                className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm ${
                  message.sender === "user"
                    ? "bg-warm-terracotta text-white rounded-br-md"
                    : "bg-white monastery-border rounded-bl-md monastery-text-secondary"
                }`}
              >
                <p className="leading-relaxed">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === "user" ? "text-white/70" : "text-slate-gray/60"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              {message.sender === "user" && (
                <div className="w-6 h-6 bg-slate-gray rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <User size={12} className="text-white" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-2 mb-3">
              <div className="w-6 h-6 bg-warm-terracotta rounded-full flex items-center justify-center flex-shrink-0">
                <Bot size={12} className="text-white" />
              </div>
              <div className="bg-white monastery-border px-3 py-2 rounded-2xl rounded-bl-md">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-gray/40 rounded-full animate-bounce" />
                  <div
                    className="w-1.5 h-1.5 bg-slate-gray/40 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  />
                  <div
                    className="w-1.5 h-1.5 bg-slate-gray/40 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t monastery-border">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask MONKBOT..."
              className="flex-1 px-3 py-2 text-sm border monastery-border rounded-xl focus:ring-2 focus:ring-warm-terracotta focus:border-transparent outline-none"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="monastery-btn-primary px-3 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatbotWidget;
