import { Database, TrendingUp, Shield, Code2, CheckCircle2 } from 'lucide-react';

export default function Expertise() {
  const specialties = [
    {
      icon: <Database size={24} strokeWidth={1.5} />,
      title: "Backend architecture",
      items: ["PostgreSQL", "MongoDB", "Redis"]
    },
    {
      icon: <TrendingUp size={24} strokeWidth={1.5} />,
      title: "Production deployments",
      items: ["AWS", "Vercel", "Railway"]
    },
    {
      icon: <Shield size={24} strokeWidth={1.5} />,
      title: "Compliance frameworks",
      items: ["GDPR", "SOC 2", "HIPAA"]
    },
    {
      icon: <Code2 size={24} strokeWidth={1.5} />,
      title: "Scalable infrastructure",
      items: ["Docker", "K8s", "CI/CD"]
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 mb-12">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADLINE --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Our team specializes in
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Production-grade infrastructure and deployment
          </p>
        </div>

        {/* --- 4-COLUMN CARDS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {specialties.map((spec, idx) => (
            <div 
              key={idx} 
              // Using a dark green tint for the card background to match Figma
              className="bg-[#0d1613] border border-[#14bc8b]/20 rounded-2xl p-8 hover:border-[#14bc8b]/40 transition-colors duration-300"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 rounded-lg border border-[#14bc8b]/20 bg-[#14bc8b]/10 flex items-center justify-center text-[#14bc8b] mb-6">
                {spec.icon}
              </div>
              
              <h3 className="text-white font-bold text-lg mb-6">
                {spec.title}
              </h3>
              
              {/* Feature List */}
              <div className="space-y-3">
                {spec.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#14bc8b] flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM STATS & INFO --- */}
        {/* Removed 'border-t border-white/5' and 'pt-12' to match Figma */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          
          {/* Left: Text Info */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Experienced Engineering Team
            </h3>
            <p className="text-slate-400 text-sm md:text-base">
              We are <span className="text-white font-bold">not</span> another no-code agency.
            </p>
          </div>

          {/* Right: Stats Grid */}
          <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-16">
            
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-bold text-[#14bc8b]">20+</span>
              <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
                MVPs Finished
              </span>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-bold text-[#14bc8b]">99.9%</span>
              <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
                Success Rate
              </span>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-bold text-[#14bc8b]">4 weeks</span>
              <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
                Avg. Timeline
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );

  // return (
  //   <section className="bg-[#0a0a0a] py-24 px-6">
  //     <div className="max-w-7xl mx-auto">
        
  //       {/* --- HEADLINE --- */}
  //       <div className="text-center mb-16">
  //         <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
  //           Our team specializes in
  //         </h2>
  //         <p className="text-slate-400 text-sm md:text-base">
  //           Production-grade infrastructure and deployment
  //         </p>
  //       </div>

  //       {/* --- 4-COLUMN CARDS GRID --- */}
  //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
  //         {specialties.map((spec, idx) => (
  //           <div 
  //             key={idx} 
  //             // Using a dark green tint for the card background to match Figma
  //             className="bg-[#0d1613] border border-[#14bc8b]/20 rounded-2xl p-8 hover:border-[#14bc8b]/40 transition-colors duration-300"
  //           >
  //             {/* Icon Box */}
  //             <div className="w-12 h-12 rounded-lg border border-[#14bc8b]/20 bg-[#14bc8b]/10 flex items-center justify-center text-[#14bc8b] mb-6">
  //               {spec.icon}
  //             </div>
              
  //             <h3 className="text-white font-bold text-lg mb-6">
  //               {spec.title}
  //             </h3>
              
  //             {/* Feature List */}
  //             <div className="space-y-3">
  //               {spec.items.map((item, i) => (
  //                 <div key={i} className="flex items-center gap-3">
  //                   <CheckCircle2 size={16} className="text-[#14bc8b] flex-shrink-0" />
  //                   <span className="text-slate-300 text-sm">{item}</span>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       {/* --- BOTTOM STATS & INFO --- */}
  //       <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 pt-12 border-t border-white/5">
          
  //         {/* Left: Text Info */}
  //         <div className="flex flex-col gap-2">
  //           <h3 className="text-2xl md:text-3xl font-bold text-white">
  //             Experienced Engineering Team
  //           </h3>
  //           <p className="text-slate-400 text-sm md:text-base">
  //             We are <span className="text-white font-bold">not</span> another no-code agency.
  //           </p>
  //         </div>

  //         {/* Right: Stats Grid */}
  //         <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-16">
            
  //           <div className="flex flex-col gap-1">
  //             <span className="text-3xl md:text-4xl font-bold text-[#14bc8b]">20+</span>
  //             <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
  //               MVPs Finished
  //             </span>
  //           </div>
            
  //           <div className="flex flex-col gap-1">
  //             <span className="text-3xl md:text-4xl font-bold text-[#14bc8b]">99.9%</span>
  //             <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
  //               Success Rate
  //             </span>
  //           </div>
            
  //           <div className="flex flex-col gap-1">
  //             <span className="text-3xl md:text-4xl font-bold text-[#14bc8b]">4 weeks</span>
  //             <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
  //               Avg. Timeline
  //             </span>
  //           </div>

  //         </div>
  //       </div>

  //     </div>
  //   </section>
  // );
}