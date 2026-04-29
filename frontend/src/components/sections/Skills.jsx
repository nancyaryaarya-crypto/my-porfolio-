import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase 
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiCanva, SiTailwindcss } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 85 },
      { name: 'React.js', icon: <FaReact className="text-cyan-400" />, level: 85 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" />, level: 80 },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 75 },
      { name: 'Express.js', icon: <SiExpress className="text-gray-400" />, level: 80 },
      { name: 'SQL', icon: <FaDatabase className="text-indigo-400" />, level: 70 },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" />, level: 80 },
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      { name: 'Python', icon: <FaPython className="text-blue-400" />, level: 50 },
      { name: 'Canva', icon: <SiCanva className="text-purple-500" />, level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've built a diverse set of skills throughout my journey as a developer. Here's a look at my technical toolkit.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 border-l-4 border-primary pl-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center group hover:shadow-md transition-all"
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white mb-2">{skill.name}</span>
                    <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-primary h-full rounded-full"
                      />
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-semibold">
                      {skill.level}%
                    </span>
                  </motion.div>
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
