'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-black px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 relative z-20"
        >
          <div className="relative">
            <Image
              src="/assets/profile.jpg"
              alt="Ali Ayan"
              width={480}
              height={480}
              className="rounded-2xl shadow-2xl object-cover border-2 border-gray-800"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center lg:text-left relative z-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Hi, I&apos;m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Ali Ayan
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mt-4 font-medium">
            Full Stack AI Developer
          </h2>
          {/* ... rest unchanged ... */}
        </motion.div>
      </div>
    </section>
  );
}
