import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database } from 'lucide-react';

const skills = [
  "Python", "Java", "JavaScript", "HTML", "CSS",
  "React.js", "Next.js", "Node.js", "Express.js",
  "Django", "Pandas", "Numpy", "TensorFlow", "Keras",
  "Scikit-learn", "OpenCV", "SQL", "MongoDB", "Wordpress",
  "Machine Learning", "Deep Learning", "NLP", "Computer Vision"
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto relative scroll-mt-20 md:scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
      >
        <div className="flex-1 space-y-5 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-3 sm:gap-4">
            <span className="text-primary font-mono text-lg sm:text-xl">01.</span> About Me
            <div className="h-px bg-white/10 flex-1 ml-2 sm:ml-4 block border-0"></div>
          </h2>
          <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
            Hello! My name is Suraj Kumar Bhagat. I'm a Full Stack Developer holding a B.Tech in CSE-AIML from Noida Institute of Engineering and Technology. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and love bringing scalable web applications to life by translating complex ideas into elegant solutions.
          </p>
          <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
            Beyond web development, I have experience in Machine Learning, Deep Learning, and Computer Vision. I'm passionate about exploring AI/ML alongside creating robust web infrastructures, ensuring the architectures I build are responsive and ready for the future.
          </p>
          <div className="pt-2 sm:pt-4">
            <p className="text-slate-300 font-medium mb-3 sm:mb-4 text-sm md:text-base leading-relaxed break-words">Here are a few technologies I've been working with recently:</p>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-y-2.5 sm:gap-y-3 gap-x-3 sm:gap-x-4 text-xs sm:text-sm">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-400">
                  <span className="text-primary text-xs">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Decorative image box */}
        <div className="relative group w-64 h-64 md:w-80 md:h-80 perspective-1000 hidden md:block">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="absolute inset-0 border-2 border-primary rounded-xl translate-x-5 translate-y-5 transition-transform group-hover:translate-x-3 group-hover:translate-y-3 z-0"
          />
          <div className="absolute inset-0 bg-slate-900 rounded-xl overflow-hidden z-10 border border-white/10 group-hover:border-primary/50 transition-all duration-500 flex items-center justify-center">
             
             {/* Gradient Background */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-neon/20 z-0"></div>
             
             {/* Animated Grid Background */}
             <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

             {/* Central Animated Element */}
             <motion.div
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="z-10 relative"
             >
               <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-full scale-150"></div>
               <div className="bg-slate-800/80 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl relative z-10 group-hover:border-primary/50 transition-colors">
                 <Code2 size={48} className="text-primary" />
               </div>
             </motion.div>

             {/* Orbital Element 1 */}
             <motion.div
               animate={{ y: [15, -15, 15], x: [-10, 10, -10] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute top-12 left-12 z-10"
             >
               <div className="bg-slate-800/80 p-3 rounded-xl border border-white/10 backdrop-blur-md shadow-xl">
                 <Cpu size={24} className="text-neon" />
               </div>
             </motion.div>

             {/* Orbital Element 2 */}
             <motion.div
               animate={{ y: [-15, 15, -15], x: [10, -10, 10] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
               className="absolute bottom-12 right-12 z-10"
             >
               <div className="bg-slate-800/80 p-3 rounded-xl border border-white/10 backdrop-blur-md shadow-xl">
                 <Database size={24} className="text-secondary" />
               </div>
             </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
