import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Brain, Target, Coffee } from 'lucide-react';

const AnimatedCounter = ({ from, to, duration, suffix = '' }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    
    let startTime;
    let animationFrame;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * (to - from) + from));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: 24, suffix: '+', icon: <Code className="text-neon-blue" size={24} /> },
    { label: 'Technologies Mastered', value: 15, suffix: '+', icon: <Brain className="text-neon-purple" size={24} /> },
    { label: 'Problem Solving Hours', value: 1200, suffix: '+', icon: <Target className="text-pink-500" size={24} /> },
    { label: 'Cups of Coffee', value: 450, suffix: '+', icon: <Coffee className="text-orange-400" size={24} /> },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto md:mx-0 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image/Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-[85%] max-w-[320px] mx-auto md:w-full md:max-w-none aspect-square md:aspect-[4/3] lg:aspect-[4/5] xl:aspect-square rounded-3xl overflow-hidden glass-card p-2 group"
          >
            {/* Inner image container */}
            <div className="w-full h-full rounded-[1.2rem] overflow-hidden relative bg-dark-bg">
              {/* Profile Image */}
              <img 
                src="/profile.jpg" 
                alt="Rajnish Kumar" 
                className="w-full h-full object-cover relative z-10"
              />
              
              {/* Subtle overlay for better blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/60 to-transparent z-20"></div>
            </div>
            
            {/* Glowing effect behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 -z-10"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Bridging the gap between <span className="text-neon-blue">Design</span> and <span className="text-neon-purple">Intelligence</span>
            </h3>
            
            <p className="text-gray-400 leading-relaxed text-lg">
              I'm Rajnish Kumar, a passionate Full Stack Developer with a strong focus on building AI-driven applications and visually stunning web experiences. I believe that powerful technology should be paired with intuitive, premium design.
            </p>
            
            <p className="text-gray-400 leading-relaxed text-lg mb-4">
              My journey started with a deep curiosity for how things work on the web, which evolved into a specialization in React, Node.js, and integrating Machine Learning models into robust web platforms.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {stats.map((stat, index) => (
                <div key={index} className="glass border border-white/10 rounded-2xl p-6 flex flex-col gap-2 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                      {stat.icon}
                    </div>
                    <span className="text-3xl font-bold font-display text-white">
                      <AnimatedCounter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-500">{stat.label}</span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
