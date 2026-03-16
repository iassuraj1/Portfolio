import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[90px] md:blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-neon/20 rounded-full blur-[90px] md:blur-[120px] -z-10" />
      
      <motion.div 
        className="text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium backdrop-blur-md">
          Available for new opportunities 🚀
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-neon to-secondary">Suraj Kumar Bhagat</span>.
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer with a B.Tech in CSE-AIML. Skilled in building scalable web applications, developing REST APIs, and crafting responsive user interfaces with modern web technologies.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" className="px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all flex items-center gap-2">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#contact" className="px-8 py-3.5 rounded-full border border-white/20 glass text-white font-medium hover:bg-white/10 transition-all">
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
