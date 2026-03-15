import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ experience }) => {
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
          <h2 className="text-4xl lg:text-5xl font-light mb-8 tracking-tight">{experience.title}</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300 hidden md:block"></div>

          {experience.items.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.duration}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:ml-16 ${index === 0 ? 'bg-white shadow-lg' : 'bg-white'} p-6`}
            >
              <div
                className={`absolute -left-20 top-8 w-4 h-4 rounded-full border-4 border-white hidden md:block ${
                  index === 0 ? 'bg-black' : 'bg-gray-400'
                }`}
              ></div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                  <h4 className="text-lg text-gray-600 mb-2">{item.company}</h4>
                  <p className="text-sm text-gray-500 mb-2">{item.location}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium ${
                      index === 0 ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {item.duration}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>

              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
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
