'use client';

import { motion } from 'framer-motion';
import { FaJava, FaReact, FaDatabase, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss, SiMysql } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

const skills = [
  { name: 'Java', icon: <FaJava className="text-orange-600 text-3xl" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600 text-3xl" /> },
  { name: 'React', icon: <FaReact className="text-blue-400 text-3xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500 text-3xl" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-700 text-3xl" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-500 text-3xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500 text-3xl" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
  { name: 'JSP', icon: <FaCode className="text-gray-600 text-3xl" /> },
];

export default function SkillsSection() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12"
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center"
          >
            {skill.icon}
            <span className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}