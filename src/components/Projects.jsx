import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch as Github, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Grihmullya - AI House Price Prediction',
      description: 'A high-fidelity property intelligence suite. Features a Pan-India Neural Engine for precise price predictions, AI-driven architectural renders, and automated valuation reports.',
      image: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-black',
      tech: ['Next.js', 'FastAPI', 'Python', 'Machine Learning', 'Tailwind'],
      demo: '#',
      github: 'https://github.com/iamsunny016/Grihmullya-House_price_prediction'
    },
    {
      title: 'Aarogya Clinic Booking System',
      description: 'Premium Appointment Booking System. Features a modern Next.js UI, automated patient & doctor email alerts with Google Calendar reminders, and a powerful Admin Dashboard.',
      image: 'bg-gradient-to-br from-emerald-900 via-teal-900 to-black',
      tech: ['Next.js', 'MongoDB', 'Resend', 'Tailwind CSS'],
      demo: '#',
      github: 'https://github.com/iamsunny016/Clinic'
    },
    {
      title: 'Myntra Clone',
      description: 'A responsive e-commerce platform clone of Myntra focusing on user interface design and core shopping functionalities.',
      image: 'bg-gradient-to-br from-blue-900 via-cyan-900 to-black',
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: '#',
      github: 'https://github.com/iamsunny016/Myntra_clone'
    },
    {
      title: 'Premium Portfolio',
      description: 'This very website. A futuristic, cinematic portfolio designed to showcase projects with high-end micro-interactions and smooth scrolling.',
      image: 'bg-gradient-to-br from-gray-800 via-gray-900 to-black',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      demo: '#',
      github: 'https://github.com/iamsunny016/My_portfolio'
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:flex md:items-end justify-between"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-md mt-6 md:mt-0 text-lg">
            A selection of my recent projects focusing on AI integration and premium web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] flex flex-col h-full"
            >
              {/* Image / Mockup Area */}
              <div className={`w-full h-64 ${project.image} relative overflow-hidden`}>
                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
                
                {/* Floating Mockup Abstract shape */}
                <motion.div 
                  className="absolute inset-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                >
                   <Sparkles className="text-white/30 w-16 h-16 group-hover:text-neon-blue/60 transition-colors duration-500" />
                </motion.div>
                
                {/* Glassmorphism gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-[#030305]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-display group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-neon-blue transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors ml-4">
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
