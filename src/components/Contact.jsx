import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const WhatsappIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
  </svg>
);

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message
        })
      });

      const result = await response.json();
      
      if (response.ok) {
        setFormState({ name: '', email: '', message: '' });
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message: ' + (result.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('An error occurred. Make sure your backend server is running (node server.js).');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:m.scrajnish@gmail.com', color: 'hover:text-red-400' },
    { name: 'LinkedIn', icon: <LinkedinIcon size={20} />, href: 'https://www.linkedin.com/in/rajnish-kumar-763655248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', color: 'hover:text-blue-500' },
    { name: 'WhatsApp', icon: <WhatsappIcon size={20} />, href: 'https://wa.me/918757577586', color: 'hover:text-green-500' },
    { name: 'GitHub', icon: <GithubIcon size={20} />, href: 'https://github.com/iamsunny016', color: 'hover:text-white' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#030305]">
      {/* Abstract Background element */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="glass-card p-6 md:p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6 font-display">Contact Information</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm currently open for new opportunities, freelance projects, and exciting collaborations. Let's build something amazing together.
              </p>

              <div className="space-y-6 flex-grow">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-blue">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 font-medium">Email</span>
                    <a href="mailto:m.scrajnish@gmail.com" className="hover:text-neon-blue transition-colors">m.scrajnish@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-purple">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 font-medium">Location</span>
                    <span>Remote / India</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 mt-8 border-t border-white/10">
                <span className="block text-sm text-gray-500 font-medium mb-4">Follow Me</span>
                <div className="flex items-center gap-4">
                  {socials.map((social) => (
                    <a 
                      key={social.name} 
                      href={social.href}
                      className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-6 md:p-8 h-full">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input - Floating Label */}
                  <div className="relative z-0 w-full group">
                    <input 
                      type="text" 
                      id="name" 
                      className="block py-3 px-0 w-full text-base text-white bg-transparent border-0 border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-neon-blue peer" 
                      placeholder=" " 
                      required 
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                    <label htmlFor="name" className="absolute text-base text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-neon-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                  </div>
                  
                  {/* Email Input - Floating Label */}
                  <div className="relative z-0 w-full group">
                    <input 
                      type="email" 
                      id="email" 
                      className="block py-3 px-0 w-full text-base text-white bg-transparent border-0 border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-neon-purple peer" 
                      placeholder=" " 
                      required 
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                    <label htmlFor="email" className="absolute text-base text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-neon-purple peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                  </div>
                </div>

                {/* Message Textarea - Floating Label */}
                <div className="relative z-0 w-full group mt-4">
                  <textarea 
                    id="message" 
                    rows="5"
                    className="block py-3 px-0 w-full text-base text-white bg-transparent border-0 border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-neon-blue peer resize-none" 
                    placeholder=" " 
                    required 
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                  <label htmlFor="message" className="absolute text-base text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-neon-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-6 flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed group w-full md:w-auto md:self-end"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
