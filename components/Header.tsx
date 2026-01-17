import React from 'react';
import { TrendingUp, ExternalLink } from 'lucide-react';
import { LINKS } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 support-[backdrop-filter]:bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <TrendingUp className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">Ton<span className="text-blue-400">Trader</span></span>
        </div>
        
        <div className="flex items-center gap-4">
            <div className="hidden sm:block text-xs font-medium text-slate-400 px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700/50">
            v2.4.0 Live
            </div>
            <a 
                href={LINKS.BOT_REF}
                className="hidden sm:flex items-center gap-2 bg-white text-slate-950 px-4 py-2 rounded-lg font-bold text-sm hover:bg-slate-200 transition-colors"
            >
                Запустить
                <ExternalLink className="w-3 h-3" />
            </a>
        </div>
      </div>
    </header>
  );
};