import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cpu, Database, Server, Cloud, Terminal } from 'lucide-react';

const TechOrbit: React.FC = () => {
  const techIcons = [
    { icon: Code, delay: 0, color: '#ff6b35' },
    { icon: Cpu, delay: 0.5, color: '#ff8c42' },
    { icon: Database, delay: 1, color: '#ffa726' },
    { icon: Server, delay: 1.5, color: '#ff7043' },
    { icon: Cloud, delay: 2, color: '#ff5722' },
    { icon: Terminal, delay: 2.5, color: '#ff6b35' },
  ];

  return (
    <div className="relative w-64 h-64 mx-auto mb-12">
      {/* Central Core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 20px rgba(255, 107, 53, 0.5)',
              '0 0 40px rgba(255, 107, 53, 0.8)',
              '0 0 20px rgba(255, 107, 53, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Code className="w-10 h-10 text-white" />
        </motion.div>
      </div>

      {/* Orbiting Tech Icons */}
      {techIcons.map((tech, index) => {
        const angle = (2 * Math.PI * index) / techIcons.length;
        const radius = 100;
        
        return (
          <motion.div
            key={index}
            className="absolute w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: -24,
              marginTop: -24,
            }}
            animate={{
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius,
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: tech.delay,
            }}
          >
            <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
          </motion.div>
        );
      })}

      {/* Orbital Rings */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 256 256">
          <circle
            cx="128"
            cy="128"
            r="100"
            fill="none"
            stroke="rgba(255, 107, 53, 0.3)"
            strokeWidth="1"
            strokeDasharray="4 8"
            className="animate-spin"
            style={{ animationDuration: '20s' }}
          />
          <circle
            cx="128"
            cy="128"
            r="120"
            fill="none"
            stroke="rgba(255, 140, 66, 0.2)"
            strokeWidth="1"
            strokeDasharray="2 6"
            className="animate-spin"
            style={{ animationDuration: '30s', animationDirection: 'reverse' }}
          />
        </svg>
      </div>
    </div>
  );
};

const DataStream: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 bg-gradient-to-b from-transparent via-orange-400 to-transparent"
        style={{
          left: `${Math.random() * 100}%`,
          height: `${50 + Math.random() * 100}px`,
        }}
        animate={{
          y: [-100, window.innerHeight + 100],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

const IntroLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showQuote, setShowQuote] = useState(false);

  const phases = [
    "Initializing Systems...",
    "Loading Technologies...",
    "Connecting Networks...",
    "Preparing Experience...",
    "Almost Ready..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1.5;
        
        // Update phase based on progress
        const phaseIndex = Math.floor((newProgress / 100) * phases.length);
        setCurrentPhase(Math.min(phaseIndex, phases.length - 1));
        
        // Show quote at 60% progress
        if (newProgress >= 60 && !showQuote) {
          setShowQuote(true);
        }
        
        if (newProgress >= 100) {
          setTimeout(() => {
            onComplete();
          }, 1000);
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete, showQuote]);

  const quoteWords = [
    "Technology", "changes.", "All", "the", "time.", "Our", "knowledge", "is", "our", "value.",
    "We", "have", "to", "keep", "up", "with", "the", "latest", "technology", "changes", "and", "updates.",
    "So,", "let's", "understand", "instead", "of", "memorizing,", "let's", "see", "instead", "of", "hearing,",
    "let's", "learn", "instead", "of", "ignoring,", "let's", "demonstrate", "instead", "of", "assuming."
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Data Stream Background */}
      <DataStream />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-grid-pattern"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Tech Orbit Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        >
          <TechOrbit />
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Vikash Kumar Singh
            </span>
          </h1>
          <p className="text-xl text-gray-300">DevOps & Backend Developer</p>
        </motion.div>

        {/* Inspirational Quote */}
        <AnimatePresence>
          {showQuote && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-12 max-w-3xl mx-auto"
            >
              <div className="glassmorphism p-8 rounded-2xl border border-orange-500/20">
                <motion.div className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  {quoteWords.map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`inline-block mr-2 ${
                        ['Technology', 'knowledge', 'understand', 'learn', 'demonstrate'].includes(word.replace(/[.,]/g, ''))
                          ? 'text-orange-400 font-semibold'
                          : ''
                      }`}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-sm text-gray-400 mt-4 italic"
                >
                  - Philosophy of Continuous Learning
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          {/* Progress Bar */}
          <div className="relative mb-6">
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden border border-orange-500/30">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full relative"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              >
                {/* Animated Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse opacity-75"></div>
                {/* Moving Highlight */}
                <motion.div
                  className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
                  animate={{ x: [-32, 400] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
            
            {/* Progress Percentage */}
            <div className="flex justify-between items-center mt-3">
              <span className="text-orange-400 font-bold text-lg">
                {Math.round(progress)}%
              </span>
              <span className="text-gray-400 text-sm">
                Loading Experience
              </span>
            </div>
          </div>

          {/* Current Phase */}
          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center"
          >
            <p className="text-gray-300 text-lg font-medium mb-4">
              {phases[currentPhase]}
            </p>
            
            {/* Loading Dots */}
            <div className="flex justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-orange-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Technical Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-xs text-gray-500 space-y-1"
        >
          <p>Optimizing performance and user experience...</p>
          <p>Establishing secure connections...</p>
        </motion.div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </motion.div>
  );
};

export default IntroLoader;