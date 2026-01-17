import React from 'react';
import { CONTACTS, LINKS } from '../constants';
import { Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 px-4 border-t border-slate-900 pb-32 sm:pb-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-white">M</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">Мария Трейдинг</h3>
        <p className="text-slate-400 mb-8 max-w-sm">
          Заработок на волатильности и ошибках алгоритмов. 
          Присоединяйся к команде, пока схема работает.
        </p>

        <a 
          href={LINKS.MARIA_TG} 
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium text-lg"
        >
          <Send className="w-5 h-5" />
          {CONTACTS.TELEGRAM_NICK}
        </a>
        
        <div className="mt-12 text-xs text-slate-700">
          <p>© 2024 Private Trading Club. All rights reserved.</p>
          <p className="mt-2">Trading involves risk. Invest responsibly.</p>
        </div>
      </div>
    </footer>
  );
};