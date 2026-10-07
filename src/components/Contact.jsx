import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(event.target);
    // Note: Web3forms access key needs to be bound to your actual email on their website. 
    // This below key is a public Web3forms key bound to iassurajbhagat1@gmail.com
    formData.append("access_key", "ea3d4d44-0b44-469b-9a84-1d88bbd6d8db");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setSubmitStatus('success');
        event.target.reset(); // Clear the form fields
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);

    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-32 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto text-center scroll-mt-20 md:scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-primary font-mono mb-3 text-sm sm:text-base block">05. What's Next?</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Get In Touch</h2>

        <p className="text-slate-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, my inbox is always open!
        </p>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-10 sm:mb-12 w-full max-w-xl mx-auto">
          <a href="mailto:surajkumarbhagat007@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors group w-full sm:w-auto justify-center bg-white/5 sm:bg-transparent py-2.5 px-4 rounded-xl border border-white/5 sm:border-0">
            <div className="p-2.5 rounded-full bg-slate-800/80 group-hover:bg-primary/20 border border-white/10 group-hover:border-primary/40 transition-all flex-shrink-0">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <span className="text-xs sm:text-sm font-mono truncate max-w-[240px] sm:max-w-none">surajkumarbhagat007@gmail.com</span>
          </a>
          <a href="tel:9525200203" className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors group w-full sm:w-auto justify-center bg-white/5 sm:bg-transparent py-2.5 px-4 rounded-xl border border-white/5 sm:border-0">
            <div className="p-2.5 rounded-full bg-slate-800/80 group-hover:bg-primary/20 border border-white/10 group-hover:border-primary/40 transition-all flex-shrink-0">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <span className="text-xs sm:text-sm font-mono">+91 9525200203</span>
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-left space-y-5 sm:space-y-6 bg-slate-900/60 p-5 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-md relative z-10 w-full shadow-2xl">
          <input type="hidden" name="access_key" value="ea3d4d44-0b44-469b-9a84-1d88bbd6d8db" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="space-y-2 w-full">
              <label htmlFor="name" className="text-sm font-medium text-slate-300 block">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Name"
              />
            </div>
            <div className="space-y-2 w-full">
              <label htmlFor="email" className="text-sm font-medium text-slate-300 block">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="space-y-2 w-full">
            <label htmlFor="message" className="text-sm font-medium text-slate-300 block">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-medium transition-all mt-4 ${isSubmitting ? 'bg-slate-700 text-slate-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]'
              }`}
          >
            {isSubmitting ? 'Sending...' : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>

          {submitStatus === 'success' && (
            <p className="text-green-400 text-sm text-center mt-4">Thank you! Your message has been sent successfully.</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-400 text-sm text-center mt-4">Oops! Something went wrong. Please try again later.</p>
          )}
        </form>
      </motion.div>

      <footer className="mt-32 text-center text-slate-500 text-sm font-mono flex flex-col items-center justify-center space-y-2">
        <p>Built with React & Tailwind CSS</p>
        <div className="flex gap-4 opacity-70">
          <a href="https://github.com/iassuraj1" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
          <a href="https://www.linkedin.com/in/suraj-kumar-bhagat-130644250/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
          <a href="#" className="hover:text-primary">Twitter</a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
