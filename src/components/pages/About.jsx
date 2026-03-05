// // import { Sparkles, Target, Zap } from 'lucide-react';
// // import Aurora from '../Aurora';
// // import logo from '../../assets/logo.png';

// // export default function About() {
// //   return (
// //     <section className="bg-[#0a0a0a] min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      
// //       {/* --- BACKGROUND LAYER --- */}
// //       <div className="absolute inset-0 z-0">
// //         <Aurora
// //           colorStops={["#0a7052", "#14bc8b", "#000000"]}
// //           blend={0.6}
// //           amplitude={1.1}
// //           speed={0.15}
// //         />
// //       </div>

// //       <div className="max-w-4xl mx-auto relative z-10">
        
// //         {/* --- HEADER --- */}
// //         <div className="text-center mb-20">
// //           <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
// //             About Us
// //           </h1>
// //           <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
// //             AI Finisher Studio is the finishing layer for AI-built MVPs.<br className="hidden md:block" />
// //             Turn fragile prototypes into secure, deployable products<br className="hidden md:block" />
// //             with real engineering behind them.
// //           </p>
// //         </div>

// //         {/* --- WIDE BANNER --- */}
// //         <div className="w-full bg-[#121212]/80 backdrop-blur-md border border-[#2e2e2e] rounded-2xl py-10 px-8 text-center mb-8 shadow-lg">
// //           <h2 className="text-2xl md:text-3xl font-semibold text-white">
// //             We saw a <span className="text-[#14bc8b]">new gap</span> forming in software.
// //           </h2>
// //         </div>

// //         {/* --- 3-COLUMN STAT CARDS --- */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
// //           {/* Card 1 */}
// //           <div className="relative bg-[#121212]/80 backdrop-blur-sm border border-[#2e2e2e] rounded-2xl p-8 pt-10">
// //             {/* Overlapping Number Badge */}
// //             <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0a0a0a] border border-[#2e2e2e] rounded-full flex items-center justify-center text-xs font-bold text-slate-400 shadow-md">
// //               1
// //             </div>
// //             <Sparkles className="text-[#14bc8b] mb-4" size={28} />
// //             <div className="text-3xl font-bold text-white mb-1">10x</div>
// //             <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-4">
// //               Build speed increased
// //             </div>
// //             <p className="text-sm text-slate-400 leading-relaxed">
// //               AI tools made building faster than ever
// //             </p>
// //           </div>

// //           {/* Card 2 */}
// //           <div className="relative bg-[#121212]/80 backdrop-blur-sm border border-[#2e2e2e] rounded-2xl p-8 pt-10">
// //             <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0a0a0a] border border-[#2e2e2e] rounded-full flex items-center justify-center text-xs font-bold text-slate-400 shadow-md">
// //               2
// //             </div>
// //             <Target className="text-[#14bc8b] mb-4" size={28} />
// //             <div className="text-3xl font-bold text-white mb-1">0%</div>
// //             <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-4">
// //               No deployment help
// //             </div>
// //             <p className="text-sm text-slate-400 leading-relaxed">
// //               But launching safely still required real engineering
// //             </p>
// //           </div>

// //           {/* Card 3 */}
// //           <div className="relative bg-[#121212]/80 backdrop-blur-sm border border-[#2e2e2e] rounded-2xl p-8 pt-10">
// //             <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0a0a0a] border border-[#2e2e2e] rounded-full flex items-center justify-center text-xs font-bold text-slate-400 shadow-md">
// //               3
// //             </div>
// //             <Zap className="text-[#14bc8b] mb-4" size={28} />
// //             <div className="text-3xl font-bold text-white mb-1">100%</div>
// //             <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-4">
// //               MVP Finishing
// //             </div>
// //             <p className="text-sm text-slate-400 leading-relaxed">
// //               So we created a new category
// //             </p>
// //           </div>

// //         </div>

