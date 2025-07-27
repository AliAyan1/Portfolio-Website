'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#0f1e3a]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* ─── LEFT CARD (INFO) ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-2xl p-8 space-y-8 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-white">Let&apos;s Connect</h3>
          <p className="text-gray-300">
            I&apos;m always open to discussing new opportunities, creative ideas, or potential partnerships.
          </p>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                {/* email icon */}
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a href="mailto:aliayan8967@gmail.com" className="text-white hover:text-blue-400 transition">
                  aliayan8967@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                {/* phone icon */}
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <a href="tel:+923247065706" className="text-white hover:text-blue-400 transition">
                  0324-7065706
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                {/* location icon */}
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">Pakistan, Lahore</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/AliAyan1" className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
              {/* GitHub icon */}
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 ..."/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/ali-ayan-820a31280/" className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
              {/* LinkedIn icon */}
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328 ..."/>
              </svg>
            </a>
            <a href="https://twitter.com" className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
              {/* Twitter icon */}
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825 ..."/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* ─── RIGHT CARD (FORM) ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-black rounded-2xl p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-400 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                name="email"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-400 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-400 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
