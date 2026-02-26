// import { useEffect, useRef, useState } from 'react';
// import Aurora from './Aurora';
// import { ShieldCheck, Zap, Code2, Rocket, GitBranch, ArrowRight, Play } from 'lucide-react';
// import FormModal from './FormModal';
// import SolutionSection from './SolutionSection';

// export default function Hero({ onOpenForm }) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const badges = [
//     { icon: <ShieldCheck size={18} />, text: "Enterprise Security" },
//     { icon: <Zap size={18} />, text: "Fast Delivery" },
//     { icon: <Code2 size={18} />, text: "Clean Code" },
//     { icon: <Rocket size={18} />, text: "Production Ready" },
//     { icon: <GitBranch size={18} />, text: "Version Control" },
//   ];

//   const trackRef = useRef(null);
//   const containerRef = useRef(null);
//   const [centeredIndex, setCenteredIndex] = useState(null);
//   const animationRef = useRef(null);
//   const positionRef = useRef(0);

//   // Duplicated badges for infinite scroll
//   const allBadges = [...badges, ...badges, ...badges, ...badges];

//   useEffect(() => {
//     const track = trackRef.current;
//     const container = containerRef.current;
//     if (!track || !container) return;

//     const SPEED = 0.5; // px per frame
//     let itemWidth = 0;
//     let totalSingleWidth = 0;

//     const measureAndAnimate = () => {
//       const items = track.querySelectorAll('.badge-item');
//       if (items.length === 0) return;

//       // Measure a single set of badges width
//       const singleSetCount = badges.length;
//       let w = 0;
//       for (let i = 0; i < singleSetCount; i++) {
//         w += items[i].getBoundingClientRect().width;
//       }
//       // Add gap (gap-16 = 64px per gap, singleSetCount - 1 gaps in a set)
//       // We'll just measure from first to last item start for a set
//       const firstRect = items[0].getBoundingClientRect();
//       const lastRect = items[singleSetCount - 1].getBoundingClientRect();
//       totalSingleWidth = lastRect.right - firstRect.left + 64; // +64 for trailing gap

//       const animate = () => {
//         positionRef.current += SPEED;
//         if (positionRef.current >= totalSingleWidth) {
//           positionRef.current -= totalSingleWidth;
//         }
//         track.style.transform = `translateX(-${positionRef.current}px)`;

//         // Find which badge is closest to center
//         const containerRect = container.getBoundingClientRect();
//         const centerX = containerRect.left + containerRect.width / 2;

//         let closestIndex = 0;
//         let closestDist = Infinity;
//         const allItems = track.querySelectorAll('.badge-item');
//         allItems.forEach((item, i) => {
//           const rect = item.getBoundingClientRect();
//           const itemCenter = rect.left + rect.width / 2;
//           const dist = Math.abs(itemCenter - centerX);
//           if (dist < closestDist) {
//             closestDist = dist;
//             closestIndex = i;
//           }
//         });

//         setCenteredIndex(closestIndex);
//         animationRef.current = requestAnimationFrame(animate);
//       };

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     // Small delay to let DOM settle
//     const timer = setTimeout(measureAndAnimate, 100);
//     return () => {
//       clearTimeout(timer);
//       if (animationRef.current) cancelAnimationFrame(animationRef.current);
//     };
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
//       {/* Background Aurora */}
//       <div className="absolute inset-0 z-0 opacity-60">
//         <Aurora
//           colorStops={["#0a7052", "#14bc8b", "#000000"]}
//           blend={0.6}
//           amplitude={1.0}
//           speed={0.1}
//         />
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
//         <h1 className="text-5xl md:text-[72px] lg:text-[80px] font-semibold tracking-tight text-white mb-6 leading-[1.05]">
//           You've built it fast.<br />
//           <span className="text-[#14bc8b]">Now finish it right.</span>
//         </h1>
        
