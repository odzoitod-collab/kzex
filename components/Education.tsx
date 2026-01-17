import React from 'react';
import { Scale, Umbrella, BarChart3, BrainCircuit } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white mb-4">Почему стратегия работает?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                Мы не просто нажимаем кнопки. Мы используем профессиональные финансовые инструменты для защиты капитала.
            </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group hover:border-blue-500/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                    <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Диверсификация</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Главное правило умных денег: <strong>не хранить весь капитал в одном активе</strong>.
                </p>
                <p className="text-sm text-slate-500 bg-slate-800/50 p-4 rounded-xl">
                  Наша система автоматически распределяет средства между криптовалютой, золотом и акциями. Если один рынок падает, другой растет, сохраняя ваш баланс в плюсе.
                </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group hover:border-cyan-500/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 text-cyan-400">
                    <Umbrella className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Хеджирование</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Профессиональная <strong>страховка от убытков</strong>.
                </p>
                <p className="text-sm text-slate-500 bg-slate-800/50 p-4 rounded-xl">
                   Мы открываем контр-позиции. Если основная сделка временно уходит в минус, страховочная позиция приносит прибыль, компенсируя потери. Это позволяет зарабатывать на любой волатильности.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};