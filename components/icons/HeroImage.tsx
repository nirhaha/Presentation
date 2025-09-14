
import React from 'react';

export const HeroImage: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="hero-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="hero-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#c084fc', stopOpacity: 1 }} />
      </linearGradient>
       <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Background shapes */}
    <path d="M 50,150 Q 150,50 250,150 T 450,150" stroke="url(#hero-grad-2)" fill="none" strokeWidth="2" opacity="0.2" />
    <path d="M -50,100 Q 100,200 250,100 T 500 200" stroke="url(#hero-grad-1)" fill="none" strokeWidth="2" opacity="0.2" />

    {/* Main structure - abstract representation of a presentation slide */}
    <rect x="80" y="50" width="240" height="180" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="2" filter="url(#glow)" />
    
    {/* Chart element */}
    <rect x="110" y="110" width="25" height="70" fill="#c4b5fd" rx="4"/>
    <rect x="145" y="80" width="25" height="100" fill="#a78bfa" rx="4"/>
    <rect x="180" y="130" width="25" height="50" fill="#8b5cf6" rx="4"/>
    
    {/* Text lines */}
    <rect x="225" y="90" width="60" height="8" fill="#d1d5db" rx="2"/>
    <rect x="225" y="110" width="80" height="8" fill="#e5e7eb" rx="2"/>
    <rect x="225" y="130" width="70" height="8" fill="#e5e7eb" rx="2"/>
    <rect x="225" y="150" width="80" height="8" fill="#e5e7eb" rx="2"/>

    {/* Floating AI nodes */}
    <circle cx="60" cy="70" r="10" fill="url(#hero-grad-1)" />
    <circle cx="340" cy="230" r="12" fill="url(#hero-grad-2)" />
    <circle cx="360" cy="80" r="8" fill="url(#hero-grad-1)" />

    {/* Connecting lines */}
    <line x1="70" y1="75" x2="100" y2="100" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="330" y1="220" x2="290" y2="190" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 2"/>
  </svg>
);
