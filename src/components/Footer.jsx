import { ArrowRight, CalendarDays } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-32 pb-8 px-6 relative overflow-hidden">
      
      {/* --- TOP CTA GREEN GLOW --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#14bc8b]/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- TOP CTA SECTION --- */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Ready to finish your MVP?
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-10">
            Move from fragile prototype to production-ready product with real engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#0A7052] hover:bg-[#10a378] text-white font-normal rounded-lg transition-all flex items-center justify-center gap-2 group">
              Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#36363680] border border-[#2e2e2e] hover:border-slate-500 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2">
              <CalendarDays size={18} className="text-slate-400" /> Book Strategy Call
            </button>
          </div>
        </div>

        {/* --- MAIN DIVIDER --- */}
        <div className="w-full h-[1px] bg-[#2e2e2e] mb-16" />

        {/* --- LINKS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-20">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-normal text-sm mb-2">Services</h4>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Backend Stabilization</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Deployment Pipelines</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Security Hardening</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Architecture Audit</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-normal text-sm mb-2">About</h4>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">About AI Finisher</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Blog</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Case Studies</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-normal text-sm mb-2">Company</h4>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Careers</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Partners</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Press</a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-normal text-sm mb-2">Resources</h4>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">MVP Readiness Score</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Documentation Guide</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Support Center</a>
          </div>

          {/* Column 5: Socials */}
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <h4 className="text-white font-normal text-sm mb-2">Socials</h4>
            <div className="flex items-center gap-3">
              {/* YouTube */}
              <a href="#" className="w-10 h-10 bg-[#121212] border border-[#2e2e2e] rounded-full flex items-center justify-center hover:border-[#14bc8b] hover:text-[#14bc8b] text-slate-200 transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* Discord */}
              <a href="#" className="w-10 h-10 bg-[#121212] border border-[#2e2e2e] rounded-full flex items-center justify-center hover:border-[#14bc8b] hover:text-[#14bc8b] text-slate-200 transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="#" className="w-10 h-10 bg-[#121212] border border-[#2e2e2e] rounded-full flex items-center justify-center hover:border-[#14bc8b] hover:text-[#14bc8b] text-slate-200 transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* --- BRAND INFO --- */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <img className='w-35' src={logo} alt="logo"/>
          </div>
          <p className="text-slate-300 font-semibold text-sm">Serious engineering for AI-built MVPs.</p>
          <p className="text-slate-500 text-sm mt-1">Finish what AI started.</p>
        </div>

        {/* --- BOTTOM LEGAL BAR --- */}
        <div className="w-full h-[1px] bg-[#2e2e2e] mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © 2026 AI Finisher Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate-600 text-xs">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}