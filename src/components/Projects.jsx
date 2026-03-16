import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Clonewatchshop",
    description: "Live e-commerce client project for a watch shop, fully built and customized.",
    tech: ["WordPress", "WooCommerce"],
    github: "#",
    live: "https://test.surajbhagat.info/"
  },
  {
    title: "PeptideBoost",
    description: "Live e-commerce client website featuring tailored product catalogs and a responsive design.",
    tech: ["WordPress", "WooCommerce", "Elementor"],
    github: "#",
    live: "http://peptideboost.surajbhagat.info/"
  },
  {
    title: "Affiguru",
    description: "A comprehensive digital marketing platform with enhanced functionalities.",
    tech: ["JavaScript", "React"],
    github: "https://github.com/iassuraj1/Affiguru",
    live: "https://affiguru.vercel.app"
  },
  {
    title: "AI-Chatbot",
    description: "A responsive, modern AI chatbot interface utilizing LLM endpoints.",
    tech: ["JavaScript", "APIs"],
    github: "https://github.com/iassuraj1/AI-Chatbot",
    live: "https://ai-chatbot-drab-chi-47.vercel.app"
  },
  {
    title: "Vehicle (Ejar Motors)",
    description: "Responsive multi-page web application for buying and selling new and used cars, featuring a modern UI.",
    tech: ["JavaScript", "React.js", "Tailwind CSS"],
    github: "https://github.com/iassuraj1/vehicle",
    live: "https://vehicle-ruby.vercel.app"
  },
  {
    title: "Weather_Web_App",
    description: "Interactive web application utilizing weather APIs to fetch and display real-time conditions.",
    tech: ["JavaScript", "HTML/CSS"],
    github: "https://github.com/iassuraj1/Weather_Web_App",
    live: "https://weather-web-app-lilac-alpha.vercel.app"
  },
  {
    title: "E-Commerce_Clone",
    description: "A full-stack e-commerce platform clone featuring integrated mock payment flows.",
    tech: ["HTML", "JavaScript"],
    github: "https://github.com/iassuraj1/E-Commerce_Clone",
    live: "#"
  },
  {
    title: "Amazon_Clone",
    description: "Functional UI clone of the Amazon web platform with responsive product grids.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/iassuraj1/Amazon_Clone",
    live: "#"
  },
  {
    title: "Skin-Disease Detection",
    description: "Implement disease detection using deep learning techniques to enhance accuracy in medical diagnostics and treatment.",
    tech: ["Jupyter Notebook", "Python", "Deep Learning"],
    github: "https://github.com/iassuraj1/Skin-Disease-Detection",
    live: "#"
  },
  {
    title: "Automated Number Plate Detection",
    description: "Developed an Automated Number Plate Detection system using Computer Vision and CNN. Utilized OpenCV for image processing and a CNN-based OCR model for accurate vehicle identification.",
    tech: ["Python", "OpenCV", "CNN", "Computer Vision"],
    github: "#",
    live: "#"
  },
  {
    title: "Movie Recommendation System",
    description: "Designed a Movie Recommendation System using Machine Learning, integrating collaborative and content-based filtering techniques for personalized movie suggestions.",
    tech: ["Machine Learning", "Python", "Pandas", "Scikit-learn"],
    github: "#",
    live: "#"
  },
  {
    title: "CRM_SYSTEM",
    description: "Customer Relationship Management dashboard for comprehensive data administration.",
    tech: ["JavaScript", "React"],
    github: "https://github.com/iassuraj1/CRM_SYSTEM",
    live: "#"
  },
  {
    title: "customer_relationship_management_system",
    description: "Extended CRM utilities and API integration handlers.",
    tech: ["JavaScript", "Node.js"],
    github: "https://github.com/iassuraj1/customer_relationship_management_system",
    live: "#"
  },
  {
    title: "3DGallery",
    description: "A 3D image gallery built using modern web development concepts.",
    tech: ["JavaScript"],
    github: "https://github.com/iassuraj1/3DGallery",
    live: "#"
  },
  {
    title: "Inciterz",
    description: "Development repository for the Inciterz platform involving scalable architectures.",
    tech: ["MERN Stack"],
    github: "https://github.com/iassuraj1/Inciterz",
    live: "#"
  },
  {
    title: "NodeJS",
    description: "Sandbox for testing Node.js backend concepts, Express routes, and REST APIs.",
    tech: ["Node.js", "Express"],
    github: "https://github.com/iassuraj1/NodeJS",
    live: "#"
  },
  {
    title: "AI-integration",
    description: "Exploratory codebase for seamlessly adding AI features to existing tools.",
    tech: ["HTML", "JavaScript"],
    github: "https://github.com/iassuraj1/AI-integration",
    live: "#"
  },
  {
    title: "Roxiler_Assessment",
    description: "Frontend assessment project focused on data fetching and dynamic UI generation.",
    tech: ["JavaScript"],
    github: "https://github.com/iassuraj1/Roxiler_Assessment",
    live: "#"
  },
  {
    title: "Web-Heck",
    description: "Hackathon or coding challenge repository showcasing semantic layout experiments.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/iassuraj1/Web-Heck",
    live: "#"
  },
  {
    title: "Web-Technology",
    description: "Collection of various CSS styling and foundational web design snippets.",
    tech: ["CSS", "HTML"],
    github: "https://github.com/iassuraj1/Web-Technology",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-12 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-xl">02.</span> Some Things I've Built
          <div className="h-px bg-white/10 flex-1 ml-4 block border-0"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="glass border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_30px_rgba(99,102,241,0.2)] hover:border-primary/30 rounded-2xl p-6 flex flex-col h-full group overflow-hidden w-full transition-all bg-slate-900/60"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-primary/70 group-hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                    <title>Folder</title>
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex gap-4 text-slate-400">
                  <a href={project.github} className="hover:text-primary transition-colors"><Github size={20} /></a>
                  <a href={project.live} className="hover:text-primary transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-primary transition-colors break-all md:break-words">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 flex-1">
                {project.description}
              </p>
              
              <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto text-xs font-mono text-slate-500">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
