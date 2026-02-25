"use client";

import { MEDIA_URL } from "@/lib/api";
import { ExperienceType } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

type ExperienceProps = {
  experiences: ExperienceType[];
  title?: string;
};

export default function ExperienceSection({ experiences, title }: ExperienceProps) {
  // Sort experiences: current first, then by start date descending
  const sortedExperiences = [...(experiences || [])]
    .filter(exp => exp.status)
    .sort((a, b) => {
      if (a.is_current && !b.is_current) return -1;
      if (!a.is_current && b.is_current) return 1;
      return new Date(b.start_date).getTime() - new Date(a.start_date).getTime();
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          {title || "Work Experience"}
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-600"
        ></motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 md:ml-6 space-y-12"
      >
        {sortedExperiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 z-10 ${exp.is_current ? 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]' : 'bg-gray-400'}`}
            >
              {exp.is_current && (
                <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-75"></span>
              )}
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  {exp.media_path ? (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative w-12 h-12 flex-shrink-0 bg-white rounded-lg overflow-hidden border border-gray-100 p-1"
                    >
                      <Image
                        unoptimized
                        src={exp.media_path}
                        alt={exp.media_alt || exp.company}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  ) : (
                    <div className="w-12 h-12 flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center">
                      <Briefcase size={24} />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span>
                      {new Date(exp.start_date).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })} -
                      {exp.is_current ? " Present" : exp.end_date ? ` ${new Date(exp.end_date).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}` : ""}
                    </span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {exp.description}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
