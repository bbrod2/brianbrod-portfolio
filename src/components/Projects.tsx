'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'NCA WMSCOG Website',
    description: 'A modern, responsive WordPress site for a church organization, designed with structured navigation, event integration, and media resources.',
    stack: ['PHP', 'WordPress', 'HTML', 'CSS'],
    link: 'https://www.ncawmscog.org',
  },
  {
    title: 'Activedo Productivity App',
    description: 'A full-stack time and task tracking platform built using Spring Boot and MySQL, featuring authentication, session management, and deployment via Docker on DigitalOcean.',
    stack: ['Spring Boot', 'MySQL', 'JSP', 'Docker'],
    link: 'https://www.active-do.com',
  },
];

export default function Projects() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Stack:</strong> {project.stack.join(', ')}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Visit Site
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
