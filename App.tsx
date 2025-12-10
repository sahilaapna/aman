import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Radio, MessageSquareHeart, FileVideo, Video, Sparkles, ClipboardCheck, Lightbulb } from 'lucide-react';
import LiveCompanion from './components/LiveCompanion';
import VibeCheck from './components/VibeCheck';
import Affirmations from './components/Affirmations';
import JournalAnalysis from './components/JournalAnalysis';
import Assessment from './components/Assessment';
import HealthyTips from './components/HealthyTips';

const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <NavLink
      to={to}
      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
        isActive
          ? 'bg-white/80 text-teal-700 shadow-sm border border-white/50'
          : 'text-slate-500 hover:bg-white/40 hover:text-slate-700'
      }`}
    >
      <span className={`transition-colors duration-300 ${isActive ? 'text-teal-600' : 'text-slate-400 group-hover:text-teal-500'}`}>{icon}</span>
      <span className="font-medium">{label}</span>
    </NavLink>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex h-screen overflow-hidden selection:bg-teal-200 selection:text-teal-900 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/40 bg-white/30 backdrop-blur-xl flex flex-col z-20 shadow-lg shadow-slate-200/50">
          <div className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-400 to-cyan-300 flex items-center justify-center shadow-lg shadow-teal-500/20 text-white">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
                  Aman
                </h1>
                <p className="text-[10px] font-bold text-teal-600 tracking-widest uppercase">Tranquility</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2">
            <NavItem to="/" icon={<LayoutDashboard size={20} />} label="Live Companion" />
            <NavItem to="/vibe-check" icon={<Video size={20} />} label="Vibe Check" />
            <NavItem to="/assessment" icon={<ClipboardCheck size={20} />} label="Assessment" />
            <NavItem to="/tips" icon={<Lightbulb size={20} />} label="Daily Tips" />
            <NavItem to="/affirmations" icon={<MessageSquareHeart size={20} />} label="Daily Affirmations" />
            <NavItem to="/journal" icon={<FileVideo size={20} />} label="Video Journal" />
          </nav>

          <div className="p-4 border-t border-white/40">
            <div className="bg-white/40 rounded-xl p-4 border border-white/50 shadow-sm">
              <p className="font-semibold text-slate-700 text-xs mb-2">Powered by Gemini</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-medium rounded-full border border-blue-100">Live API</span>
                <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-[10px] font-medium rounded-full border border-purple-100">Pro 3.0</span>
                <span className="px-2 py-0.5 bg-teal-50 text-teal-600 text-[10px] font-medium rounded-full border border-teal-100">TTS</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 relative overflow-hidden flex flex-col">
          {/* Decorative background orbs */}
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none mix-blend-multiply"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-teal-200/30 rounded-full blur-3xl pointer-events-none mix-blend-multiply"></div>
          <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none mix-blend-multiply"></div>

          <div className="relative z-10 flex-1 overflow-y-auto p-8 scroll-smooth">
            <Routes>
              <Route path="/" element={<LiveCompanion />} />
              <Route path="/vibe-check" element={<VibeCheck />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/tips" element={<HealthyTips />} />
              <Route path="/affirmations" element={<Affirmations />} />
              <Route path="/journal" element={<JournalAnalysis />} />
            </Routes>
          </div>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;