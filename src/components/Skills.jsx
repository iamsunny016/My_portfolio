import React from 'react';
import { motion } from 'framer-motion';
import { FileCode2, Paintbrush, FileJson, Layout, Server, Database, TerminalSquare, BrainCircuit } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 95, icon: <FileCode2 />, color: 'from-orange-400 to-orange-600' },
    { name: 'CSS3 / Tailwind', level: 90, icon: <Paintbrush />, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', level: 92, icon: <FileJson />, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React.js', level: 88, icon: <Layout />, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Node.js', level: 85, icon: <Server />, color: 'from-green-400 to-green-600' },
    { name: 'MongoDB', level: 82, icon: <Database />, color: 'from-emerald-400 to-emerald-600' },
    { name: 'Python', level: 85, icon: <TerminalSquare />, color: 'from-blue-500 to-yellow-500' },
    { name: 'AI / ML', level: 75, icon: <BrainCircuit />, color: 'from-purple-500 to-pink-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#020203]">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building high-performance web applications and intelligent systems.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group glass border border-white/10 rounded-2xl p-6 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-out z-0 pointer-events-none ${skill.color}"></div>
              
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 text-white`}>
                    {skill.icon}
                  </div>
                  <span className="text-gray-400 font-medium font-display">{skill.level}%</span>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{skill.name}</h3>
                  
                  {/* Progress Bar Container */}
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    {/* Animated Progress Bar */}
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-[0_0_10px_rgba(255,255,255,0.5)]`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
