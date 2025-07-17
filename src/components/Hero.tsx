import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const FireEffect: React.FC = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    <div className="fire-container">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="fire-particle"
          style={{
            left: `${10 + i * 8}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1.5 + Math.random() * 1}s`,
          }}
        />
      ))}
    </div>
  </div>
);

const FloatingIcons: React.FC = () => {
  const icons = ['⚡', '🔥', '💻', '🚀', '⭐', '💡', '🎯', '🌟'];
  
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
      {icons.map((icon, i) => (
        <div
          key={i}
          className="floating-icon"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${4 + Math.random() * 2}s`,
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with Fire Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20">
        <FireEffect />
        <FloatingIcons />
      </div>
      
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Animated Profile Circle */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="mx-auto w-40 h-40 md:w-48 md:h-48 relative"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-2 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center text-white text-5xl md:text-6xl font-bold animate-bounce">
                  VK
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
                  <div className="absolute top-2 left-1/2 w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute bottom-2 left-1/2 w-3 h-3 bg-green-400 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute left-2 top-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute right-2 top-1/2 w-4 h-4 bg-purple-400 rounded-full transform -translate-y-1/2"></div>
                </div>
              </div>
            </div>
            
            {/* Status Badge */}
            <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              Available
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Vikash Kumar Singh
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <p className="text-2xl md:text-4xl text-orange-300 font-bold animate-bounce">
              🔥 DevOps & Backend Developer 🔥
            </p>
            <p className="text-lg md:text-xl text-yellow-300 animate-pulse">
              ⚡ Automating the Future of Backend Infrastructure ⚡
            </p>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            🚀 Passionate about building scalable infrastructure, automating complex systems, 
            and creating robust backend solutions that power modern applications! 💻✨
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
          >
            {[
              { number: '3+', label: 'Years Experience', icon: '🎯' },
              { number: '15+', label: 'Technologies', icon: '⚡' },
              { number: '50+', label: 'Projects Completed', icon: '🚀' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glassmorphism p-6 rounded-2xl hover:scale-105 transition-all duration-300 border border-orange-500/30"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 animate-pulse">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="https://drive.google.com/file/d/1mL-aFfKzR1ANtA7oMEAX89_DWThrKfQM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50 animate-bounce"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                🔥 Download Resume 🔥
              </div>
            </motion.a>
            
            <div className="flex gap-6">
              <motion.a
                href="https://github.com/vikashkumar991"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glassmorphism rounded-full hover:bg-orange-500/30 transition-all duration-300 hover:scale-125 border border-orange-500/50 hover:rotate-12"
                whileHover={{ scale: 1.2, rotate: 12 }}
              >
                <Github className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/vikash-kumar-singh-784146290"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glassmorphism rounded-full hover:bg-orange-500/30 transition-all duration-300 hover:scale-125 border border-orange-500/50 hover:rotate-12"
                whileHover={{ scale: 1.2, rotate: 12 }}
              >
                <Linkedin className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                href="mailto:vks200506@gmail.com"
                className="p-4 glassmorphism rounded-full hover:bg-orange-500/30 transition-all duration-300 hover:scale-125 border border-orange-500/50 hover:rotate-12"
                whileHover={{ scale: 1.2, rotate: 12 }}
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-orange-400 text-sm animate-pulse">🔥 Scroll to explore 🔥</span>
          <ChevronDown className="w-6 h-6 text-orange-400 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;