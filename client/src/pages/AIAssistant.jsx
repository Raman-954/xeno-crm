import React, { useState } from 'react';
import axios from 'axios';
import { Send, Sparkles } from 'lucide-react';

const AIAssistant = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAI = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      // Backend route /api/ai/generate-campaign ko call karega
      const res = await axios.post('http://localhost:5000/api/ai/generate-campaign', { prompt });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      setResult({ content: "AI is offline. Please check your Gemini API Key in .env file." });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Sparkles className="text-cyan-400" size={32} />
        <h2 className="text-3xl font-bold">AI Campaign Assistant</h2>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl min-h-[400px] flex flex-col shadow-2xl">
        {/* Chat Display Area */}
        <div className="flex-1 p-6 space-y-4">
          {!result && !loading && (
            <p className="text-slate-500 text-center mt-20 italic">
              "Create a campaign for customers who bought xeno Shoes..."
            </p>
          )}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 p-4 rounded-2xl rounded-bl-none animate-pulse text-cyan-400">
                XENO AI is thinking...
              </div>
            </div>
          )}

          {result && (
            <div className="flex justify-start">
              <div className="bg-slate-800 p-6 rounded-2xl rounded-bl-none border border-slate-700 max-w-[80%]">
                <p className="text-cyan-400 font-bold mb-2 uppercase text-xs tracking-widest">AI Recommendation</p>
                <p className="text-white leading-relaxed">{result.content || "Ready to assist!"}</p>
                {result.channel && (
                  <div className="mt-4 flex gap-2">
                    <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] rounded border border-cyan-500/20">
                      Channel: {result.channel}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-slate-950/50 border-t border-slate-800 flex gap-3">
          <input 
            type="text"
            className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-all text-white"
            placeholder="Type your campaign goal..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAI()}
          />
          <button 
            onClick={handleAI}
            className="bg-cyan-600 hover:bg-cyan-500 text-white p-3 rounded-xl transition-all disabled:opacity-50"
            disabled={loading}
          >
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;