// //         {/* --- 2-COLUMN COMPARISON CARDS --- */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          
// //           {/* Left Card: Success/Volume (Green) */}
// //           <div className="bg-[#0a1410]/90 backdrop-blur-sm border border-[#14bc8b]/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(20,188,139,0.05)]">
// //             <div className="text-4xl md:text-5xl font-bold text-[#14bc8b] mb-3 tracking-tight">1000s</div>
// //             <div className="text-white font-bold text-lg mb-8">
// //               of founders could now build prototypes
// //             </div>
// //             <div className="flex flex-wrap gap-2">
// //               {['Lovable', 'Bolt', 'Cursor', 'v0'].map((tag) => (
// //                 <span key={tag} className="px-4 py-1.5 rounded-full border border-[#14bc8b]/30 bg-[#14bc8b]/10 text-[#14bc8b] text-[11px] font-bold uppercase tracking-wider">
// //                   {tag}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Right Card: Failure/Deployment (Red) */}
// //           <div className="bg-[#1a0a0a]/90 backdrop-blur-sm border border-[#ff6e6e]/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,110,110,0.05)]">
// //             <div className="text-4xl md:text-5xl font-bold text-[#ff6e6e] mb-3 tracking-tight">0</div>
// //             <div className="text-white font-bold text-lg mb-8">
// //               could deploy them properly
// //             </div>
// //             <div className="flex flex-wrap gap-2">
// //               {['No CI/CD', 'No Auth', 'No Scale'].map((tag) => (
// //                 <span key={tag} className="px-4 py-1.5 rounded-full border border-[#ff6e6e]/30 bg-[#ff6e6e]/10 text-[#ff6e6e] text-[11px] font-bold uppercase tracking-wider">
// //                   {tag}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>

// //         </div>

// //         {/* --- BOTTOM QUOTE & BRANDING --- */}
// //         <div className="text-center pb-12">
// //            <p className="text-slate-500 text-sm mb-8">So we created a new category:</p>
          
// //            {/* Faded Logo */}
// //            <div className="flex justify-center items-center gap-4 mb-16 opacity-30 grayscale">
// //              <img src={logo} alt="logo" />
// //            </div>

// //            {/* Quote */}
// //            <p className="text-xl md:text-2xl text-slate-500 italic font-light mb-8 max-w-4xl mx-auto">
// //              "The gap between prototype and production is where most AI projects die."
// //            </p>
          
// //            <p className="text-slate-300 font-medium text-lg">
// //              We exist to close that gap. <span className="text-[#14bc8b] font-semibold">One MVP at a time.</span>
// //            </p>
// //          </div>

   

// //       </div>
// //     </section>
// //   );
// // }


// import { Sparkles, Target, Zap } from 'lucide-react';
// import { motion } from 'framer-motion';
// import Aurora from '../Aurora';
// import logo from '../../assets/logo.png';

// // --- ANIMATION VARIANTS ---

// // 1. Text reveal orchestrator
// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.08 }
//   }
// };

// const wordVariants = {
//   hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     filter: "blur(0px)",
//     transition: { duration: 0.5, ease: "easeOut" }
//   }
// };

// // 2. Grid Container Orchestrator (Tight stagger so they crash together smoothly)
// const gridContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.1 }
//   }
// };

// const cardFadeUp = {
//   hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
//   visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
// };

// // --- NEW "ASSEMBLY" VARIANTS ---
// const slideFromLeft = {
//   hidden: { opacity: 0, x: -100, y: 20, filter: "blur(10px)" },
//   visible: { opacity: 1, x: 0, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
// };

// const slideFromRight = {
//   hidden: { opacity: 0, x: 100, y: 20, filter: "blur(10px)" },
//   visible: { opacity: 1, x: 0, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
// };

// const slideFromBottom = {
//   hidden: { opacity: 0, y: 100, filter: "blur(10px)" },
//   visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
// };

// export default function About() {
//   return (
//     <section className="bg-[#0a0a0a] min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      
//       {/* --- BACKGROUND LAYER --- */}
//       <div className="absolute inset-0 z-0">
//         <Aurora
//           colorStops={["#0a7052", "#14bc8b", "#000000"]}
//           blend={0.6}
//           amplitude={1.1}
//           speed={0.15}
//         />
//       </div>

