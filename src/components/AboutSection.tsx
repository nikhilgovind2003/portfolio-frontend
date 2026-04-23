"use client"

import { aboutProps } from "@/lib/types"
import parse from "html-react-parser"
import { motion } from "framer-motion"

export default function AboutSection({title, description}: aboutProps) {
    return (
        <section id="about" className="bg-white dark:bg-gray-800/50 py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        {title}
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8"
                    ></motion.div>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed prose dark:prose-invert max-w-none"
                >
                    {parse(description || "")}
                </motion.div>
            </div>
        </section>
    )
}
