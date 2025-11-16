import { Loader2, Mail } from 'lucide-react';
import React, { useState } from 'react'


type contactProps = {
    title: string;
}


export default function ContactSection({ title }: contactProps) {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formSubmitting, setFormSubmitting] = useState(false);

    // API Configuration
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitting(true);

        try {
            const response = await fetch(`${API_BASE_URL}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error('Failed to send message');

            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            alert('Failed to send message. Please try again.');
            console.error('Form submission error:', err);
        } finally {
            setFormSubmitting(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <section id="contact" className="py-20">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        {title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-12"></div>

                    <div className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                            />
                        </div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Your Message"
                            rows={6}
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                        />
                        <button
                            onClick={handleSubmit}
                            disabled={formSubmitting}
                            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {formSubmitting ? (
                                <>
                                    <Loader2
                                        size={20} className="animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Mail size={20} />
                                    Send Message
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </section>

        </>
    )
}