//       <div className="max-w-4xl mx-auto relative z-10">
        
//         {/* --- HEADER --- */}
//         <div className="text-center mb-20">
//           <motion.h1 
//             variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
//           >
//             {"About Us".split(" ").map((word, i) => (
//               <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">{word}</motion.span>
//             ))}
//           </motion.h1>
          
//           <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
//              AI Finisher Studio is the finishing layer for AI-built MVPs.<br className="hidden md:block" />
//              Turn fragile prototypes into secure, deployable products<br className="hidden md:block" />
//              with real engineering behind them.
//            </p>
//         </div>

//         {/* --- WIDE BANNER --- */}
//         <motion.div 
//           variants={cardFadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
//           className="w-full bg-[#121212]/80 backdrop-blur-md border border-[#2e2e2e] rounded-2xl py-10 px-8 text-center mb-8 shadow-lg"
//         >
//           <h2 className="text-2xl md:text-3xl font-semibold text-white">
//             We saw a <span className="text-[#14bc8b]">new gap</span> forming in software.
//           </h2>
//         </motion.div>

//         {/* --- 3-COLUMN STAT CARDS (Converging Assembly) --- */}
//         <motion.div 
//           variants={gridContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
//         >
//           {/* Card 1 flies in from the Left */}
//           <motion.div variants={slideFromLeft} className="relative bg-[#121212]/80 backdrop-blur-sm border border-[#2e2e2e] rounded-2xl p-8 pt-10 hover:border-[#14bc8b]/30 transition-colors duration-300">
//             <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0a0a0a] border border-[#2e2e2e] rounded-full flex items-center justify-center text-xs font-bold text-slate-400 shadow-md">1</div>
//             <Sparkles className="text-[#14bc8b] mb-4" size={28} />
//             <div className="text-3xl font-bold text-white mb-1">10x</div>
//             <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-4">Build speed increased</div>
//             <p className="text-sm text-slate-400 leading-relaxed">AI tools made building faster than ever</p>
//           </motion.div>

//           {/* Card 2 flies up from the Bottom Center */}
//           <motion.div variants={slideFromBottom} className="relative bg-[#121212]/80 backdrop-blur-sm border border-[#2e2e2e] rounded-2xl p-8 pt-10 hover:border-[#14bc8b]/30 transition-colors duration-300">
//             <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0a0a0a] border border-[#2e2e2e] rounded-full flex items-center justify-center text-xs font-bold text-slate-400 shadow-md">2</div>
//             <Target className="text-[#14bc8b] mb-4" size={28} />
//             <div className="text-3xl font-bold text-white mb-1">0%</div>
//             <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-4">No deployment help</div>
//             <p className="text-sm text-slate-400 leading-relaxed">But launching safely still required real engineering</p>
//           </motion.div>

//           {/* Card 3 flies in from the Right */}
//           <motion.div variants={slideFromRight} className="relative bg-[#121212]/80 backdrop-blur-sm border border-[#2e2e2e] rounded-2xl p-8 pt-10 hover:border-[#14bc8b]/30 transition-colors duration-300">
//             <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0a0a0a] border border-[#2e2e2e] rounded-full flex items-center justify-center text-xs font-bold text-slate-400 shadow-md">3</div>
//             <Zap className="text-[#14bc8b] mb-4" size={28} />
//             <div className="text-3xl font-bold text-white mb-1">100%</div>
//             <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-4">MVP Finishing</div>
//             <p className="text-sm text-slate-400 leading-relaxed">So we created a new category</p>
//           </motion.div>
//         </motion.div>

