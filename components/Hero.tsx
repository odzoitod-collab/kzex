import React from 'react';
import { LINKS } from '../constants';
import { Button } from './Button';
import { Sparkles, ArrowRight, ShieldCheck, Lock, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -z-10 opacity-50 mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[100px] rounded-full -z-10 opacity-30" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm text-blue-400 text-sm font-medium mb-8 animate-fade-in-up">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Доступна новая уязвимость алгоритмов</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
          Инсайдерская <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 animate-gradient-x">Стратегия Заработка</span>
        </h1>

        <p className="text-slate-300 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl mx-auto font-light">
          Используйте скрытые возможности платформы TonTrader для получения ежедневного профита. 
          <span className="block mt-2 text-slate-400">
            Минимальный порог входа. Полное сопровождение куратора.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          <Button href={LINKS.BOT_REF} fullWidth className="h-14 sm:text-lg shadow-xl shadow-blue-500/20 ring-1 ring-white/10">
            <span className="flex items-center gap-2">
              Открыть доступ
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
          
          <div className="flex items-center gap-4 px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl w-full sm:w-auto justify-center">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] overflow-hidden`}>
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i*13}`} alt="User" />
                    </div>
                ))}
             </div>
             <div className="text-left">
                <p className="text-xs text-slate-400">Уже зарабатывают</p>
                <p className="text-sm font-bold text-white">1,240+ человек</p>
             </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>Проверенные выплаты</span>
            </div>
            <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-blue-500" />
                <span>Приватный метод</span>
            </div>
            <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-500" />
                <span>Высокая доходность</span>
            </div>
        </div>

      </div>
    </section>
  );
};