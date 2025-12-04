import React, { useState, useEffect } from 'react';
import { Menu, X, Map, Code, BookOpen, Mail, FileText } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'GIS & Maps', href: '#gis', icon: Map },
    { label: 'CS & Projects', href: '#cs', icon: Code },
    { label: 'Research', href: '#research', icon: BookOpen },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-serif font-bold tracking-tight text-slate-900">
          Devin Q. Tran
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-medium text-slate-600 hover:text-accent transition-colors flex items-center gap-2"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </a>
          ))}
          {/* Resume Button */}
          <button 
            onClick={onOpenResume}
            className="text-sm font-medium px-4 py-2 border border-slate-200 rounded-full text-slate-600 hover:text-accent hover:border-accent transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Resume
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg p-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="flex items-center gap-3 text-slate-700 hover:text-accent p-2 rounded-lg hover:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </a>
          ))}
          <button 
            className="flex items-center gap-3 text-slate-700 hover:text-accent p-2 rounded-lg hover:bg-slate-50 w-full text-left"
            onClick={() => {
              onOpenResume();
              setIsMobileMenuOpen(false);
            }}
          >
            <FileText className="w-5 h-5" />
            Resume
          </button>
        </div>
      )}
    </header>
  );
};