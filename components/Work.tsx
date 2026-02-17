import React from 'react';

const Work: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-6 w-full" id="work">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8">Selected Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass rounded-xl overflow-hidden aspect-[9/16] relative group cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA56suYEfxcLAaRV40pS5FRJ3ouZjPayxmZ1rBzE8zmtmWYhdmR4VjeL8W6YwwxVkl1Dks3qeRYMlmODkEaO4RldMFO5AVjBl3N2dOLoeq1JIjhtbsSpGuOEUFEqEyn8FXfSeNoWD9FhCwuOEKlKzspNA18gsotFsd8J13pCF5rxcG3eRav1fpy_Lo4gBTrkDpjYqM02qCz0Mh1qa7llEbcuIfcq-ng4LkqtJLE6_rzgpXc3ZXtsSWVZvNxTXRjpBkkr1lpHsQKMRom')"}}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Tech Brand</p>
                    <h3 className="text-lg font-bold text-white leading-tight">AI Product Launch</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <span className="material-symbols-outlined">play_arrow</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-xl overflow-hidden aspect-[9/16] relative group cursor-pointer sm:translate-y-12">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{backgroundImage: "url('https://picsum.photos/600/1066')"}} 
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Personal Brand</p>
                    <h3 className="text-lg font-bold text-white leading-tight">Lifestyle Vlog</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <span className="material-symbols-outlined">play_arrow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col gap-8 lg:pt-20">
          <div className="glass rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg">Precision Execution</h3>
              <span className="material-symbols-outlined text-gray-500">more_horiz</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="w-5 h-5 rounded border border-primary bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[14px]">check</span>
                </div>
                <span className="text-sm text-gray-200 line-through decoration-gray-500">Analyze Competitor Hooks</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="w-5 h-5 rounded border border-primary bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[14px]">check</span>
                </div>
                <span className="text-sm text-gray-200 line-through decoration-gray-500">Setup AI Voice Models</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/30">
                <div className="w-5 h-5 rounded border border-primary/50"></div>
                <span className="text-sm text-white font-medium">Launch TikTok Campaign</span>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-xl p-6 relative overflow-hidden" id="results">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 rounded-full blur-[50px]"></div>
            <h3 className="font-bold text-lg mb-6 relative z-10">Campaign Results</h3>
            <div className="grid grid-cols-3 gap-4 relative z-10">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-400 uppercase tracking-wide">Retention Rate</span>
                <span className="text-2xl font-black text-white">45s</span>
                <div className="w-full bg-white/10 h-1 rounded-full mt-2">
                  <div className="bg-green-400 h-full w-[80%] rounded-full shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-400 uppercase tracking-wide">Click-Through Rate (CTR)</span>
                <span className="text-2xl font-black text-white">12%</span>
                <div className="w-full bg-white/10 h-1 rounded-full mt-2">
                  <div className="bg-blue-400 h-full w-[65%] rounded-full shadow-[0_0_8px_rgba(96,165,250,0.5)]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-400 uppercase tracking-wide">Publishing Frequency</span>
                <span className="text-2xl font-black text-white">Daily</span>
                <div className="w-full bg-white/10 h-1 rounded-full mt-2">
                  <div className="bg-purple-400 h-full w-[90%] rounded-full shadow-[0_0_8px_rgba(192,132,252,0.5)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;