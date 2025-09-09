import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-8 md:py-12 px-4 sm:px-6" id="contact">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-macrozn-dark-blue mb-4">Get In Touch</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Ready to transform your business with cutting-edge technology? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-macrozn-dark-blue mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-macrozn-dark-blue">Email</h4>
                  <p className="text-gray-600">contact@macrozn.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-macrozn-dark-blue">Office</h4>
                  <p className="text-gray-600">Coimbatore, Tamil Nadu<br/>India</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-macrozn-dark-blue mb-6">Start Your Project</h3>
              <p className="text-gray-600 mb-6">
                Schedule a free consultation to discuss how we can help bring your vision to life with our expertise in web development, software solutions, and AI integration.
              </p>
              <motion.a
                href="https://forms.gle/ZD3Loct8GSM8z5859"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary flex items-center justify-center w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;