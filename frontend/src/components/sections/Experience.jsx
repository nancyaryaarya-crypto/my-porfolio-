import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Web Development Intern',
    company: 'vishlRAFrosy.ai',
    period: '17 Dec 2025 - 17 April 2026',
    description: 'Working as a Web Development Intern, contributing to the development of modern web applications. Focused on building responsive user interfaces and implementing interactive features to enhance user experience.',
  },
  {
    title: 'SQL Developer Intern',
    company: 'QSpiders',
    period: 'March 2025',
    description: 'Worked on database management and SQL development. Gained hands-on experience in writing complex queries, database schema design, and optimizing database performance within the SQL domain.',
  },
  {
    title: 'Web Development Intern',
    company: 'Novanector Service Pvt Ltd',
    period: 'Jun 2024 - Jul 2024',
    description: 'Developed and maintained responsive web applications using modern frontend technologies. Collaborated with the team to implement new features and ensure cross-browser compatibility.',
  },
  // Add more experiences here as needed
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A summary of my professional journey and the roles I've taken on to grow my skills.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 md:ml-6">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-10 ml-6 md:ml-10"
              >
                <span className="absolute flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-full -left-4 md:-left-6 ring-4 ring-white dark:ring-gray-800">
                  <Briefcase className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                </span>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <h3 className="flex items-center mb-1 text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center text-sm md:text-base text-gray-500 dark:text-gray-400 mb-4 gap-2 md:gap-4">
                    <span className="font-medium text-primary">{exp.company}</span>
                    <span className="hidden md:block w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
