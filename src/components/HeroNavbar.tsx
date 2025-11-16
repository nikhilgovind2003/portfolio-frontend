import { Menu, Moon, Sun, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export default function HeroNavbar({mobileMenuOpen, setMobileMenuOpen, darkMode, setDarkMode, cms}: {mobileMenuOpen: boolean, setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>, darkMode: boolean, setDarkMode: React.Dispatch<React.SetStateAction<boolean>>, cms: any}) {
    
    // Apply dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  
  return (
    <>
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Nikhil Govind OV
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#projects" className="hover:text-blue-500 transition-colors font-medium">Projects</a>
              <a href="#skills" className="hover:text-blue-500 transition-colors font-medium">Skills</a>
              <a href="#about" className="hover:text-blue-500 transition-colors font-medium">About</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors font-medium">Contact</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 animate-fadeIn">
              {['projects', 'skills', 'about', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block py-2 hover:text-blue-500 capitalize font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

    </>
  )
}
