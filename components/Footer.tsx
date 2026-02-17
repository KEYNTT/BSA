import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/60 border-t border-white/5 py-12 relative z-10 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <div className="flex items-center gap-2">
            <h2 className="text-white text-lg font-extrabold tracking-tight">BSA <span className="text-primary">.</span></h2>
          </div>
          <p className="text-xs text-gray-500">Short content. Big strategy.</p>
        </div>
        <div className="flex gap-8 text-sm font-medium text-gray-400">
          <a className="hover:text-white transition-colors" href="#">Terms</a>
          <a className="hover:text-white transition-colors" href="#">Privacy</a>
          <a className="hover:text-white transition-colors" href="#">Sitemap</a>
        </div>
        <p className="text-xs text-gray-600">© 2024 BSA LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;