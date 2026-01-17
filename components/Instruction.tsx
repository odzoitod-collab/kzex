import React from 'react';
import { LINKS, CONTACTS } from '../constants';
import { Button } from './Button';
import { AlertTriangle, Smartphone, UserCheck, PlayCircle, Lock } from 'lucide-react';

export const Instruction: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-3xl mx-auto">
        
        {/* Warning Block */}
        <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 sm:p-8 mb-16 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-red-400 mb-1">Техническое требование</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                    Для корректной работы багов и стратегии, вход в систему <strong>обязательно</strong> должен быть выполнен через официального бота Telegram. Прямой вход через браузер заблокирует доступ к алгоритмам.
                </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4">План Действий</h2>
            <p className="text-slate-400">Всего 3 шага отделяют вас от первого профита</p>
        </div>

        <div className="space-y-6">
            {/* Step 1 */}
            <div className="group relative bg-slate-900/80 border border-slate-800 p-8 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-8xl text-blue-500 leading-none pointer-events-none select-none">1</div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-500 rounded-lg p-2 text-white">
                            <Smartphone className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Активация аккаунта</h3>
                    </div>
                    <p className="text-slate-400 mb-6">
                        Запустите официального бота TonTrader. Это создаст защищенный туннель для торговли и активирует ваш уникальный ID.
                    </p>
                    <Button href={LINKS.BOT_REF} fullWidth variant="primary" className="sm:w-auto">
                        Запустить Бота
                    </Button>
                </div>
            </div>

            {/* Step 2 */}
            <div className="group relative bg-slate-900/80 border border-slate-800 p-8 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-8xl text-cyan-500 leading-none pointer-events-none select-none">2</div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-cyan-500 rounded-lg p-2 text-white">
                            <UserCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Инструктаж от Куратора</h3>
                    </div>
                    <p className="text-slate-400 mb-6">
                        После регистрации напишите главному куратору (Мария). Она проверит ваш ID и выдаст мануал по использованию уязвимости.
                    </p>
                    <Button href={LINKS.MARIA_TG} fullWidth variant="secondary" className="sm:w-auto">
                        Написать Куратору ({CONTACTS.TELEGRAM_NICK})
                    </Button>
                </div>
            </div>

            {/* Step 3 */}
            <div className="group relative bg-slate-900/80 border border-slate-800 p-8 rounded-3xl overflow-hidden hover:border-green-500/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-8xl text-green-500 leading-none pointer-events-none select-none">3</div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-green-500 rounded-lg p-2 text-white">
                            <PlayCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Запуск торговли</h3>
                    </div>
                    <p className="text-slate-400 mb-4">
                        Используйте веб-интерфейс внутри бота для совершения сделок по инструкции.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 text-xs text-slate-500 font-mono">
                        <Lock className="w-3 h-3" />
                        Доступ только через бота: tontrade-web.vercel.app
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};