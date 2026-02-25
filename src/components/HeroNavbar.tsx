import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HeroNavbar({mobileMenuOpen, setMobileMenuOpen, darkMode, setDarkMode}: {mobileMenuOpen: boolean, setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>, darkMode: boolean, setDarkMode: React.Dispatch<React.SetStateAction<boolean>>}) {
    
    // Apply dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="#home" className="group text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            <span className="group-hover:tracking-wider transition-all duration-300">Nikhil Govind OV</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['projects', 'experience', 'skills', 'about', 'contact'].map((item) => (
               <motion.div key={item} whileHover={{ y: -2 }}>
                  <Link 
                    href={`#${item}`} 
                    className="hover:text-blue-500 transition-colors font-medium capitalize relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                  </Link>
               </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col space-y-4">
                {['projects', 'experience', 'skills', 'about', 'contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    whileHover={{ x: 10 }}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 capitalize font-medium flex items-center transition-colors px-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
