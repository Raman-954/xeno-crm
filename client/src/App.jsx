import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CustomerList from './pages/CustomerList';
import AIAssistant from './pages/AIAssistant';
import { LayoutDashboard, Users, Sparkles } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-950">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col gap-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            XENO CRM
          </h1>
          <nav className="flex flex-col gap-4 text-slate-400">
            <Link to="/" className="flex items-center gap-3 hover:text-white transition-all">
              <LayoutDashboard size={20}/> Dashboard
            </Link>
            <Link to="/customers" className="flex items-center gap-3 hover:text-white transition-all">
              <Users size={20}/> Customers
            </Link>
            <Link to="/ai-assistant" className="flex items-center gap-3 hover:text-white transition-all">
              <Sparkles size={20} className="text-cyan-400"/> AI Assistant
            </Link>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-10 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;