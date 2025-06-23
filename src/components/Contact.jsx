import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:dietscheleon@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light mb-8 tracking-tight">Contact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's discuss how my unique combination of technical skills and real estate expertise can benefit your organization
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-light mb-6 tracking-tight">Get In Touch</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
               I'm always interested in meaningful conversations around software development, real estate, or where the two meet. 
               Whether it's about exchanging ideas, collaborating on a project, or exploring synergies — feel free to reach out.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-4 text-gray-600" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:dietscheleon@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                    dietscheleon@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="mr-4 text-gray-600" size={20} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Zürich, Switzerland</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-200">
              <h4 className="font-medium mb-4">Areas of Interest</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Software Development Positions</li>
                <li>• Real Estate Technology Solutions</li>
                <li>• Property Management Systems</li>
                <li>• Full-Stack Development Roles</li>
                <li>• Real Estate Operations</li>
              </ul>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800 transition-colors flex items-center justify-center font-medium"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

