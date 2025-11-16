import React from 'react'


type aboutProps = {
    title: string;
    description: string;
}

export default function AboutSection({title, description}: aboutProps) {
    return (
        <>
              <section id="about" className="bg-white dark:bg-gray-800/50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8"></div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </section>

        </>
    )
}
