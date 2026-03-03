// import React from 'react';
// import { Search, Clock, Calendar, ArrowRight, Tag } from 'lucide-react';

// const categories = [
//   "All Posts", "MVP Development", "Technical Debt", "Security", "Best Practices", "Infrastructure", "Founder Stories"
// ];

// const articles = [
//   {
//     category: "Technical Debt",
//     date: "Feb 28, 2026",
//     readTime: "6 min",
//     title: "The Hidden Costs of \"Ship Fast\" Culture in SaaS",
//     desc: "Technical debt compounds faster than you think. Learn how rushed MVPs create maintenance nightmares.",
//     author: "Tameem",
//     image: "/api/placeholder/400/250"
//   },
//   {
//     category: "Security",
//     date: "Feb 25, 2026",
//     readTime: "10 min",
//     title: "Security First: Why Your No-Code Backend Isn't Investor-Ready",
//     desc: "Enterprise customers demand SOC 2 and GDPR. Here's what no-code tools leave out.",
//     author: "Tameem",
//     image: "/api/placeholder/400/250"
//   },
//   {
//     category: "Best Practices",
//     date: "Feb 22, 2026",
//     readTime: "7 min",
//     title: "Code Review Checklist: What VCs Look For",
//     desc: "Due diligence kills deals. Make sure your MVP can pass technical scrutiny from investors.",
//     author: "Tameem",
//     image: "/api/placeholder/400/250"
//   }
// ];

// export default function BlogPage() {
//   return (
//     <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#14bc8b]/30">
      
//       {/* --- HEADER SECTION: Reduced padding from pt-32 to pt-24 --- */}
//       <section className="pt-24 pb-12 px-6 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Engineering Insights</h1>
//         <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
//           Real-world lessons from turning fragile prototypes into production-ready MVPs
//         </p>
        
//         {/* Search Bar: Reduced py-4 to py-3 */}
//         <div className="mt-8 max-w-lg mx-auto relative group">
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#14bc8b]" size={18} />
//           <input 
//             type="text" 
//             placeholder="Search articles..." 
//             className="w-full bg-[#111111] border border-white/5 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#14bc8b]/40 transition-all"
//           />
//         </div>

//         {/* Categories Chips: Smaller text and padding */}
//         <div className="mt-8 flex flex-wrap justify-center gap-2">
//           {categories.map((cat, i) => (
//             <button key={i} className={`px-4 py-1.5 rounded-lg text-[11px] font-medium border transition-all ${i === 0 ? 'bg-[#14bc8b] border-[#14bc8b] text-[#050505]' : 'bg-[#111111] border-white/5 text-gray-400 hover:border-white/20'}`}>
//               {cat}
//             </button>
//           ))}
//         </div>
//       </section>

