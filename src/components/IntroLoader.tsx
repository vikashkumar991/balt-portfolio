import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TrainTrack: React.FC = () => (
  <div className="relative w-full h-4 mb-8">
    {/* Train Tracks */}
    <div className="absolute inset-0 flex items-center">
      <div className="w-full h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full"></div>
    </div>
    
    {/* Track Ties */}
    <div className="absolute inset-0 flex justify-between items-center">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="w-1 h-6 bg-orange-400 rounded-full opacity-60"
          style={{
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </div>
    
    {/* Moving Train */}
    <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-6">
      <div className="train-engine">
        <div className="w-8 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-lg">
          <div className="w-full h-full bg-gradient-to-t from-orange-600 to-yellow-400 rounded-lg animate-pulse">
            {/* Train Front */}
            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-red-500 rounded-r-full"></div>
            {/* Train Smoke */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="train-smoke"
                  style={{
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <style>{`
      .train-engine {
        animation: train-move 3s ease-in-out;
      }
      
      @keyframes train-move {
        0% { transform: translateX(-50px); }
        100% { transform: translateX(calc(100vw - 20px)); }
      }
      
      .train-smoke {
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        animation: smoke-rise 1s ease-out infinite;
      }
      
      @keyframes smoke-rise {
        0% {
          transform: translateY(0) scale(1);
          opacity: 0.7;
        }
        100% {
          transform: translateY(-20px) scale(1.5);
          opacity: 0;
        }
      }
    `}</style>
  </div>
);

const FireExplosion: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none">
    {/* Central Fire Burst */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="fire-burst">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="fire-ray"
            style={{
              transform: `rotate(${i * 30}deg)`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
    </div>
    
    {/* Floating Fire Particles */}
    {[...Array(30)].map((_, i) => (
      <div
        key={i}
        className="fire-particle-intro"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${2 + Math.random() * 2}s`
        }}
      />
    ))}
    
    <style>{`
      .fire-burst {
        position: relative;
        width: 200px;
        height: 200px;
        animation: burst-rotate 3s ease-out;
      }
      
      .fire-ray {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4px;
        height: 100px;
        background: linear-gradient(to top, 
          #ff4500 0%, 
          #ff8c00 50%, 
          #ffd700 100%
        );
        transform-origin: bottom center;
        animation: ray-extend 1s ease-out;
        border-radius: 2px;
        box-shadow: 0 0 10px #ff6b35;
      }
      
      @keyframes burst-rotate {
        0% { transform: scale(0) rotate(0deg); }
        50% { transform: scale(1.2) rotate(180deg); }
        100% { transform: scale(1) rotate(360deg); }
      }
      
      @keyframes ray-extend {
        0% { height: 0; opacity: 0; }
        50% { height: 120px; opacity: 1; }
        100% { height: 100px; opacity: 0.8; }
      }
      
      .fire-particle-intro {
        position: absolute;
        width: 6px;
        height: 6px;
        background: radial-gradient(circle, #ffd700 0%, #ff8c42 50%, #ff4500 100%);
        border-radius: 50%;
        animation: particle-float infinite ease-in-out;
        box-shadow: 0 0 8px #ff6b35;
      }
      
      @keyframes particle-float {
        0%, 100% {
          transform: translateY(0) scale(1);
          opacity: 0.8;
        }
        50% {
          transform: translateY(-30px) scale(1.2);
          opacity: 1;
        }
      }
    `}</style>
  </div>
);

const IntroLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showExplosion, setShowExplosion] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setShowExplosion(true);
          setTimeout(() => {
            onComplete();
          }, 800);
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Fire Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-orange-900/30 to-yellow-900/30">
        <div className="fire-container">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="fire-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Fire Explosion Effect */}
      {showExplosion && <FireExplosion />}

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Hindi Meme */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-12"
        >
          <div className="glassmorphism p-8 rounded-2xl border-2 border-orange-500/50 bg-gradient-to-br from-orange-900/40 to-red-900/40">
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4"
              animate={{ 
                textShadow: [
                  "0 0 10px #ffd700",
                  "0 0 20px #ff8c42", 
                  "0 0 10px #ffd700"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              "रुको भाई... बस 2 मिनट! 🔥"
            </motion.h1>
            <motion.p
              className="text-lg text-orange-300 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              "Website load ho rahi hai... Patience रखो! 💻✨"
            </motion.p>
            <motion.p
              className="text-sm text-gray-400 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              - Every developer's favorite loading message
            </motion.p>
          </div>
        </motion.div>

        {/* Train Track Loading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-8"
        >
          <TrainTrack />
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="w-full max-w-md mx-auto mb-6"
        >
          <div className="relative">
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden border border-orange-500/30">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full relative"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              >
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse opacity-75"></div>
                {/* Moving highlight */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-pulse"></div>
              </motion.div>
            </div>
            
            {/* Progress Text */}
            <motion.div
              className="text-center mt-3"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <span className="text-orange-300 font-bold text-lg">
                {progress}%
              </span>
              <span className="text-gray-400 text-sm ml-2">
                Loading amazing content...
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center space-x-2"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-orange-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Fun Loading Messages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8"
        >
          <motion.p
            className="text-gray-400 text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {progress < 30 && "🔥 Igniting the servers..."}
            {progress >= 30 && progress < 60 && "⚡ Charging up the DevOps magic..."}
            {progress >= 60 && progress < 90 && "🚀 Almost ready for takeoff..."}
            {progress >= 90 && "✨ Final touches of awesomeness..."}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroLoader;