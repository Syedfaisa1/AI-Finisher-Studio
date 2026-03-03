// import { Database, TrendingUp, Shield, Code2, CheckCircle2 } from 'lucide-react';

// export default function Expertise() {
//   const specialties = [
//     {
//       icon: <Database size={24} strokeWidth={1.5} />,
//       title: "Backend architecture",
//       items: ["PostgreSQL", "MongoDB", "Redis"]
//     },
//     {
//       icon: <TrendingUp size={24} strokeWidth={1.5} />,
//       title: "Production deployments",
//       items: ["AWS", "Vercel", "Railway"]
//     },
//     {
//       icon: <Shield size={24} strokeWidth={1.5} />,
//       title: "Compliance frameworks",
//       items: ["GDPR", "SOC 2", "HIPAA"]
//     },
//     {
//       icon: <Code2 size={24} strokeWidth={1.5} />,
//       title: "Scalable infrastructure",
//       items: ["Docker", "K8s", "CI/CD"]
//     }
//   ];

//   return (
//     <section className="bg-[#0a0a0a] py-24 px-6 mb-12">
//       <div className="max-w-7xl mx-auto">
        
//         {/* --- HEADLINE --- */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
//             Our team specializes in
//           </h2>
//           <p className="text-slate-400 text-sm md:text-base">
//             Production-grade infrastructure and deployment
//           </p>
//         </div>

//         {/* --- 4-COLUMN CARDS GRID --- */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
//           {specialties.map((spec, idx) => (
//             <div 
//               key={idx} 
//               // Using a dark green tint for the card background to match Figma
//               className="bg-[#0d1613] border border-[#14bc8b]/20 rounded-2xl p-8 hover:border-[#14bc8b]/40 transition-colors duration-300"
//             >
//               {/* Icon Box */}
//               <div className="w-12 h-12 rounded-lg border border-[#14bc8b]/20 bg-[#14bc8b]/10 flex items-center justify-center text-[#14bc8b] mb-6">
//                 {spec.icon}
//               </div>
              
//               <h3 className="text-white font-bold text-lg mb-6">
//                 {spec.title}
//               </h3>
              
//               {/* Feature List */}
//               <div className="space-y-3">
//                 {spec.items.map((item, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <CheckCircle2 size={16} className="text-[#14bc8b] flex-shrink-0" />
//                     <span className="text-slate-300 text-sm">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* --- BOTTOM STATS & INFO --- */}
//         {/* Removed 'border-t border-white/5' and 'pt-12' to match Figma */}
//         <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          
//           {/* Left: Text Info */}
//           <div className="flex flex-col gap-2">
//             <h3 className="text-2xl md:text-3xl font-bold text-white">
//               Experienced Engineering Team
//             </h3>
//             <p className="text-slate-400 text-sm md:text-base">
//               We are <span className="text-white font-bold">not</span> another no-code agency.
//             </p>
//           </div>

//           {/* Right: Stats Grid */}
//           <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-16">
            
//             <div className="flex flex-col gap-1">
//               <span className="text-3xl md:text-4xl font-bold text-[#14bc8b]">20+</span>
//               <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
//                 MVPs Finished
//               </span>
//             </div>
            
//             <div className="flex flex-col gap-1">
//               <span className="text-3xl md:text-4xl font-bold text-[#14bc8b]">99.9%</span>
//               <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
//                 Success Rate
//               </span>
//             </div>
            
//             <div className="flex flex-col gap-1">
//               <span className="text-3xl md:text-4xl font-bold text-[#14bc8b]">4 weeks</span>
//               <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
//                 Avg. Timeline
//               </span>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );


import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Database, TrendingUp, Shield, Code2, CheckCircle2 } from 'lucide-react';

// --- CUSTOM ANIMATED COUNTER COMPONENT ---
function AnimatedCounter({ from = 0, to, decimals = 0, suffix = "" }) {
  const nodeRef = useRef(null);
  // amount: 0.5 ensures the counter waits until it is visible
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: 2.5, 
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = value.toFixed(decimals) + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [from, to, isInView, decimals, suffix]);

  return <span ref={nodeRef}>{from.toFixed(decimals)}{suffix}</span>;
}

// --- SCROLL ANIMATION VARIANTS ---
const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 0.4, // Matches your strokeOpacity
    transition: { duration: 1.5, ease: "easeInOut" } 
  }
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.3 } 
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (idx) => ({
    opacity: 1, 
    y: 0, 
    // Wait 1 second for the lines to draw, then stagger each card by 0.15s
    transition: { duration: 0.5, ease: "easeOut", delay: 1.0 + (idx * 0.15) }
  })
};


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

  // SVG Paths mapping from center (500,0) to 4 card tops
  const rootPaths = [
    "M 500 0 C 500 50, 125 50, 125 100", 
    "M 500 0 C 500 50, 375 50, 375 100", 
    "M 500 0 C 500 50, 625 50, 625 100", 
    "M 500 0 C 500 50, 875 50, 875 100"  
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 mb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* --- HEADLINE --- */}
        <div className="text-center mb-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Our team specializes in
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Production-grade infrastructure and deployment
          </p>
        </div>

        {/* --- PARENT TRIGGER CONTAINER --- */}
        {/* This wrapper controls BOTH the lines and the cards so they fire together on scroll */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Starts when 20% of this section is on screen
          className="relative"
        >
          
          {/* --- ANIMATED SVG ROOTS (Desktop Only) --- */}
          <div className="hidden lg:block relative w-full h-20 mb-4 pointer-events-none z-0">
            <svg 
              className="absolute top-0 left-0 w-full h-full" 
              viewBox="0 0 1000 100" 
              preserveAspectRatio="none"
            >
              {/* Glowing dot at the top center */}
              <motion.circle 
                variants={dotVariants}
                cx="500" cy="0" r="4" fill="#14bc8b"
                className="shadow-[0_0_10px_#14bc8b]"
              />
              
              {/* Drawing the Lines */}
              {rootPaths.map((path, idx) => (
                <motion.path
                  key={idx}
                  variants={lineVariants}
                  d={path}
                  fill="none"
                  stroke="#14bc8b"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>

          <div className="lg:hidden h-10"></div> {/* Mobile spacing */}

          {/* --- 4-COLUMN CARDS GRID --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 relative z-10">
            {specialties.map((spec, idx) => (
              <motion.div 
                key={idx} 
                custom={idx} // Passes the index to the cardVariants to stagger the delay
                variants={cardVariants}
                className="bg-[#0d1613] border border-[#14bc8b]/20 rounded-2xl p-8 hover:border-[#14bc8b]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(20,188,139,0.1)]"
              >
                <div className="w-12 h-12 rounded-lg border border-[#14bc8b]/20 bg-[#14bc8b]/10 flex items-center justify-center text-[#14bc8b] mb-6">
                  {spec.icon}
                </div>
                
                <h3 className="text-white font-bold text-lg mb-6">
                  {spec.title}
                </h3>
                
                <div className="space-y-3">
                  {spec.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-[#14bc8b] flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* --- BOTTOM STATS & INFO --- */}
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

          {/* Right: Stats Grid with Animated Counters */}
          <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-16">
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-bold text-[#14bc8b]">
                <AnimatedCounter to={20} suffix="+" />
              </span>
              <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
                MVPs Finished
              </span>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-bold text-[#14bc8b]">
                <AnimatedCounter to={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
                Success Rate
              </span>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-bold text-[#14bc8b]">
                <AnimatedCounter to={3} />-4 Months
              </span>
              <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
                Avg. Timeline
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}