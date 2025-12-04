import React, { useState } from 'react';
import { Paper } from '../types';
import { FileText, ChevronRight } from 'lucide-react';
import { PdfModal } from './PdfModal';

interface ResearchListProps {
  papers: Paper[];
}

export const ResearchList: React.FC<ResearchListProps> = ({ papers }) => {
  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {papers.map((paper) => (
        <div 
          key={paper.id} 
          onClick={() => setSelectedPaper(paper)}
          className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-accent/50 hover:shadow-lg transition-all cursor-pointer flex items-start gap-4"
        >
          <div className="flex-shrink-0 mt-1 p-3 bg-blue-50 text-accent rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
            <FileText className="w-6 h-6" />
          </div>
          
          <div className="flex-grow">
            <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-accent transition-colors">
              {paper.title}
            </h3>
            <p className="text-sm text-slate-500 mt-1 mb-2">
              {paper.authors.join(', ')} • <span className="italic">{paper.journal}</span> • {paper.year}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {paper.abstract}
            </p>
          </div>
          
          <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0">
            <ChevronRight className="w-6 h-6 text-accent" />
          </div>
        </div>
      ))}

      <PdfModal 
        isOpen={!!selectedPaper}
        onClose={() => setSelectedPaper(null)}
        pdfUrl={selectedPaper?.pdfUrl || ''}
        title={selectedPaper?.title || ''}
      />
    </div>
  );
};