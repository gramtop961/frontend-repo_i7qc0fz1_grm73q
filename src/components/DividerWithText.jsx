import React from 'react';

const DividerWithText = ({ children }) => {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="h-px flex-1 bg-gray-200" />
      <span className="text-xs text-gray-500 uppercase tracking-wider">{children}</span>
      <div className="h-px flex-1 bg-gray-200" />
    </div>
  );
};

export default DividerWithText;
