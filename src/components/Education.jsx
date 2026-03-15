import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = ({ education }) => {
  return (
    <section id="education" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light mb-8 tracking-tight">{education.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {education.intro}
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.items.map((item, index) => (
            <motion.div
              key={`${item.degree}-${item.duration}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-white p-8 shadow-sm ${item.current ? 'border-l-4 border-black' : ''}`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="mr-3 text-gray-600" size={24} />
                    <h3 className="text-xl font-medium">{item.degree}</h3>
                  </div>
                  <h4 className="text-lg text-gray-600 mb-2 ml-9">{item.school}</h4>
                  <div className="flex items-center text-sm text-gray-500 ml-9">
                    <Calendar className="mr-2" size={16} />
                    <span>{item.duration}</span>
                    {item.current && (
                      <span className="ml-3 px-2 py-1 bg-black text-white text-xs font-medium">
                        {education.currentLabel}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 md:mt-0 md:text-right">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium">
                    {item.grade}
                  </span>
                </div>
              </div>

              <div className="ml-9">
                <p className="text-gray-700 leading-relaxed">{item.focus}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-light mb-4 tracking-tight">{education.perspectiveTitle}</h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {education.perspectiveText}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
