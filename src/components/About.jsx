import { motion } from 'framer-motion';

const About = () => {
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
          <h2 className="text-4xl lg:text-5xl font-light mb-8 tracking-tight">About</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I’m a passionate software developer with a unique combination of technical expertise and real estate insight. Currently working at Arvato Financial Solutions, I bring over four years of hands-on experience in full-stack development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My professional journey bridges software engineering and real estate. After completing my degree as a Sachbearbeiter Immobilienbewirtschaftung at KV Business School Zürich, I’ve been deepening my knowledge in property management while actively exploring ways to integrate digital solutions into the real estate sector.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I’m driven by building efficient, scalable applications and enjoy creating innovative tools that connect technology with real-world operations – especially in the context of real estate and finance.
            </p>
          </div>
          
          <div className="bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-light mb-6 tracking-tight">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-600">Location</span>
                <span className="font-medium">Zürich, Switzerland</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-600">Experience</span>
                <span className="font-medium">4+ Years</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-600">Specialization</span>
                <span className="font-medium">Full-Stack Dev</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Focus</span>
                <span className="font-medium">Tech + Real Estate</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