//       <section className="max-w-6xl mx-auto px-6 pb-20">
//         {/* --- FEATURED ARTICLE: Reduced scale and gap --- */}
//         <div className="mb-16 group cursor-pointer">
//           <div className="relative overflow-hidden rounded-[20px] bg-[#111111] border border-white/5 flex flex-col md:flex-row items-center gap-6 p-2">
//             <div className="w-full md:w-[45%] h-64 md:h-[350px] overflow-hidden rounded-[16px]">
//               <img src="/api/placeholder/800/600" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
//             </div>
//             <div className="w-full md:w-[55%] pr-6 py-4 md:py-0">
//               <div className="flex items-center gap-3 mb-4">
//                 <span className="text-[#14bc8b] text-[10px] font-bold uppercase tracking-widest">Featured</span>
//                 <span className="flex items-center gap-1.5 text-gray-500 text-[11px]"><Clock size={12} /> 8 min read</span>
//               </div>
//               <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-[#14bc8b] transition-colors">From AI Prototype to Production</h2>
//               <p className="text-gray-400 text-sm mb-6 leading-relaxed">How to bridge the gap between "demo magic" and deployable software.</p>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2.5">
//                   <div className="w-8 h-8 rounded-full bg-[#14bc8b] flex items-center justify-center text-[#050505] text-[10px] font-bold">TM</div>
//                   <div>
//                     <p className="text-xs font-semibold">Tameem</p>
//                     <p className="text-[10px] text-gray-600">Mar 1, 2026</p>
//                   </div>
//                 </div>
//                 <span className="text-[#14bc8b] text-xs font-bold flex items-center gap-1.5">Read <ArrowRight size={14} /></span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* --- ARTICLE GRID: Tighter padding and margins --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {articles.map((post, i) => (
//             <div key={i} className="group bg-[#111111] border border-white/5 rounded-[20px] p-1.5 flex flex-col hover:border-[#14bc8b]/20 transition-all">
//               <div className="relative h-48 overflow-hidden rounded-[16px] mb-4">
//                 <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                 <span className="absolute bottom-3 left-3 bg-[#14bc8b] text-[#050505] px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-wider">{post.category}</span>
//               </div>
//               <div className="px-3 pb-4 flex flex-col flex-grow">
//                 <div className="flex items-center gap-3 mb-3 text-gray-500 text-[10px]">
//                   <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
//                   <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
//                 </div>
//                 <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-[#14bc8b] transition-colors">{post.title}</h3>
//                 <p className="text-gray-500 text-[13px] leading-relaxed mb-6 line-clamp-2">{post.desc}</p>
//                 <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
//                   <div className="flex items-center gap-2">
//                     <div className="w-7 h-7 rounded-full bg-[#14bc8b]/10 flex items-center justify-center text-[#14bc8b] text-[9px] font-bold">TM</div>
//                     <span className="text-[10px] font-medium text-gray-400">{post.author}</span>
//                   </div>
//                   <ArrowRight size={16} className="text-gray-700 group-hover:text-[#14bc8b] transition-colors" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- NEWSLETTER SECTION: More compact container --- */}
//       <section className="max-w-3xl mx-auto px-6 pb-24">
//         <div className="bg-[#111111] border border-white/5 rounded-[24px] p-10 text-center relative overflow-hidden">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#14bc8b]/5 blur-[60px] rounded-full pointer-events-none" />
//           <h2 className="text-2xl md:text-3xl font-bold mb-3">Engineering Insights</h2>
//           <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">Join 2,500+ founders turning prototypes into production-ready MVPs.</p>
//           <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
//             <input 
//               type="email" 
//               placeholder="Email address" 
//               className="flex-grow bg-[#050505] border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#14bc8b]/40"
//             />
//             <button className="bg-[#14bc8b] hover:bg-[#10a378] text-[#050505] font-bold px-6 py-2.5 rounded-lg text-sm transition-all">
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }
import React from 'react';
import { 
  Search, Clock, Calendar, ArrowRight, Tag, 
  TrendingUp, Rocket, Code2, Shield, Lightbulb, Activity, User 
} from 'lucide-react';
import Aurora from '../../components/Aurora';

// 1. Updated categories with matching Figma icons
const categories = [
  { name: "All Posts", icon: <TrendingUp size={14} /> },
  { name: "MVP Development", icon: <Rocket size={14} /> },
  { name: "Technical Debt", icon: <Code2 size={14} /> },
  { name: "Security", icon: <Shield size={14} /> },
  { name: "Best Practices", icon: <Lightbulb size={14} /> },
  { name: "Infrastructure", icon: <Activity size={14} /> },
  { name: "Founder Stories", icon: <User size={14} /> }
];

const articles = [
  {
    category: "Technical Debt",
    date: "Feb 28, 2026",
    readTime: "6 min",
    title: "The Hidden Costs of \"Ship Fast\" Culture in SaaS",
    desc: "Technical debt compounds faster than you think. Learn how rushed MVPs create maintenance nightmares.",
    author: "Tameem",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
  },
  {
    category: "Security",
    date: "Feb 25, 2026",
    readTime: "10 min",
    title: "Security First: Why Your No-Code Backend Isn't Investor-Ready",
    desc: "Enterprise customers demand SOC 2 and GDPR. Here's what no-code tools leave out.",
    author: "Tameem",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400"
  },
  {
    category: "Best Practices",
    date: "Feb 22, 2026",
    readTime: "7 min",
    title: "Code Review Checklist: What VCs Look For",
    desc: "Due diligence kills deals. Make sure your MVP can pass technical scrutiny from investors.",
    author: "Tameem",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400"
  },
  {
    category: "Best Practices",
    date: "Feb 22, 2026",
    readTime: "7 min",
    title: "Code Review Checklist: What VCs Look For",
    desc: "Due diligence kills deals. Make sure your MVP can pass technical scrutiny from investors.",
    author: "Tameem",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400"
  },
  {
    category: "Best Practices",
    date: "Feb 22, 2026",
    readTime: "7 min",
    title: "Code Review Checklist: What VCs Look For",
    desc: "Due diligence kills deals. Make sure your MVP can pass technical scrutiny from investors.",
    author: "Tameem",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400"
  }
];

