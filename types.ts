
// FIX: Import React to resolve 'Cannot find namespace React' errors.
import React from 'react';

export interface Tool {
  name: string;
  logo: React.FC<React.SVGProps<SVGSVGElement>>;
  description: string;
  features: string[];
  whenToUse: string;
  bgColor: string;
  textColor: string;
}

export interface Tip {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
    suggestions?: string[];
}