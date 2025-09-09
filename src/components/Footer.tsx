import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const columnVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const quickLinks = [
    { href: "#how-it-works", label: "Our Process" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact Us" },
    { href: "#careers", label: "Careers" }
  ];

  const serviceLinks = [
    { href: "#services", label: "Web Development" },
    { href: "#services", label: "Software Development" },
    { href: "#services", label: "AI & Machine Learning" },
    { href: "#contact", label: "Custom Solutions" }
  ];

  const legalLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" }
  ];

  const socialLinks = [
    {
      href: "https://twitter.com/macrozn",
      label: "Follow us on Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      href: "https://linkedin.com/company/macrozn",
      label: "Follow us on LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-white py-6 md:py-8 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-6"
        >
          {/* Company Info */}
          <motion.div 
            variants={columnVariants}
            className="md:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="logo.jpg" 
                alt="Macrozn Logo" 
                className="h-8"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-macrozn-dark-blue">Macrozn</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Transforming businesses through innovative AI-powered solutions and cutting-edge web development.
            </p>
            <p className="text-xs text-gray-500">© {currentYear} Macrozn. All rights reserved.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={columnVariants}
          >
            <h4 className="font-semibold text-macrozn-dark-blue mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="block text-gray-600 hover:text-macrozn-purple transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div 
            variants={columnVariants}
          >
            <h4 className="font-semibold text-macrozn-dark-blue mb-4">Services</h4>
            <div className="space-y-2">
              {serviceLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="block text-gray-600 hover:text-macrozn-purple transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div 
            variants={columnVariants}
          >
            <h4 className="font-semibold text-macrozn-dark-blue mb-4">Connect With Us</h4>
            <div className="space-y-3 mb-4">
              <p className="text-gray-600 text-sm">contact@macrozn.com</p>
              <p className="text-gray-600 text-sm">hr@macrozn.com</p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-macrozn-purple transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Bottom Border */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex space-x-6 mb-4 md:mb-0"
            >
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-500 hover:text-macrozn-purple transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm"
            >
              Made by Macrozn Team
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;