import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-light mb-4 tracking-tight">Leon Dietsche</h3>
          <p className="text-gray-400 mb-6">
            Software Developer & Real Estate Professional
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="mailto:dietscheleon@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Email
            </a>
            <a 
              href="https://github.com/LeonDietsche" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <a 
              href="https://ch.linkedin.com/in/leon-dietsche-a32899106" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Leon Dietsche. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Zürich, Switzerland
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

