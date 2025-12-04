import { Project, Paper, Skill } from './types';

export const RESUME_URL = '/resume.pdf';

export const SKILLS: Skill[] = [
  { name: 'ArcGIS Pro', category: 'GIS' },
  { name: 'QGIS', category: 'GIS' },
  { name: 'Spatial Analysis', category: 'GIS' },
  { name: 'Python (GeoPandas)', category: 'GIS' },
  { name: 'React', category: 'CS' },
  { name: 'TypeScript', category: 'CS' },
  { name: 'Node.js', category: 'CS' },
  { name: 'PostgreSQL/PostGIS', category: 'CS' },
  { name: 'Figma', category: 'Design' },
  { name: 'UI/UX Prototyping', category: 'Design' },
];

export const PROJECTS: Project[] = [
  {
    id: 'gis-1',
    title: 'Exploring Urban Expansion in HCMC with Landsat Satellite Imagery',
    description: 'A comprehensive spatial analysis of urban area in Ho Chi Minh City using Landsat 5, 7, 8, and 9 satellite imagery.',
    tags: ['ArcGIS Pro', 'Remote Sensing', 'Python'],
    imageUrl: '/images/HCMC_NDVI_2024.jpg',
    category: 'GIS',
  },
  {
    id: 'gis-2',
    title: 'Student Housing Optimization',
    description: 'The model created in this project offers a GIS-based weighted multi-criteria decision analysis (MCDA) model designed to optimize the selection of student housing surrounding Brigham Young University (BYU).',
    tags: ['ArcGIS Pro', 'Multi-Criteria Modeling', 'Data Engineering'],
    imageUrl: '/images/StudentHousingModel.jpg',
    category: 'GIS',
  },
  {
    id: 'cs-1',
    title: 'NoteQuiz Ai',
    description: 'NoteQuiz AI a study tool powered by the latest capabilities in multimodal AI. Built using Vite, Google Gemini API, Stripe for payments, Clerk for authentication, and Vercel.',
    tags: ['React', 'WebGL', 'Node.js'],
    imageUrl: '/images/NoteQuiz_UI.jpg',
    link: 'https://www.notequiz.xyz/',
    github: 'https://github.com/devinqtran',
    category: 'CS',
  },
  {
    id: 'cs-2',
    title: 'Parent Powered ABA',
    description: 'Learn professional ABA strategies to help your child improve communication, social skills, and behavior while strengthening your family bond.',
    tags: ['Web Development', 'UI Design', 'Frontend', 'Blog'],
    imageUrl: '/images/parent_powered_aba.png',
    link: 'https://parentpoweredaba.com/',
    category: 'CS',
  }
];

export const PAPERS: Paper[] = [
  {
    id: 'p1',
    title: 'Student Housing Optimization: Multi-Criteria Spatial Analysis of Student Housing Factors',
    journal: 'BYU Geography',
    year: 2025,
    abstract: 'The model created in this project offers a GIS-based weighted multi-criteria decision analysis (MCDA) model designed to optimize the selection of student housing surrounding Brigham Young University (BYU).',
    authors: ['Devin Q. Tran'],
    pdfUrl: '/public/papers/student-housing-model.pdf' 
  },
  {
    id: 'p2',
    title: 'U.S. Bitcoin Strategic Reserve: Implications for America’s Financial Future',
    journal: 'BYU',
    year: 2025,
    abstract: 'Analysis of potential implications from the implementation of a U.S. Bitcoin Strategic Reserve. Article examines possible economic outcomes, technological advancements, and financial security for the U.S.',
    authors: ['Devin Q. Tran'],
    pdfUrl: '/public/papers/Final_Conference_Paper.pdf'
  }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  email: 'mailto:devinqtran@gmail.com'
};