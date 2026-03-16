import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "Introduction to NoSQL Databases",
    issuer: "IBM",
    date: "February 2024",
    url: "https://www.coursera.org/account/accomplishments/records/9ZJNQ7LH6CUW"
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "Duke University",
    date: "November 2023",
    url: "https://www.coursera.org/account/accomplishments/records/93ECAU4QEJVP"
  },
  {
    title: "Machine Learning Foundations: A Case Study Approach",
    issuer: "University of Washington",
    date: "June 2023",
    url: "https://www.coursera.org/account/accomplishments/records/BA8WG73FLGHS"
  },
  {
    title: "Building AI Powered Chatbots Without Programming",
    issuer: "IBM",
    date: "March 2023",
    url: "https://www.coursera.org/account/accomplishments/records/5RCKE9VXHTKD"
  },
  {
    title: "Basic Data Descriptors, Statistical Distributions, and Application to Business Decisions",
    issuer: "Rice University",
    date: "July 2022",
    url: "https://www.coursera.org/account/accomplishments/records/966UHEM9TSYK"
  },
  {
    title: "Getting Started with AI using IBM Watson",
    issuer: "IBM",
    date: "June 2022",
    url: "https://www.coursera.org/account/accomplishments/records/PNM6GBPMYKMZ"
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "May 2022",
    url: "https://www.coursera.org/account/accomplishments/records/3RWSG2XMZDMP"
  },
  {
    title: "Human-Centered Design for Inclusive Innovation",
    issuer: "University of Toronto",
    date: "May 2022",
    url: "https://www.coursera.org/account/accomplishments/records/WLEVHXV7SQMR"
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "IBM",
    date: "February 2022",
    url: "https://www.coursera.org/account/accomplishments/records/GULRP6QHQXWD"
  },
  {
    title: "Python Basics",
    issuer: "University of Michigan",
    date: "February 2022",
    url: "https://www.coursera.org/account/accomplishments/records/XVH93TNW5WM2"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-xl">04.</span> Licenses & Certifications
          <div className="h-px bg-white/10 flex-1 ml-4 block border-0"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {certifications.map((cert, index) => {
            const CardWrapper = cert.url ? 'a' : 'div';
            const wrapperProps = cert.url ? { 
              href: cert.url, 
              target: "_blank", 
              rel: "noopener noreferrer" 
            } : {};

            return (
              <motion.div key={index} whileHover={{ y: -5 }} className="h-full">
                <CardWrapper 
                  {...wrapperProps}
                  className="glass border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_30px_rgba(99,102,241,0.2)] rounded-2xl p-6 flex flex-col h-full group overflow-hidden w-full relative hover:border-primary/30 transition-all bg-slate-900/60 cursor-pointer"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Award size={80} className="text-primary" />
                  </div>
                  <div className="flex items-center justify-between mb-4 relative z-10 text-primary">
                    <div className="flex items-center gap-2">
                       <Award size={18} />
                       <span className="font-mono text-xs font-semibold">{cert.issuer}</span>
                    </div>
                    {cert.url && <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-200 mb-4 group-hover:text-primary transition-colors relative z-10">
                    {cert.title}
                  </h3>
                  
                  <div className="mt-auto flex items-center gap-2 text-slate-400 text-xs font-mono relative z-10 pt-4 border-t border-white/5">
                    <Calendar size={14} />
                    <span>Issued {cert.date}</span>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
