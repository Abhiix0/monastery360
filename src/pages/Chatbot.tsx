import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, MessageCircle, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Message {
  id: number;
  text: string;
  sender: "user" | "monk";
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "🙏 Greetings, peaceful soul. I am Brother Tenzin, your digital guide on the path of wisdom. How may I assist you on your spiritual journey today?",
      sender: "monk",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample responses for the chatbot
  const responses = [
    {
      keywords: ["meditation", "meditate", "mindfulness"],
      response: "🧘‍♂️ Meditation is like tending a garden of the mind. Start with just 5 minutes daily, focusing on your breath. When thoughts arise, acknowledge them gently like clouds passing in the sky, then return to your breath. Remember: the goal is not to empty the mind, but to observe it with compassion."
    },
    {
      keywords: ["stress", "anxiety", "worried", "overwhelmed"],
      response: "🌸 In moments of stress, remember this ancient teaching: 'This too shall pass.' Breathe deeply three times, place your hand on your heart, and remind yourself that you are safe in this moment. Stress often comes from dwelling in the past or fearing the future. Ground yourself in the present—it is the only moment that truly exists."
    },
    {
      keywords: ["purpose", "meaning", "lost", "direction"],
      response: "✨ The path to purpose is not found in grand destinations, but in small, mindful steps. Ask yourself: 'How can I reduce suffering—my own and others'?' Service to others often illuminates our own path. Start where you are, with what you have. The lotus blooms most beautifully in muddy waters."
    },
    {
      keywords: ["anger", "frustrated", "upset"],
      response: "🔥 Anger is like holding a hot coal—you burn yourself first. When anger arises, pause and breathe deeply. Ask: 'What pain lies beneath this anger?' Often, anger masks hurt or fear. Practice loving-kindness: first for yourself, then gradually extend it to others, even those who have caused you pain."
    },
    {
      keywords: ["happiness", "joy", "content"],
      response: "😊 True happiness is not the absence of problems, but the presence of peace amidst life's storms. Cultivate gratitude for simple moments: a warm cup of tea, a friend's smile, the sound of rain. Happiness shared is happiness doubled. May your joy ripple outward like stones cast in still water."
    },
    {
      keywords: ["death", "dying", "mortality"],
      response: "🕯️ Death is not the opposite of life, but its greatest teacher. Contemplating mortality helps us cherish each precious moment and live with greater intention. Like autumn leaves falling gracefully, death is part of nature's wisdom. Focus on living fully, loving deeply, and leaving the world a little brighter."
    },
    {
      keywords: ["forgiveness", "forgive", "hurt"],
      response: "🤲 Forgiveness is not condoning harmful actions, but freeing yourself from the prison of resentment. It's a gift you give yourself. Start small—forgive the small daily irritations. Gradually, your heart will soften toward greater hurts. Remember: forgiveness is a practice, not a destination."
    },
    {
      keywords: ["monastery", "monk", "buddhism", "temple"],
      response: "🏮 Monasteries are sanctuaries of wisdom, preserving teachings that have guided seekers for millennia. Each monastery is like a lighthouse—offering guidance to those lost in life's storms. Even if you cannot visit physically, you can create sacred space in your own home through mindful practice and compassion."
    }
  ];

  const defaultResponse = "🤔 That is a profound question that invites deep reflection. In my years of contemplation, I've learned that wisdom often lies not in the answers we seek, but in sitting quietly with our questions. What does your heart tell you about this matter? Sometimes the deepest insights come from within when we create space for silence and listening.";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getMonkResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const responseObj of responses) {
      if (responseObj.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return responseObj.response;
      }
    }
    
    return defaultResponse;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const monkResponse: Message = {
        id: messages.length + 2,
        text: getMonkResponse(inputText),
        sender: "monk",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, monkResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const suggestedQuestions = [
    "How can I find inner peace?",
    "What is the purpose of suffering?", 
    "How do I deal with difficult emotions?",
    "Can you teach me about meditation?",
    "How do I forgive someone who hurt me?",
    "What is the meaning of life?"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-japanese-carmine to-sinopia text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Monk Wisdom Chatbot
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Seek guidance from Brother Tenzin, our AI monk trained in ancient wisdom and mindfulness
            </p>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section className="monastery-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Chat Container */}
            <div className="monastery-card overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-japanese-carmine to-sinopia text-white p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cadmium-orange rounded-full flex items-center justify-center">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Brother Tenzin</h3>
                    <p className="text-sm text-white/80">Digital Monk Guide</p>
                  </div>
                  <div className="ml-auto">
                    <Sparkles size={20} className="text-cadmium-orange" />
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="h-96 overflow-y-auto p-4 bg-straw/5">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 mb-4 ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.sender === "monk" && (
                      <div className="w-8 h-8 bg-japanese-carmine rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot size={16} className="text-white" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[70%] px-4 py-3 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-cadmium-orange text-white rounded-br-md"
                          : "bg-white monastery-border rounded-bl-md"
                      }`}
                    >
                      <p className={`text-sm leading-relaxed ${
                        message.sender === "user" ? "text-white" : "monastery-text-secondary"
                      }`}>
                        {message.text}
                      </p>
                      <p className={`text-xs mt-1 ${
                        message.sender === "user" ? "text-white/70" : "text-rose-taupe/60"
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>

                    {message.sender === "user" && (
                      <div className="w-8 h-8 bg-rose-taupe rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User size={16} className="text-white" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-3 mb-4">
                    <div className="w-8 h-8 bg-japanese-carmine rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-white monastery-border px-4 py-3 rounded-2xl rounded-bl-md">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-rose-taupe/40 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-rose-taupe/40 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-rose-taupe/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t monastery-border">
                <form onSubmit={handleSendMessage} className="flex gap-3">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ask Brother Tenzin for wisdom and guidance..."
                    className="flex-1 px-4 py-3 border monastery-border rounded-xl focus:ring-2 focus:ring-japanese-carmine focus:border-transparent outline-none"
                    disabled={isTyping}
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim() || isTyping}
                    className="monastery-btn-primary px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>

            {/* Suggested Questions */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold monastery-text-primary mb-4">
                Suggested Questions to Get Started:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputText(question)}
                    className="p-3 text-left border monastery-border rounded-xl hover:bg-straw/10 transition-colors monastery-text-secondary hover:monastery-text-primary"
                  >
                    <MessageCircle size={16} className="inline mr-2" />
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-straw/10 rounded-xl">
              <p className="text-sm monastery-text-secondary leading-relaxed">
                <strong>Note:</strong> Brother Tenzin is an AI assistant designed to share mindfulness wisdom and spiritual guidance. 
                While inspired by Buddhist teachings, this is not a replacement for professional mental health support or 
                formal religious instruction. For serious emotional or spiritual concerns, please consult qualified professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Chatbot;