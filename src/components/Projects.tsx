import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Code, Server } from 'lucide-react';

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
  const projects = [
    {
      title: "DevOps Infrastructure Pipeline",
      description: "Complete CI/CD pipeline with Docker, Kubernetes, and Jenkins for automated deployment and scaling.",
      tech: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
      demo: "#",
      github: "#",
      icon: Server,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Microservices Backend",
      description: "Scalable microservices architecture with API Gateway, service mesh, and distributed logging.",
      tech: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
      demo: "#",
      github: "#",
      icon: Code,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud Monitoring Dashboard",
      description: "Real-time monitoring and alerting system for cloud infrastructure with custom metrics.",
      tech: ["Prometheus", "Grafana", "ElasticSearch", "Kibana", "AWS"],
      demo: "#",
      github: "#",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Automated Deployment Platform",
      description: "Self-service deployment platform with GitOps workflow and automated rollback capabilities.",
      tech: ["GitLab CI", "ArgoCD", "Helm", "Kubernetes", "Istio"],
      demo: "#",
      github: "#",
      icon: Server,
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Serverless API Gateway",
      description: "High-performance API gateway with rate limiting, authentication, and request routing.",
      tech: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudWatch"],
      demo: "#",
      github: "#",
      icon: Zap,
      color: "from-red-600 to-orange-600"
    },
    {
      title: "Infrastructure as Code",
      description: "Complete infrastructure automation using Terraform with multi-environment support.",
      tech: ["Terraform", "AWS", "CloudFormation", "Ansible"],
      demo: "#",
      github: "#",
      icon: Code,
      color: "from-orange-500 to-yellow-500"
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Fire Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20">
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
            Building the future of infrastructure, one deployment at a time
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
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
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm hover:bg-orange-500/20 transition-all duration-300 border border-orange-500/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;