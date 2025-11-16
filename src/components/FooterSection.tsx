import React from 'react'

export default function FooterSection() {
    return (
        <>
            <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>© {new Date().getFullYear()} All rights reserved.</span>
                        <a
                            href="#home"
                            className="hover:text-blue-500 transition-colors flex items-center gap-2"
                        >
                            Back to top ↑
                        </a>
                    </div>
                </div>
            </footer>

        </>
    )
}
