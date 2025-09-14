
import React from 'react';
import type { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { name, logo: Logo, description, features, whenToUse, bgColor, textColor } = tool;

  // A simple way to map bg color to border color, assuming tailwind JIT can pick it up.
  // E.g. bg-purple-100 -> border-purple-400
  const borderColorClass = bgColor.replace('bg-', 'border-').replace('-100', '-400');

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden h-full border-t-4 ${borderColorClass} hover:-translate-y-2`}>
      <div className="p-6 flex items-center space-s-4">
        <div className="p-2 bg-slate-100 rounded-lg">
          <Logo className={`w-10 h-10`} />
        </div>
        <h3 className={`text-2xl font-bold text-slate-800`}>{name}</h3>
      </div>
      <div className="px-6 pb-6 flex flex-col flex-grow">
        <p className="text-slate-600 mb-5 text-base">{description}</p>
        
        <div className="mb-5">
          <h4 className="font-semibold text-slate-700 mb-3">תכונות מרכזיות:</h4>
          <ul className="space-y-2.5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className={`w-5 h-5 ${textColor} mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="ms-2 text-slate-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto pt-5 border-t border-gray-200">
          <h4 className="font-semibold text-slate-700 mb-2">מתי להשתמש?</h4>
          <p className="text-slate-600 text-sm">{whenToUse}</p>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;