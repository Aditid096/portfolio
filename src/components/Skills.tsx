import React from 'react';
import { Code2, Database, Brain, LineChart, GitBranch, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['Python', 'R', 'Java', 'SQL', 'C++']
    },
    {
      title: 'Data Science & ML',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Machine Learning', 'Deep Learning', 'Statistical Analysis', 'Natural Language Processing']
    },
    {
      title: 'Data Analysis',
      icon: <LineChart className="w-6 h-6" />,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn']
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite']
    },
    {
      title: 'Version Control',
      icon: <GitBranch className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'GitLab']
    },
    {
      title: 'Tools & Technologies',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Jupyter Notebook', 'VS Code', 'Docker', 'Linux']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600">A comprehensive overview of my technical capabilities</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;