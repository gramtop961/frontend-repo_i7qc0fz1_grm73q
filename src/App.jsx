import React from 'react';
import BrandHeader from './components/BrandHeader';
import SignInProviders from './components/SignInProviders';
import DividerWithText from './components/DividerWithText';
import FooterMinimal from './components/FooterMinimal';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Decorative corners */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border border-gray-200 shadow-xl p-6 sm:p-8">
          <BrandHeader />

          <SignInProviders />

          <DividerWithText>Or</DividerWithText>

          <p className="text-xs leading-relaxed text-gray-500 text-center">
            By continuing, you agree to our <a href="#" className="text-gray-700 underline hover:text-gray-900">Terms</a> and acknowledge the <a href="#" className="text-gray-700 underline hover:text-gray-900">Privacy Policy</a>.
          </p>
        </div>

        <FooterMinimal />
      </div>
    </div>
  );
}

export default App;
