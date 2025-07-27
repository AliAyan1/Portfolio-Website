'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Travel UI Web",
    description: "A modern, fully responsive travel website built with Next.js and Tailwind CSS, featuring smooth scrolling navigation and interactive UI components.",
    live: "https://github.com/AliAyan1/travel-ui-web-.git", // Updated GitHub link
  },
  {
    title: "ConvX",
    description: "ConvX is a modern, responsive web application that allows users to convert units and exchange currencies seamlessly.",
    live: "https://github.com/AliAyan1/ConvX.git", // Updated GitHub link
  },
  {
    title: "Mental Journal",
    description: "A personal mental health journal web application designed to help users track their moods and thoughts.",
    live: "https://github.com/AliAyan1/hoodie-store.git", // Updated GitHub link (as provided, even if it links to hoodie-store)
  },
  {
    title: "Hoodie Store",
    description: "A simple e-commerce platform designed to showcase and sell hoodies.",
    live: "https://github.com/AliAyan1/hoodie-store.git", // Updated GitHub link
  },
  {
    title: "AI Chatbot",
    description: "I have developed an AI chatbot using Next.js and Tailwind CSS, featuring Text-to-Speech (TTS) functionality for real-time voice interactions. It provides an engaging, seamless conversational experience with advanced AI capabilities.",
    live: "https://github.com/AliAyan1/Portfolio-Website.git", // No GitHub link provided, so set to empty
  },
  {
    title: "3D Portfolio Website", // Changed title
    description: "I have also developed numerous 3D portfolio websites utilizing various design and prototyping platforms, showcasing a strong understanding of user-centered design principles and interactive experiences.", // Updated description
    live: "", // No specific link for multiple UI/UX projects
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-blue-950 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line for Desktop (hidden on mobile) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-600 rounded-full z-0 hidden md:block"></div>
          {/* Vertical Line for Mobile (hidden on desktop) */}
          <div className="absolute left-6 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-600 rounded-full z-0 md:hidden"></div>

          {projects.map((project, index) => (
            <div key={index} className="flex items-center w-full py-8 relative">
              {/* Mobile Project Card (hidden on desktop) */}
              <div className="absolute left-4 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full z-10 border-2 border-blue-950 md:hidden"></div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-blue-700/30 shadow-lg relative z-10 ml-10 md:hidden"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.live && ( // Conditionally render button only if live link exists
                  <button
                    className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    View Project
                  </button>
                )}
              </motion.div>

              {/* Desktop Project Layout (hidden on mobile) */}
              <div className="hidden md:flex md:grid md:grid-cols-[1fr_24px_1fr] md:gap-4 w-full items-center">
                {/* Left Card for Even Index */}
                {index % 2 === 0 ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-blue-700/30 shadow-lg relative z-10 md:col-start-1 md:col-end-2 md:ml-auto"
                    >
                      <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      {project.live && ( // Conditionally render button only if live link exists
                        <button
                          className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md"
                          onClick={() => window.open(project.live, '_blank')}
                        >
                          View Project
                        </button>
                      )}
                    </motion.div>
                    {/* Centered Dot */}
                    <div className="relative z-20 w-8 h-8 flex items-center justify-center md:col-start-2 md:col-end-3">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full border-2 border-blue-950"></div>
                    </div>
                    {/* Spacer for right side */}
                    <div></div>
                  </>
                ) : (
                  <>
                    {/* Spacer for left side */}
                    <div></div>
                    {/* Centered Dot */}
                    <div className="relative z-20 w-8 h-8 flex items-center justify-center md:col-start-2 md:col-end-3">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full border-2 border-blue-950"></div>
                    </div>
                    {/* Right Card for Odd Index */}
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-blue-700/30 shadow-lg relative z-10 md:col-start-3 md:col-end-4 md:mr-auto"
                    >
                      <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      {project.live && ( // Conditionally render button only if live link exists
                        <button
                          className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md"
                          onClick={() => window.open(project.live, '_blank')}
                        >
                          View Project
                        </button>
                      )}
                    </motion.div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}