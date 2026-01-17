import React from 'react';
import { Button } from './Button';
import { LINKS } from '../constants';

export const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-900/90 backdrop-blur-lg border-t border-slate-800 z-40 sm:hidden">
      <Button href={LINKS.BOT_REF} fullWidth className="shadow-cyan-500/20">
        Начать зарабатывать сейчас
      </Button>
    </div>
  );
};