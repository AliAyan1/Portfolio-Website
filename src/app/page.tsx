"use client";

import Header from "../components/Header";
import Hero3D from "../components/Hero3D";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowAbout(true), 1200), // after Hero3D
      setTimeout(() => setShowExperience(true), 2000),
      setTimeout(() => setShowProjects(true), 2800),
      setTimeout(() => setShowContact(true), 3600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="font-sans bg-black text-white min-h-screen">
      {/* Header component */}
      <Header />

      {/* Main content area */}
      <main>
        {/* Hero section with 3D animation */}
        <Hero3D />

        {/* About section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={showAbout ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.div>

        {/* Experience section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={showExperience ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Experience />
        </motion.div>

        {/* Projects section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={showProjects ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Projects />
        </motion.div>

        {/* Contact section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={showContact ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.div>
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  );
}
