"use client"

import { MEDIA_URL } from '@/lib/api';
import { ProjectType } from '@/lib/types';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';

type ProjectProps = {
  projects: ProjectType[];
  title: string;
};

export default function ProjectSection({ title, projects }: ProjectProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="bg-white dark:bg-gray-800/50 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {title || 'Featured Projects'}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-12"
          ></motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <Image
                  unoptimized
                  src={project.media_path ? project.media_path : ''}
                  alt={project.media_alt || project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end"
                >
                  <div className="flex gap-4">
                    {project.github_link && (
                      <a href={project.github_link} target="_blank" className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                        <Github size={20} className="text-white" />
                      </a>
                    )}
                    {project.project_link && (
                      <a href={project.project_link} target="_blank" className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies_list?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Mobile Links */}
                <div className="flex gap-3 pt-2 lg:hidden">
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.project_link && (
                    <a
                      href={project.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
