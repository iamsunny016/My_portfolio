import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-neon-purple/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[70vw] h-[70vw] md:w-[35vw] md:h-[35vw] bg-neon-blue/20 rounded-full blur-[100px] mix-blend-screen" style={{ animation: 'pulse 8s infinite alternate' }}></div>
      
      {/* Optional Grid Overlay for Tech feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-4 inline-block">
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm font-medium text-neon-blue backdrop-blur-sm shadow-[0_0_10px_rgba(0,240,255,0.1)]">
              Welcome to my universe
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Rajnish Kumar</span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-gray-400 mb-8">
            <span className="text-gradient font-semibold">Full Stack Developer</span> & AI Enthusiast
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I craft premium digital experiences and intelligent systems. Specializing in modern web technologies and AI integrations to solve complex problems with elegant code.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
            <a href="#projects" className="group relative px-8 py-4 rounded-xl bg-white text-black font-semibold text-lg overflow-hidden w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300">
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg backdrop-blur-sm w-full sm:w-auto transition-all duration-300 flex items-center justify-center gap-2">
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-gray-500 uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
