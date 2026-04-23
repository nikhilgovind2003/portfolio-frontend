"use client"

import { MEDIA_URL } from '@/lib/api'
import { ProfileSectionProps } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import parse from 'html-react-parser'

export default function ProfileSection({ cms }: ProfileSectionProps) {

    return (
        <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-column justify-center md:text-start sm:py-32 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="space-y-6 flex-1">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-sm uppercase tracking-widest text-blue-500 font-semibold"
                    >
                        {cms?.super_title}
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
                    >
                        {cms?.title}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl prose dark:prose-invert"
                    >
                        {parse(cms?.description || "")}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start"
                    >
                        <Link
                            href={cms?.btn_one_link}
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
                        >
                            {cms?.btn_one_text}
                        </Link>
                        <Link
                            href={`${MEDIA_URL}${cms?.resume}`}
                            target='_blank'
                            className="px-8 py-4 border-2 border-gray-200 dark:border-gray-800 rounded-xl font-medium hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
                        >
                            {cms?.btn_two_text}
                        </Link>
                    </motion.div>
                </div>

                {/* Image container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-72 h-72 md:w-96 md:h-96 mx-auto lg:mx-0 flex-shrink-0"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-20"
                    ></motion.div>
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                        <Image
                            unoptimized
                            src={cms.media_path}
                            alt={cms?.media_alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 288px, 384px"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
