const AIChat = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);

  const handleAskAI = async () => {
    const res = await axios.post('/api/ai/generate-campaign', { prompt: input });
    setResponse(res.data);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 bg-slate-800/30">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Sparkles className="text-cyan-400" /> XENO AI Assistant
          </h2>
        </div>
        
        <div className="p-6 h-[400px] overflow-y-auto">
          {response && (
            <div className="bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-xl mb-4">
              <h3 className="text-cyan-400 font-bold">Strategy: {response.suggestedAudience}</h3>
              <p className="mt-2 text-slate-300 italic">"{response.content}"</p>
              <div className="mt-4 flex gap-2">
                <span className="px-2 py-1 bg-slate-800 rounded text-xs">{response.channel}</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-slate-800/50 flex gap-2">
          <input 
            className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 focus:outline-none focus:border-cyan-500"
            placeholder="e.g. Create a campaign for high spenders..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAskAI} className="bg-cyan-600 hover:bg-cyan-500 px-6 py-2 rounded-xl transition-all">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};