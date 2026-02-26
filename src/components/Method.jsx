// // import { Search, Wrench, Rocket } from 'lucide-react';

// // export default function Method() {
// //   const steps = [
// //     {
// //       number: "1",
// //       icon: <Search size={22} className="text-[#14bc8b]" />,
// //       title: "Audit",
// //       description: "We analyze your prototype, stack, and risks."
// //     },
// //     {
// //       number: "2",
// //       icon: <Wrench size={22} className="text-[#14bc8b]" />,
// //       title: "Stabilize",
// //       description: "We reinforce backend logic, authentication, and performance."
// //     },
// //     {
// //       number: "3",
// //       icon: <Rocket size={22} className="text-[#14bc8b]" />,
// //       title: "Deploy",
// //       description: "Your MVP goes live with real infrastructure."
// //     }
// //   ];

// //   return (
// //     <section className="bg-[#0a0a0a] py-32 px-6">
// //       <div className="max-w-5xl mx-auto">
        
// //         {/* --- HEADLINE --- */}
// //         <div className="text-center mb-24">
// //           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
// //             Our Method
// //           </h2>
// //           <p className="text-slate-400 text-sm md:text-base">
// //             A proven 3-step system designed for AI founders.
// //           </p>
// //         </div>

// //         {/* --- 3-STEP PROCESS GRID --- */}
// //         <div className="relative">
          
// //           {/* Connecting Line (Hidden on mobile, visible on desktop) */}
// //           <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-[#2e2e2e] -translate-y-1/2 z-0" />

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
// //             {steps.map((step, idx) => (
// //               <div 
// //                 key={idx} 
// //                 className="relative bg-[#121212] border border-[#2e2e2e] rounded-2xl p-8 pt-10 hover:border-[#14bc8b]/30 transition-colors duration-300 shadow-xl"
// //               >
                
// //                 {/* Floating Number Badge */}
// //                 <div className="absolute -top-5 left-6 w-10 h-10 bg-[#0a0a0a] border border-[#2e2e2e] rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md">
// //                   {step.number}
// //                 </div>

// //                 {/* Green Icon Box */}
// //                 <div className="w-12 h-12 rounded-xl bg-[#14bc8b]/10 border border-[#14bc8b]/20 flex items-center justify-center mb-6">
// //                   {step.icon}
// //                 </div>

// //                 {/* Content */}
// //                 <h3 className="text-white font-bold text-xl mb-3">
// //                   {step.title}
// //                 </h3>
// //                 <p className="text-slate-400 text-[14px] leading-relaxed">
// //                   {step.description}
// //                 </p>

// //               </div>
// //             ))}
// //           </div>
          
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// import { Search, Wrench, Rocket } from 'lucide-react';
// import { useRef, useState } from 'react';

// // --- CUSTOM SPOTLIGHT CARD COMPONENT ---
// function SpotlightCard({ children, className = "", style = {} }) {
//   const cardRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   const handleMouseMove = (e) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     setMousePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   return (
//     <div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//       // Added an extra wrapper class here to ensure the animation doesn't fight with other hover transforms
//       className={`relative ${className}`}
//       style={style}
//     >
//       {/* The Spotlight Glow Layer */}
//       <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden z-0">
//         <div
//           className="absolute inset-0 transition-opacity duration-500 ease-out"
//           style={{
//             opacity: isHovering ? 1 : 0,
//             background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, #132D25, transparent 40%)`,
//           }}
//         />
//       </div>

//       {/* Card Content */}
//       <div className="relative z-10 h-full">
//         {children}
//       </div>
//     </div>
//   );
// }

// // --- MAIN METHOD SECTION ---
// export default function Method() {
//   const steps = [
//     {
//       number: "1",
//       icon: <Search size={22} className="text-[#14bc8b]" />,
//       title: "Audit",
//       description: "We analyze your prototype, stack, and risks."
//     },
//     {
//       number: "2",
//       icon: <Wrench size={22} className="text-[#14bc8b]" />,
//       title: "Stabilize",
//       description: "We reinforce backend logic, authentication, and performance."
//     },
//     {
//       number: "3",
//       icon: <Rocket size={22} className="text-[#14bc8b]" />,
//       title: "Deploy",
//       description: "Your MVP goes live with real infrastructure."
//     }
//   ];

//   return (
//     <section className="bg-[#0a0a0a] py-32 px-6">
      
//       {/* CUSTOM ANIMATION STYLES */}
//       <style>
//         {`
//           @keyframes breathe {
//             0%, 100% { transform: translateY(0) scale(1); }
//             50% { transform: translateY(-4px) scale(1.02); }
//           }
//           .animate-breathe {
//             animation: breathe 4s ease-in-out infinite;
//           }
//           /* Optional: pause the breathing loop when hovering so the user can read it easily */
//           .animate-breathe:hover {
//             animation-play-state: paused;
//           }
//         `}
//       </style>

//       <div className="max-w-5xl mx-auto">
        
//         {/* --- HEADLINE --- */}
//         <div className="text-center mb-24">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
//             Our Method
//           </h2>
//           <p className="text-slate-400 text-sm md:text-base">
//             A proven 3-step system designed for AI founders.
//           </p>
//         </div>

