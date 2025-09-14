
import React from 'react';
import { TOOLS, TIPS } from './constants';
import ToolCard from './components/ToolCard';
import TipsSection from './components/TipsSection';
import ChatWidget from './components/ChatWidget';
import { HeroImage } from './components/icons/HeroImage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <header className="bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-start">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                מחקר השוואתי: <br className="hidden md:block" /> כלי AI למצגות
              </h1>
              <p className="text-slate-600 mt-4 max-w-xl mx-auto md:mx-0 text-lg sm:text-xl">
                ניתוח תכונות, יתרונות ושימושים מומלצים, עם טיפים למצגת מנצחת וצ'אט AI חכם.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <HeroImage className="w-full max-w-sm sm:max-w-md h-auto" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <section id="tools">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-700 mb-10 text-center">
            השוואת כלים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOOLS.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>

        <TipsSection tips={TIPS} />
      </main>

      <ChatWidget />
    </div>
  );
};

export default App;
