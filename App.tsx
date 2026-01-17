import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Education } from './components/Education';
import { Instruction } from './components/Instruction';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <Header />
      
      <main className="flex flex-col">
        <Hero />
        <Features />
        <Instruction />
        <Education />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;