"use client"

import { MEDIA_URL } from '@/lib/api'
import { ProfileSectionProps } from '@/lib/types'
import Image from 'next/image'
import React from 'react'




export default function ProfileSection({ cms }: ProfileSectionProps) {
    return (
        <>
            <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-fadeInUp">
                        <p className="text-sm uppercase tracking-widest text-blue-500 font-semibold">
                            {cms?.super_title}
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                            {cms?.title}
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            {cms?.description}
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href={cms?.btn_one_link}
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-0.5 transition-all"
                            >
                                {cms?.btn_one_text}
                            </a>
                            <a
                                href={cms?.btn_two_link}
                                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:border-blue-500 dark:hover:border-blue-500 transition-all"
                            >
                                {cms?.btn_two_text}
                            </a>
                        </div>
                    </div>
                    <div className="relative animate-fadeInUp w-72 h-72 aspect-square" style={{ animationDelay: '0.2s' }}>
                        <div className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-20 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                            <Image
                                src={`${MEDIA_URL}${cms.media_path}`}
                                alt={cms?.media_alt}
                                fill  // Use fill if with next/image and parent is relative+has width/height
                                className="object-cover rounded-full"
                                sizes="100vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}