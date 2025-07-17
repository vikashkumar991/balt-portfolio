import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';



const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-grid-pattern"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Professional Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto w-32 h-32 md:w-40 md:h-40 relative"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center text-white text-4xl md:text-5xl font-bold">
                  VK
                </div>
              </div>
            </div>
            
            {/* Status Indicator */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 animate-pulse"></div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Vikash Kumar Singh
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-3xl text-gray-300 mb-4 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            DevOps & Backend Developer
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Passionate about building scalable infrastructure, automating complex systems, 
            and creating robust backend solutions that power modern applications.
          </motion.p>

          {/* Professional Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
          >
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '15+', label: 'Technologies' },
              { number: '50+', label: 'Projects Completed' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="https://drive.google.com/file/d/1mL-aFfKzR1ANtA7oMEAX89_DWThrKfQM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                View Resume
              </div>
            </motion.a>
            
            <div className="flex gap-6">
              <motion.a
                href="https://github.com/vikashkumar991"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 rounded-full hover:bg-orange-500/20 transition-all duration-300 hover:scale-110 border border-white/20"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/vikash-kumar-singh-784146290"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 rounded-full hover:bg-orange-500/20 transition-all duration-300 hover:scale-110 border border-white/20"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                href="mailto:vks200506@gmail.com"
                className="p-4 bg-white/10 rounded-full hover:bg-orange-500/20 transition-all duration-300 hover:scale-110 border border-white/20"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-orange-400" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;