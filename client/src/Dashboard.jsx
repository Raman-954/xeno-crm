import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Dashboard = () => {
  return (
    <div className="p-6 bg-slate-950 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        XENO Intelligence Dashboard
      </h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Revenue', value: '$128,430', color: 'text-emerald-400' },
          { label: 'Active Campaigns', value: '12', color: 'text-blue-400' },
          { label: 'Avg. Conversion', value: '14.2%', color: 'text-purple-400' },
          { label: 'Total Customers', value: '1,240', color: 'text-cyan-400' }
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl backdrop-blur-xl">
            <p className="text-slate-400 text-sm">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl h-80">
        <h2 className="mb-4 font-semibold">Revenue Growth</h2>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockData}>
            <defs>
              <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#475569" />
            <YAxis stroke="#475569" />
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }} />
            <Area type="monotone" dataKey="uv" stroke="#06b6d4" fillOpacity={1} fill="url(#colorRev)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};