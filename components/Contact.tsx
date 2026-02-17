import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-6 w-full py-20" id="contact">
      <div className="glass rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
        <div className="flex-1 relative z-10 flex flex-col justify-center">
          <h2 className="text-4xl font-black mb-6">Let's Scale Your Impact</h2>
          <p className="text-gray-300 mb-8 max-w-md">Ready for exponential growth? Connect with us for a direct consultation.</p>
          <div className="flex gap-4">
            <a className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
            </a>
            <a className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08.13.17.26.26.39.16.22.3.46.47.67.68.87 1.45 1.65 2.45 2.14.3.15.6.3 1.07.53v3.2c-.42.06-.82.1-1.21.18-.7.13-1.32.44-1.89.87-.21.16-.43.31-.69.51v7.65c0 3.4-2.09 5.8-5.32 6.11-2.92.29-5.5-1.35-6.17-3.92-.58-2.21.57-4.52 2.69-5.38.38-.15.77-.25 1.17-.3v3.42c-.52.12-.97.35-1.33.72-.85.87-.79 2.27.14 3.06.84.72 2.2.64 2.94-.17.47-.52.68-1.17.68-1.86.01-4.73.01-9.45.01-14.18.01-.89.01-1.79.01-2.79.85-.2 1.65-.49 2.41-.89 1.07-.56 1.78-1.42 2.2-2.56.09-.23.16-.47.28-.82z"></path></svg>
            </a>
            <a className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>
        <div className="flex-1 relative z-10">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Name</label>
              <input className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="John Doe" type="text"/>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Email</label>
              <input className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="john@company.com" type="email"/>
            </div>
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-primary/40 transition-all mt-4">
              Start Your Project
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;