"use client";

import { MEDIA_URL } from "@/lib/api";
import { skillType } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type skillsProps = {
  skills: skillType[];
  title: string;
};

export default function SkillsSection({ skills, title }: skillsProps) {
  // Duplicate skills for infinite scroll effect

  const loopSkills = [...skills, ...skills];


  return (
    <>
      <section id="skills" className="max-w-6xl mx-auto py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {title || "Technical Skills"}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-12"
            ></motion.div>
          </motion.div>

          {/* Auto-scrolling container */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>

            <div className="skill-scroll-container pt-6">
              <div className="skill-scroll-content">
                {loopSkills?.map((skill, index) => {

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative group skill-card flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 min-w-[150px] overflow-hidden"
                    >
                      {/* Content on top */}
                      <div className="relative z-10 text-4xl mb-3 group-hover:scale-110 transition-transform">
                        {skill.media_path ? (
                          <Image
                            width={100}
                            height={100}
                            unoptimized
                            src={
                              skill.media_path
                                ? skill.media_path
                                : "/reactjs.png"
                            }
                            alt={skill.media_alt}
                            className="w-12 h-12 object-contain"
                          />
                        ) : (
                          "💻"
                        )}
                      </div>
                      <span className="relative z-10 text-sm font-medium text-center group-hover:text-blue-500 transition-colors whitespace-nowrap">
                        {skill.skills}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
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
          animation: scroll 20s linear infinite;
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
  );
}
