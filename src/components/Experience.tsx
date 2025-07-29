"use client";
import { motion } from 'framer-motion';
import ProfileImageAnimated from './ProfileImageAnimated';

const experiences = [
  {
    title: "Full Stack AI Developer",
    company: "Evren AI",
    period: "2025 - Present",
    description: "Developing scalable web applications using React, Node.js, and modern technologies. Leading frontend development and collaborating with cross-functional teams.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB","Next.js", "API"]
  },
  {
    title: "Web Developer Intern",
    company: "PureLogics",
    period: "2024",
    description: "Created responsive and interactive user interfaces for various client projects. Focused on user experience and performance optimization.",
    technologies: ["React", "JavaScript", "CSS3", "Figma","HTML", "TypeScript"]
  },
  {
    title: "Customer Sales Representative ",
    company: "Bookme",
    period: "2022 - 2023",
    description: "Assisted in developing company website and internal tools. Gained experience in sales pitching and call center industry",
    technologies: ["How to pitch clients?"]
  },



];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center lg:items-start mb-8">
          <ProfileImageAnimated size={88} animation="rotate" className="mb-4 lg:mb-0 lg:mr-8" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-black border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0 md:ml-4">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
