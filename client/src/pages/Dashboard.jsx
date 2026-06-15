import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const data = [{n:'Jan', s:400}, {n:'Feb', s:700}, {n:'Mar', s:600}, {n:'Apr', s:1000}];
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Analytics Dashboard</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <p className="text-slate-400">Revenue</p>
          <p className="text-2xl font-bold text-emerald-400">$12,450</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <p className="text-slate-400">Active Campaigns</p>
          <p className="text-2xl font-bold text-cyan-400">5</p>
        </div>
      </div>
      <div className="h-64 bg-slate-900 p-4 rounded-xl border border-slate-800">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}><XAxis dataKey="n"/><YAxis/><Tooltip/><Line type="monotone" dataKey="s" stroke="#06b6d4" strokeWidth={3}/></LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Dashboard;