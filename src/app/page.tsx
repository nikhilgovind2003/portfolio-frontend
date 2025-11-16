"use client"

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, ExternalLink, Mail, Menu, X, Loader2 } from 'lucide-react';
import fetchAPI from '@/lib/api';
import HeroNavbar from '@/components/HeroNavbar';
import ProfileSection from '@/components/ProfileSection';
import ProjectSection from '@/components/ProjectSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';


const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ cms: null, projects: [], skills: [] });

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, error } = await fetchAPI(`web`);

        if (error) {
          return <>
            <h1>Data not found</h1>
            <p>{error?.message}</p>
          </>
        }

        const result = data
        setData(result);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  // Handle contact form submission
 
  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Loader2 className="animate-spin text-blue-500" size={48} />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Error Loading Portfolio</h2>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  const { cms, projects, skills } = data;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <HeroNavbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} darkMode={darkMode} setDarkMode={setDarkMode} cms={cms} />
      <ProfileSection cms={cms} />
      <ProjectSection title={cms?.project_title} projects={projects} />
      <SkillsSection skills={skills} title={cms?.skills_title} />
      <AboutSection title={cms?.about_title} description={cms?.about_description} />
      <ContactSection title={cms?.contact_title} />
    
      {/* Footer */}
 <FooterSection/>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;