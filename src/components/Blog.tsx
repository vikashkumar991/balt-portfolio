import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "How I Built My Own DevOps Lab",
      excerpt: "Setting up a complete DevOps environment from scratch using Docker, Kubernetes, and CI/CD pipelines.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "DevOps",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Linux Commands You Should Know",
      excerpt: "Essential Linux commands that every developer and system administrator should master for daily operations.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Linux",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Scaling Node.js Applications",
      excerpt: "Best practices for scaling Node.js applications in production environments with real-world examples.",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "Backend",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Kubernetes Security Best Practices",
      excerpt: "A comprehensive guide to securing your Kubernetes clusters and following security best practices.",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Security",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Infrastructure as Code with Terraform",
      excerpt: "Learn how to manage cloud infrastructure using Terraform and follow IaC best practices.",
      date: "2023-12-20",
      readTime: "15 min read",
      category: "Infrastructure",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Building Resilient Microservices",
      excerpt: "Design patterns and strategies for building fault-tolerant microservices architecture.",
      date: "2023-12-15",
      readTime: "11 min read",
      category: "Architecture",
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="blog" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-purple-900/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-indigo-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Blog & Articles
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
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
              className="group glassmorphism p-6 rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20"
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
                
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <User className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  
                  <motion.button
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group"
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
          <div className="glassmorphism p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to stay updated?
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to my newsletter for the latest articles on DevOps, Backend Development, and Cloud Technologies.
            </p>
            <motion.button
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
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