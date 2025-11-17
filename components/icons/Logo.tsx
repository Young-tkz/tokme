
import React from 'react';

const Logo: React.FC = () => (
  <svg width="110" height="32" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FF0050"/>
        <stop offset="100%" stopColor="#00F2EA"/>
      </linearGradient>
    </defs>
    <text x="0" y="25" fontFamily="Arial, Helvetica, sans-serif" fontSize="28" fontWeight="bold" fill="url(#logoGradient)">
      TokMe
    </text>
  </svg>
);

export default Logo;
