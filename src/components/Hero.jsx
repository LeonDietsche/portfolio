import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/logo.png';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src={profileImage} 
            alt="Leon Dietsche" 
            className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-gray-200"
          />
          <h1 className="text-5xl lg:text-7xl font-light mb-4 tracking-tight">
            Leon Dietsche
          </h1>
          <h2 className="text-xl lg:text-2xl text-gray-600 mb-6 font-light">
            Software Developer & Real Estate Management
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Bridging Technology and Real Estate Innovation
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center space-x-8"
        >
          <a 
            href="#about" 
            className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-light tracking-wide"
          >
            Learn More
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 font-light tracking-wide"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

