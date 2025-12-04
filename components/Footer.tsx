import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif font-bold mb-2">Devin Q. Tran</h2>
          <p className="text-slate-400">GIS Analyst & Software Engineer</p>
        </div>

        <div className="flex gap-6">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-accent transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-accent transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={SOCIAL_LINKS.email} className="p-2 bg-slate-800 rounded-full hover:bg-accent transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Devin Q. Tran. All rights reserved.
      </div>
    </footer>
  );
};