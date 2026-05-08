import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, BrainCircuit } from 'lucide-react';

const Experience = () => {
  const timeline = [
    {
      id: 1,
      title: 'Frontend Developer',
      institution: 'Self-Initiated Projects & Freelance',
      date: '2024 - Present',
      description: 'Designed, developed, and deployed 3+ web projects end-to-end from wireframe to production using modern frontend stack. Followed industry best practices: Git branching strategy, semantic HTML, CSS BEM methodology, and Netlify CI/CD pipelines.',
      icon: <Code2 size={24} />,
      color: 'neon-blue'
    },
    {
      id: 2,
      title: 'B.Tech — Computer Science & Engineering',
      institution: 'GNIOT, Greater Noida (AKTU)',
      date: '2021 - 2025',
      description: 'Relevant Coursework: Data Structures & Algorithms, Web Technologies, DBMS, Computer Networks, OOP, Operating Systems, Software Engineering. Completed self-initiated full-stack web projects during coursework.',
      icon: <GraduationCap size={24} />,
      color: 'neon-purple'
    },
    {
      id: 3,
      title: 'Certifications & Achievements',
      institution: 'freeCodeCamp & Figma',
      date: 'Continuous Learning',
      description: 'Earned certifications in Responsive Web Design (HTML5, CSS3, Grid), JavaScript Algorithms & Data Structures, and UI/UX Design Fundamentals. Successfully deployed 3 live projects on Netlify with CI/CD pipelines.',
      icon: <BrainCircuit size={24} />,
      color: 'pink-500'
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#050508]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>

          <div className="flex flex-col gap-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] border-2 border-[#050508]">
                  <div className={`text-${item.color}`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 w-[calc(100%-5rem)] md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass-card p-6 md:p-8 group hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                    <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-2 h-full bg-${item.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                    
                    <span className={`text-${item.color} text-sm font-bold tracking-wider mb-2 block`}>{item.date}</span>
                    <h3 className="text-2xl font-bold text-white mb-1 font-display group-hover:text-neon-blue transition-colors duration-300">{item.title}</h3>
                    <span className="text-gray-400 text-sm mb-4 block font-medium">{item.institution}</span>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
