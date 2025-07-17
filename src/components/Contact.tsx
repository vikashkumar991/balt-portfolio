import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const OrangeRain: React.FC = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    {[...Array(100)].map((_, i) => (
      <div
        key={i}
        className="raindrop-orange"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${0.5 + Math.random() * 1}s`
        }}
      />
    ))}
    <style>{`
      .raindrop-orange {
        position: absolute;
        width: 2px;
        height: 50px;
        background: linear-gradient(to bottom, 
          transparent, 
          rgba(255, 107, 53, 0.6), 
          rgba(255, 140, 66, 0.8)
        );
        animation: rain-fall infinite linear;
        top: -50px;
      }
    `}</style>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create contact message object
    const contactMessage = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toISOString(),
      status: 'new' as const
    };
    
    // Save to localStorage
    const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    const updatedMessages = [contactMessage, ...existingMessages];
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Show success message (you can implement a toast notification here)
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background with Orange Rain */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20"></div>
      
      <OrangeRain />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg">
            Let's discuss your next project and build something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glassmorphism p-8 rounded-2xl border border-orange-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-500/20 rounded-full">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white font-medium">vks200506@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-500/20 rounded-full">
                    <Phone className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="text-white font-medium">9915599590</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-500/20 rounded-full">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white font-medium">Chandigarh, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-orange-500/20">
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/vikashkumar991"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-orange-500/20 rounded-full hover:bg-orange-500/30 transition-all duration-300 border border-orange-500/30"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/vikash-kumar-singh-784146290"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-orange-500/20 rounded-full hover:bg-orange-500/30 transition-all duration-300 border border-orange-500/30"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glassmorphism p-8 rounded-2xl border border-orange-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-orange-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-orange-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-orange-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;