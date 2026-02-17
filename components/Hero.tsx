import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
      <div className="flex flex-col gap-8 relative">
        <div className="absolute -top-10 -left-10 w-20 h-20 border border-white/5 rounded-full z-0"></div>
        <div className="flex flex-col gap-4 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-primary-200 uppercase tracking-wider">Agency Status: Active</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
            Short-form content that sells without overexplaining.
          </h1>
          <p className="text-lg text-gray-400 font-light max-w-lg leading-relaxed">
            Simple. Memorable. Viral. Result-driven strategies to transform your brand into a digital powerhouse.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:translate-y-[-2px] flex items-center gap-2 group">
            Get Viral Now
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button className="bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm">
            View Our Services
          </button>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <div className="glass px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-pink-500 text-sm">movie</span>
            <span className="text-sm font-medium text-gray-300">Reels / Shorts / TikTok</span>
          </div>
          <div className="glass px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-purple-400 text-sm">psychology</span>
            <span className="text-sm font-medium text-gray-300">Hooks + AI</span>
          </div>
          <div className="glass px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-400 text-sm">auto_awesome</span>
            <span className="text-sm font-medium text-gray-300">Elite Editing</span>
          </div>
        </div>
      </div>
      
      {/* Visual Component */}
      <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-3xl opacity-30"></div>
        <div className="glass p-6 rounded-2xl w-full max-w-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full pointer-events-none"></div>
          <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">insights</span>
              Performance
            </h3>
            <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">+240% Growth</span>
          </div>
          <div className="space-y-6">
            <div className="space-y-2 opacity-50 group-hover:opacity-40 transition-opacity">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Organic Reach (Before)</span>
                <span>12.5k</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[15%] bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-white font-medium">
                <span>Organic Reach (After BSA)</span>
                <span className="text-primary font-bold">145.2k</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full w-[85%] bg-gradient-to-r from-blue-500 to-primary rounded-full shadow-[0_0_10px_rgba(19,55,236,0.6)]"></div>
              </div>
            </div>
            <div className="mt-6 relative h-48 rounded-xl overflow-hidden border border-white/10 bg-black/40">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay" 
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmEw5Hss1qEnAV7bnftBLBOlDm056rfzANa6jylofrLcxv1s1UjPYmFXmROZGzEwsIKQdFMkOPyXGxR7Qs7DxvlMhPv8_5jUwfWp55M3pGa11IXw-I8CtRqSw2IM_8CKKSOpCgFF84F697mJA64SC8WslL8dPrpBrx4QW1htciwfEHqsU6Ustn4agvN0HFnCU_4Cqq-i2e_RU-hvlflVpyAsK35edpG6XiBs-9HcQskQvWrFItJaHfl5t5qRFe0eTyL1jnS2PRZncw')"}}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <span className="material-symbols-outlined text-white">play_arrow</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                <div className="w-8 h-8 rounded-full bg-red-500/20 backdrop-blur-sm flex items-center justify-center text-red-500">
                  <span className="material-symbols-outlined !text-[16px]">favorite</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center text-blue-500">
                  <span className="material-symbols-outlined !text-[16px]">thumb_up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;