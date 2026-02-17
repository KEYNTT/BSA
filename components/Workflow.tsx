import React from 'react';

const Workflow: React.FC = () => {
  const steps = [
    { icon: "flag", title: "Strategy", subtitle: "Niche & Narrative" },
    { icon: "movie_filter", title: "Production", subtitle: "IA-Powered Assets" },
    { icon: "auto_fix_high", title: "Edit", subtitle: "Dynamic Rhythms" },
    { icon: "rocket_launch", title: "Scale", subtitle: "Multi-platform Dominance" }
  ];

  return (
    <section className="w-full bg-black/20 py-20 border-y border-white/5" id="process">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">The Workflow</h2>
          <p className="text-gray-400">Streamlined for speed and quality.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center border border-primary/30 mb-6 bg-[#05050A] shadow-[0_0_20px_rgba(19,55,236,0.2)] group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 px-4">{step.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;