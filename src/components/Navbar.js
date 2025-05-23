import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Ana Sayfa', path: '#home' },
    { name: 'Ben Kimim?', path: '#about' },
    { name: 'Neler Yapabilirim?', path: '#skills' },
    { name: 'Projeler', path: '#portfolio' },
    { name: 'İletişim', path: '#contact' },
  ];

  const scrollToSection = (path) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => scrollToSection(item.path)}
                className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 p-2"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 absolute top-16 left-0 right-0 z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => scrollToSection(item.path)}
                className="text-white hover:text-blue-400 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 