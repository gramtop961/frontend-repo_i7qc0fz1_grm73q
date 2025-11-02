import React from 'react';

const BrandHeader = () => {
  return (
    <div className="flex items-center justify-center gap-3 mb-6 select-none">
      {/* Simple Clipchamp-like mark */}
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/30" />
      <div className="text-left">
        <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Clip-Style Editor</div>
        <div className="text-xs text-gray-500">Sign in to continue</div>
      </div>
    </div>
  );
};

export default BrandHeader;
