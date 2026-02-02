
import React, { useState } from 'react';
import { MessageCircle, Sparkles, X, Send, User, Crown } from 'lucide-react';
import { geminiService } from '../services/geminiService';

const RegalStylist: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Greetings, distinguished gentleman. I am the Regal Stylist. How may I assist in crafting your signature appearance today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const advice = await geminiService.getStyleAdvice(userMsg, "luxury and distinction");
    
    setMessages(prev => [...prev, { role: 'bot', text: advice || "I'm reflecting on your royal request." }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60]">
      {isOpen ? (
        <div className="bg-[#0A0A0A] border border-[#C9A961]/30 w-[calc(100vw-2rem)] md:w-[400px] h-[60vh] md:h-[600px] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-[#C9A961] p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Crown className="text-[#0A0A0A]" size={20} />
              <span className="text-[#0A0A0A] font-display font-bold text-sm tracking-widest uppercase">Regal Stylist</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#0A0A0A] hover:bg-black/10 p-2 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-[11px] md:text-xs leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-[#C9A961]/20 border border-[#C9A961]/40 text-white rounded-l-lg rounded-tr-lg' 
                  : 'bg-zinc-900 border border-zinc-800 text-gray-300 rounded-r-lg rounded-tl-lg shadow-inner'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-r-lg rounded-tl-lg">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-[#C9A961] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-[#C9A961] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-[#C9A961] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-zinc-800 bg-zinc-900/50">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Seek style wisdom..."
                className="flex-1 bg-black border border-zinc-700 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C9A961] transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="p-3 bg-[#C9A961] text-[#0A0A0A] rounded-lg hover:bg-white transition-all disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative p-4 md:p-5 bg-[#C9A961] text-[#0A0A0A] rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <Sparkles className="animate-pulse" size={24} />
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#0A0A0A] text-[#C9A961] px-4 py-2 text-[10px] uppercase tracking-widest rounded-lg border border-[#C9A961] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none hidden md:block">
            Consult the Regal Stylist
          </div>
        </button>
      )}
    </div>
  );
};

export default RegalStylist;
