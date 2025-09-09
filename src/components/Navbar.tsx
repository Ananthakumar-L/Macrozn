
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-3">
            <span className="font-comfortaa font-semibold text-xl md:text-2xl text-macrozn-dark-blue">
              Macrozn
            </span>
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-macrozn-dark-blue/80 hover:text-macrozn-dark-blue font-medium transition-colors">
            Our Process
          </a>
          <a href="#services" className="text-macrozn-dark-blue/80 hover:text-macrozn-dark-blue font-medium transition-colors">
            Services
          </a>
          <a href="#careers" className="text-macrozn-dark-blue/80 hover:text-macrozn-dark-blue font-medium transition-colors">
            Careers
          </a>
          <a href="#contact" className="text-macrozn-dark-blue/80 hover:text-macrozn-dark-blue font-medium transition-colors">
            Contact
          </a>
          <a href="#cta" className="button-primary">
            Get Started
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-macrozn-dark-blue" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="text-macrozn-dark-blue/80 hover:text-macrozn-dark-blue font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Process
            </a>
            <a 
              href="#services" 
              className="text-macrozn-dark-blue/80 hover:text-macrozn-dark-blue font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#careers" 
              className="text-macrozn-dark-blue/80 hover:text-macrozn-dark-blue font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </a>
            <a 
              href="#contact" 
              className="text-macrozn-dark-blue/80 hover:text-macrozn-dark-blue font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#cta" 
              className="button-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
