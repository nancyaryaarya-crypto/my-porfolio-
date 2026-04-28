import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/nancyaryaarya-crypto" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors">
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/nancy-arya-arya-b800b52b7" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors">
            <span className="sr-only">Twitter</span>
            <FaTwitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
