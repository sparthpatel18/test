import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Parth',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Patel',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'India',
  },

  // {
  //   id: 5,
  //   title: 'Freelance : ',
  //   description: 'Available',
  // },

  {
    id: 6,
    title: 'Address : ',
    description: 'Ottawa,ON',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+1 343 262 4678',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'sparthpatel18@gmail.com',
  },
  {
    id: 9,
    title: 'Linkedin : ',
    description: <a href="https://www.linkedin.com/in/sparthpatel18/" target="_blank" rel="noopener noreferrer" style={{ color: '#0c31ed' }}>Linkedin.com</a>,
  },
  {
    id: 10,
    title: 'Langages : ',
    description: 'English,Gujarati',
  },
];

export const stats = [
  {
    id: 1,
    no: '1.5+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '19+',
    title: 'Skills <br /> Mastered ',
  },

  {
    id: 3,
    no: '12+',
    title: 'Completed <br /> Projects ',
  },

  {
    id: 4,
    no: '3+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'April 2024 - PRESENT',
    title: 'Full-Stack Developer Intern <span> Ottawa Tamil Sangam </span>',
    desc: (
      <ul>
        <li>
         • Increased user engagement by 35% and new sign-ups by 40% through
          full-stack development with React.js and Node.js/Express.js.
        </li>
        <li>
         • Improved query response times by 30% and data retrieval efficiency by
          50% by optimizing MongoDB.
        </li>
        <li>
         • Boosted mobile traffic by 30% and reduced bounce rates by 15% with
          responsive design using TailwindCSS.
        </li>
        <li>
         • Halved deployment times and increased release frequency by 40% through
          CI/CD pipeline migration.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Aug 2023 - Jan 2024',
    title: 'Software Web Dev Intern <span> Web Dev by Open Bootcamp </span>',
    desc: <ul>
    <li>
     • Completed 15+ web development tasks, improving coding efficiency by 40%.
    </li>
    <li>
     • Mastered 5+ online resources, leading to a 30% faster task completion rate.
    </li>
    <li>
     • Enhanced team collaboration, boosting project delivery speed by 20% through active Open Chat participation.
    </li>
    <li>
     • Reduced deployment issues by 15% through Agile methodologies and deployment support.
    </li>
  </ul>
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'April 2023 - July 2023',
    title: 'Software Engineering Intern <span> Web Dev by Open Bootcamp  </span>',
    desc:<ul>
    <li>
      • Achieved 100% course completion, mastering software engineering fundamentals and web development.
    </li>
    <li> 
      • Developed a fully functional HTML-CSS website, improving design efficiency by 35%.
    </li>
    <li>
      • Boosted code accuracy by 40% through a successful JavaScript Mars Rover assignment.
    </li>
    <li>
      • Increased interview callbacks by 30% by crafting job-search-ready materials (resumes, LinkedIn profiles).
    </li>
  </ul>
  },
  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'April 2023 - July 2023',
    title: 'Junior Software Engineer Co-Op <span> SAL College Of Engineering</span>',
    desc:<ul>
    <li>
      • Improved web application performance by 30% through full-stack development with JavaScript, HTML, CSS, and MySQL.
    </li>
    <li>
     • Developed a fully functional HTML-CSS website, improving design efficiency by 35%.
    </li>
    <li>
     • Boosted code accuracy by 40% through a successful JavaScript Mars Rover assignment.
    </li>
    <li>
    • Increased interview callbacks by 30% by crafting job-search-ready materials (resumes, LinkedIn profiles).
    </li>
  </ul>
  },
  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: ' Apr 2023 - Sep 2024',
    title: 'Diploma  <span> Algonquin College </span>',
    desc: <p> • Dean’s Honours List<br></br>
        • Cumulative GPA: 3.96</p>,
  },
{
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'June 2020 -  August 2022',
    title: 'High School <span> S S Divine </span>',
    desc:<p> • Achieved a strong academic record with a focus on STEM subjects. <br/>
 • Participated in extracurricular activities, including the Science Club. </p>
  },
];

export const skills = [
  {
    id: 1,
    title: 'Javascript',
    percentage: '93',
  },

  {
    id: 2,
    title: 'React.js',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Typescript',
    percentage: '85',
  },

  {
    id: 4,
    title: 'Node.js',
    percentage: '86',
  },

  {
    id: 5,
    title: 'Mongodb ',
    percentage: '89',
  },

  {
    id: 6,
    title: 'Express.js',
    percentage: '84',
  },

  {
    id: 7,
    title: 'Next.js',
    percentage: '87',
  },

  {
    id: 8,
    title: 'CSS',
    percentage: '89',
  },
  {
    id: 9,
    title: 'Sass/SCSS',
    percentage: '84',
  },
  {
    id: 10,
    title: 'Redux ',
    percentage: '83',
  },
  {
    id: 11,
    title: 'Docker',
    percentage: '89',
  },
  {
    id: 12,
    title: 'Git',
    percentage: '97',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Ai Trip Planner',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Ai Trip Planner',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Ai Trip Planner',
      },
      {
        icon: <FaCode />,
        title: 'Languages : ',
        desc: 'React.js , Node.js & Mongodb',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Food Delivery',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Food Delivery',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Gemini Clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Chat App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'YouTube Clone.com',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Blog-Site',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Blog-Site',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
