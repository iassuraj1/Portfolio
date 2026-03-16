import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 glass py-4 px-6 md:px-12"
    >
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon">
          Suraj.
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-primary transition-colors hover:text-glow">About</a>
          <a href="#experience" className="hover:text-primary transition-colors hover:text-glow">Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors hover:text-glow">Projects</a>
          <a href="#certifications" className="hover:text-primary transition-colors hover:text-glow">Certifications</a>
          <a href="#contact" className="hover:text-primary transition-colors hover:text-glow">Contact</a>
        </div>
        <div className="hidden md:flex gap-4">
          <a href="https://github.com/iassuraj1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/suraj-kumar-bhagat-130644250/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-slate-300 hover:text-primary transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-slate-900/90 rounded-2xl overflow-hidden backdrop-blur-lg border border-white/10"
          >
            <div className="flex flex-col py-4 px-6 space-y-4 text-center">
              <a href="#about" onClick={toggleMenu} className="text-slate-300 hover:text-primary py-2 transition-colors">About</a>
              <a href="#experience" onClick={toggleMenu} className="text-slate-300 hover:text-primary py-2 transition-colors">Experience</a>
              <a href="#projects" onClick={toggleMenu} className="text-slate-300 hover:text-primary py-2 transition-colors">Projects</a>
              <a href="#certifications" onClick={toggleMenu} className="text-slate-300 hover:text-primary py-2 transition-colors">Certifications</a>
              <a href="#contact" onClick={toggleMenu} className="text-slate-300 hover:text-primary py-2 transition-colors">Contact</a>
              <div className="flex justify-center gap-6 pt-4 border-t border-white/10">
                <a href="https://github.com/iassuraj1" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary transition-colors"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/suraj-kumar-bhagat-130644250/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
