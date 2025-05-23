import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaCogs } from 'react-icons/fa';
import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';

import skillsImg1 from  './assets/html-logo-01.svg';
import skillsImg2 from  './assets/nextjs-logo.svg';
import skillsImg3 from  './assets/react-logo-01.png';
import skillsImg4 from  './assets/css-logo-01.svg';
import skillsImg5 from  './assets/js-logo-01.png';
import skillsImg6 from  './assets/tailwindcss-logo-01.svg';

import skillsImg7 from  './assets/photoshop1-logo.png';
import skillsImg8 from  './assets/illustrator-logo-01.png';
import skillsImg9 from  './assets/indesign-logo-01.png';
import skillsImg10 from  './assets/prpro-logo-01.png';
import skillsImg11 from  './assets/figma-logo-01.svg';
import skillsImg12 from  './assets/canva-logo.png';
import skillsImg13 from  './assets/skillsImg13-01.png';
import skillsImg14 from  './assets/skillsImg14.png';


import projectImg1 from  './assets/img1-01.jpg';
import projectImg2 from  './assets/img2.jpg';
import projectImg3 from  './assets/img3.jpg';


import projectImg6 from  './assets/img66.jpg';
import projectImg7 from  './assets/img7-01.jpg';
import projectImg8 from  './assets/img8-01.jpg';
import projectImg9 from  './assets/img4-01.png';
import projectImg10 from  './assets/img5-01.png';


import serviceImg1 from  './assets/service1.jpg';
import serviceImg2 from  './assets/service2.jpg';
import serviceImg3 from  './assets/service3.jpg';
import serviceImg4 from  './assets/service4.jpg';
import serviceImg5 from  './assets/service5.jpg';
import serviceImg6 from  './assets/service6.jpg';

import Theme1 from  './assets/red.png';
import Theme2 from  './assets/blue-02.png';
import Theme3 from  './assets/bluesky.png';
import Theme4 from  './assets/magenta.png';
import Theme5 from  './assets/vert.png';
import Theme6 from  './assets/orange.png';
import Theme7 from  './assets/yellow.png';


export const links = [
    {
        name: 'Home',
        icon: <FaHome className='nav-icon'  />,
        path: '/',
    },

    {
        name: 'About',
        icon: <FaUser className='nav-icon'  />,
        path: '/about',
    },

    {
        name: 'Portfolio',
        icon: <FaFolderOpen className='nav-icon'  />,
        path: '/portfolio',
    },

    {
        name: 'Services',
    icon: <FaCogs className='nav-icon' />,
    path: '/services',
    },

    {
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav-icon'  />,
        path: '/contact',
    },

    
]; 

export const personalInfo = [
    {
      title: 'First Name   :',
      description: 'Ousmane',
    },
    {
      title: 'Last Name :',
      description: 'Ndiaye',
    },
    {
    title: 'Age :',
    description: '32 Years',
    },
    {
        title: 'Nationality :',
        description: 'Senegalais',
      },
      {
        title: 'Freelance:',
        description: 'Available',
      },
      {
        title: 'Address :',
        description: 'Dakar',
      },
      {
        title: 'Phone :',
        description: '+221 77 960 58 25',
      },
      {
        title: 'Email :',
        description: 'ousmanendiaye.sn19@gmail.com',
      },
      {
        title: 'LinkdIn :',
        description: 'Ousmane Ndiaye',
        
      },
      {
        title: 'Langages :',
        description: 'French, English (Junior).',
      },
  ];

  export const skill = [
{
  id: 1,
  img: skillsImg1,
  title: 'HTML',
  level: 'Intermediate',
  category: 'developer',
},

{
  id: 2,
  img: skillsImg2,
  title: 'NEXTJS',
  level: 'Junior',
  category: 'developer',
},

{
  id: 3,
  img: skillsImg3,
  title: 'REACT',
  level: 'Intermediate',
  category: 'developer',
},

{
  id: 4,
  img: skillsImg4,
  title: 'CSS',
  level: 'Intermediate',
  category: 'developer',
},

{
  id: 5,
  img: skillsImg5,
  title: 'JS',
  level: 'Junior',
  category: 'developer',
},

{
  id: 6,
  img: skillsImg6,
  title: 'TAILWIND',
  level: 'Junior',
  category: 'developer',
},

{
  id: 7,
  img: skillsImg7,
  title: 'PHOTOSHOP',
  level: 'Senior',
  category: 'designer',
},

{
  id: 8,
  img: skillsImg8,
  title: 'ILLUSTRATOR',
  level: 'Senior',
  category: 'designer',
},

{
  id: 9,
  img: skillsImg9,
  title: 'INDESIGN',
  level: 'Junior',
  category: 'designer',
},

{
  id: 10,
  img: skillsImg10,
  title: 'PREMIER PRO',
  level: 'Junior',
  category: 'designer',
},

{
  id: 11,
  img: skillsImg11,
  title: 'FIGMA',
  level: 'Junior',
  category: 'designer',
},

{
  id: 12,
  img: skillsImg12,
  title: 'CANVA',
  level: 'Intermediate',
  category: 'designer',
},


{
  id: 13,
  img: skillsImg13,
  title: 'CAPCUT',
  level: 'Intermediate',
  category: 'designer',
},

{
  id: 14,
  img: skillsImg14,
  title: 'COPY.AI',
  level: 'Intermediate',
  category: 'designer',
},

];
  
  export const stats = [
    {
      no: '6+',
      title: 'Years of <br />Experience'  
    },
    {
        no: '97+',
        title: 'Completed <br />Projects'  
      },
    {
        no: '88+',
        title: 'Satisfait <br />Clients'  
      },
      {
        no: '99+',
        title: 'Logo <br />Realisé'  
      },
  ];

  export const resume = [
    {
      id: 1,
      category: 'experience',
      icon: <RiBriefcase4Fill />,
      year: '2024 - Present',
      title: 'C. Manager & Graphiste <span> Zaman Capital - CECA  </span>',
      desc: 'Community Manager & Design Graphiste'
    },
  

  {
    id: 2,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2023-2024',
    title: 'Graphiste & C. Manager <span> Monde Impression </span>',
    desc: 'Service Design & Community Manager'
  },


  {
    id: 3,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2022-2023',
    title: 'Design Graphiste <span> AB GRAPHIQUE </span>',
    desc: 'Service Infographie & Impression Numerique'
  },

  {
    id: 4,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2024-2025',
    title: 'Certification <span> GOMYCODE </span>',
    desc: 'Software Developer Bootcamp',
  },
  
  {
    id: 5,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2023-2024',
    title: 'Certification <span> NEMA GROUP CONSULTING </span>',
    desc: 'Community Manager',
  },
  

  {
    id: 6,
    category: 'education',
    icon: <RiGraduationCapFill/>,
    year: '2019',
    title: 'Licence 3 <span> IPG Institution </span>',
    desc: 'Gestion & Management de Projet',
  },

  
]

