import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download, Upload } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePhoto from '../../assets/profile-photo.jpeg';

const Home = () => {
  const [profileImg, setProfileImg] = useState(profilePhoto);
  const [resumeData, setResumeData] = useState('/my-porfolio-/resume.pdf');

  useEffect(() => {
    const savedImg = localStorage.getItem('profileImg');
    // Only use localStorage if it contains a base64 image (user-uploaded)
    if (savedImg && savedImg.startsWith('data:image')) {
      setProfileImg(savedImg);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImg(reader.result);
        try {
          localStorage.setItem('profileImg', reader.result);
        } catch (err) {
          console.warn("Image too large to save permanently in browser.", err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeData(reader.result);
        try {
          localStorage.setItem('resumePdf', reader.result);
          alert('Resume successfully updated! Your file is now saved.');
        } catch (err) {
          alert('Warning: Resume file is too large to save completely, but it will work for this session.');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left pt-10 md:pt-0"
        >
          <h2 className="text-primary font-semibold text-xl md:text-2xl mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Nancy Kumari
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            I specialize in building exceptional digital experiences with modern web technologies. Focuses on full-stack web development using MongoDB, Express.js, React, and Node.js.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer flex items-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto justify-center"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/nancyaryaarya-crypto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:border-primary transition-all"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/nancy-arya-arya-b800b52b7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:border-primary transition-all"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
            <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-900 relative group cursor-pointer">
              <label htmlFor="photo-upload" className="w-full h-full cursor-pointer relative block">
                <img 
                  src={profileImg} 
                  alt="Nancy Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://ui-avatars.com/api/?name=Nancy+Kumari&background=random&size=512";
                  }}
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium text-sm lg:text-base text-center px-4">Click to change photo</span>
                </div>
              </label>
              <input 
                type="file" 
                id="photo-upload" 
                accept="image/*" 
                className="hidden" 
                onChange={handleImageChange} 
              />
            </div>
          </div>
        </motion.div>

      </div>

      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex flex-col items-end gap-1 opacity-60 hover:opacity-100 transition-opacity z-10">
        <a 
          href={resumeData} 
          target="_blank"
          download="Nancy_Kumari_Resume.pdf"
          className="flex items-center gap-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-1.5 rounded-md text-xs font-semibold shadow-sm border border-gray-200 dark:border-gray-700 transition-colors"
        >
          <Download size={14} /> Download Resume
        </a>
        <label 
          htmlFor="resume-corner-upload"
          className="cursor-pointer text-[10px] text-gray-500 hover:text-primary transition-colors pr-1"
        >
          Update Resume
        </label>
        <input 
          type="file" 
          id="resume-corner-upload" 
          accept=".pdf,.doc,.docx" 
          className="hidden" 
          onChange={handleResumeChange} 
        />
      </div>
    </section>
  );
};

export default Home;
