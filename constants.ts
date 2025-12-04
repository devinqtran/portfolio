import { Project, Paper, Skill } from './types';

export const RESUME_URL = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

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
    title: 'Urban Heat Island Analysis',
    description: 'A comprehensive spatial analysis of surface temperature variations across metropolitan areas using Landsat 8 imagery. Identified key correlation between vegetation density and temperature reduction.',
    tags: ['ArcGIS Pro', 'Remote Sensing', 'Python'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    category: 'GIS',
  },
  {
    id: 'gis-2',
    title: 'Watershed Flood Modelling',
    description: 'Developed a predictive model for flood risk assessment in river basins using DEM data and hydrological analysis tools. Produced interactive risk maps for local municipalities.',
    tags: ['QGIS', 'Hydrology', 'GeoPandas'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    category: 'GIS',
  },
  {
    id: 'cs-1',
    title: 'GeoData Visualizer',
    description: 'A full-stack web application allowing users to upload GeoJSON files and visualize them on an interactive 3D globe. Built with React Three Fiber and Mapbox GL.',
    tags: ['React', 'WebGL', 'Node.js'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    link: 'https://github.com/devinqtran',
    github: 'https://github.com/devinqtran',
    category: 'CS',
  },
  {
    id: 'cs-2',
    title: 'Smart City Dashboard UI',
    description: 'A high-fidelity dashboard design for monitoring IoT sensor networks in smart cities. Features dark mode, real-time data graphs, and administrative controls.',
    tags: ['Figma', 'UI Design', 'Frontend'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    category: 'CS',
  }
];

export const PAPERS: Paper[] = [
  {
    id: 'p1',
    title: 'Optimizing Spatial Indexing for Large-Scale Vector Data',
    journal: 'Journal of Spatial Information Science',
    year: 2023,
    abstract: 'This paper explores novel quadtree-based indexing strategies to improve query performance on massive vector datasets stored in distributed databases.',
    authors: ['Devin Q. Tran', 'Dr. A. Smith'],
    // Using a placeholder PDF for demonstration. In production, this would be a local file or hosted PDF.
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' 
  },
  {
    id: 'p2',
    title: 'Machine Learning Approaches to Land Use Classification',
    journal: 'International Conference on GIS',
    year: 2022,
    abstract: 'A comparative study of Random Forest and Support Vector Machines for classifying land use types from high-resolution satellite imagery.',
    authors: ['Devin Q. Tran', 'J. Doe'],
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  email: 'mailto:contact@devinqtran.com'
};