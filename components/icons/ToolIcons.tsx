
import React from 'react';

// More illustrative icons with multiple colors and complex shapes

export const CanvaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="32" cy="32" r="32" fill="url(#canva_paint0_linear)"/>
    <path d="M46 32C46 39.732 39.732 46 32 46C24.268 46 18 39.732 18 32C18 24.268 24.268 18 32 18C39.732 18 46 24.268 46 32Z" fill="white"/>
    <circle cx="32" cy="32" r="8" fill="#8F48EA"/>
    <defs>
      <linearGradient id="canva_paint0_linear" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8F48EA"/>
        <stop offset="1" stopColor="#3C1A66"/>
      </linearGradient>
    </defs>
  </svg>
);

export const GammaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="32" cy="32" r="32" fill="url(#gamma_paint0_linear)"/>
    <path d="M21 43L32 23L43 43H21Z" stroke="white" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M32 43L43 23L54 43H32Z" fill="white" fillOpacity="0.5"/>
  <defs>
    <linearGradient id="gamma_paint0_linear" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FF4F8B"/>
      <stop offset="1" stopColor="#D9004C"/>
    </linearGradient>
  </defs>
</svg>
);

export const GensparkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="32" cy="32" r="32" fill="url(#genspark_paint0_linear)"/>
    <path d="M22 26H42" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M22 34H42" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M22 42H34" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M32 18L36 22L32 26" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 48L28 44L32 40" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  <defs>
    <linearGradient id="genspark_paint0_linear" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
      <stop stopColor="#1E88E5"/>
      <stop offset="1" stopColor="#0D47A1"/>
    </linearGradient>
  </defs>
</svg>
);

export const NapkinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="64" height="64" rx="32" fill="url(#napkin_paint0_linear)"/>
    <rect x="16" y="16" width="32" height="32" rx="4" fill="white"/>
    <path d="M22 24H42" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M22 32H36" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M22 40H42" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round"/>
  <defs>
    <linearGradient id="napkin_paint0_linear" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
      <stop stopColor="#66BB6A"/>
      <stop offset="1" stopColor="#2E7D32"/>
    </linearGradient>
  </defs>
</svg>
);

export const ClaudeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="32" cy="32" r="32" fill="url(#claude_paint0_linear)"/>
    <path d="M24.4375 22.125C20.875 22.125 18 25.125 18 28.625V42.125H24.4375V35.375H31.125V28.625C31.125 25.125 28.3125 22.125 24.4375 22.125Z" fill="white"/>
    <path d="M39.5625 22.125C35.5 22.125 32.875 25.125 32.875 28.625V42.125H39.5625V35.375H46V28.625C46 25.125 43.1875 22.125 39.5625 22.125Z" fill="white" fillOpacity="0.7"/>
  <defs>
    <linearGradient id="claude_paint0_linear" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FB8C00"/>
      <stop offset="1" stopColor="#E65100"/>
    </linearGradient>
  </defs>
</svg>
);

export const LovableIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="64" height="64" rx="32" fill="url(#lovable_paint0_linear)"/>
    <path d="M32 48.8125L29.75 46.75C21.4375 39.0625 16 34.1875 16 28.25C16 23.4375 19.9375 19.5 24.75 19.5C27.5625 19.5 30.25 20.8125 32 22.8125C33.75 20.8125 36.4375 19.5 39.25 19.5C44.0625 19.5 48 23.4375 48 28.25C48 34.1875 42.5625 39.0625 34.25 46.75L32 48.8125Z" fill="white"/>
  <defs>
    <linearGradient id="lovable_paint0_linear" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
      <stop stopColor="#26A69A"/>
      <stop offset="1" stopColor="#00695C"/>
    </linearGradient>
  </defs>
</svg>
);