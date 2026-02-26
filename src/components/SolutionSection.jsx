import { useState, useRef, useEffect, useCallback } from 'react';
import { XCircle, CheckSquare, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function SolutionSection() {
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
    <section className="bg-[#0a0a0a] py-5 px-6" id="solutions">
      <div className="max-w-5xl mx-auto">
        
        {/* --- TOP: DASHBOARD COMPARISON SLIDER --- */}
        <div className="w-full flex flex-col items-center mb-20">
          
          {/* Macbook Frame Container */}
          <div className="w-full max-w-5xl bg-[#141414] border border-[#2e2e2e] rounded-xl flex flex-col relative shadow-2xl overflow-hidden">
            
            {/* Top Chrome Bar */}
            <div className="h-10 bg-[#1a1a1a] border-b border-[#2e2e2e] flex items-center px-4 justify-between relative z-20">
              {/* Window Dots */}
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              {/* Center Tab / Pill */}
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
              
              {/* THE FIX: 
                1. Make both image containers absolute inset-0.
                2. Use clipPath on BOTH of them so they strictly respect the slider handle position.
                3. Ensure the inner img tags are w-full h-full object-cover.
              */}

              {/* BEFORE IMAGE (Left Side) */}
              <div 
                className="absolute inset-0 w-full h-full bg-[#1e1e1e]"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }} 
              >
                <img src="/src/assets/bff.png" className="w-full h-full object-container pointer-events-none select-none" alt="Before" />
              </div>

              {/* AFTER IMAGE (Right Side) */}
              <div 
                className="absolute inset-0 w-full h-full bg-[#f8f9fa]"
                style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
              >
                <img src="/src/assets/aff.png" className="w-full h-full object-container pointer-events-none select-none" alt="After" />
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

        {/* --- HEADLINE --- */}
        <h2 className="text-center text-2xl md:text-3xl text-slate-300 mb-16 font-medium">
          Ship the production-ready version. <span className="text-white font-bold">With us.</span>
        </h2>

        {/* --- COMPARISON CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Card: AI Built (Negative) */}
          <div className="bg-[#121212] border border-[#2e2e2e] rounded-2xl p-8 md:p-10 flex flex-col">
            <h3 className="text-lg md:text-xl text-center text-slate-300 font-medium mb-10 leading-relaxed">
              Most AI-built products <span className="text-[#FF6E6E] font-bold">break<br />when real users arrive</span>
            </h3>
            
            <div className="space-y-4 mt-auto">
              {badPractices.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-[#0a0a0a] border border-white/5 rounded-xl">
                  <XCircle className="text-[#FF6E6E] flex-shrink-0" size={20} />
                  <span className="text-slate-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card: Production Ready (Positive) */}
          <div className="bg-[#121212] border border-[#2e2e2e] rounded-2xl p-8 md:p-10 flex flex-col relative">
            
            {/* Floating Brand Star Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0a0a0a] p-2 rounded-full">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#14bc8b]">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </div>

            <h3 className="text-lg md:text-xl text-center text-slate-300 font-medium mb-10 leading-relaxed mt-2">
              Production-ready products <span className="text-[#14bc8b] font-bold">scale<br />when real users arrive</span>
            </h3>
            
            <div className="space-y-4 mt-auto">
              {goodPractices.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-[#0a0a0a] border border-white/5 rounded-xl">
                  <CheckSquare className="text-[#14bc8b] flex-shrink-0" size={20} />
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
 