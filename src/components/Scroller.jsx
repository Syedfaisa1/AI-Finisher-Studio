import { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Zap, Code2, Rocket, GitBranch } from 'lucide-react';

export default function Scroller() {
  const badges = [
    { icon: <ShieldCheck size={18} />, text: "Enterprise Security" },
    { icon: <Zap size={18} />, text: "Fast Delivery" },
    { icon: <Code2 size={18} />, text: "Clean Code" },
    { icon: <Rocket size={18} />, text: "Production Ready" },
    { icon: <GitBranch size={18} />, text: "Version Control" },
  ];

  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [centeredIndex, setCenteredIndex] = useState(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  // Duplicated badges for infinite scroll
  const allBadges = [...badges, ...badges, ...badges, ...badges];

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const SPEED = 0.5; // px per frame
    let itemWidth = 0;
    let totalSingleWidth = 0;

    const measureAndAnimate = () => {
      const items = track.querySelectorAll('.badge-item');
      if (items.length === 0) return;

      // Measure a single set of badges width
      const singleSetCount = badges.length;
      let w = 0;
      for (let i = 0; i < singleSetCount; i++) {
        w += items[i].getBoundingClientRect().width;
      }
      
      // Add gap (gap-16 = 64px per gap)
      const firstRect = items[0].getBoundingClientRect();
      const lastRect = items[singleSetCount - 1].getBoundingClientRect();
      totalSingleWidth = lastRect.right - firstRect.left + 64; // +64 for trailing gap

      const animate = () => {
        positionRef.current += SPEED;
        if (positionRef.current >= totalSingleWidth) {
          positionRef.current -= totalSingleWidth;
        }
        track.style.transform = `translateX(-${positionRef.current}px)`;

        // Find which badge is closest to center
        const containerRect = container.getBoundingClientRect();
        const centerX = containerRect.left + containerRect.width / 2;

        let closestIndex = 0;
        let closestDist = Infinity;
        const allItems = track.querySelectorAll('.badge-item');
        allItems.forEach((item, i) => {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.left + rect.width / 2;
          const dist = Math.abs(itemCenter - centerX);
          if (dist < closestDist) {
            closestDist = dist;
            closestIndex = i;
          }
        });

        setCenteredIndex(closestIndex);
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    // Small delay to let DOM settle
    const timer = setTimeout(measureAndAnimate, 100);
    return () => {
      clearTimeout(timer);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // return (
  //   <div className="relative z-10 w-full mt-5 flex flex-col items-center">
  //     <div className="text-[12px] uppercase tracking-[0.3em] text-center text-slate-600 font-bold mb-8">
  //       Real Engineers. Real Deployments.
  //     </div>

  //     <div className="relative bg-[#131212] w-full max-w-5xl border-y border-white/5 py-10 overflow-hidden">
  //       {/* Fade edges */}
  //       <div
  //         className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
  //         style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }}
  //       />
  //       <div
  //         className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
  //         style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }}
  //       />

  //       {/* Center highlight indicator line */}
  //       <div
  //         className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px z-20 pointer-events-none"
  //       //   style={{ background: 'linear-gradient(to bottom, transparent, #14bc8b44, transparent)' }}
  //       />

  //       <div ref={containerRef} className="w-full p-3 overflow-hidden">
  //         <div
  //           ref={trackRef}
  //           className="flex gap-16 items-center whitespace-nowrap will-change-transform"
  //           style={{ width: 'max-content' }}
  //         >
  //           {allBadges.map((badge, index) => {
  //             const isHighlighted = centeredIndex === index;
  //             return (
  //               <div
  //                 key={index}
  //                 className="badge-item flex items-center gap-3 transition-all duration-300"
  //                 style={{
  //                   color: isHighlighted ? '#ffffff' : '#4b5563',
  //                   opacity: isHighlighted ? 1 : 0.45,
  //                   transform: isHighlighted ? 'scale(1.1)' : 'scale(1)',
  //                   fontWeight: isHighlighted ? '700' : '400',
  //                 }}
  //               >
  //                 <span style={{ color: isHighlighted ? '#14bc8b' : 'inherit' }}>
  //                   {badge.icon}
  //                 </span>
  //                 <span className="text-xl tracking-wide">{badge.text}</span>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="relative z-10 w-full mt-12 flex flex-col items-center">
      
      {/* Container holding BOTH the scroller and the heading */}
      <div className="relative bg-[#0d0d0d] w-full  border-y border-[#2e2e2e] pt-12 pb-8 overflow-hidden flex flex-col items-center">
        
        {/* Fade edges to create the vignette effect over the icons */}
        <div
          className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0d0d0d 10%, transparent 100%)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0d0d0d 10%, transparent 100%)' }}
        />

        {/* Scrolling Track Area */}
        <div ref={containerRef} className="w-full max-w-5xl overflow-hidden relative z-0">
          <div
            ref={trackRef}
            className="flex gap-16 items-center whitespace-nowrap will-change-transform"
            style={{ width: 'max-content' }}
          >
            {allBadges.map((badge, index) => {
              const isHighlighted = centeredIndex === index;
              return (
                <div
                  key={index}
                  className="badge-item flex items-center gap-3 transition-all duration-500 ease-out"
                  style={{
                    color: isHighlighted ? '#ffffff' : '#4b5563',
                    opacity: isHighlighted ? 1 : 0.35, // Dropped opacity of side items slightly to make the center pop more
                    transform: isHighlighted ? 'scale(1.15)' : 'scale(1)',
                    fontWeight: isHighlighted ? '600' : '400',
                  }}
                >
                  <span style={{ color: isHighlighted ? '#14bc8b' : 'inherit', transition: 'color 0.5s' }}>
                    {badge.icon}
                  </span>
                  <span className="text-xl tracking-wide">{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Refined Heading placed inside the container below the icons */}
        <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500 font-bold mt-12 relative z-20">
          Real Engineers. Real Deployments.
        </div>

      </div>
    </div>
  );

}