//         <p className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
//           You built fast with AI, no-code, or white-coding tools.<br className="hidden md:block" />
//           We transform fragile prototypes into <span className="text-white font-semibold">secure, deployable</span><br className="hidden md:block" />
//           <span className="text-white font-semibold">MVPs</span> ready for real users and investors.
//         </p>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//           <button onClick={onOpenForm} className="px-8 py-3.5 bg-[#14bc8b] hover:bg-[#10a378] text-white text-xl font-semibold rounded-lg transition-all flex items-center gap-2 group">
//             Finish my MVP <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//           </button>
//           <button className="px-8 py-3.5 bg-[#1a1a1a] border border-[#2e2e2e] hover:border-slate-500 text-white text-xl font-normal rounded-lg transition-all flex items-center gap-2">
//             <Play size={18} fill="currentColor" /> See how it works
//           </button>
//         </div>
//       </div>
//       <SolutionSection/>
//     </section>
//   );
// }

import { useState, useRef, useEffect, useCallback } from 'react';
import Aurora from './Aurora';
import { 
  ArrowRight, 
  Play, 
  XCircle, 
  Check,
  CheckSquare, 
  ChevronLeft, 
  ChevronRight, 
  Image as ImageIcon 
} from 'lucide-react';
import bffImg from '../assets/bff.png';
import affImg from '../assets/aff.png';
import starImg from '../assets/star.png';

