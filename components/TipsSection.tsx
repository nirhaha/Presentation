
import React from 'react';
import type { Tip } from '../types';

interface TipsSectionProps {
  tips: Tip[];
}

const TipsSection: React.FC<TipsSectionProps> = ({ tips }) => {
  return (
    <section id="tips" className="mt-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-700 mb-10 text-center">
        טיפים למצגת מנצחת
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white/70 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-2 rounded-full">
                 <tip.icon className="w-7 h-7 text-indigo-600"/>
              </div>
              <h3 className="text-lg font-semibold ms-4 text-slate-800">{tip.title}</h3>
            </div>
            <p className="text-slate-600 text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TipsSection;