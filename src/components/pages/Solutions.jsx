import { motion } from 'framer-motion';
import { ArrowRight, Code2, Layers, Users, Zap } from 'lucide-react';
import Aurora from '../../components/Aurora'; 
import OurSolutions from './OurSolutions';
import works from './works';

// --- ANIMATION VARIANTS ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
  visible: { 
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Solutions() {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col items-center pt-32 pb-20 font-sans">
      
      {/* --- BG AURORA --- */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none scale-110">
        <Aurora
          colorStops={["#0a7052", "#14bc8b", "#000000"]}
          blend={0.6}
          amplitude={1.2}
          speed={0.1}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-3 rounded-full border border-[#2e2e2e] bg-[#1a1a1a] text-[#14bc8b] text-[10px] font-bold uppercase tracking-[0.2em] mb-10"
        >
          {/* Removing fill to make it an outline icon */}
          <Zap size={15} strokeWidth={2.5} className="text-[#14bc8b]" /> 
          COMPLETE SOLUTIONS
        </motion.div>

{/* --- HEADLINE: Mixed Colors per Figma --- */}
        <motion.h1 
          variants={staggerContainer}
          initial="hidden" // ADDED: Required for stagger to start from hidden state
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl md:text-[65px] font-semibold mb-6 tracking-tight leading-[1.05]"
        >
          <div className="block">
            <motion.span variants={wordVariants} className="text-white inline-block mr-[0.2em]">From</motion.span>
            {"AI prototype".split(" ").map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="text-[#14bc8b] inline-block mr-[0.2em]">
                {word}
              </motion.span>
            ))}
          </div>
          <div className="block">
            <motion.span variants={wordVariants} className="text-white inline-block mr-[0.2em]">to</motion.span>
            {"production system".split(" ").map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="text-[#14bc8b] inline-block mr-[0.2em]">
                {word}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        {/* --- SUBHEADLINE --- */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }} // Delays so it fades in right after the headline
          viewport={{ once: true }}
          className="text-[#898989] text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Complete engineering solutions for AI-built products. We<br className="hidden md:block" /> 
          handle everything from code quality to deployment.
        </motion.p>

        {/* --- PRIMARY CTA --- */}
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }} // Delays so it fades in right after the subheadline
          viewport={{ once: true }}
          className="bg-[#0A7052] hover:bg-[#10a378] text-white px-8 py-3.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2 mx-auto group mb-24"
        >
          Get Your Solution Plan
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>

       {/* --- CARDS GRID --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          // Use max-w-7xl to allow maximum stretch
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl mx-auto"
        >
          {/* Card 1 */}
          <motion.div variants={cardVariants} className="bg-[#151515] border border-[#2e2e2e] rounded-2xl p-6 xl:p-8 flex flex-col text-left hover:border-[#14bc8b]/30 transition-all duration-300">
            <Code2 className="text-[#14bc8b] mb-6" size={32} strokeWidth={2} />
            <h3 className="text-white font-bold text-xl xl:text-[22px] mb-3 tracking-tight">Built with Cursor/vO/Bolt</h3>
            <p className="text-[#a1a1aa] text-sm xl:text-[15px] leading-relaxed mb-10">
              You used AI to build fast. Now you need real engineering to launch.
            </p>
            {/* Responsive font sizing prevents overflow on smaller laptops */}
            <div className="mt-auto flex items-baseline gap-2 whitespace-nowrap">
              <span className="text-4xl xl:text-[40px] font-bold text-[#14bc8b] leading-none tracking-tight">73%</span>
              <span className="text-xs xl:text-[14px] text-[#e4e4e7]">of our clients</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={cardVariants} className="bg-[#151515] border border-[#2e2e2e] rounded-2xl p-6 xl:p-8 flex flex-col text-left hover:border-[#14bc8b]/30 transition-all duration-300">
            <Layers className="text-[#14bc8b] mb-6" size={32} strokeWidth={2} />
            <h3 className="text-white font-bold text-xl xl:text-[22px] mb-3 tracking-tight">Prototype to Production</h3>
            <p className="text-[#a1a1aa] text-sm xl:text-[15px] leading-relaxed mb-10">
              You validated the idea. Now you need production infrastructure.
            </p>
            <div className="mt-auto flex items-baseline gap-2 whitespace-nowrap">
              <span className="text-[32px] xl:text-[40px] font-bold text-[#14bc8b] leading-none tracking-tight">2-3 months</span>
              <span className="text-xs xl:text-[14px] text-[#e4e4e7]">typical timeline</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={cardVariants} className="bg-[#151515] border border-[#2e2e2e] rounded-2xl p-6 xl:p-8 flex flex-col text-left hover:border-[#14bc8b]/30 transition-all duration-300">
            <Users className="text-[#14bc8b] mb-6" size={32} strokeWidth={2} />
            <h3 className="text-white font-bold text-xl xl:text-[22px] mb-3 tracking-tight">Ready for Real Users</h3>
            <p className="text-[#a1a1aa] text-sm xl:text-[15px] leading-relaxed mb-10">
              You have demos. Now you need systems that handle real traffic.
            </p>
            <div className="mt-auto flex items-baseline gap-2 whitespace-nowrap">
              <span className="text-4xl xl:text-[40px] font-bold text-[#14bc8b] leading-none tracking-tight">100%</span>
              <span className="text-xs xl:text-[14px] text-[#e4e4e7]">deployment success</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    
  );
}