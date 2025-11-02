import React from 'react';

const FooterMinimal = () => {
  return (
    <div className="w-full text-center text-xs text-gray-500 mt-8">
      <div className="space-x-4">
        <a href="#" className="hover:text-gray-700">Terms</a>
        <span>•</span>
        <a href="#" className="hover:text-gray-700">Privacy</a>
        <span>•</span>
        <a href="#" className="hover:text-gray-700">Support</a>
      </div>
      <div className="mt-2">© {new Date().getFullYear()} Clip-Style Editor</div>
    </div>
  );
};

export default FooterMinimal;
