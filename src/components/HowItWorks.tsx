
import React, { useState } from 'react';
import { Target, Palette, Code, TestTube, Rocket } from 'lucide-react';
import StepContent from './how-it-works/StepContent';
import { motion } from 'framer-motion';
import requirementAnalysisImg from '@/assets/requirement-analysis.jpg';
import designStageImg from '@/assets/design-stage.jpg';
import developmentStageImg from '@/assets/development-stage.jpg';
import testingStageImg from '@/assets/testing-stage.jpg';
import deploymentMaintenanceImg from '@/assets/deployment-maintenance.jpg';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Steps data
  const steps = [
    {
      id: 1,
      icon: <Target className="w-4 h-4" />,
      title: "Requirement Analysis",
      description: "We thoroughly analyze your business requirements, objectives, and constraints to understand your needs and define project scope.",
      highlightText: "We deliver:",
      highlightDetails: "Detailed requirements documentation, scope definition, and feasibility analysis",
      gifUrl: requirementAnalysisImg
    },
    {
      id: 2,
      icon: <Palette className="w-4 h-4" />,
      title: "Design",
      description: "Our design team creates intuitive user interfaces and comprehensive system architecture blueprints tailored to your requirements.",
      highlightText: "We provide:",
      highlightDetails: "UI/UX mockups, system architecture, and design specifications",
      gifUrl: designStageImg
    },
    {
      id: 3,
      icon: <Code className="w-4 h-4" />,
      title: "Development", 
      description: "Our expert development team builds your solution using modern frameworks while integrating AI and ML capabilities for enhanced functionality.",
      highlightText: "We build:",
      highlightDetails: "Custom software, AI implementation, and robust backend systems",
      gifUrl: developmentStageImg
    },
    {
      id: 4,
      icon: <TestTube className="w-4 h-4" />,
      title: "Testing",
      description: "Comprehensive testing ensures your solution works flawlessly across all scenarios with rigorous quality assurance processes.",
      highlightText: "We ensure:",
      highlightDetails: "Unit testing, integration testing, and performance optimization",
      gifUrl: testingStageImg
    },
    {
      id: 5,
      icon: <Rocket className="w-4 h-4" />,
      title: "Deployment & Maintenance",
      description: "We deploy your solution seamlessly and provide ongoing support, monitoring, and maintenance to ensure optimal performance.",
      highlightText: "We provide:",
      highlightDetails: "Cloud deployment, continuous monitoring, and regular updates",
      gifUrl: deploymentMaintenanceImg
    }
  ];

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  return (
    <section className="relative py-6 bg-white" id="how-it-works">
      <div className="container-section py-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="section-tag">
            Our Proven Process
          </div>
          <h2 className="heading-lg text-macrozn-dark-blue mb-4">
            How <span className="gradient-text">Macrozn</span> Delivers Results
          </h2>
          <p className="text-macrozn-dark-blue/80 text-lg max-w-2xl mx-auto">
            From initial consultation to ongoing support, our comprehensive approach ensures your project succeeds with modern technology and AI integration.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-100 rounded-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[300px]">
            {/* Steps Section - Now on the left */}
            <div className="lg:w-2/5 flex flex-col gap-1 p-3 bg-gray-50 h-[300px] overflow-y-auto">
              {steps.map((step) => (
                <StepContent
                  key={step.id}
                  stepNumber={step.id}
                  title={step.title}
                  description={step.description}
                  highlightText={step.highlightText}
                  highlightDetails={step.highlightDetails}
                  icon={step.icon}
                  isActive={activeStep === step.id}
                  onClick={() => handleStepClick(step.id)}
                />
              ))}
            </div>
            
            {/* Image Display - Now covering the entire right section */}
            <div className="lg:w-3/5 relative min-h-[300px] h-full">
              {steps.map((step) => (
                <motion.div 
                  key={step.id}
                  className="absolute inset-0 h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activeStep === step.id ? 1 : 0,
                    zIndex: activeStep === step.id ? 10 : 1
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src={step.gifUrl} 
                    alt={`Step ${step.id}: ${step.title}`} 
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
