'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero3D() {
  const [showProfile, setShowProfile] = useState(false);
  useEffect(() => {
    // Delay to allow background to animate in first
    const timer = setTimeout(() => setShowProfile(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-black px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Animated Floating Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-30 z-0"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full opacity-20 z-0"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-400 rounded-full opacity-20 z-0"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      {/* Existing animated gradient background */}
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
          initial={{ opacity: 0, rotateY: -90, scale: 0.8, filter: 'blur(10px)' }}
          animate={showProfile ? { opacity: 1, rotateY: 0, scale: 1, filter: 'blur(0px)', boxShadow: '0 0 40px 10px #7f5af0' } : {}}
          transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
          className="flex-shrink-0 relative z-20"
          style={{ perspective: 1000 }}
        >
          <div className="relative">
            <Image
              src="/assets/profile.jpg"
              alt="Ali Ayan"
              width={480}
              height={480}
              className="rounded-2xl shadow-2xl object-cover border-2 border-gray-800"
            />
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              initial={{ boxShadow: '0 0 0px 0px #7f5af0' }}
              animate={showProfile ? { boxShadow: '0 0 40px 10px #7f5af0' } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
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
