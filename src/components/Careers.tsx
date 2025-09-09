import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Code, Palette, Brain, Database, Shield, Smartphone } from 'lucide-react';

const Careers = () => {
  const careerStats = [
    {
      number: "13+",
      label: "Intern Positions",
      description: "Start your career journey with hands-on experience in cutting-edge technology",
      role: "Full Stack Developer Intern",
      location: "Remote / Hybrid",
      icon: Code,
      formLink: "https://forms.gle/J8Ycqgh9eZmcoFqP9"
    },
    {
      number: "Learn",
      label: "& Grow",
      description: "Work alongside experienced professionals and build real-world solutions",
      role: "Software Developer Intern", 
      location: "Remote / Hybrid",
      icon: Code,
      formLink: "https://forms.gle/J8Ycqgh9eZmcoFqP9"
    },
    {
      number: "Build",
      label: "Mobile Apps",
      description: "Create innovative mobile applications for iOS and Android platforms",
      role: "Mobile App Developer Intern",
      location: "Remote / Hybrid", 
      icon: Smartphone,
      formLink: "https://forms.gle/J8Ycqgh9eZmcoFqP9"
    },
    {
      number: "Data",
      label: "Insights",
      description: "Analyze data patterns and create meaningful insights from complex datasets",
      role: "Data Science Intern",
      location: "Remote / Hybrid",
      icon: Database,
      formLink: "https://forms.gle/J8Ycqgh9eZmcoFqP9"
    },
    {
      number: "AI/ML",
      label: "Innovation",
      description: "Work on artificial intelligence and machine learning projects",
      role: "AI / Machine Learning Intern",
      location: "Remote / Hybrid",
      icon: Brain,
      formLink: "https://forms.gle/J8Ycqgh9eZmcoFqP9"
    },
    {
      number: "Design",
      label: "Experiences",
      description: "Create beautiful and intuitive user interfaces and experiences",
      role: "UI/UX Designer Intern",
      location: "Remote / Hybrid", 
      icon: Palette,
      formLink: "https://forms.gle/J8Ycqgh9eZmcoFqP9"
    },
    {
      number: "Business",
      label: "Strategy",
      description: "Analyze business processes and identify improvement opportunities",
      role: "Business Analyst Intern",
      location: "Remote / Hybrid",
      icon: Users,
      formLink: "https://forms.gle/J8Ycqgh9eZmcoFqP9"
    },
    {
      number: "Project",
      label: "Coordination",
      description: "Support project teams and ensure smooth delivery of initiatives",
      role: "Project Coordinator Intern",
      location: "Remote / Hybrid",
      icon: Users,
      formLink: "https://forms.gle/J8Ycqgh9eZmcoFqP9"
    },
    {
      number: "Manage",
      label: "Projects",
      description: "Lead project initiatives and coordinate cross-functional teams",
      role: "Project Manager Intern",
      location: "Remote / Hybrid",
      icon: Shield,
      formLink: "https://forms.gle/J8Ycqgh9eZmcoFqP9"
    },
    {
      number: "Product",
      label: "Strategy",
      description: "Shape product roadmaps and drive feature development decisions",
      role: "Product Manager Intern",
      location: "Remote / Hybrid",
      icon: Brain,
      formLink: "https://forms.gle/J8Ycqgh9eZmcoFqP9"
    },
    {
      number: "People",
      label: "Operations",
      description: "Support talent acquisition and employee engagement initiatives",
      role: "HR / Recruitment Intern",
      location: "Remote / Hybrid",
      icon: Users,
      formLink: "https://forms.gle/J8Ycqgh9eZmcoFqP9"
    },
    {
      number: "Digital",
      label: "Marketing",
      description: "Create and execute digital marketing campaigns across platforms",
      role: "Digital Marketing Intern",
      location: "Remote / Hybrid",
      icon: Palette,
      formLink: "https://forms.gle/J8Ycqgh9eZmcoFqP9"
    },
    {
      number: "Creative",
      label: "Content",
      description: "Design posters, edit videos, and create engaging visual content",
      role: "Poster Designer/Video Editor Intern",
      location: "Remote / Hybrid",
      icon: Palette,
      formLink: "https://forms.gle/J8Ycqgh9eZmcoFqP9"
    }
  ];

  const handleApply = (formLink: string) => {
    window.open(formLink, '_blank', 'noopener,noreferrer');
  };

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

  const cardVariants = {
    hidden: { x: 60, opacity: 0 },
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
    <section className="py-16 px-6 bg-gray-50" id="careers">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-macrozn-purple/10 text-macrozn-purple mb-6">
            <Users className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Join Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-macrozn-dark-blue mb-4">Why Work With Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our innovative team and help shape the future of technology. Discover the opportunities that await you at Macrozn.
          </p>
        </motion.div>
        
        {/* Horizontal Scrolling Stats */}
        <div className="relative mb-16">
          <div className="overflow-x-auto scrollbar-hide">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="flex gap-6 pb-4" 
              style={{ width: 'max-content' }}
            >
              {careerStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -12, 
                      scale: 1.03,
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                    }}
                    className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
                  >
                    <div className="flex items-start mb-6">
                      <motion.div 
                        className="w-12 h-12 bg-macrozn-purple/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-macrozn-purple/20 transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-6 h-6 text-macrozn-purple group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                      <div>
                        <div className="text-lg font-bold text-macrozn-dark-blue mb-2 group-hover:text-macrozn-purple transition-colors duration-300">{stat.role}</div>
                        <div className="text-sm text-gray-500">{stat.location}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{stat.description}</p>
                    
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <motion.button
                        onClick={() => handleApply(stat.formLink)}
                        className="button-primary w-full flex items-center justify-center group text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-4">
            <div className="text-sm text-gray-500 flex items-center">
              <span className="mr-2">Scroll to see more positions</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-macrozn-dark-blue mb-4">Don't see your role?</h3>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals to join our team. Send us your resume and tell us how you'd like to contribute to Macrozn.
            </p>
            <motion.button
              onClick={() => handleApply("https://forms.gle/J8Ycqgh9eZmcoFqP9")}
              className="button-outline"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send General Application
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;