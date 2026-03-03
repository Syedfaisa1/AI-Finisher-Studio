// import { useState } from 'react';
// import logo from '../assets/logo.png'; 
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

// // Notice the curly braces around { onOpenForm } here!
// export default function Navbar({ onOpenForm }) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   // 3. Helper to check if a link is active  
//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <nav className="fixed top-0 w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-[#2A2A2A]">
//         <div className="max-w-[1440px] mx-auto px-6 lg:px-8 h-18 flex items-center justify-between">
          
//           {/* --- DESKTOP LOGO SECTION --- */}
//           <div className="flex items-center">
//             <Link to="/" className="block w-32 md:w-35 flex-shrink-0">
//               <img 
//                 src={logo} 
//                 alt="AI Finisher Studio Logo" 
//                 className="w-full h-auto object-contain"
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden lg:flex items-center gap-10">
//             <Link to="/about" className="flex items-center gap-1 text-slate-400  font-medium hover:text-[#14bc8b] transition-colors">
//               About 
//             </Link>
//             <button className="flex items-center gap-1 text-slate-400 font-medium hover:text-[#14bc8b] transition-colors">
//               Solutions <ChevronDown className="w-4 h-4 text-slate-400" />
//             </button>
//             <a href="#pricing" className="text-slate-400 font-medium hover:text-[#14bc8b] transition-colors">Pricing</a>
//             <a href="#blog" className="text-slate-400 font-medium hover:text-[#14bc8b] transition-colors">Blog</a>
//           </div>

//           {/* Desktop CTA Button */}
//           <div className="hidden lg:block">
//             <button 
//               onClick={onOpenForm}
//               className="bg-[#0A7052] hover:bg-[#10a378] text-white px-6 py-2.5 rounded-md font-normal text-sm transition-all flex items-center gap-2 group"
//             >
//               Get Started
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>

//           {/* Mobile Hamburger Icon */}
//           <div className="lg:hidden flex items-center">
//             <button 
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="text-white focus:outline-none p-2 hover:text-[#14bc8b] transition-colors"
//             >
//               <Menu className="w-7 h-7" />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* --- MOBILE MENU OVERLAY --- */}
//       <div 
//         className={`fixed inset-0 z-[100] bg-[#1a1a1a] transition-transform duration-300 ease-in-out ${
//           isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div className="flex flex-col h-full">
//           {/* MOBILE MENU HEADER */}
//           <div className="flex items-center justify-between px-6 h-20 border-b border-[#2e2e2e]">
//               <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block w-36 flex-shrink-0">
//               <img 
//                 src={logo} 
//                 alt="AI Finisher Studio Logo" 
//                 className="w-full h-auto object-contain"
//               />
//             </Link>
//             <button 
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="text-slate-400 hover:text-white p-2 transition-colors"
//             >
//               <X className="w-7 h-7" />
//             </button>
//           </div>

//           {/* Mobile Menu Links */}
//           <div className="flex flex-col px-6 py-4 overflow-y-auto">
//             <Link 
//               to="/about"
//               onClick={() => setIsMobileMenuOpen(false)} 
//               className="py-4 text-white font-semibold border-b border-[#2e2e2e] flex justify-between items-center group"
//             >
//               About 
//             </Link>
//             <a href="#solutions" className="py-4 text-white font-semibold border-b border-[#2e2e2e] flex justify-between items-center group">
//               Solutions <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
//             </a>
//             <a href="#pricing" className="py-4 text-white font-semibold border-b border-[#2e2e2e] hover:text-[#14bc8b] transition-colors">
//               Pricing
//             </a>
//             <a href="#blog" className="py-4 text-white font-semibold border-b border-[#2e2e2e] hover:text-[#14bc8b] transition-colors">
//               Blog
//             </a>
//           </div>

//           {/* Mobile Menu Footer CTA */}
//           <div className="mt-auto p-6 bg-[#121212] border-t border-[#2e2e2e]">
//              <button 
//                onClick={() => {
//                  onOpenForm();
//                  setIsMobileMenuOpen(false); 
//                }}
//                className="w-full bg-[#14bc8b] hover:bg-[#10a378] text-[#121212] py-3.5 rounded-md font-bold text-[15px] transition-all flex items-center justify-center gap-2 group"
//              >
//               Finish my MVP
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useState } from 'react';
import logo from '../assets/logo.png'; 
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, ArrowRight, Rocket, Database, 
  Shield, Server, GitBranch, TrendingUp 
} from 'lucide-react';

