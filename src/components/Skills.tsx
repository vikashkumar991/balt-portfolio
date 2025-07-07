import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Database, Cloud, Container, 
  Code, Terminal, Cpu, Network,
  GitBranch, Shield, Zap, Settings
} from 'lucide-react';

const FireStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    const STAR_COUNT = 60;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.2 + 0.8,
      speed: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.5,
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const star of stars) {
        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#ff6b35';
        ctx.shadowColor = '#ff8c42';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        star.y += star.speed;
        if (star.y > window.innerHeight) {
          star.y = -star.r;
          star.x = Math.random() * window.innerWidth;
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Server,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Node.js", level: 90, icon: Code },
        { name: "Python", level: 85, icon: Code },
        { name: "Java", level: 80, icon: Code },
        { name: "Express.js", level: 88, icon: Zap },
      ]
    },
    {
      title: "DevOps & Infrastructure",
      icon: Container,
      color: "from-red-500 to-orange-500",
      skills: [
        { name: "Docker", level: 92, icon: Container },
        { name: "Kubernetes", level: 85, icon: Network },
        { name: "Jenkins", level: 88, icon: GitBranch },
        { name: "Terraform", level: 82, icon: Settings },
      ]
    },
    {
      title: "Cloud & Databases",
      icon: Cloud,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "AWS", level: 87, icon: Cloud },
        { name: "MongoDB", level: 85, icon: Database },
        { name: "PostgreSQL", level: 83, icon: Database },
        { name: "Redis", level: 80, icon: Cpu },
      ]
    },
    {
      title: "Tools & Security",
      icon: Shield,
      color: "from-orange-600 to-red-600",
      skills: [
        { name: "Git", level: 95, icon: GitBranch },
        { name: "Linux", level: 90, icon: Terminal },
        { name: "Monitoring", level: 85, icon: Cpu },
        { name: "Security", level: 78, icon: Shield },
      ]
    }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Fire Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20">
        <div className="fire-container">
          {[...Array(20)].map((_, i) => (
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
      
      {/* Fire Stars */}
      <FireStars />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glassmorphism p-6 rounded-2xl hover:scale-105 transition-all duration-300 border border-orange-500/20"
            >
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-orange-400 group-hover:text-white transition-colors" />
                        <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-orange-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-orange-500/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              <Code className="w-8 h-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;