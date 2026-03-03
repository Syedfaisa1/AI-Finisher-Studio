import React from 'react';
import { 
  Rocket, Database, Shield, Server, GitBranch, TrendingUp, CheckCircle2 
} from 'lucide-react';

const solutions = [
  {
    icon: <Rocket size={24} strokeWidth={1.5} />,
    category: "MVP FINISHING",
    title: "AI Prototype → Production MVP",
    desc: "Your AI tool built it. We make it production-ready with proper architecture, testing, and deployment.",
    features: ["Code audit & refactoring", "Production architecture", "CI/CD pipeline setup", "Performance optimization"]
  },
  {
    icon: <Database size={24} strokeWidth={1.5} />,
    category: "BACKEND INFRASTRUCTURE",
    title: "Scalable Backend Architecture",
    desc: "Build robust backend systems that handle real users, not just demos. Database design, API architecture, and more.",
    features: ["Database schema design", "RESTful/GraphQL APIs", "Authentication & authorization", "Data migration strategies"]
  },
  {
    icon: <Shield size={24} strokeWidth={1.5} />,
    category: "SECURITY & COMPLIANCE",
    title: "Enterprise-Grade Security",
    desc: "GDPR, SOC 2, HIPAA compliance. Security audits, penetration testing, and compliance frameworks.",
    features: ["Security audits", "Compliance frameworks", "Data encryption", "Access control systems"]
  },
  {
    icon: <Server size={24} strokeWidth={1.5} />,
    category: "DEPLOYMENT & DEVOPS",
    title: "Production Deployment Pipeline",
    desc: "Deploy with confidence. AWS, Vercel, Railway, or custom infrastructure with monitoring and rollback.",
    features: ["Cloud infrastructure setup", "Container orchestration", "Monitoring & logging", "Auto-scaling configuration"]
  },
  {
    icon: <GitBranch size={24} strokeWidth={1.5} />,
    category: "CODE QUALITY",
    title: "Technical Debt Remediation",
    desc: "Clean up messy AI-generated code. Establish patterns, documentation, and maintainable architecture.",
    features: ["Code review & refactoring", "Documentation creation", "Testing infrastructure", "Development workflows"]
  },
  {
    icon: <TrendingUp size={24} strokeWidth={1.5} />,
    category: "SCALE PREPARATION",
    title: "Growth Infrastructure",
    desc: "Prepare for scale before you need it. Load balancing, caching strategies, and performance tuning.",
    features: ["Performance optimization", "Caching strategies", "CDN integration", "Load testing"]
  }
];

const steps = [
  { id: "01", title: "Share your prototype", desc: "Show us what you built with AI. We audit the code, architecture, and identify gaps." },
  { id: "02", title: "Get your solution plan", desc: "Receive a detailed plan with scope, timeline, and fixed pricing. No surprises." },
  { id: "03", title: "We finish it", desc: "Our engineers refactor, deploy, and deliver a production-ready system in 3-4 Months." },
  { id: "04", title: "Launch with confidence", desc: "Get full code ownership, documentation, and support. You own everything." }
];

export default function AIStudioLanding() {
  return (
    <div className="bg-[#050505] min-h-screen font-sans selection:bg-emerald-500/30">
      
      {/* --- SOLUTIONS SECTION --- */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-[#14bc8b]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-[48px] font-bold text-white mb-6 tracking-tight">Our Solutions</h2>
            <p className="text-[#666666] text-sm md:text-base max-w-lg mx-auto">End-to-end engineering services for AI-built products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            {solutions.map((item, idx) => (
              <div key={idx} className="group relative bg-[#111111] border border-white/[0.08] rounded-[24px] p-10 pt-16 flex flex-col transition-all duration-300 hover:border-[#14bc8b]/30">
                <div className="absolute -top-8 left-8 w-[64px] h-[64px] rounded-[18px] bg-[#1a1a1a] border border-white/[0.1] flex items-center justify-center text-[#14bc8b] shadow-2xl group-hover:border-[#14bc8b]/50">
                  {item.icon}
                </div>
                <div className="mb-8">
                  <span className="text-[10px] font-bold text-[#666666] uppercase tracking-[0.2em] block mb-4">{item.category}</span>
                  <h3 className="text-white font-bold text-[22px] mb-4 leading-tight">{item.title}</h3>
                  <p className="text-[#888888] text-[14px] leading-relaxed font-normal">{item.desc}</p>
                </div>
                <div className="space-y-4 mt-auto">
                  {item.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <CheckCircle2 size={18} strokeWidth={2} className="text-[#14bc8b] flex-shrink-0" />
                      <span className="text-[#999999] text-[13px] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#14bc8b] mb-4">How it works</h2>
            <p className="text-gray-500 text-sm">Simple process, powerful results</p>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.id} className="bg-[#111111] border border-white/[0.05] rounded-xl p-8 flex items-start gap-6 hover:border-white/[0.1] transition-colors">
                <span className="text-2xl font-bold text-gray-800 tabular-nums">{step.id}</span>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">{step.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
} 