const dropdownSolutions = [
  { 
    title: "MVP Finishing", 
    desc: "AI Prototype → Production MVP", 
    icon: <Rocket size={18} />, 
    path: "/solutions/mvp" 
  },
  { 
    title: "Backend Infrastructure", 
    desc: "Scalable backend architecture", 
    icon: <Database size={18} />, 
    path: "/solutions/backend" 
  },
  { 
    title: "Security & Compliance", 
    desc: "Enterprise-grade security", 
    icon: <Shield size={18} />, 
    path: "/solutions/security" 
  },
  { 
    title: "Deployment & DevOps", 
    desc: "Production deployment pipeline", 
    icon: <Server size={18} />, 
    path: "/solutions/deployment" 
  },
  { 
    title: "Code Quality", 
    desc: "Technical debt remediation", 
    icon: <GitBranch size={18}  />, 
    path: "/solutions/quality" 
  },
  { 
    title: "Scale Preparation", 
    desc: "Growth infrastructure", 
    icon: <TrendingUp size={18} />, 
    path: "/solutions/scale" 
  }
];

export default function Navbar({ onOpenForm }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center">
            <Link to="/" className="block w-32 md:w-40">
              <img src={logo} alt="Logo" className="w-full h-auto" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-[#14bc8b] ${
                isActive('/about') ? 'text-[#14bc8b]' : 'text-slate-400'
              }`}
            >
              About 
            </Link>

            {/* --- SOLUTIONS DROPDOWN TRIGGER --- */}
            <div 
              className="relative py-8"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                className={`flex items-center gap-1.5 font-medium transition-colors hover:text-[#14bc8b] outline-none ${
                  isActive('/solutions') ? 'text-[#14bc8b]' : 'text-slate-400'
                }`}
              >
                Solutions 
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* --- ACTUAL DROPDOWN MENU --- */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[640px] transition-all duration-300 ${
                isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 mt-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {dropdownSolutions.map((item, idx) => (
                      <Link 
                        key={idx} 
                        to={item.path}
                        className="group flex items-start gap-4 p-2 rounded-xl hover:bg-white/[0.03] transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-[#14bc8b] group-hover:border-[#14bc8b]/30 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-white font-semibold text-[15px] mb-0.5 group-hover:text-[#14bc8b] transition-colors">
                            {item.title}
                          </p>
                          <p className="text-slate-500 text-[12px] leading-tight">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex justify-center">
                    <Link 
                      to="/solutions" 
                      className="text-[#14bc8b] text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      View All Solutions <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <a href="#pricing" className="text-slate-400 font-medium hover:text-[#14bc8b] transition-colors">Pricing</a>
             <Link 
              to="/blog" 
              className={`font-medium transition-colors hover:text-[#14bc8b] ${
                isActive('/blog') ? 'text-[#14bc8b]' : 'text-slate-400'
              }`}
            >
              Blog 
            </Link>
          </div>

          <div className="hidden lg:block">
            <button 
              onClick={onOpenForm}
              className="bg-[#14bc8b] hover:bg-[#10a378] text-[#0a0a0a] px-6 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-white p-2">
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-[100] bg-[#0a0a0a] transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
            <img src={logo} alt="Logo" className="w-32 h-auto" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col px-6 py-4 overflow-y-auto">
            <Link 
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-4 text-white font-semibold border-b border-white/5"
            >
              About 
            </Link>

            {/* --- MOBILE ACCORDION DROPDOWN --- */}
            <div className="border-b border-white/5">
              <button 
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="w-full py-4 text-white font-semibold flex justify-between items-center group"
              >
                Solutions 
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${isMobileDropdownOpen ? 'max-h-[600px] mb-4' : 'max-h-0'}`}>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  {dropdownSolutions.map((item, idx) => (
                    <Link 
                      key={idx} 
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] active:bg-white/[0.05]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-[#14bc8b] border border-white/5">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{item.title}</p>
                        <p className="text-slate-500 text-[11px]">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <a href="#pricing" className="py-4 text-white font-semibold border-b border-white/5">Pricing</a>
          <Link 
  to="/blog" 
  onClick={() => setIsMobileMenuOpen(false)}
  className="py-4 text-white font-semibold border-b border-white/5"
>
  Blog
</Link>
          </div>

          {/* Mobile CTA */}
          <div className="mt-auto p-6 bg-[#0d0d0d] border-t border-white/5">
             <button 
               onClick={() => { onOpenForm(); setIsMobileMenuOpen(false); }}
               className="w-full bg-[#14bc8b] text-[#0a0a0a] py-4 rounded-xl font-bold flex items-center justify-center gap-2"
             >
               Get Started
               <ArrowRight className="w-5 h-5" />
             </button>
          </div>
        </div>
      </div>
    </>
  );
}