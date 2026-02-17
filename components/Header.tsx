import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-strong transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary p-2 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined !text-[28px]">trending_up</span>
          </div>
          <h2 className="text-white text-xl font-extrabold tracking-tight">BSA <span className="text-primary">.</span></h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {['Services', 'Process', 'Work', 'Results', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="bg-primary hover:bg-primary-dark text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all shadow-[0_0_20px_rgba(19,55,236,0.3)] hover:shadow-[0_0_30px_rgba(19,55,236,0.5)]">
          Book a Call
        </button>
      </div>
    </header>
  );
};

export default Header;