import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Coffee } from 'lucide-react';
import { FaDocker, FaAws } from 'react-icons/fa';
import { SiKubernetes, SiJenkins, SiTerraform } from 'react-icons/si';

const devOpsIcons = [
  { icon: FaDocker, color: '#2496ed', label: 'Docker' },
  { icon: SiKubernetes, color: '#326ce5', label: 'Kubernetes' },
  { icon: FaAws, color: '#ff9900', label: 'AWS' },
  { icon: SiJenkins, color: '#d33833', label: 'Jenkins' },
  { icon: SiTerraform, color: '#623ce4', label: 'Terraform' },
];

const OrbitDevOps: React.FC = () => (
  <div className="relative w-80 h-80 mx-auto mb-8">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
      <circle cx="160" cy="160" r="120" fill="none" stroke="#38bdf8" strokeDasharray="4 8" strokeWidth="2" />
    </svg>
    {/* Orbiting Icons */}
    <div className="absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
      {devOpsIcons.map((item, i) => {
        const angle = (2 * Math.PI * i) / devOpsIcons.length;
        const radius = 120;
        const x = 160 + radius * Math.cos(angle) - 16; // 16 = icon size/2
        const y = 160 + radius * Math.sin(angle) - 16;
        return (
          <span
            key={item.label}
            className="absolute animate-orbit"
            style={{
              left: x,
              top: y,
              animationDelay: `${i * 0.5}s`,
              width: 32,
              height: 32,
            }}
          >
            <item.icon size={32} color={item.color} title={item.label} />
          </span>
        );
      })}
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateY(0); }
          100% { transform: rotate(360deg) translateY(0); }
        }
        .animate-orbit {
          animation: orbit 10s linear infinite;
          transform-origin: 0 0;
        }
      `}</style>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Ocean Wave Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20">
        {/* Remove or comment out the blue/cyan overlay for full theme unification */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-cyan-900/30 to-teal-900/30" /> */}
        <div className="wave-container">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar/Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="relative w-80 h-80 mx-auto mb-8">
              <OrbitDevOps />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1 animate-pulse">
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                  <User className="w-32 h-32 text-blue-400" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center animate-bounce">
                <Coffee className="w-8 h-8 text-black" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glassmorphism p-8 rounded-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a passionate DevOps and Backend Developer with a strong foundation in automation, 
                cloud infrastructure, and scalable backend systems. My expertise lies in bridging the 
                gap between development and operations, creating seamless CI/CD pipelines and robust 
                backend architectures.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                With extensive experience in containerization, orchestration, and cloud platforms, 
                I specialize in building resilient, scalable, and efficient infrastructure solutions. 
                I believe in automation-first approaches and love solving complex problems with elegant solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-500/30">
                  <h4 className="text-blue-300 font-semibold mb-2">Focus Areas</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• DevOps & CI/CD</li>
                    <li>• Backend Development</li>
                    <li>• Cloud Infrastructure</li>
                  </ul>
                </div>
                <div className="bg-cyan-500/20 p-4 rounded-lg border border-cyan-500/30">
                  <h4 className="text-cyan-300 font-semibold mb-2">Passion</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Automation</li>
                    <li>• Problem Solving</li>
                    <li>• Innovation</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;