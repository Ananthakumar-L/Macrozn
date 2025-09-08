
import React from 'react';
import { X, Check, PhoneCall, Mail, MessageSquare, Users, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const ProblemStatement = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-white" id="problem">
      <div className="container-section relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.div variants={itemVariants} className="section-tag">
            Why Traditional Development Approaches Fall Short
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="heading-lg text-macrozn-dark-blue mb-6"
          >
            Legacy Development Is Holding You Back. <br />
            <span className="text-macrozn-purple font-extrabold">Modern AI-Powered Solutions</span> Propel You Forward.
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-macrozn-dark-blue/80 text-lg mb-8 max-w-2xl mx-auto"
          >
            Outdated development practices and slow delivery cycles can't keep up with today's fast-paced business needs. Macrozn delivers cutting-edge solutions with AI integration at their core.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Traditional Cold Outbound - simplified box */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#F9F6F3] rounded-[20px] p-8 border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-red-50 px-4 py-2 rounded-bl-2xl">
              <X className="w-5 h-5 text-[#EA384C]" />
            </div>
            
            <h3 className="heading-sm text-macrozn-dark-blue mb-8 flex items-center">
              Traditional Development Approach
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-macrozn-dark-blue">Months-long development cycles</p>
                  <p className="text-macrozn-dark-blue/70 mt-1">Slow delivery, missed opportunities</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-macrozn-dark-blue">Outdated technology stacks</p>
                  <p className="text-macrozn-dark-blue/70 mt-1">Legacy systems that can't scale</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-macrozn-dark-blue">No AI integration capabilities</p>
                  <p className="text-macrozn-dark-blue/70 mt-1">Missing competitive advantages</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <PhoneCall className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">Slow Delivery</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <Mail className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">Legacy Tech</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <MessageSquare className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">No AI Integration</div>
              </div>
            </div>
            
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#EA384C]"></div>
          </motion.div>
          
          {/* AI Organic Outbound - simplified box */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#F9F6F3] rounded-[20px] p-8 border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-macrozn-purple/10 px-4 py-2 rounded-bl-2xl">
              <Check className="w-5 h-5 text-macrozn-purple" />
            </div>
            
            <h3 className="heading-sm text-macrozn-dark-blue mb-8 flex items-center">
              Modern AI-Powered Development
              <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-macrozn-purple/10 text-macrozn-purple rounded-full">Macrozn</span>
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-macrozn-purple/10 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-macrozn-purple" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-macrozn-dark-blue">Rapid deployment & delivery</p>
                  <p className="text-macrozn-dark-blue/70 mt-1">Advanced development frameworks</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-macrozn-purple/10 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-macrozn-purple" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-macrozn-dark-blue">Cutting-edge technology stacks</p>
                  <p className="text-macrozn-dark-blue/70 mt-1">Scalable, future-proof solutions</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-macrozn-purple/10 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-macrozn-purple" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-macrozn-dark-blue">AI & ML integration expertise</p>
                  <p className="text-macrozn-dark-blue/70 mt-1">Smart automation and intelligence</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="aspect-square flex flex-col items-center justify-center bg-macrozn-purple/5 rounded-xl p-3">
                <Users className="w-8 h-8 text-macrozn-purple mb-2" />
                <div className="text-sm text-center text-macrozn-purple font-medium">Web Dev</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-macrozn-purple/5 rounded-xl p-3">
                <Zap className="w-8 h-8 text-macrozn-purple mb-2" />
                <div className="text-sm text-center text-macrozn-purple font-medium">Software Dev</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-macrozn-purple/5 rounded-xl p-3">
                <BarChart3 className="w-8 h-8 text-macrozn-purple mb-2" />
                <div className="text-sm text-center text-macrozn-purple font-medium">AI & ML</div>
              </div>
            </div>
            
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-macrozn-purple"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;
