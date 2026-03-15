import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light mb-8 tracking-tight">{projects.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {projects.intro}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2 group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium">
                      {project.technology}
                    </span>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-800">{projects.featuresTitle}:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-600 hover:text-black transition-colors"
                >
                  <ExternalLink size={14} className="mr-2" />
                  {projects.linkLabel}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
