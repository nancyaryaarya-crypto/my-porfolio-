import jobPortalImg from '../assets/job-portal.png';
import amazonCloneImg from '../assets/amazon-clone.png';
import portfolioImg from '../assets/portfolio-thumb.png';

/**
 * HOW TO ADD A NEW PROJECT:
 * 1. Add your project image to the 'src/assets' folder.
 * 2. Import the image at the top of this file: import myImage from '../assets/my-image.png';
 * 3. Add a new object to the 'projects' array below following the template.
 */

export const projects = [
  {
    id: 1,
    title: 'Online Job Portal',
    description: 'A comprehensive full-stack platform connecting recruiters with students. Features include JWT authentication, role-based dashboards, job posting, company registration, and a resume upload system.',
    image: jobPortalImg,
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux', 'Tailwind'],
    github: 'https://github.com/nancyaryaarya-crypto/online-job-portal',
    live: 'https://nancyaryaarya-crypto.github.io/online-job-portal/'
  },
  {
    id: 2,
    title: 'Amazon Clone',
    description: 'A high-fidelity, responsive clone of the Amazon homepage. Features include a complex navigation bar, promotional carousel, and category grids, all built with semantic HTML and custom CSS.',
    image: amazonCloneImg,
    tech: ['HTML5', 'CSS3', 'Responsive Design'],
    github: 'https://github.com/nancyaryaarya-crypto/Amazon-clone',
    live: 'https://nancyaryaarya-crypto.github.io/Amazon-clone/'
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description: 'A modern, professional portfolio website featuring dark mode, dynamic project management, and smooth animations. Fully responsive and deployed on GitHub Pages.',
    image: portfolioImg,
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/nancyaryaarya-crypto/my-porfolio-',
    live: 'https://nancyaryaarya-crypto.github.io/my-porfolio-/'
  },
  /* 
  TEMPLATE FOR NEW PROJECT:
  {
    id: 3,
    title: 'Project Title',
    description: 'Brief description of the project.',
    image: 'https://images.unsplash.com/photo-...', // Or imported image variable
    tech: ['React', 'CSS'],
    github: 'https://github.com/yourusername/repo',
    live: 'https://yourlink.com'
  },
  */
];
