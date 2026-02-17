import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass rounded-lg overflow-hidden">
      <button 
        className="w-full flex justify-between items-center font-medium cursor-pointer p-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <span className="material-symbols-outlined">expand_more</span>
        </span>
      </button>
      <div 
        className={`text-gray-400 px-6 text-sm leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Do you work with personal brands?",
      answer: "Yes, we specialize in scaling personal brands for CEOs, founders, and content creators looking to establish authority."
    },
    {
      question: "How fast can I see results?",
      answer: "Typically, our clients see a significant uptick in engagement within the first 30 days as we optimize the content strategy."
    },
    {
      question: "Is the content AI generated?",
      answer: "We use AI to enhance efficiency and quality (scripting, voiceovers, visual effects), but the strategy and creative direction are 100% human-led."
    }
  ];

  return (
    <section className="max-w-[800px] mx-auto px-6 w-full">
      <h2 className="text-3xl font-bold mb-10 text-center">FAQ</h2>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;