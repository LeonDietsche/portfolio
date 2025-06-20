import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Java', level: 90, description: 'Enterprise application development, backend services' },
    { name: 'JavaScript', level: 85, description: 'Frontend development, Node.js, modern frameworks' },
    { name: 'Python', level: 80, description: 'Data analysis, automation, AI/ML applications' },
    { name: 'PHP', level: 75, description: 'Web development, F3-Framework, Composer packages' },
    { name: 'C#', level: 70, description: 'Desktop applications, .NET development' },
  ];

  const technologies = [
    'React / Vue.js', 'Node.js', 'REST APIs', 'Git', 'Visual Studio', 
    'Database Integration', 'Property Management Systems', 'Market Analysis'
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light mb-8 tracking-tight">Skills</h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light mb-8 tracking-tight">Programming Languages</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-black h-2"
                    />
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Technologies & Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light mb-8 tracking-tight">Technologies & Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-4 text-center hover:bg-gray-100 transition-colors cursor-default"
                >
                  <span className="text-sm font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-black text-white">
              <h4 className="text-xl font-light mb-4">Professional Focus</h4>
              <ul className="space-y-2 text-sm">
                <li>• Full-stack web development</li>
                <li>• Real estate management and operations</li>
                <li>• Problem-solving and analytical thinking</li>
                <li>• Team collaboration and communication</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

