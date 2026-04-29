import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="flex items-center mb-4">
              <User className="text-primary w-6 h-6 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">I am Nancy Kumari</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My name is <strong>Nancy Kumari</strong>. I am originally from Bihar and am currently completing my B.Tech in Computer Engineering from <strong>Silver Oak University, Ahmedabad</strong>. I am passionate about web development, especially the MERN stack. I have built several projects using React.js, Node.js, Express.js, and MongoDB, where I focused on creating responsive, user-friendly, and efficient web applications.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-3">
                <Briefcase className="text-primary w-5 h-5 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Growth & Adaptability</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Along with technical skills, I am continuously improving my communication and problem-solving abilities. I am a quick learner, adaptable, and enjoy taking on new challenges. I am looking for an opportunity to apply my skills, gain real-world experience, and grow as a Full-Stack Developer while contributing to the organization.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="text-primary w-6 h-6 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 space-y-8 pb-4">
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 border-4 border-white dark:border-gray-800"></div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">B.Tech in Computer Engineering</h4>
                <p className="text-primary mb-1">Silver Oak University, Ahmedabad • 2022 - 2026</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full -left-[9px] top-1 border-4 border-white dark:border-gray-800"></div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">12th Board (Bihar Board)</h4>
                <p className="text-gray-500 dark:text-gray-400 mb-1">RMW College, Nawada, Bihar • 2020 - 2022</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full -left-[9px] top-1 border-4 border-white dark:border-gray-800"></div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">10th Board (CBSE)</h4>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Modern English School, Nawada • 2020</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