//         {/* --- 3-STEP PROCESS GRID --- */}
//         <div className="relative">
          
//           {/* Connecting Line (Hidden on mobile, visible on desktop) */}
//           <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-[#2e2e2e] -translate-y-1/2 z-0" />

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
//             {steps.map((step, idx) => (
//               <SpotlightCard 
//                 key={idx} 
//                 // Added "animate-breathe" to trigger our custom keyframes
//                 className="animate-breathe bg-[#121212] border border-[#2e2e2e] rounded-2xl p-8 pt-10 hover:border-[#14bc8b]/40 hover:shadow-[0_0_30px_rgba(20,188,139,0.1)] transition-all duration-300 shadow-xl"
//                 // This staggers the animation (Card 1 starts immediately, Card 2 starts 1s later, etc.)
//                 style={{ animationDelay: `${idx * 1.2}s` }}
//               >
                
//                 {/* Floating Number Badge */}
//                 <div className="absolute -top-5 left-6 w-10 h-10 bg-[#0a0a0a] border border-[#2e2e2e] rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md">
//                   {step.number}
//                 </div>

//                 {/* Green Icon Box */}
//                 <div className="w-12 h-12 rounded-xl bg-[#14bc8b]/10 border border-[#14bc8b]/20 flex items-center justify-center mb-6">
//                   {step.icon}
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-white font-bold text-xl mb-3">
//                   {step.title}
//                 </h3>
//                 <p className="text-slate-400 text-[14px] leading-relaxed">
//                   {step.description}
//                 </p>

//               </SpotlightCard>
//             ))}
//           </div>
          
//         </div>

//       </div>
//     </section>
//   );
// }

import { Search, Wrench, Rocket } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

// --- CUSTOM SPOTLIGHT CARD COMPONENT ---
function SpotlightCard({ children, className = "", onMouseEnter, onMouseLeave }) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={(e) => {
        setIsHovering(true);
        if (onMouseEnter) onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        setIsHovering(false);
        if (onMouseLeave) onMouseLeave(e);
      }}
      className={`relative h-full ${className}`}
    >
      {/* The Spotlight Glow Layer */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden z-0">
        <div
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 188, 139, 0.08), transparent 40%)`,
          }}
        />
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </div>
  );
}

// --- MAIN METHOD SECTION ---
export default function Method() {
  const steps = [
    {
      number: "1",
      icon: <Search size={22} className="text-[#14bc8b]" />,
      title: "Audit",
      description: "We analyze your prototype, stack, and risks."
    },
    {
      number: "2",
      icon: <Wrench size={22} className="text-[#14bc8b]" />,
      title: "Stabilize",
      description: "We reinforce backend logic, authentication, and performance."
    },
    {
      number: "3",
      icon: <Rocket size={22} className="text-[#14bc8b]" />,
      title: "Deploy",
      description: "Your MVP goes live with real infrastructure."
    }
  ];

  // --- LOOP ANIMATION LOGIC ---
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    // Changes the highlighted card every 2 seconds
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  return (
    <section className="bg-[#0a0a0a] py-32 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* --- HEADLINE --- */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Our Method
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            A proven 3-step system designed for AI founders.
          </p>
        </div>

        {/* --- 3-STEP PROCESS GRID --- */}
        <div className="relative">
          
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-[#2e2e2e] -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div key={idx} className="relative h-full">
                  
                  {/* 1. FLOATING NUMBER BADGE - Outside the card to stay on top of the border */}
                  <div 
                    className={`absolute -top-5 left-6 w-10 h-10 bg-[#0a0a0a] border rounded-xl flex items-center justify-center font-bold text-sm shadow-md transition-all duration-[1500ms] ease-in-out z-30 ${
                      isActive 
                        ? "border-[#14bc8b]/40 text-[#14bc8b] -translate-y-2 scale-[1.03]" 
                        : "border-[#2e2e2e] text-white translate-y-0 scale-100"
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* 2. SPOTLIGHT CARD */}
                  <SpotlightCard 
                    onMouseEnter={() => {
                      setActiveIndex(idx);
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => setIsPaused(false)}
                    className={`bg-[#121212] border rounded-2xl p-8 pt-10 will-change-transform transition-all duration-[1500ms] ease-in-out ${
                      isActive 
                        ? "scale-[1.03] -translate-y-2 border-[#14bc8b]/40 shadow-[0_15px_40px_-10px_rgba(20,188,139,0.2)] z-20" 
                        : "scale-100 translate-y-0 border-[#2e2e2e] shadow-none z-10"
                    }`}
                  >
                    {/* Green Icon Box */}
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 transition-colors duration-[1500ms] ease-in-out ${
                      isActive ? "bg-[#14bc8b]/15 border-[#14bc8b]/30" : "bg-[#14bc8b]/5 border-[#14bc8b]/10"
                    }`}>
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-white font-bold text-xl mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-[14px] leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </SpotlightCard>

                </div>
              );
            })}
          </div>
          
        </div>

      </div>
    </section>
  );
}