//         {/* --- 2-COLUMN COMPARISON CARDS (Converging Assembly) --- */}
//         <motion.div 
//           variants={gridContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"
//         >
//           {/* Left Card flies in from the Left */}
//           <motion.div variants={slideFromLeft} className="bg-[#0a1410]/90 backdrop-blur-sm border border-[#14bc8b]/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(20,188,139,0.05)] hover:-translate-y-1 transition-transform duration-300">
//             <div className="text-4xl md:text-5xl font-bold text-[#14bc8b] mb-3 tracking-tight">1000s</div>
//             <div className="text-white font-bold text-lg mb-8">of founders could now build prototypes</div>
//             <div className="flex flex-wrap gap-2">
//               {['Lovable', 'Bolt', 'Cursor', 'v0'].map((tag) => (
//                 <span key={tag} className="px-4 py-1.5 rounded-full border border-[#14bc8b]/30 bg-[#14bc8b]/10 text-[#14bc8b] text-[11px] font-bold uppercase tracking-wider">{tag}</span>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right Card flies in from the Right */}
//           <motion.div variants={slideFromRight} className="bg-[#1a0a0a]/90 backdrop-blur-sm border border-[#ff6e6e]/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,110,110,0.05)] hover:-translate-y-1 transition-transform duration-300">
//             <div className="text-4xl md:text-5xl font-bold text-[#ff6e6e] mb-3 tracking-tight">0</div>
//             <div className="text-white font-bold text-lg mb-8">could deploy them properly</div>
//             <div className="flex flex-wrap gap-2">
//               {['No CI/CD', 'No Auth', 'No Scale'].map((tag) => (
//                 <span key={tag} className="px-4 py-1.5 rounded-full border border-[#ff6e6e]/30 bg-[#ff6e6e]/10 text-[#ff6e6e] text-[11px] font-bold uppercase tracking-wider">{tag}</span>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* --- BOTTOM QUOTE & BRANDING --- */}
//         <motion.div 
//           variants={gridContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
//           className="text-center pb-12"
//         >
//           <motion.p variants={cardFadeUp} className="text-slate-500 text-sm mb-8">So we created a new category:</motion.p>
          
//           <motion.div variants={cardFadeUp} className="flex justify-center items-center gap-4 mb-16 opacity-30 grayscale">
//             <img src={logo} alt="logo" />
//           </motion.div>

//           <motion.p variants={cardFadeUp} className="text-xl md:text-2xl text-slate-500 italic font-light mb-8 max-w-4xl mx-auto">
//             "The gap between prototype and production is where most AI projects die."
//           </motion.p>
          
//           <motion.p variants={cardFadeUp} className="text-slate-300 font-medium text-lg">
//             We exist to close that gap. <span className="text-[#14bc8b] font-semibold">One MVP at a time.</span>
//           </motion.p>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

import { Sparkles, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Aurora from '../Aurora';
import logo from '../../assets/logo.png';

// --- ANIMATION VARIANTS ---

// 1. Text reveal orchestrator
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// 2. Grid Container Orchestrator (Smooth stagger)
const gridContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

// 3. Simple, elegant fade-up for all cards
const cardFadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
};


