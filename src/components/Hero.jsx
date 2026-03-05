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
import { motion } from 'framer-motion';
import Aurora from './Aurora';
import webVideo from '../assets/web.mp4';
import mobileVideo from '../assets/mobile.mp4'; 
import { 
  ArrowRight, 
  Play, 
  XCircle, 
  Check,
  X,
  CheckSquare, 
  ChevronLeft, 
  ChevronRight, 
  Image as ImageIcon 
} from 'lucide-react';


import bffImg from '../assets/bff.png';
import affImg from '../assets/aff.png';
import starImg from '../assets/star.png';

// --- CARD ANIMATION ---
const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariant = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -60 : 60,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
});

const listItemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delays each word by 0.1s
    }
  }
};

const wordVariants = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    filter: "blur(8px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

export default function Hero({ onOpenForm }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const headingText = "You've built it fast.  Now finish it right.";
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
       <motion.h1 
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="text-5xl md:text-[72px] lg:text-[80px] font-semibold tracking-tight text-white mb-6 leading-[1.1]"
>
  {/* First Line */}
  <div className="block">
    {"You've built it fast.".split(" ").map((word, i) => (
      <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
        {word}
      </motion.span>
    ))}
  </div>

  {/* Second Line - Colored Green to match Figma */}
  <div className="block text-[#14bc8b]">
    {"Now finish it right.".split(" ").map((word, i) => (
      <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
        {word}
      </motion.span>
    ))}
  </div>
</motion.h1>
        
        <motion.p 
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="text-base md:text-lg text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-normal"
>
  {/* Line 1: AI/No-code Context */}
  <span className="block">
    {"You built fast with AI, no-code, or white-coding tools.".split(" ").map((word, i) => (
      <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">{word}</motion.span>
    ))}
  </span>

  {/* Line 2: The Transformation Layer */}
  <span className="block">
    {"We transform fragile prototypes into ".split(" ").map((word, i) => (
      <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">{word}</motion.span>
    ))}
    <motion.span variants={wordVariants} className="text-white font-semibold inline-block">
      secure, deployable
    </motion.span>
  </span>

  {/* Line 3: Starting exactly from MVPs per your request */}
  <span className="block">
    <motion.span variants={wordVariants} className="text-white font-semibold inline-block mr-[0.25em]">
      MVPs
    </motion.span>
    {"ready for real users and investors.".split(" ").map((word, i) => (
      <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">{word}</motion.span>
    ))}
  </span>
</motion.p>

        {/* FIX: Buttons now have the motion.div wrapper with variants applied */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={onOpenForm} className="px-8 py-3.5 bg-[#0A7052] hover:bg-[#10a378] cursor-pointer text-white text-xl font-semibold rounded-lg transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(20,188,139,0.15)]">
            Finish my MVP <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => setIsVideoOpen(true)} className="px-8 py-3.5 bg-[#1a1a1a] border border-[#2e2e2e] hover:border-slate-500 text-white text-xl font-normal rounded-lg transition-all flex items-center gap-2">
            <Play size={18} fill="currentColor" /> See how it works
          </button>
        </motion.div>
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

{/* ================= COMPARISON SECTION ================= */}

<div className="relative z-10 w-full max-w-4xl mx-auto px-6">

  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center text-2xl md:text-3xl text-slate-400 mb-16 font-medium"
  >
    Ship the production-ready version.{" "}
    <span className="text-white font-semibold">With us.</span>
  </motion.h2>

  {/* Grid */}
  <motion.div
    variants={cardContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8"
  >

    {/* ================= LEFT CARD ================= */}
    <motion.div
      variants={cardVariant("left")}
      className="bg-[#121212] border border-[#2e2e2e] rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-[#FF6E6E]/40 hover:shadow-[0_0_30px_rgba(255,110,110,0.15)]"
    >
      <h3 className="text-lg md:text-xl text-center text-slate-300 font-medium mb-10 leading-relaxed">
        Most AI-built products{" "}
        <span className="text-[#FF6E6E] font-bold">
          break<br />when real users arrive
        </span>
      </h3>

      <div className="space-y-4 mt-auto">
        {badPractices.map((item, idx) => (
          <motion.div
            key={idx}
            variants={listItemVariant}
            className="flex items-center gap-4 p-4 bg-[#0a0a0a] border border-white/5 rounded-xl"
          >
            <div className="w-10 h-10 rounded-lg border border-[#FF6E6E]/20 bg-[#FF6E6E]/10 flex items-center justify-center flex-shrink-0">
              
              {/* Animated X Icon */}
              <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
              >
                <XCircle
                  className="text-[#FF6E6E]"
                  size={18}
                  strokeWidth={2}
                />
              </motion.div>

            </div>
            <span className="text-slate-400 text-sm">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* ================= RIGHT CARD ================= */}
    <motion.div
      variants={cardVariant("right")}
      className="bg-[#121212] border border-[#2e2e2e] rounded-2xl p-8 md:p-10 flex flex-col relative transition-all duration-300 hover:-translate-y-2 hover:border-[#14bc8b]/40 hover:shadow-[0_0_30px_rgba(20,188,139,0.15)]"
    >

      {/* Floating Star */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 p-2 rounded-full"
      >
        <img className="w-8 h-8" src={starImg} alt="logo" />
      </motion.div>

      <h3 className="text-lg md:text-xl text-center text-slate-300 font-medium mb-10 leading-relaxed mt-2">
        Production-ready products{" "}
        <span className="text-[#14bc8b] font-bold">
          scale<br />when real users arrive
        </span>
      </h3>

      <div className="space-y-4 mt-auto">
        {goodPractices.map((item, idx) => (
          <motion.div
            key={idx}
            variants={listItemVariant}
            className="flex items-center gap-4 p-4 bg-[#0a0a0a] border border-white/5 rounded-xl"
          >
            <div className="w-10 h-10 rounded-lg border border-[#14bc8b]/20 bg-[#14bc8b]/10 flex items-center justify-center flex-shrink-0">
              
              {/* Animated Check Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: idx * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <Check
                  className="text-[#14bc8b]"
                  size={20}
                  strokeWidth={2.5}
                />
              </motion.div>

            </div>
            <span className="text-slate-300 text-sm font-medium">
              {item}
            </span>
          </motion.div>
        ))}
      </div>

    </motion.div>

  </motion.div>
</div>

{/* --- VIDEO MODAL --- */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-5xl aspect-video bg-[#111] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(20,188,139,0.2)]"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-50 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-all border border-white/10 cursor-pointer"
            >
              <X size={24} />
            </button>

          {/* --- VIDEO MODAL --- */}
{isVideoOpen && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10">
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      /* On mobile, the container becomes narrower (max-w-sm) to fit 
         the vertical video properly without huge black bars. 
      */
      className="relative w-full max-w-sm md:max-w-5xl aspect-[9/16] md:aspect-video bg-[#111] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(20,188,139,0.2)]"
    >
      {/* Close Button */}
      <button 
        onClick={() => setIsVideoOpen(false)}
        className="absolute top-6 right-6 z-50 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-all border border-white/10 cursor-pointer"
      >
        <X size={24} />
      </button>

      {/* DYNAMIC VIDEO PLAYER */}
      <video 
        autoPlay 
        muted 
        playsInline 
        controls 
        className="w-full h-full object-contain"
      >
        {/* Desktop users get widescreen web.mp4 */}
        <source src={webVideo} media="(min-width: 768px)" type="video/mp4" /> 
        
        {/* Mobile users get vertical mobile.mp4 */}
        <source src={mobileVideo} type="video/mp4" /> 
        
        Your browser does not support the video tag.
      </video>
    </motion.div>
  </div>
)}
          </motion.div>
        </div>
      )}
    </section>
  );
}