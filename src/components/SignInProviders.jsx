import React from 'react';
import { Mail } from 'lucide-react';

// Inline SVG logos for brand buttons to avoid extra deps
const MicrosoftLogo = () => (
  <svg viewBox="0 0 23 23" width="18" height="18" aria-hidden="true">
    <g>
      <path fill="#f25022" d="M0 0h10.5v10.5H0z"/>
      <path fill="#00a4ef" d="M12.5 0H23v10.5H12.5z"/>
      <path fill="#7fba00" d="M0 12.5h10.5V23H0z"/>
      <path fill="#ffb900" d="M12.5 12.5H23V23H12.5z"/>
    </g>
  </svg>
);

const GoogleLogo = () => (
  <svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 31.6 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1.1 7.4 2.8l5.7-5.7C33.5 6.3 28.9 4.4 24 4.4 12.4 4.4 3 13.8 3 25.4S12.4 46.4 24 46.4 45 37 45 25.4c0-1.6-.2-3.1-.6-4.9z"/>
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.4 19 13 24 13c2.8 0 5.4 1.1 7.4 2.8l5.7-5.7C33.5 6.3 28.9 4.4 24 4.4 15.3 4.4 7.8 9.6 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 46.4c5.2 0 9.6-1.7 13.1-4.6l-6-4.9c-2 1.4-4.6 2.2-7.1 2.2-5.2 0-9.6-3.4-11.1-8.1l-6.6 5C9.8 41.2 16.3 46.4 24 46.4z"/>
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.3 3.1-4.3 5.5-7.3 6.6l.1.1 6 4.9c-.4.3 10-4.6 10-14.2 0-1.6-.2-3.1-.6-4.9z"/>
  </svg>
);

const FacebookLogo = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path fill="#1877F2" d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.093 10.125 24v-8.438H7.078V12.07h3.047V9.414c0-3.007 1.79-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.49 0-1.953.928-1.953 1.88v2.258h3.328l-.532 3.492h-2.796V24C19.612 23.093 24 18.1 24 12.073z"/>
  </svg>
);

const ProviderButton = ({ icon, label, onClick, className }) => (
  <button
    onClick={onClick}
    className={`w-full inline-flex items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-800 px-4 py-2.5 transition shadow-sm ${className || ''}`}
  >
    <span className="shrink-0">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const SignInProviders = () => {
  return (
    <div className="space-y-3">
      <ProviderButton icon={<MicrosoftLogo />} label="Continue with Microsoft" />
      <ProviderButton icon={<GoogleLogo />} label="Continue with Google" />
      <ProviderButton icon={<FacebookLogo />} label="Continue with Facebook" />
      <ProviderButton icon={<Mail size={18} />} label="Continue with email" className="bg-gray-900 text-white border-gray-900 hover:bg-gray-800" />
    </div>
  );
};

export default SignInProviders;
