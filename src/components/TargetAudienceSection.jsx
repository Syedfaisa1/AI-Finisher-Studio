import { Server, Rocket, ShieldAlert, ArrowRight } from 'lucide-react';

export default function TargetAudienceSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* --- HEADLINE --- */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-16 leading-tight">
          If this sounds familiar...<br />
          <span className="text-[#14bc8b]">you’re exactly who we help.</span>
        </h2>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Fragile Backend */}
          <div className="bg-[#141414] border border-[#2e2e2e] rounded-2xl p-8 flex flex-col hover:border-red-500/30 transition-colors duration-300">
            {/* Icon Box */}
            <div className="w-12 h-12 rounded-lg border border-red-500/20 bg-red-500/5 flex items-center justify-center mb-6">
              <Server className="text-red-500" size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-white font-bold text-lg mb-3">
              Your backend feels fragile
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your app works in testing but struggles under real load.
            </p>
          </div>

          {/* Card 2: Deployment Issues */}
          <div className="bg-[#141414] border border-[#2e2e2e] rounded-2xl p-8 flex flex-col hover:border-orange-500/30 transition-colors duration-300">
            {/* Icon Box */}
            <div className="w-12 h-12 rounded-lg border border-orange-500/20 bg-orange-500/5 flex items-center justify-center mb-6">
              <Rocket className="text-orange-500" size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-white font-bold text-lg mb-3">
              You don't know how to deploy
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Hosting, environments, CI/CD, everything feels unclear.
            </p>
          </div>

          {/* Card 3: Investor Questions */}
          <div className="bg-[#141414] border border-[#2e2e2e] rounded-2xl p-8 flex flex-col hover:border-yellow-500/30 transition-colors duration-300">
            {/* Icon Box */}
            <div className="w-12 h-12 rounded-lg border border-yellow-500/20 bg-yellow-500/5 flex items-center justify-center mb-6">
              <ShieldAlert className="text-yellow-500" size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-white font-bold text-lg mb-3">
              Investors ask technical questions
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Architecture, scalability, security... and you don't have answers yet.
            </p>
          </div>

        </div>

        {/* --- BOTTOM CTA BAR --- */}
       <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-lg md:text-xl text-slate-400 font-medium text-center sm:text-left">
            Endless demos... <span className="text-[#FF6E6E]">and no real launch</span>
          </p>
          
          <button className="bg-[#14bc8b] hover:bg-[#10a378] text-[#121212] px-6 py-3 rounded-md font-bold text-sm transition-all flex items-center gap-2 group">
            Get Started
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}