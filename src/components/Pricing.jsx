// // import { CheckCircle2 } from 'lucide-react';

// // export default function Pricing() {
// //   const tiers = [
// //     {
// //       name: "Starter",
// //       price: "$997",
// //       description: "Perfect for early prototypes.",
// //       features: [
// //         "Architecture review",
// //         "Technical roadmap",
// //         "MVP readiness assessment",
// //         "Email support"
// //       ],
// //       buttonText: "Get Started",
// //       isPopular: false
// //     },
// //     {
// //       name: "Build",
// //       price: "$1,997",
// //       description: "Turn your prototype into a deployable product.",
// //       features: [
// //         "Backend stabilization",
// //         "Auth & security baseline",
// //         "Deployment pipeline",
// //         "Documentation pack",
// //         "Priority support",
// //         "3 weeks delivery"
// //       ],
// //       buttonText: "Start Building",
// //       isPopular: true
// //     },
// //     {
// //       name: "Investor Ready",
// //       price: "$3,997+",
// //       description: "For founders preparing for scale or funding.",
// //       features: [
// //         "Everything in Build",
// //         "Scalability planning",
// //         "Compliance starter framework",
// //         "Architecture diagrams",
// //         "Investor technical brief",
// //         "Dedicated engineer"
// //       ],
// //       buttonText: "Go Investor Ready",
// //       isPopular: false
// //     }
// //   ];

// //   return (
// //     <section className="bg-[#0a0a0a] py-32 px-6" id="pricing">
// //       <div className="max-w-6xl mx-auto">
        
// //         {/* --- HEADLINE --- */}
// //         <div className="text-center mb-20">
// //           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
// //             Choose your <span className="text-[#14bc8b]">launch path.</span>
// //           </h2>
// //           <p className="text-slate-400 text-sm md:text-base">
// //             Select the level that fits where you are today.
// //           </p>
// //         </div>

// //         {/* --- PRICING GRID --- */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
// //           {tiers.map((tier, idx) => (
// //             <div 
// //               key={idx} 
// //               className={`relative flex flex-col p-8 rounded-2xl ${
// //                 tier.isPopular 
// //                   ? 'bg-[#121212] border-2 border-[#14bc8b] transform md:-translate-y-4 shadow-2xl z-10' 
// //                   : 'bg-[#121212] border border-[#2e2e2e]'
// //               }`}
// //             >
              
// //               {/* Floating "Most Popular" Badge */}
// //               {tier.isPopular && (
// //                 <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#14bc8b] text-[#0a0a0a] px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
// //                   Most Popular
// //                 </div>
// //               )}

// //               {/* Tier Header */}
// //               <div className="mb-8">
// //                 <h3 className="text-white font-bold text-xl mb-2">{tier.name}</h3>
// //                 <div className="text-4xl font-bold text-white mb-4">{tier.price}</div>
// //                 <p className="text-slate-400 text-sm h-10">{tier.description}</p>
// //               </div>

// //               {/* Features List */}
// //               <div className="flex-grow space-y-4 mb-10">
// //                 {tier.features.map((feature, i) => (
// //                   <div key={i} className="flex items-center gap-3">
// //                     <CheckCircle2 
// //                       size={18} 
// //                       className={tier.isPopular ? "text-[#14bc8b]" : "text-slate-600"} 
// //                     />
// //                     <span className="text-slate-300 text-sm">{feature}</span>
// //                   </div>
// //                 ))}
// //               </div>

// //               {/* CTA Button */}
// //               <button 
// //                 className={`w-full py-3.5 rounded-lg font-bold text-sm transition-all duration-300 ${
// //                   tier.isPopular 
// //                     ? 'bg-[#14bc8b] hover:bg-[#10a378] text-[#0a0a0a] shadow-[0_0_20px_rgba(20,188,139,0.3)]' 
// //                     : 'bg-transparent border border-[#2e2e2e] hover:border-slate-500 text-white'
// //                 }`}
// //               >
// //                 {tier.buttonText}
// //               </button>

// //             </div>
// //           ))}
// //         </div>

