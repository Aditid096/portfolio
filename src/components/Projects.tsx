import React from 'react';
import { motion } from 'framer-motion';
import { Brain, LineChart, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Sentiment Analysis',
      description: 'Advanced machine learning model analyzing social media sentiment with 95% accuracy using BERT and transformers.',
      tags: ['Python', 'PyTorch', 'BERT', 'NLP'],
      icon: <Brain className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive visualization platform processing millions of data points with real-time updates and predictive insights.',
      tags: ['Python', 'Streamlit', 'Plotly', 'Real-time Data'],
      icon: <LineChart className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
    },
    {
      title: 'Predictive Market Analysis',
      description: 'Time series forecasting system using ensemble methods to predict market trends with high accuracy.',
      tags: ['Python', 'Prophet', 'Deep Learning'],
      icon: <Database className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80'
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