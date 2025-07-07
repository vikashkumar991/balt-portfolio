import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vikash.kumar@example.com', label: 'Email' },
    { icon: Phone, href: 'tel:+919876543210', label: 'Phone' },
  ];

  return (
    <footer className="relative bg-gray-900 py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Vikash Kumar Singh
                </span>
              </h3>
              <p className="text-gray-400 mb-4">
                DevOps & Backend Developer passionate about building scalable infrastructure 
                and automating complex systems.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <p className="text-gray-400 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  vikash.kumar@example.com
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 9876543210
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center space-x-6 mb-8"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="p-3 bg-white/10 rounded-full hover:bg-orange-500/20 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <link.icon className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Vikash
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 Vikash Kumar Singh. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;