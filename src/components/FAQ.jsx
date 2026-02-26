import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  // We track which FAQ is currently open. Setting to 0 opens the first one by default.
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do I keep ownership?",
      answer: "Yes. Everything remains 100% yours. We build, you own. No equity required, no vendor lock-in."
    },
    {
      question: "Do I need to rebuild my app?",
      answer: "In most cases, no. We audit your existing AI-generated code and refactor the fragile parts, adding security and scalability while keeping your core logic intact."
    },
    {
      question: "What tools do you support?",
      answer: "We support modern stacks including React, Next.js, Node.js, Python, PostgreSQL, MongoDB, and major cloud providers like AWS and Vercel."
    },
    {
      question: "How long does it take?",
      answer: "Our average timeline is 3-4 weeks depending on the complexity of your MVP and the current state of your codebase."
    },
    {
      question: "What if I need changes later?",
      answer: "We hand over clean, fully documented code so your team can easily take over. We also offer ongoing maintenance retainers if you need continued support."
    },
    {
      question: "Is this suitable for funded startups?",
      answer: "Absolutely. We help pre-seed and seed-stage startups turn their hacked-together prototypes into secure, scalable products that pass investor technical due diligence."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0a0a0a] py-32 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* --- HEADLINE --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Everything you need to know about working with us.
          </p>
        </div>

        {/* --- FAQ ACCORDION --- */}
        <div className="max-w-3xl mx-auto space-y-4 mb-20">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <div 
                key={idx} 
                className={`border rounded-xl transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[#121212] border-[#2e2e2e]' 
                    : 'bg-[#121212] border-[#2e2e2e] hover:border-[#14bc8b]/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-white font-medium text-[15px]">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-[#14bc8b] flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown size={18} className="text-[#14bc8b] flex-shrink-0 ml-4" />
                  )}
                </button>
                
                {/* Expandable Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- BOTTOM STATS CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          
          <div className="bg-[#0d1613] border border-[#14bc8b]/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <span className="text-[#14bc8b] text-3xl font-bold mb-2">100%</span>
            <span className="text-slate-500 text-xs font-medium">Full Ownership</span>
          </div>
          
          <div className="bg-[#0d1613] border border-[#14bc8b]/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <span className="text-[#14bc8b] text-3xl font-bold mb-2">3-4 weeks</span>
            <span className="text-slate-500 text-xs font-medium">Average Timeline</span>
          </div>
          
          <div className="bg-[#0d1613] border border-[#14bc8b]/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <span className="text-[#14bc8b] text-3xl font-bold mb-2">0</span>
            <span className="text-slate-500 text-xs font-medium">Vendor Lock-in</span>
          </div>

        </div>

      </div>
    </section>
  );
}