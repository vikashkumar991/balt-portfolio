import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Code, Server } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DevOps Infrastructure Pipeline",
      description: "Complete CI/CD pipeline with Docker, Kubernetes, and Jenkins for automated deployment and scaling.",
      tech: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
      demo: "#",
      github: "#",
      icon: Server,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Microservices Backend",
      description: "Scalable microservices architecture with API Gateway, service mesh, and distributed logging.",
      tech: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
      demo: "#",
      github: "#",
      icon: Code,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud Monitoring Dashboard",
      description: "Real-time monitoring and alerting system for cloud infrastructure with custom metrics.",
      tech: ["Prometheus", "Grafana", "ElasticSearch", "Kibana", "AWS"],
      demo: "#",
      github: "#",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Deployment Platform",
      description: "Self-service deployment platform with GitOps workflow and automated rollback capabilities.",
      tech: ["GitLab CI", "ArgoCD", "Helm", "Kubernetes", "Istio"],
      demo: "#",
      github: "#",
      icon: Server,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Serverless API Gateway",
      description: "High-performance API gateway with rate limiting, authentication, and request routing.",
      tech: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudWatch"],
      demo: "#",
      github: "#",
      icon: Zap,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Infrastructure as Code",
      description: "Complete infrastructure automation using Terraform with multi-environment support.",
      tech: ["Terraform", "AWS", "CloudFormation", "Ansible"],
      demo: "#",
      github: "#",
      icon: Code,
      color: "from-teal-500 to-blue-500"
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
      {/* Thunderstorm Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-indigo-900/20">
        <div className="lightning-container">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="lightning-bolt"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${0.5 + Math.random() * 1}s`
              }}
            />
          ))}
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
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
              className="group glassmorphism p-6 rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="relative">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${project.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm hover:bg-white/20 transition-all duration-300"
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