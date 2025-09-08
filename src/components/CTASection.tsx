import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    "Custom web development with modern frameworks",
    "AI & ML integration for intelligent automation", 
    "Full-stack software solutions that scale"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6" id="cta">
      <div className="container mx-auto max-w-5xl">
        <div className="rounded-2xl overflow-hidden relative bg-macrozn-dark-blue">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/eada8c8b-332c-4ac7-813d-42884f942368.png" 
              alt="Team Collaboration" 
              className="w-full h-full object-cover object-center opacity-50"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-macrozn-dark-blue via-macrozn-dark-blue/90 to-macrozn-dark-blue/80"></div>
          </div>
          
          <div className="relative z-10 p-6 md:p-8 lg:p-10 text-white">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="max-w-lg"
            >
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center px-4 py-2 rounded-full bg-macrozn-purple/20 text-macrozn-purple mb-6"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                </motion.div>
                <span className="text-sm font-medium font-inter tracking-wide">Transform Your Business Today</span>
              </motion.div>
              
              <motion.h2 
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight"
              >
                Ready to Transform Your 
                <span className="text-[#EA384C] font-extrabold"> Ideas </span> 
                into 
                <span className="text-macrozn-purple font-extrabold"> Innovation</span>?
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-base md:text-lg text-gray-100 mb-6 px-4 sm:px-0"
              >
                Join forward-thinking companies who have accelerated their digital transformation with our AI-powered solutions.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col space-y-3 mb-6"
              >
                {benefits.map((benefit, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-5 h-5 text-macrozn-purple mr-2 flex-shrink-0" />
                    </motion.div>
                    <span className="text-gray-100 text-sm font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.a
                href="https://forms.gle/ZD3Loct8GSM8z5859"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(105, 54, 245, 0.3)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="button-primary flex items-center text-base md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-lg shadow-macrozn-purple/10 hover:shadow-xl hover:shadow-macrozn-purple/20 rounded-full group w-full sm:w-auto justify-center"
              >
                Get Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;