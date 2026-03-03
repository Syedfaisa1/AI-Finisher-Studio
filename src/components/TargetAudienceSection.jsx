// import { Server, Rocket, ShieldAlert, ArrowRight } from 'lucide-react';

// export default function TargetAudienceSection() {
//   return (
//     <section className="bg-[#0a0a0a] py-24 px-6">
//       <div className="max-w-5xl mx-auto">
        
//         {/* --- HEADLINE --- */}
//         <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-16 leading-tight">
//           If this sounds familiar...<br />
//           <span className="text-[#14bc8b]">you’re exactly who we help.</span>
//         </h2>

//         {/* --- CARDS GRID --- */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
//           {/* Card 1: Fragile Backend */}
//           <div className="bg-[#141414] border border-[#2e2e2e] rounded-2xl p-8 flex flex-col hover:border-red-500/30 transition-colors duration-300">
//             {/* Icon Box */}
//             <div className="w-12 h-12 rounded-lg border border-red-500/20 bg-red-500/5 flex items-center justify-center mb-6">
//               <Server className="text-red-500" size={24} strokeWidth={1.5} />
//             </div>
//             <h3 className="text-white font-bold text-lg mb-3">
//               Your backend feels fragile
//             </h3>
//             <p className="text-slate-400 text-sm leading-relaxed">
//               Your app works in testing but struggles under real load.
//             </p>
//           </div>

//           {/* Card 2: Deployment Issues */}
//           <div className="bg-[#141414] border border-[#2e2e2e] rounded-2xl p-8 flex flex-col hover:border-orange-500/30 transition-colors duration-300">
//             {/* Icon Box */}
//             <div className="w-12 h-12 rounded-lg border border-orange-500/20 bg-orange-500/5 flex items-center justify-center mb-6">
//               <Rocket className="text-orange-500" size={24} strokeWidth={1.5} />
//             </div>
//             <h3 className="text-white font-bold text-lg mb-3">
//               You don't know how to deploy
//             </h3>
//             <p className="text-slate-400 text-sm leading-relaxed">
//               Hosting, environments, CI/CD, everything feels unclear.
//             </p>
//           </div>

//           {/* Card 3: Investor Questions */}
//           <div className="bg-[#141414] border border-[#2e2e2e] rounded-2xl p-8 flex flex-col hover:border-yellow-500/30 transition-colors duration-300">
//             {/* Icon Box */}
//             <div className="w-12 h-12 rounded-lg border border-yellow-500/20 bg-yellow-500/5 flex items-center justify-center mb-6">
//               <ShieldAlert className="text-yellow-500" size={24} strokeWidth={1.5} />
//             </div>
//             <h3 className="text-white font-bold text-lg mb-3">
//               Investors ask technical questions
//             </h3>
//             <p className="text-slate-400 text-sm leading-relaxed">
//               Architecture, scalability, security... and you don't have answers yet.
//             </p>
//           </div>

//         </div>

//         {/* --- BOTTOM CTA BAR --- */}
//        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-6">
//           <p className="text-lg md:text-xl text-slate-400 font-medium text-center sm:text-left">
//             Endless demos... <span className="text-[#FF6E6E]">and no real launch</span>
//           </p>
          
//           <button className="bg-[#14bc8b] hover:bg-[#10a378] text-[#121212] px-6 py-3 rounded-md font-bold text-sm transition-all flex items-center gap-2 group">
//             Get Started
//             <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }

