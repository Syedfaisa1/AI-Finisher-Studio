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

export default function OurSolutions() {
  return (
    <section className="bg-[#050505] py-24 px-6 relative overflow-hidden font-sans">
      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-[#14bc8b]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-[48px] font-bold text-white mb-6 tracking-tight">
            Our Solutions
          </h2>
          <p className="text-[#666666] text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            End-to-end engineering services for AI-built products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {solutions.map((item, idx) => (
            <div 
              key={idx}
              className="group relative bg-[#111111] border border-white/[0.08] rounded-[24px] p-10 pt-16 flex flex-col transition-all duration-300 hover:border-[#14bc8b]/30"
            >
              {/* Corrected Icon Container: Matches Figma spacing and stroke */}
              <div className="absolute -top-8 left-8 w-[64px] h-[64px] rounded-[18px] bg-[#1a1a1a] border border-white/[0.1] flex items-center justify-center text-[#14bc8b] shadow-2xl transition-all duration-300 group-hover:border-[#14bc8b]/50">
                {item.icon}
              </div>

              <div className="mb-8">
                <span className="text-[10px] font-bold text-[#666666] uppercase tracking-[0.2em] block mb-4">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-[22px] mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#888888] text-[14px] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="space-y-4 mt-auto">
                {item.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <CheckCircle2 size={18} strokeWidth={2} className="text-[#14bc8b] flex-shrink-0" />
                    <span className="text-[#999999] text-[13px] font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}