'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m a passionate full-stack developer with a strong foundation in modern web technologies. I love creating digital experiences that are not only visually appealing but also highly functional and user-friendly.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in web development started with curiosity and has evolved into a career where I get to solve complex problems and build innovative solutions every day.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open source projects, or sharing my knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="text-blue-400 text-2xl font-bold mb-2">35+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="text-blue-400 text-2xl font-bold mb-2">1+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="text-blue-400 text-2xl font-bold mb-2">50+</div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="text-blue-400 text-2xl font-bold mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
