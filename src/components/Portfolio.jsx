import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Design', 'MERN App', 'Responsive', 'Firebase'];

  const projects = [
    {
      id: 1,
      title: 'Tourism E-commerce',
      category: 'MERN App',
      image: '/tour-hero.png',
      description: 'Full-stack e-commerce solution with payment integration',
      technologies: ['React', 'Tailwind','javascript'],
      liveUrl: 'https://tour-management.mdfaysal.com/',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'E-commerce flatform',
      category: 'MERN App',
      image: '/hero-ecommerce.png',
      description: 'Modern E-commerce platform with responsive',
      technologies: ['React', 'tailwind','javascript'],
      liveUrl: 'https://ecommerce-website-2.mdfaysal.com/',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'Web Design',
      image: '/hero.png',
      description: 'Responsive portfolio with smooth animations',
      technologies: ['React', 'Tailwind','javascript'],
      liveUrl: 'https://mdfaysal.com/',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Digitalpro Website',
      category: 'Responsive',
      image: '/hero-degitalpro.png',
      description: 'Modern build amazing digital pro agency website',
      technologies: ['React', 'CSS3','tailwind','JavaScript'],
      liveUrl: 'http://agency-1.mdfaysal.com/',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Hospital  Management App',
      category: 'Responsive',
      image: '/hms-hero.png',
      description: 'Experience world-class healthcare with our team of expert doctors and state-of-the-art facilities',
      technologies: ['React', 'Tailwind','javascript'],
      liveUrl: 'https://hms.mdfaysal.com/',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Beautiful weather app with location services',
      technologies: ['React', 'API Integration', 'Charts'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-blue-400 bg-blue-500/20 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Filter size={48} className="text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400">No projects found for this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;