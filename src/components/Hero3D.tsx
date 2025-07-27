'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-black px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* 3D Scroll Background Layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-600 to-blue-800 opacity-30"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 relative z-20"
        >
          <div className="relative">
            <Image
              src="/assets/profile.jpg" // Update with your image
              alt="Ali Ayan"
              width={480}
              height={480}
              className="rounded-2xl shadow-2xl object-cover border-2 border-gray-800"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center lg:text-left relative z-20"
        >
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Ali Ayan
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mt-4 font-medium">
                Full Stack AI Developer
              </h2>
            </div>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              I am a Full-Stack AI Developer skilled in Tailwind CSS, JavaScript, TypeScript, and AI solutions,
              with expertise in creating responsive websites and scalable API servers. I specialize in AI chatbots
              and real-time systems that improve user interaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
              >
                View My Work
              </a>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/AliAyan1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* GitHub icon SVG */}
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/ali-ayan-820a31280/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* LinkedIn icon SVG */}
                </svg>
              </a>
              {/* Add other social icons here */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
