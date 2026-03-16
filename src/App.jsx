import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="bg-dark min-h-screen text-slate-300 relative selection:bg-primary/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-neon to-secondary origin-left z-[100]"
        style={{ scaleX }}
      />
      
      {/* Dynamic Cursor Glow Effect */}
      <div 
        className="fixed top-0 left-0 w-96 h-96 rounded-full bg-primary/10 pointer-events-none blur-[100px] -z-10 transition-transform duration-300 ease-out"
        style={{ 
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`
        }}
      />

      <Navbar />
      
      <main className="flex flex-col w-full overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
