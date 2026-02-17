import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Work from './components/Work';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="glow-blob bg-primary/30 w-[500px] h-[500px] top-[-100px] left-[-100px] animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="glow-blob bg-purple-900/20 w-[600px] h-[600px] bottom-[-100px] right-[-100px]"></div>
        <div className="glow-blob bg-blue-900/20 w-[400px] h-[400px] top-[40%] left-[20%]"></div>
      </div>

      <Header />
      
      <main className="flex-grow z-10 flex flex-col gap-24 pt-32 pb-20">
        <Hero />
        <Services />
        <Workflow />
        <Work />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;