export default function Hero({ onOpenForm }) {
  // --- COMPARISON SECTION DATA ---
  const badPractices = [
    "No deployment pipelines",
    "No architecture documentation",
    "No scalability planning"
  ];

  const goodPractices = [
    "Structured deployment pipelines",
    "Clear architecture documentation",
    "Scalability planning in place"
  ];

  // --- SLIDER STATE & LOGIC ---
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const onTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const stopDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', stopDragging);
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', stopDragging);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stopDragging);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging, onMouseMove, onTouchMove, stopDragging]);

  return (
    <section className="relative w-full pb-32 flex flex-col items-center justify-start overflow-hidden bg-[#0a0a0a]">
      
      {/* Background Aurora */}
      {/* Reduced height to 100vh or absolute top portion so it doesn't stretch down the whole page awkwardly */}
      <div className="absolute top-0 left-0 right-0 h-screen z-0 opacity-60 pointer-events-none">
        <Aurora
          colorStops={["#0a7052", "#14bc8b", "#000000"]}
          blend={0.6}
          amplitude={1.0}
          speed={0.1}
        />
      </div>

      {/* --- HERO CONTENT --- */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-40 mb-32">
        <h1 className="text-5xl md:text-[72px] lg:text-[80px] font-semibold tracking-tight text-white mb-6 leading-[1.05]">
          You've built it fast.<br />
          <span className="text-[#14bc8b]">Now finish it right.</span>
        </h1>
        
        <p className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          You built fast with AI, no-code, or white-coding tools.<br className="hidden md:block" />
          We transform fragile prototypes into <span className="text-white font-semibold">secure, deployable</span><br className="hidden md:block" />
          <span className="text-white font-semibold">MVPs</span> ready for real users and investors.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onOpenForm} className="px-8 py-3.5 bg-[#0A7052] hover:bg-[#10a378] text-white text-xl font-semibold rounded-lg transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(20,188,139,0.15)]">
            Finish my MVP <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-3.5 bg-[#1a1a1a] border border-[#2e2e2e] hover:border-slate-500 text-white text-xl font-normal rounded-lg transition-all flex items-center gap-2">
            <Play size={18} fill="currentColor" /> See how it works
          </button>
        </div>
      </div>

      {/* --- DASHBOARD COMPARISON SLIDER --- */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center mb-20">
        
        {/* Macbook Frame Container */}
        <div className="w-full bg-[#141414] border border-[#2e2e2e] rounded-xl flex flex-col relative shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Top Chrome Bar */}
          <div className="h-10 bg-[#1a1a1a] border-b border-[#2e2e2e] flex items-center px-4 justify-between relative z-20">
            {/* Window Dots */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            {/* Center Tab / Pill (Dynamic) */}
            <div className="absolute left-1/2 -translate-x-1/2 bg-[#0a0a0a] border border-[#2e2e2e] rounded-full px-6 py-1 text-[11px] font-medium transition-colors duration-300 w-44 text-center">
              {sliderPos >= 50 ?  (
                <span className="text-slate-400">Built with AI</span>
              ) : (
                <span className="text-[#14bc8b]">Finished by Engineers</span>
              )}
            </div>
          </div>

          {/* Slider Area */}
          <div 
            ref={containerRef}
            className="relative w-full aspect-[16/9] cursor-ew-resize select-none touch-none overflow-hidden"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            {/* BEFORE IMAGE (Left Side) */}
            <div 
              className="absolute inset-0 w-full h-full bg-[#1e1e1e]"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }} 
            >
              <img src={bffImg}  className="w-full h-full object-container pointer-events-none select-none" alt="Before" />
            </div>

            {/* AFTER IMAGE (Right Side) */}
            <div 
              className="absolute inset-0 w-full h-full bg-[#f8f9fa]"
              style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
            >
              <img src={affImg} className="w-full h-full object-conatiner pointer-events-none select-none" alt="After" />
            </div>

            {/* SLIDER DIVIDER LINE & HANDLE */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-black z-10"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
              {/* Handle Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#121212] border-2 border-white rounded-full flex items-center justify-center shadow-lg">
                <div className="flex items-center text-white gap-0.5">
                  <ChevronLeft size={14} strokeWidth={3} />
                  <ChevronRight size={14} strokeWidth={3} />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* V/S Badges */}
        <div className="flex items-center gap-6 mt-8">
          <span className="px-5 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-semibold tracking-wide">
            AI Demo
          </span>
          <span className="text-slate-500 text-sm font-bold tracking-widest">
            V/S
          </span>
          <span className="px-5 py-2 rounded-full border border-[#14bc8b]/30 bg-[#14bc8b]/10 text-[#14bc8b] text-xs font-semibold tracking-wide">
            Production Ready
          </span>
        </div>
      </div>

<div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        
        {/* 1. Heading is now OUTSIDE the grid */}
        <h2 className="text-center text-2xl md:text-3xl text-slate-400 mb-16 font-medium">
          Ship the production-ready version. <span className="text-white font-semibold">With us.</span>
        </h2>
      {/* --- COMPARISON TEXT & CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Card: AI Built (Negative) */}
          <div className="bg-[#121212] border border-[#2e2e2e] rounded-2xl p-8 md:p-10 flex flex-col">
            <h3 className="text-lg md:text-xl text-center text-slate-300 font-medium mb-10 leading-relaxed">
              Most AI-built products <span className="text-[#FF6E6E] font-bold">break<br />when real users arrive</span>
            </h3>
            
            <div className="space-y-4 mt-auto">
              {badPractices.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-[#0a0a0a] border border-white/5 rounded-xl">
                  {/* RED ICON WRAPPER */}
                  <div className="w-10 h-10 rounded-lg border border-[#FF6E6E]/20 bg-[#FF6E6E]/10 flex items-center justify-center flex-shrink-0">
                    <XCircle className="text-[#FF6E6E]" size={18} strokeWidth={2} />
                  </div>
                  <span className="text-slate-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card: Production Ready (Positive) */}
          <div className="bg-[#121212] border border-[#2e2e2e] rounded-2xl p-8 md:p-10 flex flex-col relative">
            
            {/* Floating Brand Star Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-2 rounded-full">
                <img className="w-8 h-8" src={starImg} alt="logo" />
            </div>

            <h3 className="text-lg md:text-xl text-center text-slate-300 font-medium mb-10 leading-relaxed mt-2">
              Production-ready products <span className="text-[#14bc8b] font-bold">scale<br />when real users arrive</span>
            </h3>
            
            <div className="space-y-4 mt-auto">
              {goodPractices.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-[#0a0a0a] border border-white/5 rounded-xl">
                  {/* GREEN ICON WRAPPER */}
                  <div className="w-10 h-10 rounded-lg border border-[#14bc8b]/20 bg-[#14bc8b]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="text-[#14bc8b]" size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
</div>
        </div>
    </section>
  );
}