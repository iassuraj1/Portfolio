import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Inciterz Technology",
    role: "Full Stack Web Development",
    period: "June 2025 - Present",
    details: [
      "Developed and maintained full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Built secure and scalable RESTful APIs and integrated them with dynamic frontend components.",
      "Contributed to live deployment and collaborated using Git/GitHub.",
      "Improved application performance, responsiveness, and usability through clean code and optimization."
    ]
  },
  {
    company: "Xcelliance Technologies",
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
    <section id="experience" className="py-16 md:py-24 px-6 md:px-12 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-xl">03.</span> Where I've Worked
          <div className="h-px bg-white/10 flex-1 ml-4 block border-0"></div>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[-1.5rem] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20"></div>
              <div className="md:border-l border-primary/30 md:pl-10 pb-2">
                <h3 className="text-xl font-bold text-slate-200">
                  {exp.role} <span className="text-primary">@ {exp.company}</span>
                </h3>
                <p className="text-sm font-mono text-slate-500 mt-1 mb-4">{exp.period}</p>
                <ul className="space-y-3">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex gap-2 text-slate-400">
                      <span className="text-primary text-xs mt-1">▹</span>
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
