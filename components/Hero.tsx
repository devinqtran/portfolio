import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Abstract Background Element - Suggesting Topography/Network */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 50 Q 25 30 50 50 T 100 50 V 100 H 0 Z" fill="#3b82f6" />
            <path d="M0 70 Q 25 50 50 70 T 100 70 V 100 H 0 Z" fill="#1e293b" />
         </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <p className="text-accent font-medium tracking-wide uppercase mb-4 animate-fade-in-up">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Bridging Spatial Analysis <br />
            <span className="text-slate-500 italic"> & Computer Science</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
            I am a GIS Analyst and Software Engineer specializing in creating data-driven maps, 
            interactive visualizations, and robust software solutions. Explore my work in spatial intelligence and modern web development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#gis" 
              className="px-8 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors text-center shadow-lg hover:shadow-xl"
            >
              View Maps
            </a>
            <a 
              href="#research" 
              className="px-8 py-3 border border-slate-300 bg-white text-slate-700 font-medium rounded-full hover:border-slate-400 hover:bg-slate-50 transition-colors text-center"
            >
              Read Research
            </a>
             <button 
              onClick={onOpenResume}
              className="px-8 py-3 text-slate-600 font-medium rounded-full hover:text-accent transition-colors flex items-center justify-center gap-2 group"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Resume
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};