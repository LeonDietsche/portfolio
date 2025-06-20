import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Arvato Financial Solutions',
      duration: 'November 2021 - Present',
      location: 'Schlieren, Zürich, Switzerland',
      technologies: ['Java', 'JavaScript', 'MSSQL', 'IntelliJ'],
      description: 'Developing and maintaining financial software solutions, working with enterprise-level applications, and contributing to team projects in an agile environment.',
      current: true
    },
    {
      title: 'Software Engineer Web-Development',
      company: 'MF Group AG',
      duration: 'July 2020 - October 2021',
      location: 'Sankt Gallen, Switzerland',
      technologies: ['PHP', 'F3-Framework', 'Composer'],
      description: 'Development of new and existing applications (internal & external, frontend & backend), working with modern PHP frameworks and package management systems.',
      current: false
    },
    {
      title: 'Software Developer',
      company: 'Universität St.Gallen (HSG)',
      duration: 'October 2018',
      location: 'Sankt Gallen, Switzerland',
      technologies: ['C#'],
      description: 'Internship: Demonstrating algorithmic thinking and software design principles.',
      current: false
    },
    {
      title: 'Software Developer',
      company: 'EGELI Informatik AG',
      duration: 'September 2018',
      location: 'Sankt Gallen, Switzerland',
      technologies: ['C#'],
      description: 'Internship: Focused on C# development and software engineering practices.',
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light mb-8 tracking-tight">Experience</h2>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:ml-16 ${exp.current ? 'bg-white shadow-lg' : 'bg-white'} p-6`}
            >
              {/* Timeline dot */}
              <div className={`absolute -left-20 top-8 w-4 h-4 rounded-full border-4 border-white hidden md:block ${
                exp.current ? 'bg-black' : 'bg-gray-400'
              }`}></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium mb-1">{exp.title}</h3>
                  <h4 className="text-lg text-gray-600 mb-2">{exp.company}</h4>
                  <p className="text-sm text-gray-500 mb-2">{exp.location}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 text-xs font-medium ${
                    exp.current ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {exp.duration}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

