import { motion } from 'framer-motion';

const About = ({ about }) => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light mb-8 tracking-tight">{about.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-light mb-6 tracking-tight">{about.factsTitle}</h3>
            <div className="space-y-4">
              {about.facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={`flex justify-between items-center ${index < about.facts.length - 1 ? 'border-b border-gray-100 pb-2' : ''}`}
                >
                  <span className="text-gray-600">{fact.label}</span>
                  <span className="font-medium text-right">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
