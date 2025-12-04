import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { ContentData } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  data: ContentData['nav'];
  lang: 'ar' | 'en';
  toggleLang: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ data, lang, toggleLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? 'text-secondary-900' : 'text-white'}`}>
              {lang === 'ar' ? 'لسان العصر' : 'Lisan Al-Asr'}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {data.links.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className={`font-medium text-sm transition-colors ${scrolled ? 'text-secondary-800 hover:text-primary-600' : 'text-white/90 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <button 
              onClick={toggleLang}
              className={`flex items-center space-x-1 space-x-reverse px-3 py-1 rounded-full border ${scrolled ? 'border-secondary-200 text-secondary-600 hover:bg-secondary-50' : 'border-white/30 text-white hover:bg-white/10'}`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs uppercase font-semibold">{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>
            <a 
              href="https://wa.me/96777xxxxxxx"
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-lg font-bold text-sm shadow-lg transition-transform transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {data.cta}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button 
              onClick={toggleLang}
              className={`mr-2 flex items-center px-2 py-1 rounded-full border ${scrolled ? 'border-secondary-200 text-secondary-600' : 'border-white/30 text-white'}`}
            >
              <span className="text-xs uppercase font-bold">{lang === 'ar' ? 'EN' : 'ع'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-secondary-800' : 'text-white'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {data.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <a 
                  href="https://wa.me/96777xxxxxxx"
                  className="block w-full text-center bg-primary-600 text-white px-4 py-3 rounded-lg font-bold"
                >
                  {data.cta}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;