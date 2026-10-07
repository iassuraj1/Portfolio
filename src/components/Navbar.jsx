import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X, Mail, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (e, targetId) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setIsOpen(false);

    if (targetId === '#' || !targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
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

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 glass py-3 sm:py-4 px-4 sm:px-6 md:px-12"
    >
      <div className="flex justify-between items-center max-w-[1440px] mx-auto">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, '#')}
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon cursor-pointer"
        >
          Suraj.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-slate-300 hover:text-primary transition-colors hover:text-glow cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Right Contact & Socials */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="tel:9525200203" 
            className="hidden lg:flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-primary transition-colors py-1.5 px-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10"
            title="Call: 9525200203"
          >
            <Phone size={13} className="text-primary" />
            <span>9525200203</span>
          </a>
          <a 
            href="mailto:surajkumarbhagat007@gmail.com" 
            className="hidden xl:flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-primary transition-colors py-1.5 px-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10"
            title="Email: surajkumarbhagat007@gmail.com"
          >
            <Mail size={13} className="text-primary" />
            <span>surajkumarbhagat007@gmail.com</span>
          </a>
          <div className="flex items-center gap-2 ml-1">
            <a href="https://github.com/iassuraj1" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary transition-colors p-1" title="GitHub"><Github size={19} /></a>
            <a href="https://www.linkedin.com/in/suraj-kumar-bhagat-130644250/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary transition-colors p-1" title="LinkedIn"><Linkedin size={19} /></a>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="p-2 -mr-2 text-slate-300 hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay with Smooth Scrolling */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 bg-slate-900/95 rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col py-4 px-5 space-y-3 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  onClick={(e) => scrollToSection(e, link.href)} 
                  className="text-slate-200 hover:text-primary active:bg-white/10 hover:bg-white/5 rounded-xl py-2.5 px-4 text-base font-medium transition-all cursor-pointer border-b border-white/5 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="flex flex-col gap-2 pt-2 pb-1 text-xs">
                <a href="tel:9525200203" className="flex items-center justify-center gap-2 text-slate-300 hover:text-primary transition-colors py-1.5 rounded-lg bg-white/5 border border-white/10">
                  <Phone size={14} className="text-primary" />
                  <span className="font-mono">+91 9525200203</span>
                </a>
                <a href="mailto:surajkumarbhagat007@gmail.com" className="flex items-center justify-center gap-2 text-slate-300 hover:text-primary transition-colors py-1.5 rounded-lg bg-white/5 border border-white/10">
                  <Mail size={14} className="text-primary" />
                  <span className="font-mono truncate max-w-[260px]">surajkumarbhagat007@gmail.com</span>
                </a>
              </div>
              
              <div className="flex justify-center gap-6 pt-2">
                <a href="https://github.com/iassuraj1" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-300 hover:text-primary transition-colors"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/suraj-kumar-bhagat-130644250/" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-300 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