export const portfolio = [
  {
    id:1,
    img: projectImg1,
    title: 'Charity Website',
    description:
    'Un site web destiné à aider les enfants en difficulté',
    skills: [skillsImg1, skillsImg4, skillsImg5],
    link:'https://charity-hub-gamma.vercel.app',

  },

  {
    id:2,
    img: projectImg2,
    title: 'SOGEPI Website',
    description:
    'site web de la Societe SOGEPI Afrique SARL',
    skills: [skillsImg3, skillsImg6],
    link:'https://www.sogepi.sn',

  },

  {
    id:3,
    img: projectImg3,
    title: 'CECA Website',
    description:
    'site web du Cabinet CECA',
    skills: [skillsImg3, skillsImg4],
    link:'#',

  },

  {
    id:4,
    img: projectImg9,
    title: 'IDENTITE VISUELLE',
    description:
    'De la conception aux impressions numerique des supports de communication de la Societe SOGEPI',
    skills: [skillsImg7, skillsImg8, skillsImg9],
    link:'https://www.behance.net/gallery/223639027/BREENDING-IMPRESSION-NUMERIQUE',

  },

  {
    id:5,
    img: projectImg10,
    title: 'IDENTITE VISUELLE',
    description:
    'De la conception aux impressions numerique des supports de communication du Cabinet CECA',
    skills: [skillsImg7, skillsImg8],
    link:'https://www.behance.net/gallery/224591503/CECA',

  },

  {
    id:6,
    img: projectImg6,
    title: 'Support Com. Zaman',
    description:
    'Support de communication Zaman Capital',
    skills: [skillsImg7, skillsImg8, skillsImg9],
    link:'https://www.behance.net/gallery/225067779/Supp-Com-Zaman',

  },

  {
    id:7,
    img: projectImg7,
    title: 'Impression & Breending',
    description:
    'Decoration Restaurant Gambi',
    skills: [skillsImg7, skillsImg8],
    link:'https://www.behance.net/gallery/224554321/Proje-DECO-RESTO-GAMBI',

  },

  {
    id:8,
    img: projectImg8,
    title: 'Logo Realisé',
    description:
    '+99 Logo Realisé ',
    skills: [skillsImg7, skillsImg8],
    link:'https://www.behance.net/gallery/224558219/LOGO-REALISE',

  },



 


]

export const services = [
  {
    id:1,
    img: serviceImg1,
    title: 'Web site creation',
    description:
    'Donnez vie a votre entreprise avec nos gamme de site moderne',
    link:'https://wa.me/221765109320',
  },

  {
    id:2,
    img: serviceImg2,
    title: 'Identite visuel creation',
    description:
    'Donnez vie a votre marque avec nos creation moderne',
    link:'#',
  },

  {
    id:3,
    img: serviceImg3,
    title: 'Community Manager',
    description:
    'la visibilte incontournable avec notre expertise en Marketing Digital',
    link:'#',
  },

  {
    id:4,
    img: serviceImg4,
    title: 'Impression Numerique',
    description:
    'Impression express, qualité au top.    flyer, carte de visite, kakémono… ',
    link:'#',
  },

  {
    id:5,
    img: serviceImg5,
    title: 'Creation de Contenu Digital',
    description:
    'Contenus sur-mesure pour booster votre présence digitale.  vidéos, animation vectorielle, textes… ',
    link:'#',
  },

  {
    id:6,
    img: serviceImg6,
    title: 'Web Design',
    description:
    'Un design web élégant et sur-mesure pour une expérience utilisateur mémorable.',
    link:'#',
  },

]

export const themes = [
  {
    img: Theme1,
    hue: '4',
  },

  {
    img: Theme2,
    hue: '271',
  },

  {
    img: Theme3,
    hue: '225',
  
  },

  {
    img: Theme4,
    hue: '339',
  },

  {
    img: Theme5,
    hue: '80',
  },

  {
    img: Theme6,
    hue: '19',
  },

  {
    img: Theme7,
    hue: '42',
  },
]