import { useEffect, useRef } from 'react';
import { Server, Rocket, ShieldAlert, ArrowRight } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function TargetAudienceSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  
  // Triggers ONLY when user scrolls down and 30% of this section is visible
  const isInView = useInView(ref, { once: true, amount: 0.3 }); 

  useEffect(() => {
    if (isInView) {
      const runSequence = async () => {
        // 1. Show Headline
        controls.start("visibleHeadline");
        
        // 2. Show Card 1 Content & Draw its Border
        controls.start("visibleCard1");
        await controls.start("drawBorder1");
        
        // 3. Shoot Line 1 (Card 1 -> Card 2)
        await controls.start("drawLine1");
        
        // 4. Show Card 2 Content & Draw its Border
        controls.start("visibleCard2");
        await controls.start("drawBorder2");
        
        // 5. Shoot Line 2 (Card 2 -> Card 3)
        await controls.start("drawLine2");
        
        // 6. Show Card 3 Content & Draw its Border
        controls.start("visibleCard3");
        await controls.start("drawBorder3");

        // 7. Pause briefly so the user sees the completed flow
        await new Promise(resolve => setTimeout(resolve, 600));

        // 8. FADE OUT the drawn lines and animated borders
        controls.start("hideFlow");

        // 9. Reveal bottom CTA
        controls.start("visibleCTA");
      };
      
      runSequence();
    }
  }, [isInView, controls]);

  // --- VARIANTS FOR THE SEQUENCE ---
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visibleHeadline: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    visibleCTA: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardContent = {
    hidden: { opacity: 0 },
    visibleCard1: { opacity: 1, transition: { duration: 0.3 } },
    visibleCard2: { opacity: 1, transition: { duration: 0.3 } },
    visibleCard3: { opacity: 1, transition: { duration: 0.3 } },
  };

  const borderDraw = {
    hidden: { pathLength: 0, opacity: 0 },
    drawBorder1: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    drawBorder2: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    drawBorder3: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    hideFlow: { opacity: 0, transition: { duration: 0.6 } }
  };

  const lineDraw = {
    hidden: { scaleX: 0, opacity: 0 },
    drawLine1: { scaleX: 1, opacity: 1, transition: { duration: 0.4, ease: "linear" } },
    drawLine2: { scaleX: 1, opacity: 1, transition: { duration: 0.4, ease: "linear" } },
    hideFlow: { opacity: 0, transition: { duration: 0.6 } }
  };

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        
        {/* --- HEADLINE --- */}
        <motion.h2 
          variants={fadeUp} initial="hidden" animate={controls}
          className="text-3xl md:text-4xl font-semibold text-center text-white mb-20 leading-tight"
        >
          If this sounds familiar...<br />
          <span className="text-[#14bc8b]">you’re exactly who we help.</span>
        </motion.h2>

        {/* --- CARDS GRID --- */}
        {/* gap-6 equals 24px, which perfectly matches our right-[-24px] connecting lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          
          {/* --- CARD 1: RED --- */}
          <div className="relative group">
            {/* Animated SVG Border */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
              <motion.rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="15" fill="none" stroke="#ef4444" strokeWidth="2"
                variants={borderDraw} initial="hidden" animate={controls}
              />
            </svg>
            {/* Connecting Line (Shoots to Card 2) */}
            <motion.div variants={lineDraw} initial="hidden" animate={controls}
              className="hidden md:block absolute top-1/2 right-[-24px] w-[24px] h-[2px] bg-gradient-to-r from-red-500 to-orange-500 origin-left z-30"
            />
            
            {/* Actual Card Content */}
            <motion.div variants={cardContent} initial="hidden" animate={controls} className="h-full">
              <div className="bg-[#141414] border border-[#2e2e2e] rounded-2xl p-8 flex flex-col h-full hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg border border-red-500/20 bg-red-500/5 flex items-center justify-center mb-6">
                  <Server className="text-red-500" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Your backend feels fragile</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Your app works in testing but struggles under real load.</p>
              </div>
            </motion.div>
          </div>

          {/* --- CARD 2: ORANGE --- */}
          <div className="relative group">
            {/* Animated SVG Border */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
              <motion.rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="15" fill="none" stroke="#f97316" strokeWidth="2"
                variants={borderDraw} initial="hidden" animate={controls}
              />
            </svg>
            {/* Connecting Line (Shoots to Card 3) */}
            <motion.div variants={lineDraw} initial="hidden" animate={controls}
              className="hidden md:block absolute top-1/2 right-[-24px] w-[24px] h-[2px] bg-gradient-to-r from-orange-500 to-yellow-500 origin-left z-30"
            />

            {/* Actual Card Content */}
            <motion.div variants={cardContent} initial="hidden" animate={controls} className="h-full">
              <div className="bg-[#141414] border border-[#2e2e2e] rounded-2xl p-8 flex flex-col h-full hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg border border-orange-500/20 bg-orange-500/5 flex items-center justify-center mb-6">
                  <Rocket className="text-orange-500" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">You don't know how to deploy</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Hosting, environments, CI/CD, everything feels unclear.</p>
              </div>
            </motion.div>
          </div>

          {/* --- CARD 3: YELLOW --- */}
          <div className="relative group">
            {/* Animated SVG Border */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
              <motion.rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="15" fill="none" stroke="#eab308" strokeWidth="2"
                variants={borderDraw} initial="hidden" animate={controls}
              />
            </svg>

            {/* Actual Card Content */}
            <motion.div variants={cardContent} initial="hidden" animate={controls} className="h-full">
              <div className="bg-[#141414] border border-[#2e2e2e] rounded-2xl p-8 flex flex-col h-full hover:border-yellow-500/40 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg border border-yellow-500/20 bg-yellow-500/5 flex items-center justify-center mb-6">
                  <ShieldAlert className="text-yellow-500" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Investors ask technical questions</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Architecture, scalability, security... and you don't have answers yet.</p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* --- BOTTOM CTA BAR --- */}
        <motion.div 
          variants={fadeUp} initial="hidden" animate={controls}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-lg md:text-xl text-slate-400 font-medium text-center sm:text-left">
            Endless demos... <span className="text-[#FF6E6E]">and no real launch</span>
          </p>
          <button className="bg-[#14bc8b] hover:bg-[#10a378] text-[#121212] px-6 py-3 rounded-md font-bold text-sm transition-all flex items-center gap-2 group shadow-[0_0_15px_rgba(20,188,139,0.2)]">
            Get Started
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}