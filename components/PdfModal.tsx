import React from 'react';
import { X, ExternalLink, Download } from 'lucide-react';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose, pdfUrl, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-5xl h-[85vh] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
        <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-white">
          <h3 className="font-serif font-bold text-lg text-slate-800 truncate pr-4">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <a 
              href={pdfUrl} 
              download
              className="p-2 text-slate-500 hover:text-accent hover:bg-slate-100 rounded-full transition-colors"
              title="Download PDF"
            >
              <Download className="w-5 h-5" />
            </a>
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 text-slate-500 hover:text-accent hover:bg-slate-100 rounded-full transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <button 
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex-grow bg-slate-100 relative">
          <iframe 
            src={pdfUrl} 
            className="w-full h-full border-none"
            title={title}
          />
        </div>
      </div>
    </div>
  );
};