import { Layers, HardDrive, FileText, Bug, ShieldAlert } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-3 py-3 text-[10px] font-bold tracking-[0.2em] text-white-500 uppercase rounded-xl bg-white/5">
            The Problem
          </span>
          {/* <h2 className="text-4xl md:text-4xl font-semibold text-white mt-6">
            You’ve built it in days. Now you’re <span className="relative">stuck<span className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 rounded-full text-"></span></span> at launch.
          </h2> */}
          <h2 className="text-4xl md:text-5xl font-semibold text-white mt-6 leading-tight">
  You’ve built it in days. Now you’re{" "}
  <span className="relative inline-block">
    stuck
  <svg
  className="absolute -bottom-1 left-0 w-full h-4 text-[#FF6E6E] filter drop-shadow-[0_0_2px_rgba(239,68,68,0.4)]"
  viewBox="0 0 100 25"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5 20 Q 50 -5 95 20"
    stroke="currentColor"
    strokeWidth="5"
    strokeLinecap="round"
  />
</svg>
  </span>{" "}
  at launch.
</h2>

          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            Most AI-built apps never make it past the demo stage.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Featured Large Card: Fragile Backend */}
          <div className="md:col-span-2 bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl p-8 flex flex-col md:flex-row justify-between gap-8">
            <div className="max-w-sm">
              <div className="flex items-center gap-3 text-white font-bold mb-4">
                <Layers className="text-slate-400" size={20} />
                <span>Fragile Backend</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                AI-generated code breaks under real load. <span className="text-white font-bold">No error handling, no edge cases, no resilience.</span>
              </p>
              
              {/* Error Code Snippets */}
              <div className="space-y-2">
                <div className="px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded text-[10px] text-red-400 font-mono">
                  ✕ TypeError: Cannot read property of undefined
                </div>
                <div className="px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded text-[10px] text-red-400 font-mono">
                  ✕ Error: Connection timeout after 30000ms
                </div>
                <div className="px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded text-[10px] text-red-400 font-mono">
                  ✕ FATAL: database "production" does not exist
                </div>
              </div>
            </div>

            {/* Visual Icon */}
            <div className="flex items-center justify-center p-8 bg-black/20 rounded-xl border border-white/5 aspect-square md:w-48">
              <div className="relative w-24 h-24 border-2 border-white/10 rounded-full flex items-center justify-center text-slate-700 font-light text-6xl">
                ✕
              </div>
            </div>
          </div>

          {/* Small Card: No Deployment */}
          <div className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl p-8">
            <div className="flex items-center gap-3 text-white font-bold mb-4">
              <HardDrive className="text-slate-400" size={20} />
              <span>No Deployment</span>
            </div>
            <p className="text-slate-400 text-sm">
              Works on localhost <span className="text-white font-bold">but nowhere else.</span>
            </p>
          </div>

          {/* Small Card: No Documentation */}
          <div className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl p-8">
            <div className="flex items-center gap-3 text-white font-bold mb-4">
              <FileText className="text-slate-400" size={20} />
              <span>No Documentation</span>
            </div>
            <p className="text-slate-400 text-sm">
              No documentation. No deployment plan. <span className="text-white font-bold">That’s not a product.</span>
            </p>
          </div>

          {/* Small Card: Untested Code */}
          <div className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl p-8">
            <div className="flex items-center gap-3 text-white font-bold mb-4">
              <Bug className="text-slate-400" size={20} />
              <span>Untested Code</span>
            </div>
            <p className="text-slate-400 text-sm">
              Zero tests. <span className="text-white font-bold">Every change is risky.</span>
            </p>
          </div>

          {/* Small Card: Security Holes */}
          <div className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl p-8">
            <div className="flex items-center gap-3 text-white font-bold mb-4">
              <ShieldAlert className="text-slate-400" size={20} />
              <span>Security Holes</span>
            </div>
            <p className="text-slate-400 text-sm">
              API keys in the frontend. <span className="text-white font-bold">No auth. No validation.</span>
            </p>
          </div>

        </div>

        {/* Section Footer */}
        <div className="text-center mt-16 text-slate-400 text-lg">
          It works in demo mode. <span className="text-white font-semibold">That’s the problem.</span>
        </div>
      </div>
    </section>
  );
}