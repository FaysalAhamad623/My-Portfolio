import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, Users, Coffee } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Award, label: 'Quality Work', value: '100%' },
    { icon: Users, label: 'Team Player', value: 'Always' },
    { icon: Coffee, label: 'Coffee Lover', value: '∞' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-80 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1"
              >
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="About Md Faysal Ahamad"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-blue-500 rounded-full p-4"
              >
                <Award size={24} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-purple-500 rounded-full p-4"
              >
                <Coffee size={24} />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a 3rd-year B.Sc. in CSE student at Southeast University with a passion for creating 
                exceptional web experiences. My journey in web development started with curiosity and 
                has evolved into a deep love for building full-stack applications.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have a keen 
                eye for frontend design. I believe in writing clean, maintainable code and delivering 
                real-world solutions that make a difference.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or collaborating with teams to bring innovative ideas to life.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 py-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gray-800 rounded-lg p-4 mb-2">
                    <item.icon size={24} className="text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{item.value}</div>
                  </div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-lg transition-all duration-200"
            >
              Download CV <Download size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;