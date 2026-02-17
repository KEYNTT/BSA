import React from 'react';

interface ServiceItemProps {
  icon: string;
  title: string;
  desc: string;
  items: string[];
  highlight?: boolean;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, desc, items, highlight }) => (
  <div className={`glass glass-hover p-6 rounded-xl flex flex-col gap-4 group ${highlight ? 'border-primary/30 shadow-[0_0_15px_rgba(19,55,236,0.1)]' : ''}`}>
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <div>
      <h3 className={`text-lg font-bold mb-2 ${highlight ? 'text-white' : ''}`}>{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{desc}</p>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-xs text-gray-300">
            <span className="w-1 h-1 bg-primary rounded-full"></span>{item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Services: React.FC = () => {
  const servicesData: ServiceItemProps[] = [
    {
      icon: "music_note",
      title: "AI Audio Branding",
      desc: "Sonic branding that sticks instantly.",
      items: ["Custom Generation", "Royalty Free", "Identity Sound"]
    },
    {
      icon: "videocam",
      title: "AI-Powered Promos",
      desc: "High-fidelity AI generated footage.",
      items: ["Sora/Runway Gen-2", "Realistic Avatars", "Rapid Deployment"]
    },
    {
      icon: "content_cut",
      title: "Elite Content Editing",
      desc: "Retention-optimized editing styles.",
      items: ["Retention-focused", "Sound design that hooks", "Dynamic Captions"],
      highlight: true
    },
    {
      icon: "school",
      title: "Viral Mastery Course",
      desc: "Master the algorithm yourself.",
      items: ["Algorithmic secrets", "Script Blueprints", "Insider Tactics"]
    },
    {
      icon: "lightbulb",
      title: "Strategic Growth Consulting",
      desc: "Strategic direction for brands.",
      items: ["Brand Audit", "Authority Building", "Scale Roadmap"]
    }
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-6 w-full" id="services">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {servicesData.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;