"use client"

import HeroNavbar from '@/components/HeroNavbar';
import ProfileSection from '@/components/ProfileSection';
import ProjectSection from '@/components/ProjectSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import { useState } from 'react';
import { CmsType, ProjectType, skillType } from '@/lib/types';

export default function Portfolio({cms, projects, skills}:  {cms: CmsType, projects: ProjectType[], skills: skillType[]}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);



  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <HeroNavbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} darkMode={darkMode} setDarkMode={setDarkMode} />
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
