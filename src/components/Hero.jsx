import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const Hero = () => {
  const scrollTo = (e, targetId) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const element = document.querySelector(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, elementPosition - navOffset),
        behavior: 'smooth'
      });
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', targetId);
      }
    }
  };

  return (
    <section className="min-h-screen relative flex items-center bg-black overflow-hidden pt-24 pb-16 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Background Banner with Portrait on the right, seamlessly fading into dark on the left */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/suraj_banner_clean.jpg" 
          alt="Suraj Kumar Bhagat - Full Stack Developer" 
          className="w-full h-full object-cover object-top sm:object-right select-none pointer-events-none" 
        />
        {/* Dark gradient overlays for perfect contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent md:via-black/60 lg:via-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* Hero Content positioned on the left, matching the reference screenshot */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div className="max-w-2xl w-full">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          {/* Social & Contact Icons matching the reference top bar */}
          <motion.div variants={itemVariants} className="flex items-center gap-2.5 sm:gap-3 mb-6">
            <a 
              href="https://github.com/iassuraj1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-all border border-white/10 hover:scale-110"
              title="GitHub"
            >
              <Github size={17} />
            </a>
            <a 
              href="https://www.linkedin.com/in/suraj-kumar-bhagat-130644250/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-all border border-white/10 hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a 
              href="mailto:surajkumarbhagat007@gmail.com" 
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-all border border-white/10 hover:scale-110"
              title="Email: surajkumarbhagat007@gmail.com"
            >
              <Mail size={17} />
            </a>
            <a 
              href="tel:9525200203" 
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-all border border-white/10 hover:scale-110"
              title="Call: 9525200203"
            >
              <Phone size={17} />
            </a>
          </motion.div>

          {/* Banner Title using Bebas Neue display typography & primary color accent matching the reference */}
          <motion.div variants={itemVariants} className="mb-6 font-display uppercase tracking-tight">
            <h1 className="text-3xl min-[400px]:text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.92] text-white">
              <span className="text-primary drop-shadow-[0_0_25px_rgba(99,102,241,0.4)]">I'M</span>{' '}
              <span className="text-white">SURAJ KUMAR BHAGAT</span>
            </h1>
            <h2 className="text-3xl min-[400px]:text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.92] text-white mt-1.5 sm:mt-2">
              <span className="text-primary drop-shadow-[0_0_25px_rgba(99,102,241,0.4)]">FULL STACK</span>{' '}
              <span className="text-white">DEVELOPER</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-slate-300 mb-8 sm:mb-10 max-w-lg leading-relaxed font-light drop-shadow-md">
            Full Stack Developer holding a B.Tech in CSE-AIML. Specialized in developing scalable web applications, robust REST APIs, and responsive user interfaces using the MERN stack and Next.js.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a 
              href="#about" 
              onClick={(e) => scrollTo(e, '#about')}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-primary hover:bg-primary/90 text-white flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all group cursor-pointer"
              title="Scroll to About"
            >
              <ArrowDown size={22} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollTo(e, '#projects')}
              className="px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-md border border-white/20 hover:border-white/40 transition-all flex items-center gap-2 group cursor-pointer"
            >
              View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollTo(e, '#contact')}
              className="px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-white/20 text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

     
    </div>
  </section>
  );
};

export default Hero;
