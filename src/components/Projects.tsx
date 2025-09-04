// import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Film, Sprout } from 'lucide-react';
// import { Film, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
  {
    title: 'Hybrid Movie Recommendation System',
    description: 'Hybrid recommender combining content-based TF-IDF (title/genres) and collaborative filtering (SVD) to deliver personalized top-N movie suggestions.',
    tags: ['Python', 'scikit-learn', 'surprise', 'Flask', 'Recommender'],
    icon: <Film className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Autonomous Line-Following Robot',
    description: 'Raspberry Pi-based autonomous line-following robot with OpenCV vision, PID control, intersection handling and live telemetry.',
    tags: ['Python', 'OpenCV', 'PID Control', 'Raspberry Pi', 'Robotics'],
    icon: <Navigation className="w-8 h-8" />,
    image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&w=600'
  },
  {
    title: 'Embedded System for Automated Plant Growth Control',
    description: 'IoT-enabled embedded system that automates plant growth by monitoring soil moisture, temperature, humidity, and light with adaptive control mechanisms.',
    tags: ['C', 'Python', 'Arduino', 'IoT', 'Embedded Systems'],
    icon: <Sprout className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80'
  }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Showcasing my expertise in Data Science</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-56 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-indigo-600/10"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg text-indigo-600"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {project.icon}
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: tagIndex * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;