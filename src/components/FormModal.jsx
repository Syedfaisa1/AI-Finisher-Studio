import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function FormModal({ isOpen, onClose }) {
  // Prevent scrolling on the body when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // Overlay
    <div 
      className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-[600px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 md:p-8 shadow-l overflow-y-auto max-h-[95vh]"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-8 pr-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Finish Your MVP
          </h2>
          <p className="text-sm text-slate-400">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-normal text-white">Full Name *</label>
            <input 
              type="text" 
              placeholder="Name Here"
              className="w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#14bc8b] transition-colors"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-normal text-white">Phone Number *</label>
            <input 
              type="tel" 
              placeholder="+1 (555) 123-4567"
              className="w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#14bc8b] transition-colors"
              required
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-normal text-white">Email Address *</label>
            <input 
              type="email" 
              placeholder="example@company.com"
              className="w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#14bc8b] transition-colors"
              required
            />
          </div>

          {/* Company / Project Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-normal text-white">Company / Project Name *</label>
            <input 
              type="text" 
              placeholder="Your startup or project"
              className="w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#14bc8b] transition-colors"
              required
            />
          </div>

          {/* What did you build with? */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-normal text-white">What did you build with? *</label>
            <input 
              type="text" 
              className="w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#14bc8b] transition-colors"
              required
            />
          </div>

          {/* Tell us about your MVP */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-normal text-white">Tell us about your MVP *</label>
            <textarea 
              rows="4"
              placeholder="Brief description of your project, current state, and what you need help with..."
              className="w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#14bc8b] transition-colors resize-none"
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button 
              type="submit"
              className="flex-1 bg-[#14bc8b] hover:bg-[#10a378] text-[#0a0a0a] font-bold py-3.5 px-4 rounded-lg transition-colors text-sm"
            >
              Submit Application
            </button>
            <button 
              type="button"
              onClick={onClose}
              className="bg-[#2e2e2e] hover:bg-[#3e3e3e] text-white font-medium py-3.5 px-6 rounded-lg transition-colors text-sm"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}