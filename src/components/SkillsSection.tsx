import { MEDIA_URL } from '@/lib/api';
import Image from 'next/image';
import React from 'react'

type skillType = {
  skills: string;
  status: boolean;
  sort_order: number;
  media_path: string;
  media_alt: string;
}

type skillsProps = {
  skills: skillType[];
  title: string;
}

export default function SkillsSection({ skills, title }: skillsProps) {
  // Duplicate skills for infinite scroll effect
  const duplicatedSkills = [...skills, ...skills];

  return (
    <>
      <section id="skills" className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            {title || 'Technical Skills'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-12 mx-auto"></div>

          {/* Auto-scrolling container */}
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>

            <div className="skill-scroll-container">
              <div className="skill-scroll-content">
                {skills?.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-card group flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 min-w-[150px]"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      {skill.media_path ? (
                        <Image
                          width={100}
                          height={100}
                          src={`${MEDIA_URL}${skill.media_path}`}
                          alt={skill.media_alt}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        '💻'
                      )}
                    </div>
                    <span className="text-sm font-medium text-center group-hover:text-blue-500 transition-colors whitespace-nowrap">
                      {skill.skills}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Static Grid (Optional - shown on hover to pause) */}
          {/* <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {skill.media_path ? (
                    <Image
                      width={48}
                      height={48}
                      src={`${MEDIA_URL}${skill.media_path}`}
                      alt={skill.media_alt}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    '💻'
                  )}
                </div>
                <span className="text-sm font-medium text-center group-hover:text-blue-500 transition-colors">
                  {skill.skills}
                </span>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      <style jsx>{`
        .skill-scroll-container {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .skill-scroll-content {
          display: flex;
          gap: 1.5rem;
          animation: scroll 30s linear infinite;
          width: fit-content;
        }

        .skill-scroll-content:hover {
          animation-play-state: paused;
        }

        .skill-card {
          flex-shrink: 0;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .skill-scroll-content {
            animation-duration: 20s;
          }
        }
      `}</style>
    </>
  )
}