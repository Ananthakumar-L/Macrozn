
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Careers from '@/components/Careers';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-macrozn-dark-blue overflow-hidden">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main className="pt-16">
        <Hero />
        <ProblemStatement />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <Services />
        <Contact />
        
        <section id="careers">
          <Careers />
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