export default function About() {
  return (
    <section className="bg-[#0a0a0a] min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#0a7052", "#14bc8b", "#000000"]}
          blend={0.6}
          amplitude={1.1}
          speed={0.15}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <motion.h1 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            {"About Us".split(" ").map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">{word}</motion.span>
            ))}
          </motion.h1>
          
          <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
             AI Finisher Studio is the finishing layer for AI-built MVPs.<br className="hidden md:block" />
             Turn fragile prototypes into secure, deployable products<br className="hidden md:block" />
             with real engineering behind them.
           </p>
        </div>

        {/* --- WIDE BANNER --- */}
        <motion.div 
          variants={cardFadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
          className="w-full bg-[#121212]/80 backdrop-blur-md border border-[#2e2e2e] rounded-2xl py-10 px-8 text-center mb-8 shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            We saw a <span className="text-[#14bc8b]">new gap</span> forming in software.
          </h2>
        </motion.div>

        {/* --- 3-COLUMN STAT CARDS (Simple Fade Up) --- */}
        <motion.div 
          variants={gridContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {/* Card 1 */}
          <motion.div variants={cardFadeUp} className="relative bg-[#121212]/80 backdrop-blur-sm border border-[#2e2e2e] rounded-2xl p-8 pt-10 hover:border-[#14bc8b]/30 transition-colors duration-300">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0a0a0a] border border-[#2e2e2e] rounded-full flex items-center justify-center text-xs font-bold text-slate-400 shadow-md">1</div>
            <Sparkles className="text-[#14bc8b] mb-4" size={28} />
            <div className="text-3xl font-bold text-white mb-1">10x</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-4">Build speed increased</div>
            <p className="text-sm text-slate-400 leading-relaxed">AI tools made building faster than ever</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={cardFadeUp} className="relative bg-[#121212]/80 backdrop-blur-sm border border-[#2e2e2e] rounded-2xl p-8 pt-10 hover:border-[#14bc8b]/30 transition-colors duration-300">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0a0a0a] border border-[#2e2e2e] rounded-full flex items-center justify-center text-xs font-bold text-slate-400 shadow-md">2</div>
            <Target className="text-[#14bc8b] mb-4" size={28} />
            <div className="text-3xl font-bold text-white mb-1">0%</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-4">No deployment help</div>
            <p className="text-sm text-slate-400 leading-relaxed">But launching safely still required real engineering</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={cardFadeUp} className="relative bg-[#121212]/80 backdrop-blur-sm border border-[#2e2e2e] rounded-2xl p-8 pt-10 hover:border-[#14bc8b]/30 transition-colors duration-300">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0a0a0a] border border-[#2e2e2e] rounded-full flex items-center justify-center text-xs font-bold text-slate-400 shadow-md">3</div>
            <Zap className="text-[#14bc8b] mb-4" size={28} />
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-4">MVP Finishing</div>
            <p className="text-sm text-slate-400 leading-relaxed">So we created a new category</p>
          </motion.div>
        </motion.div>

        {/* --- 2-COLUMN COMPARISON CARDS (Simple Fade Up) --- */}
        <motion.div 
          variants={gridContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"
        >
          {/* Left Card */}
          <motion.div variants={cardFadeUp} className="bg-[#0a1410]/90 backdrop-blur-sm border border-[#14bc8b]/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(20,188,139,0.05)] hover:-translate-y-1 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold text-[#14bc8b] mb-3 tracking-tight">1000s</div>
            <div className="text-white font-bold text-lg mb-8">of founders could now build prototypes</div>
            <div className="flex flex-wrap gap-2">
              {['Lovable', 'Bolt', 'Cursor', 'v0'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full border border-[#14bc8b]/30 bg-[#14bc8b]/10 text-[#14bc8b] text-[11px] font-bold uppercase tracking-wider">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div variants={cardFadeUp} className="bg-[#1a0a0a]/90 backdrop-blur-sm border border-[#ff6e6e]/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,110,110,0.05)] hover:-translate-y-1 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold text-[#ff6e6e] mb-3 tracking-tight">0</div>
            <div className="text-white font-bold text-lg mb-8">could deploy them properly</div>
            <div className="flex flex-wrap gap-2">
              {['No CI/CD', 'No Auth', 'No Scale'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full border border-[#ff6e6e]/30 bg-[#ff6e6e]/10 text-[#ff6e6e] text-[11px] font-bold uppercase tracking-wider">{tag}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- BOTTOM QUOTE & BRANDING --- */}
        <motion.div 
          variants={gridContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
          className="text-center pb-12"
        >
          <motion.p variants={cardFadeUp} className="text-slate-500 text-sm mb-8">So we created a new category:</motion.p>
          
          <motion.div variants={cardFadeUp} className="flex justify-center items-center gap-4 mb-16 opacity-30 grayscale">
            <img src={logo} alt="logo" />
          </motion.div>

          <motion.p variants={cardFadeUp} className="text-xl md:text-2xl text-slate-500 italic font-light mb-8 max-w-4xl mx-auto">
            "The gap between prototype and production is where most AI projects die."
          </motion.p>
          
          <motion.p variants={cardFadeUp} className="text-slate-300 font-medium text-lg">
            We exist to close that gap. <span className="text-[#14bc8b] font-semibold">One MVP at a time.</span>
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}