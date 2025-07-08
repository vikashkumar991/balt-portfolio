import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Zap, Code, Server, Terminal, Bot, Globe, Container, Cpu, Brain, Monitor } from 'lucide-react';

const OrangeThunder: React.FC = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="thunder-bolt-orange"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${0.3 + Math.random() * 0.5}s`
        }}
      />
    ))}
    <style>{`
      .thunder-bolt-orange {
        position: absolute;
        width: 3px;
        height: 100%;
        background: linear-gradient(to bottom, 
          transparent, 
          rgba(255, 107, 53, 0.9), 
          rgba(255, 140, 66, 0.7), 
          rgba(255, 165, 102, 0.5),
          transparent
        );
        animation: thunder-strike infinite;
        opacity: 0;
        box-shadow: 0 0 10px rgba(255, 107, 53, 0.8);
      }
      @keyframes thunder-strike {
        0%, 90%, 100% { opacity: 0; }
        5%, 10% { opacity: 1; }
        15% { opacity: 0.7; }
        20% { opacity: 0; }
      }
    `}</style>
  </div>
);

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const allProjects = [
    {
      title: "Multi-tool AI Platform",
      description: "A comprehensive multi-tool platform with text generation, Dockerfile creation, remote Linux command execution, social media messaging, and remote Docker management.",
      tech: ["Python", "Streamlit", "Docker", "Gen-AI", "Linux"],
      demo: "https://www.linkedin.com/posts/vikash-kumar-singh-784146290_devops-ai-geminiai-activity-7345924663073492992-2Vk6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ__NQBUPzDFDFyMk0fmXMLcHOnSbPc6k0",
      github: "https://github.com/vikashkumar991/summer-intership-linux-world-2025/blob/main/GenAi-Prompt-MasterClass/streamlit_multitool.py",
      icon: Bot,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Flask CI/CD Pipeline",
      description: "Automated CI/CD pipeline using Jenkins for Flask application deployment with Docker containerization and port mapping on RHEL9.",
      tech: ["Python", "Jenkins", "Docker", "Flask", "RHEL9"],
      demo: "https://www.linkedin.com/posts/vikash-kumar-singh-784146290_docker-flask-devops-activity-7348102565567336448-e5D5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ__NQBUPzDFDFyMk0fmXMLcHOnSbPc6k0",
      github: "https://github.com/vikashkumar991/jenkins-first-pipeline.git",
      icon: Code,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "HTTPD Web Server",
      description: "Dockerized Apache HTTPD web server hosting a simple portfolio website with container orchestration on RHEL9.",
      tech: ["Docker", "HTTPD", "RHEL9", "Apache", "HTML/CSS"],
      demo: "https://www.linkedin.com/posts/vikash-kumar-singh-784146290_devops-docker-webserver-activity-7345564078792155137-2UYi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ__NQBUPzDFDFyMk0fmXMLcHOnSbPc6k0",
      github: null,
      icon: Globe,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Docker-in-Docker (DinD)",
      description: "Python-based Docker management menu system running inside Docker containers with Docker-in-Docker capabilities for nested containerization.",
      tech: ["Docker", "Linux", "Python", "RHEL", "Container Management"],
      demo: "https://www.linkedin.com/posts/vikash-kumar-singh-784146290_docker-devops-python-activity-7345543468414353409-Sy4i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ__NQBUPzDFDFyMk0fmXMLcHOnSbPc6k0",
      github: null,
      icon: Container,
      color: "from-orange-600 to-red-600"
    },
    {
      title: "AI Code Generator",
      description: "Intelligent code generation tool powered by generative AI and Gradio interface for creating remaining code snippets and completing projects.",
      tech: ["Gen-AI", "Python", "Gradio", "LLM", "Prompt Engineering"],
      demo: "https://www.linkedin.com/posts/vikash-kumar-singh-784146290_genai-googlegemini-python-activity-7345405301245755392-bc5e?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ__NQBUPzDFDFyMk0fmXMLcHOnSbPc6k0",
      github: "https://github.com/vikashkumar991/summer-intership-linux-world-2025/blob/main/GenAi-Prompt-MasterClass/code-editor.py",
      icon: Brain,
      color: "from-red-600 to-orange-600"
    },
    {
      title: "AI Project Manager",
      description: "Smart project management tool providing AI-powered suggestions and advice for project planning and execution using generative AI.",
      tech: ["Python", "Gen-AI", "Gradio", "LLM", "Project Management"],
      demo: "https://www.linkedin.com/posts/vikash-kumar-singh-784146290_ai-gemini-python-activity-7345191774480408576-hJ2K?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ__NQBUPzDFDFyMk0fmXMLcHOnSbPc6k0",
      github: "https://github.com/vikashkumar991/summer-intership-linux-world-2025/blob/main/GenAi-Prompt-MasterClass/Untitled.ipynb",
      icon: Zap,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Remote Docker Manager",
      description: "Streamlit-based tool for remote Docker container management via SSH connections, providing full Docker lifecycle control from anywhere.",
      tech: ["Python", "SSH", "Docker", "Streamlit", "Remote Management"],
      demo: "https://www.linkedin.com/posts/vikash-kumar-singh-784146290_linuxworld-vimaldagasir-devops-activity-7345163489528659969-CXvE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ__NQBUPzDFDFyMk0fmXMLcHOnSbPc6k0",
      github: "https://github.com/vikashkumar991/summer-intership-linux-world-2025/blob/main/python-projects-all/docker_streamlit.py",
      icon: Monitor,
      color: "from-purple-500 to-orange-500"
    },
    {
      title: "Productivity Predictor",
      description: "Machine learning model for predicting productivity issues in office environments with real-time analysis and recommendations.",
      tech: ["Python", "Machine Learning", "Streamlit", "Data Analysis", "Predictive Modeling"],
      demo: "https://www.linkedin.com/posts/vikash-kumar-singh-784146290_machinelearning-streamlit-python-activity-7345183462372360192-YKe-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ__NQBUPzDFDFyMk0fmXMLcHOnSbPc6k0",
      github: "https://github.com/vikashkumar991/summer-intership-linux-world-2025/blob/main/python-projects-all/streamlit-job-productivity.py",
      icon: Cpu,
      color: "from-blue-500 to-orange-500"
    },
    {
      title: "Linux Command Executor",
      description: "Secure remote Linux command execution platform with real-time output streaming and multi-server management capabilities.",
      tech: ["Python", "Linux", "SSH", "Security", "System Administration"],
      demo: "#",
      github: "#",
      icon: Terminal,
      color: "from-green-500 to-orange-500"
    },
    {
      title: "Social Media Automation",
      description: "Automated social media posting and management tool with multi-platform support and scheduled content delivery.",
      tech: ["Python", "APIs", "Automation", "Social Media", "Scheduling"],
      demo: "#",
      github: "#",
      icon: Globe,
      color: "from-pink-500 to-orange-500"
    },
    {
      title: "Container Orchestration Suite",
      description: "Complete container orchestration platform with monitoring, scaling, and deployment automation for enterprise environments.",
      tech: ["Docker", "Kubernetes", "Monitoring", "Automation", "DevOps"],
      demo: "#",
      github: "#",
      icon: Server,
      color: "from-indigo-500 to-orange-500"
    },
    {
      title: "AI Model Training Pipeline",
      description: "End-to-end machine learning pipeline for model training, validation, and deployment with automated hyperparameter tuning.",
      tech: ["Python", "ML Pipeline", "Model Training", "Automation", "MLOps"],
      demo: "#",
      github: "#",
      icon: Brain,
      color: "from-teal-500 to-orange-500"
    }
  ];

  const visibleProjects = showMore ? allProjects : allProjects.slice(0, 6);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20"></div>

      <OrangeThunder />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg">
            Building innovative solutions with cutting-edge technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
                className="group glassmorphism p-6 rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 border border-orange-500/20"
              >
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${project.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-orange-500/20 rounded-full text-xs text-orange-300 hover:bg-orange-500/30 transition-colors border border-orange-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                    {project.github && (
                      <motion.a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm hover:bg-orange-500/20 transition-all duration-300 border border-orange-500/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {!showMore && allProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowMore(true)}
              className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3">
                <span>Load More Projects</span>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.button>
          </motion.div>
        )}

        {/* Show Less Button */}
        {showMore && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowMore(false)}
              className="group bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-500/20 transition-all duration-300 transform hover:scale-105 border border-orange-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3">
                <span>Show Less</span>
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Code className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.button>
          </motion.div>
        )}

        {/* Hindi Tech Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism p-8 rounded-2xl max-w-4xl mx-auto border border-orange-500/20">
            <h3 className="text-2xl font-bold text-orange-300 mb-4">
              "Code karo, deploy karo, aur phir... debug karo! 🚀💻"
            </h3>
            <p className="text-gray-400 italic">
              - The eternal cycle of a DevOps engineer's life
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;