import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Code2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#020203] pt-16 pb-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-neon-blue/20 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Scroll to top button */}
        <motion.button 
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass bg-[#050508] flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-blue/50 transition-colors z-20 group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </motion.button>

        <div className="flex flex-col items-center gap-6 mb-12 mt-8">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="text-neon-blue">
              <Code2 size={32} strokeWidth={2} />
            </div>
            <span className="font-display font-bold text-2xl tracking-wide group-hover:text-neon-blue transition-colors">
              Rajnish<span className="text-white/50">.dev</span>
            </span>
          </a>
          
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium text-gray-400">
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rajnish Kumar. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed & Built with <span className="text-neon-purple animate-pulse">❤</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