export default function BlogPage() {
  return (
    <div className="bg-[#0a0a0a] mt-20 min-h-screen text-white font-sans selection:bg-[#14bc8b]/30 relative overflow-hidden">
      
      {/* --- BACKGROUND AURORA: High Amplitude for Figma Glow --- */}
      <div className="absolute inset-0 z-000 opacity-40 pointer-events-none scale-110">
        <Aurora
          colorStops={["#0a7052", "#14bc8b", "#000000"]}
          blend={0.6}
          amplitude={1.4} 
          speed={0.12}
        />
      </div>
      {/* --- HEADER SECTION --- */}
      <section className="pt-24 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 t tracking-tight">Engineering Insights</h1>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Real-world lessons from turning fragile prototypes into production-ready MVPs
        </p>
        
        {/* Search Bar */}
        <div className="mt-8 max-w-lg mx-auto relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#14bc8b]" size={18} />
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full bg-[#111111] border border-white/5 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#14bc8b]/40 transition-all placeholder:text-gray-700"
          />
        </div>

        {/* 2. Categories Chips with Icons */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat, i) => (
            <button 
              key={i} 
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-[11px] font-medium border transition-all ${
                i === 0 
                ? 'bg-[#14bc8b] border-[#14bc8b] text-[#050505]' 
                : 'bg-[#111111] border-white/5 text-gray-400 hover:border-white/20 hover:text-white'
              }`}
            >
              <span className={i === 0 ? 'text-[#050505]' : 'text-gray-500'}>
                {cat.icon}
              </span>
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        {/* --- FEATURED ARTICLE --- */}
        <div className="mb-16 group cursor-pointer">
          <div className="relative overflow-hidden rounded-[20px] bg-[#111111] border border-white/5 flex flex-col md:flex-row items-center gap-6 p-2">
            <div className="w-full md:w-[45%] h-64 md:h-[350px] overflow-hidden rounded-[16px]">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
                alt="Featured" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="w-full md:w-[55%] pr-6 py-4 md:py-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center gap-1 bg-[#14bc8b]/10 text-[#14bc8b] px-2 py-1 rounded text-[9px] font-bold uppercase tracking-widest">
                  <TrendingUp size={10} /> MVP Development
                </span>
                <span className="flex items-center gap-1.5 text-gray-500 text-[11px]"><Clock size={12} /> 8 min read</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-[#14bc8b] transition-colors">From AI Prototype to Production</h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">How to bridge the gap between "demo magic" and deployable software.</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#14bc8b] flex items-center justify-center text-[#050505] text-[10px] font-bold">TM</div>
                  <div>
                    <p className="text-xs font-semibold">Tameem</p>
                    <p className="text-[10px] text-gray-600">Mar 1, 2026</p>
                  </div>
                </div>
                <span className="text-[#14bc8b] text-xs font-bold flex items-center gap-1.5 hover:underline">Read Article <ArrowRight size={14} /></span>
              </div>
            </div>
          </div>
        </div>

        {/* --- ARTICLE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((post, i) => (
            <div key={i} className="group bg-[#111111] border border-white/5 rounded-[20px] p-1.5 flex flex-col hover:border-[#14bc8b]/20 transition-all">
              <div className="relative h-48 overflow-hidden rounded-[16px] mb-4">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute bottom-3 left-3 bg-[#14bc8b] text-[#050505] px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-wider">{post.category}</span>
              </div>
              <div className="px-3 pb-4 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3 text-gray-500 text-[10px]">
                  <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-[#14bc8b] transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-6 line-clamp-2">{post.desc}</p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#14bc8b]/20 flex items-center justify-center text-[#14bc8b] text-[9px] font-bold">TM</div>
                    <span className="text-[10px] font-medium text-gray-400">{post.author}</span>
                  </div>
                  <ArrowRight size={16} className="text-gray-700 group-hover:text-[#14bc8b] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-[#111111] border border-white/5 rounded-[24px] p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#14bc8b]/5 blur-[60px] rounded-full pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Get Engineering Insights in Your Inbox</h2>
          <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">Join 2,500+ founders turning prototypes into production-ready MVPs.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-grow bg-[#050505] border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#14bc8b]/40 placeholder:text-gray-800"
            />
            <button className="bg-[#14bc8b] hover:bg-[#10a378] text-[#050505] font-bold px-6 py-2.5 rounded-lg text-sm transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
