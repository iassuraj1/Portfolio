import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Mobrilz Private Limited",
    role: "Full Stack Developer",
    period: "July 2025 - Present",
    details: [
      "Developed and maintained full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Built secure and scalable RESTful APIs and integrated them with dynamic frontend components.",
      "Contributed to live deployment and collaborated using Git/GitHub.",
      "Improved application performance, responsiveness, and usability through clean code and optimization."
    ]
  },
  {
    company: "Mobrilz Private Limited",
    role: "Frontend Developer Intern",
    period: "Dec 2024 – June 2025",
    details: [
      "Developing and maintaining user-friendly web applications using React and Next.js.",
      "Gained hands-on experience in frontend development, including troubleshooting, debugging, and implementing responsive designs for optimal user experience across devices."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto w-full scroll-mt-20 md:scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <span className="text-primary font-mono text-lg sm:text-xl">02.</span> Where I've Worked
          <div className="h-px bg-white/10 flex-1 ml-2 sm:ml-4 block border-0"></div>
        </h2>

        <div className="relative border-l-2 border-primary/30 ml-3 sm:ml-5 md:ml-6 pl-6 sm:pl-8 md:pl-10 space-y-10 sm:space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-primary/20 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-200">
                  {exp.role} <span className="text-primary">@ {exp.company}</span>
                </h3>
                <p className="text-xs sm:text-sm font-mono text-slate-500 mt-1 mb-4">{exp.period}</p>
                <ul className="space-y-2.5 sm:space-y-3">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex gap-2 text-slate-400 text-sm sm:text-base">
                      <span className="text-primary text-xs mt-1 flex-shrink-0">▹</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
