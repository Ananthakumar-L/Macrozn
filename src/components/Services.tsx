import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies like React, Node.js, and cloud platforms.",
      icon: "🌐"
    },
    {
      title: "Software Development", 
      description: "Custom software solutions designed to streamline operations, enhance productivity, and scale with your business needs.",
      icon: "💻"
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent automation, predictive analytics, and AI-powered features that give your business a competitive edge.",
      icon: "🤖"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 bg-gray-50" id="services">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-macrozn-dark-blue mb-4">Our Services</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive IT solutions tailored to accelerate your digital transformation and drive business growth.
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <motion.div 
                className="text-3xl md:text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold text-macrozn-dark-blue mb-3 group-hover:text-macrozn-purple transition-colors duration-300">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;