// //         {/* --- FOOTER NOTE --- */}
// //         <div className="text-center mt-12">
// //           <p className="text-slate-500 text-sm">
// //             All packages include full ownership transfer and no vendor lock-in.
// //           </p>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// import { useState } from 'react';
// import { CheckCircle2 } from 'lucide-react';
// import { motion } from 'framer-motion';

// export default function Pricing() {
//   // Track which card is hovered to move the "lighted" effect
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const tiers = [
//     {
//       name: "Starter",
//       price: "$997",
//       description: "Perfect for early prototypes.",
//       features: ["Architecture review", "Technical roadmap", "MVP assessment", "Email support"],
//       buttonText: "Get Started",
//       isPopular: false
//     },
//     {
//       name: "Build",
//       price: "$1,997",
//       description: "Turn your prototype into a deployable product.",
//       features: ["Backend stabilization", "Auth & security", "Deployment pipeline", "Documentation", "Priority support", "3 weeks delivery"],
//       buttonText: "Start Building",
//       isPopular: true
//     },
//     {
//       name: "Investor Ready",
//       price: "$3,997+",
//       description: "For founders preparing for scale or funding.",
//       features: ["Everything in Build", "Scalability planning", "Compliance starter", "Architecture diagrams", "Investor technical brief", "Dedicated engineer"],
//       buttonText: "Go Investor Ready",
//       isPopular: false
//     }
//   ];

//   return (
//     <section className="bg-[#0a0a0a] py-32 px-6" id="pricing">
//       <div className="max-w-6xl mx-auto">
        
//         {/* --- HEADLINE --- */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
//             Choose your <span className="text-[#14bc8b]">launch path.</span>
//           </h2>
//           <p className="text-slate-400 text-sm md:text-base">
//             Select the level that fits where you are today.
//           </p>
//         </div>

//         {/* --- PRICING GRID --- */}
//         {/* Removed 'items-center' to allow cards to stretch to equal height */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           {tiers.map((tier, idx) => {
//             const isHighlighted = hoveredIndex === idx || (hoveredIndex === null && tier.isPopular);

//             return (
//               <motion.div 
//                 key={idx}
//                 onMouseEnter={() => setHoveredIndex(idx)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 // Added h-full here
//                 className="h-full z-10"
//                 animate={{ scale: isHighlighted ? 1.05 : 1, y: isHighlighted ? -10 : 0 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               >
//                 <div 
//                   // Added h-full and flex-col to ensure content is spaced evenly
//                   className={`relative flex flex-col h-full p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
//                     isHighlighted 
//                       ? 'bg-[#121212] border-2 border-[#14bc8b] shadow-[0_0_40px_rgba(20,188,139,0.15)]' 
//                       : 'bg-[#121212] border border-white/5 shadow-none'
//                   }`}
//                   style={{
//                     background: isHighlighted 
//                       ? 'linear-gradient(180deg, rgba(20, 188, 139, 0.08) 0%, rgba(18, 18, 18, 1) 100%)' 
//                       : '#121212'
//                   }}
//                 >
//                   {/* Floating "Most Popular" Badge */}
//                   {tier.isPopular && (
//                     <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 ${
//                       isHighlighted ? 'bg-[#14bc8b] text-[#0a0a0a]' : 'bg-[#1e1e1e] text-slate-400'
//                     }`}>
//                       Most Popular
//                     </div>
//                   )}

//                   {/* Tier Header */}
//                   <div className="mb-8">
//                     <h3 className={`font-bold text-xl mb-2 transition-colors ${isHighlighted ? 'text-[#14bc8b]' : 'text-white'}`}>
//                       {tier.name}
//                     </h3>
//                     <div className="text-4xl font-bold text-white mb-4 tracking-tight">{tier.price}</div>
//                     <p className="text-slate-400 text-sm leading-relaxed">{tier.description}</p>
//                   </div>

//                   {/* Features List - 'flex-grow' ensures the button stays at the bottom */}
//                   <div className="flex-grow space-y-4 mb-10">
//                     {tier.features.map((feature, i) => (
//                       <div key={i} className="flex items-start gap-3">
//                         <CheckCircle2 
//                           size={18} 
//                           className={`mt-0.5 flex-shrink-0 transition-colors ${isHighlighted ? "text-[#14bc8b]" : "text-slate-600"}`} 
//                         />
//                         <span className="text-slate-300 text-sm leading-tight">{feature}</span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* CTA Button */}
//                   <button 
//                     className={`w-full py-4 mt-auto rounded-xl font-bold text-sm transition-all duration-300 ${
//                       isHighlighted 
//                         ? 'bg-[#14bc8b] text-[#0a0a0a] shadow-[0_10px_20px_rgba(20,188,139,0.3)]' 
//                         : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
//                     }`}
//                   >
//                     {tier.buttonText}
//                   </button>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* --- FOOTER NOTE --- */}
//         <div className="text-center mt-16">
//           <p className="text-slate-500 text-xs tracking-wide">
//             All packages include full ownership transfer and no vendor lock-in.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // NEW: State to track which card is officially selected via click
  const [selectedTier, setSelectedTier] = useState(1); // Default to "Build" (index 1)

  const tiers = [
    {
      name: "Starter",
      price: "$997",
      description: "Perfect for early prototypes.",
      features: ["Architecture review", "Technical roadmap", "MVP assessment", "Email support"],
      buttonText: "Get Started",
      isPopular: false
    },
    {
      name: "Build",
      price: "$1,997",
      description: "Turn your prototype into a deployable product.",
      features: ["Backend stabilization", "Auth & security", "Deployment pipeline", "Documentation", "Priority support", "3 weeks delivery"],
      buttonText: "Start Building",
      isPopular: true
    },
    {
      name: "Investor Ready",
      price: "$3,997+",
      description: "For founders preparing for scale or funding.",
      features: ["Everything in Build", "Scalability planning", "Compliance starter", "Architecture diagrams", "Investor technical brief", "Dedicated engineer"],
      buttonText: "Go Investor Ready",
      isPopular: false
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-32 px-6" id="pricing">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Choose your <span className="text-[#14bc8b]">launch path.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Select the level that fits where you are today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, idx) => {
            // Logic: Highlight if hovered OR if it's the selected tier
            const isHighlighted = hoveredIndex === idx || (hoveredIndex === null && selectedTier === idx);

            return (
              <motion.div 
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                // NEW: Update selection on click
                onClick={() => setSelectedTier(idx)}
                className="h-full z-10"
                animate={{ 
                  scale: isHighlighted ? 1.05 : 1, 
                  y: isHighlighted ? -10 : 0 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div 
                  className={`relative flex flex-col h-full p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
                    isHighlighted 
                      ? 'bg-[#121212] border-2 border-[#14bc8b] shadow-[0_0_40px_rgba(20,188,139,0.15)]' 
                      : 'bg-[#121212] border border-white/5 shadow-none opacity-60 hover:opacity-100'
                  }`}
                  style={{
                    background: isHighlighted 
                      ? 'linear-gradient(180deg, rgba(20, 188, 139, 0.08) 0%, rgba(18, 18, 18, 1) 100%)' 
                      : '#121212'
                  }}
                >
                  {/* Floating Badge - Now glows green if highlighted */}
                  {(tier.isPopular || isHighlighted) && (
                    <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                      isHighlighted ? 'bg-[#14bc8b] text-[#0a0a0a]' : 'bg-[#1e1e1e] text-slate-400'
                    }`}>
                      {tier.isPopular ? "Most Popular" : "Selected"}
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className={`font-bold text-xl mb-2 transition-colors ${isHighlighted ? 'text-[#14bc8b]' : 'text-white'}`}>
                      {tier.name}
                    </h3>
                    <div className="text-4xl font-bold text-white mb-4 tracking-tight">{tier.price}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{tier.description}</p>
                  </div>

                  <div className="flex-grow space-y-4 mb-10">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 
                          size={18} 
                          className={`mt-0.5 flex-shrink-0 transition-colors ${isHighlighted ? "text-[#14bc8b]" : "text-slate-600"}`} 
                        />
                        <span className="text-slate-300 text-sm leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    className={`w-full py-4 mt-auto rounded-xl font-bold text-sm transition-all duration-300 ${
                      isHighlighted 
                        ? 'bg-[#14bc8b] text-[#0a0a0a] shadow-[0_10px_20px_rgba(20,188,139,0.3)]' 
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    {tier.buttonText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}