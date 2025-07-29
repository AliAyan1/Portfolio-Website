"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProfileImageAnimated from './ProfileImageAnimated';

export default function About() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const stats = [
    { value: "35+", label: "Projects Completed", color: "from-blue-400 to-cyan-400" },
    { value: "1+", label: "Years Experience", color: "from-purple-400 to-pink-400" },
    { value: "25+", label: "Happy Clients", color: "from-green-400 to-emerald-400" },
    { value: "24/7", label: "Support", color: "from-orange-400 to-red-400" }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center lg:items-start mb-8">
          <ProfileImageAnimated size={96} animation="fade" className="mb-4 lg:mb-0 lg:mr-8" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
       <h2 className="text-5xl font-bold text-white mb-4">
  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">Me</span>
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
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCard(selectedCard === index ? null : index)}
                  className={`
                    bg-gray-900 p-6 rounded-xl border border-gray-800 cursor-pointer relative
                    transition-all duration-300 hover:border-gray-600
                    ${selectedCard === index ? 'ring-2 ring-blue-400 bg-gray-800' : ''}
                  `}
                >
                  <motion.div
                    className={`text-2xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    animate={selectedCard === index ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <motion.div 
                    className="text-gray-300 text-sm"
                    animate={selectedCard === index ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {stat.label}
                  </motion.div>

                  {/* Hover effect overlay */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${stat.color} opacity-0`}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Click ripple effect */}
                  {selectedCard === index && (
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 border-blue-400"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.2, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  )}

                  {/* Floating particles on hover */}
                  <motion.div
                    className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0"
                    whileHover={{ 
                      opacity: [0, 1, 0],
                      y: [-10, -20, -30],
                      x: [0, 5, 10]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Selected card details */}
        {selectedCard !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="mt-8 p-6 bg-gray-900 rounded-xl border border-gray-700"
          >
            <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${stats[selectedCard].color} bg-clip-text text-transparent`}>
              {stats[selectedCard].label}
            </h3>
            <p className="text-gray-300">
              {selectedCard === 0 && "Successfully delivered 35+ projects ranging from web applications to mobile apps, each tailored to meet client requirements."}
              {selectedCard === 1 && "Over 1 year of hands-on experience in full-stack development, constantly learning and adapting to new technologies."}
              {selectedCard === 2 && "Maintained excellent client relationships with 50+ satisfied customers who trust my development expertise."}
              {selectedCard === 3 && "Providing round-the-clock support and maintenance services to ensure your applications run smoothly."}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}