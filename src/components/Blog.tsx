import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, User } from 'lucide-react';

const EnhancedSmokeEffect: React.FC = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="animate-smoke enhanced-smoke"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: 80 + Math.random() * 120,
          height: 80 + Math.random() * 120,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${8 + Math.random() * 12}s`,
        }}
      >
        <div className="smoke-core"></div>
      </div>
    ))}
    <style>{`
      @keyframes smoke {
        0% { 
          transform: translateY(0) scale(0.6) rotate(0deg); 
          opacity: 0.4; 
        }
        25% { 
          transform: translateY(-30px) scale(0.9) rotate(90deg); 
          opacity: 0.3; 
        }
        50% { 
          transform: translateY(-60px) scale(1.3) rotate(180deg); 
          opacity: 0.2; 
        }
        75% { 
          transform: translateY(-90px) scale(1.6) rotate(270deg); 
          opacity: 0.1; 
        }
        100% { 
          transform: translateY(-120px) scale(2) rotate(360deg); 
          opacity: 0; 
        }
      }
      
      .animate-smoke {
        animation: smoke linear infinite;
      }
      
      .enhanced-smoke {
        filter: blur(1px);
      }
      
      .smoke-core {
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 30% 30%, 
          rgba(255, 140, 66, 0.15) 0%,
          rgba(255, 107, 53, 0.12) 25%,
          rgba(255, 69, 0, 0.08) 50%,
          rgba(255, 165, 102, 0.05) 75%,
          transparent 100%
        );
        border-radius: 50%;
        box-shadow: 
          0 0 40px rgba(255, 140, 66, 0.1),
          inset 0 0 20px rgba(255, 107, 53, 0.05);
      }
    `}</style>
  </div>
);

const EnhancedFloatingBubbles: React.FC = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
    {[...Array(35)].map((_, i) => (
      <div
        key={i}
        className="floating-bubble enhanced-bubble"
        style={{
          left: `${(i * 2.8) % 100}%`,
          animationDelay: `${(i * 0.3) % 8}s`,
          animationDuration: `${8 + (i % 4) * 2}s`,
          top: `${Math.random() * 100}%`,
        }}
      >
        <div 
          className="bubble-inner enhanced-bubble-inner"
          style={{
            width: 20 + (i % 5) * 15,
            height: 20 + (i % 5) * 15,
          }}
        />
      </div>
    ))}
    <style>{`
      .floating-bubble {
        position: absolute;
        bottom: -50px;
        animation: bubble-float linear infinite;
        z-index: 25;
      }
      
      .bubble-inner {
        background: radial-gradient(circle at 30% 30%, 
          rgba(255, 107, 53, 0.6), 
          rgba(255, 140, 66, 0.4), 
          rgba(255, 165, 102, 0.3),
          rgba(255, 215, 0, 0.2),
          transparent
        );
        border-radius: 50%;
        filter: blur(0.3px);
        opacity: 0.9;
      }
      
      .enhanced-bubble-inner {
        box-shadow: 
          0 0 20px rgba(255, 140, 66, 0.6),
          0 0 40px rgba(255, 107, 53, 0.4),
          0 0 60px rgba(255, 69, 0, 0.2),
          inset 0 0 15px rgba(255, 215, 0, 0.2);
        animation: bubble-glow 2s ease-in-out infinite alternate;
      }
      
      @keyframes bubble-glow {
        0% { 
          box-shadow: 
            0 0 20px rgba(255, 140, 66, 0.6),
            0 0 40px rgba(255, 107, 53, 0.4),
            0 0 60px rgba(255, 69, 0, 0.2);
        }
        100% { 
          box-shadow: 
            0 0 30px rgba(255, 140, 66, 0.8),
            0 0 60px rgba(255, 107, 53, 0.6),
            0 0 90px rgba(255, 69, 0, 0.4);
        }
      }
      
      @keyframes bubble-float {
        0% { 
          transform: translateY(0) translateX(0) scale(0.3); 
          opacity: 0; 
        }
        10% { 
          opacity: 0.9; 
          transform: translateY(-100px) translateX(5px) scale(0.5);
        }
        20% { 
          opacity: 1; 
          transform: translateY(-200px) translateX(10px) scale(0.7);
        }
        80% { 
          opacity: 0.8; 
          transform: translateY(-70vh) translateX(30px) scale(1.0);
        }
        95% { 
          opacity: 0.4; 
          transform: translateY(-90vh) translateX(40px) scale(1.2);
        }
        100% { 
          transform: translateY(-100vh) translateX(50px) scale(1.4); 
          opacity: 0; 
        }
      }
      
      .enhanced-bubble {
        animation: bubble-float linear infinite, bubble-sway 6s ease-in-out infinite;
      }
      
      @keyframes bubble-sway {
        0%, 100% { 
          transform: translateX(0) rotate(0deg); 
        }
        25% { 
          transform: translateX(15px) rotate(5deg); 
        }
        50% { 
          transform: translateX(30px) rotate(0deg); 
        }
        75% { 
          transform: translateX(15px) rotate(-5deg); 
        }
      }
    `}</style>
  </div>
);

const Blog = () => {
  const blogPosts = [
    {
      title: "How I Built My Own DevOps Lab",
      excerpt: "Setting up a complete DevOps environment from scratch using Docker, Kubernetes, and CI/CD pipelines.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "DevOps",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Linux Commands You Should Know",
      excerpt: "Essential Linux commands that every developer and system administrator should master for daily operations.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Linux",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Scaling Node.js Applications",
      excerpt: "Best practices for scaling Node.js applications in production environments with real-world examples.",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "Backend",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Kubernetes Security Best Practices",
      excerpt: "A comprehensive guide to securing your Kubernetes clusters and following security best practices.",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Security",
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Infrastructure as Code with Terraform",
      excerpt: "Learn how to manage cloud infrastructure using Terraform and follow IaC best practices.",
      date: "2023-12-20",
      readTime: "15 min read",
      category: "Infrastructure",
      color: "from-red-600 to-orange-600"
    },
    {
      title: "Building Resilient Microservices",
      excerpt: "Design patterns and strategies for building fault-tolerant microservices architecture.",
      date: "2023-12-15",
      readTime: "11 min read",
      category: "Architecture",
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="blog" className="relative py-20 overflow-hidden">
      {/* Background with Smoke Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20"></div>
      
      <EnhancedSmokeEffect />
      <EnhancedFloatingBubbles />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-orange-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Blog & Articles
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg">
            Sharing knowledge and experiences from the tech world
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group glassmorphism p-6 rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 border border-orange-500/20"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${post.color} text-white`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-orange-500/20">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <User className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  
                  <motion.button
                    className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glassmorphism p-8 rounded-2xl max-w-2xl mx-auto border border-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to stay updated?
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to my newsletter for the latest articles on DevOps, Backend Development, and Cloud Technologies.
            </p>
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;