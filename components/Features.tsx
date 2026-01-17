import React from 'react';
import { Coins, Image as ImageIcon, Briefcase, Factory, TrendingUp, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <div 
    className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="relative z-10">
        <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
        <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300">{desc}</p>
    </div>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Инструменты TonTrader</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                Платформа предоставляет доступ к широкому спектру финансовых инструментов, 
                которые мы используем для извлечения прибыли по нашей стратегии.
            </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={Coins} 
            title="Криптовалюта" 
            desc="Маржинальная торговля топовыми активами (BTC, TON, ETH) с использованием наших сигналов."
            delay={0}
          />
          <FeatureCard 
            icon={ImageIcon} 
            title="NFT Рынок" 
            desc="Спекуляции на редких коллекциях и автоматизированный флиппинг." 
            delay={100}
          />
          <FeatureCard 
            icon={Briefcase} 
            title="Фондовый рынок" 
            desc="Доступ к акциям мировых гигантов без KYC и лишних проверок." 
            delay={200}
          />
          <FeatureCard 
            icon={Factory} 
            title="Сырьевые товары" 
            desc="Хеджирование рисков через торговлю нефтью, золотом и газом." 
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};