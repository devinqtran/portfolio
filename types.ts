export interface Skill {
  name: string;
  category: 'GIS' | 'CS' | 'Design' | 'Research';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  category: 'GIS' | 'CS';
}

export interface Paper {
  id: string;
  title: string;
  journal: string;
  year: number;
  abstract: string;
  pdfUrl: string; // URL to the PDF file
  authors: string[];
}