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
import { Link, useLocation } from 'react-router-dom'; // 1. Added useLocation
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenForm }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // 2. Initialize location

  // 3. Helper to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-[#2A2A2A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 h-18 flex items-center justify-between">
          
          <div className="flex items-center">
            <Link to="/" className="block w-32 md:w-35 flex-shrink-0">
              <img 
                src={logo} 
                alt="AI Finisher Studio Logo" 
                className="w-full h-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {/* 4. Applied dynamic green color if active */}
            <Link 
              to="/about" 
              className={`flex items-center gap-1 font-medium transition-colors hover:text-[#14bc8b] ${
                isActive('/about') ? 'text-[#14bc8b]' : 'text-slate-400'
              }`}
            >
              About 
            </Link>
            <button className="flex items-center gap-1 text-slate-400 font-medium hover:text-[#14bc8b] transition-colors">
              Solutions <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            <a href="#pricing" className="text-slate-400 font-medium hover:text-[#14bc8b] transition-colors">Pricing</a>
            <a href="#blog" className="text-slate-400 font-medium hover:text-[#14bc8b] transition-colors">Blog</a>
          </div>

          <div className="hidden lg:block">
            <button 
              onClick={onOpenForm}
              className="bg-[#0A7052] hover:bg-[#10a378] text-white px-6 py-2.5 rounded-md font-normal text-sm transition-all flex items-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white focus:outline-none p-2 hover:text-[#14bc8b] transition-colors"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#1a1a1a] transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 h-20 border-b border-[#2e2e2e]">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block w-36 flex-shrink-0">
              <img 
                src={logo} 
                alt="AI Finisher Studio Logo" 
                className="w-full h-auto object-contain"
              />
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-400 hover:text-white p-2 transition-colors"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex flex-col px-6 py-4 overflow-y-auto">
            {/* 5. Applied dynamic green color for mobile link if active */}
            <Link 
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)} 
              className={`py-4 font-semibold border-b border-[#2e2e2e] flex justify-between items-center group transition-colors ${
                isActive('/about') ? 'text-[#14bc8b]' : 'text-white'
              }`}
            >
              About 
            </Link>
            <a href="#solutions" className="py-4 text-white font-semibold border-b border-[#2e2e2e] flex justify-between items-center group">
              Solutions <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
            </a>
            <a href="#pricing" className="py-4 text-white font-semibold border-b border-[#2e2e2e] hover:text-[#14bc8b] transition-colors">
              Pricing
            </a>
            <a href="#blog" className="py-4 text-white font-semibold border-b border-[#2e2e2e] hover:text-[#14bc8b] transition-colors">
              Blog
            </a>
          </div>

          <div className="mt-auto p-6 bg-[#121212] border-t border-[#2e2e2e]">
             <button 
               onClick={() => {
                 onOpenForm();
                 setIsMobileMenuOpen(false); 
               }}
               className="w-full bg-[#14bc8b] hover:bg-[#10a378] text-[#121212] py-3.5 rounded-md font-bold text-[15px] transition-all flex items-center justify-center gap-2 group"
             >
               Finish my MVP
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </>
  );
}