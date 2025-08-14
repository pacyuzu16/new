import React, { useState } from 'react';
import { Menu, X, User, Briefcase, GraduationCap, Mail, FolderOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About', icon: User },
    { href: '#education', label: 'Education', icon: GraduationCap },
    { href: '#experience', label: 'Experience', icon: Briefcase },
    { href: '#projects', label: 'Projects', icon: FolderOpen },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 truncate">
              Pacyuzu
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map(({ href, label, icon: Icon }) => (
              <button
                key={href}
                onClick={() => scrollToSection(href)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm xl:text-base"
              >
                <Icon size={14} className="xl:w-4 xl:h-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-1 pt-4">
              {navItems.map(({ href, label, icon: Icon }) => (
                <button
                  key={href}
                  onClick={() => scrollToSection(href)}
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-2 rounded-lg text-left"
                >
                  <Icon size={18} />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;