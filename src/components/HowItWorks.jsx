// import { Code, Users, Briefcase, Building2 } from 'lucide-react';

// export default function HowItWorks() {
//   const profiles = [
//     {
//       icon: <Code size={20} className="text-[#14bc8b]" />,
//       title: "AI-first founders",
//       description: "You built with Cursor, v0, Bolt, or Claude — now you need production infrastructure.",
//       tags: ["Cursor", "v0", "Bolt", "Claude"]
//     },
//     {
//       icon: <Users size={20} className="text-[#14bc8b]" />,
//       title: "Indie hackers",
//       description: "You shipped fast, got traction, and now need real engineering to scale.",
//       tags: ["Product Hunt", "Twitter", "Reddit"]
//     },
//     {
//       icon: <Briefcase size={20} className="text-[#14bc8b]" />,
//       title: "Startup teams",
//       description: "You validated the idea, raised pre-seed, and need a deployable MVP fast.",
//       tags: ["Pre-seed", "Seed", "Series A"]
//     },
//     {
//       icon: <Building2 size={20} className="text-[#14bc8b]" />,
//       title: "Agencies",
//       description: "You design and prototype — we handle the backend engineering and deployment.",
//       tags: ["Design", "Prototype", "Handoff"]
//     }
//   ];

//   return (
//     <section className="relative w-full bg-[#0a0a0a] py-32 px-6 overflow-hidden z-0">
      
//       {/* --- BACKGROUND EFFECTS --- */}
//       {/* 1. Top Center Green Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#14bc8b]/15 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      
//       {/* 2. Giant Faded Star Logo on the right */}
//       <div className="absolute top-1/2 -translate-y-1/2 -right-[400px] w-[1000px] h-[1000px] opacity-[0.03] text-[#14bc8b] pointer-events-none z-[-1]">
//         <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
//           {/* Matches the 4-point star shape of your logo */}
//           <img src="/src/assets/star.png" alt="logo" />
//         </svg>
//       </div>

//       <div className="max-w-5xl mx-auto relative z-10">
        
//         {/* --- HEADLINE --- */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
//             Built with AI?<br />
//             <span className="text-[#14bc8b]">You're in the right place.</span>
//           </h2>
//           <p className="text-slate-400 text-sm md:text-base">
//             Choose your profile
//           </p>
//         </div>

//         {/* --- 2x2 CARDS GRID --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-20">
//           {profiles.map((profile, idx) => (
//             <div 
//               key={idx} 
//               className="relative bg-[#121212] border border-[#2e2e2e] rounded-2xl pt-10 pb-8 px-8 flex flex-col hover:border-[#14bc8b]/30 transition-colors duration-300"
//             >
              
//               {/* Floating Icon Box (Overlapping Top Border) */}
//               <div className="absolute -top-6 left-8 w-12 h-12 bg-[#0a0a0a] border border-[#14bc8b]/30 rounded-xl flex items-center justify-center shadow-lg">
//                 {profile.icon}
//               </div>

//               {/* Card Content */}
//               <h3 className="text-white font-bold text-xl mb-3">
//                 {profile.title}
//               </h3>
//               <p className="text-slate-400 text-[15px] leading-relaxed mb-8 flex-grow">
//                 {profile.description}
//               </p>

//               {/* Tags/Pills */}
//               <div className="flex flex-wrap gap-2">
//                 {profile.tags.map((tag, tagIdx) => (
//                   <span 
//                     key={tagIdx} 
//                     className="px-4 py-1.5 rounded-full border border-white/10 bg-black/40 text-slate-300 text-xs font-medium"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

import { Code, Users, Briefcase, Building2 } from 'lucide-react';
// 1. Import your star image directly
import starLogo from '../assets/star.png';

export default function HowItWorks() {
  const profiles = [
    {
      icon: <Code size={20} className="text-[#14bc8b]" />,
      title: "AI-first founders",
      description: "You built with Cursor, v0, Bolt, or Claude — now you need production infrastructure.",
      tags: ["Cursor", "v0", "Bolt", "Claude"]
    },
    {
      icon: <Users size={20} className="text-[#14bc8b]" />,
      title: "Indie hackers",
      description: "You shipped fast, got traction, and now need real engineering to scale.",
      tags: ["Product Hunt", "Twitter", "Reddit"]
    },
    {
      icon: <Briefcase size={20} className="text-[#14bc8b]" />,
      title: "Startup teams",
      description: "You validated the idea, raised pre-seed, and need a deployable MVP fast.",
      tags: ["Pre-seed", "Seed", "Series A"]
    },
    {
      icon: <Building2 size={20} className="text-[#14bc8b]" />,
      title: "Agencies",
      description: "You design and prototype — we handle the backend engineering and deployment.",
      tags: ["Design", "Prototype", "Handoff"]
    }
  ];

  return (
    <section className="relative w-full bg-[#121212] py-32 px-6 overflow-hidden z-0">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* 1. Top Center Green Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#14bc8b]/15 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      
      {/* 2. Giant Faded Star Logo on the right */}
      {/* FIXED: Removed the SVG wrapper and used the imported image properly */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-[100px] w-[1000px] h-[1000px] opacity-[0.03] pointer-events-none z-[-1]">
        <img src={starLogo} alt="Background Logo" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* --- HEADLINE --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Built with AI?<br />
            <span className="text-[#14bc8b]">You're in the right place.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Choose your profile
          </p>
        </div>

        {/* --- 2x2 CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-20">
          {profiles.map((profile, idx) => (
            <div 
              key={idx} 
              className="relative bg-[#121212] border border-[#2e2e2e] rounded-2xl pt-10 pb-8 px-8 flex flex-col hover:border-[#14bc8b]/30 transition-colors duration-300"
            >
              
              {/* Floating Icon Box (Overlapping Top Border) */}
              {/* FIXED: Changed left-8 to left-6 to move it slightly left, matching Figma */}
              <div className="absolute -top-6 left-6 w-14 h-14 bg-[#0a0a0a] border border-[#14bc8b]/30 rounded-2xl flex items-center justify-center shadow-lg">
                {profile.icon}
              </div>

              {/* Card Content */}
              <h3 className="text-white font-bold text-xl mb-3 mt-2">
                {profile.title}
              </h3>
              <p className="text-slate-400 text-[15px] leading-relaxed mb-8 flex-grow">
                {profile.description}
              </p>

              {/* Tags/Pills */}
              <div className="flex flex-wrap gap-2">
                {profile.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx} 
                    className="px-4 py-1.5 rounded-full border border-white/10 bg-black/40 text-slate-300 text-xs font-medium"
                  >
                    {tag}
                  </span> 
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}