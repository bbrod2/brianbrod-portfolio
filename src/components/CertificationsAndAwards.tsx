'use client';

import { motion } from 'framer-motion';

const honors = [
  {
    title: 'Full-Stack Java Developer Certification',
    issuer: 'Per Scholas',
    date: 'June 2021',
    description: 'Completed an intensive bootcamp focused on backend and frontend development using Java, Spring Boot, and web technologies. Practiced Agile methodologies and collaborated in team projects.'
  },
  {
    title: 'Graduated Cum Laude with Honors College Distinction',
    issuer: 'University of Illinois at Chicago',
    date: 'May 2021',
    description: 'Recognized for high academic achievement, achieving a GPA of 4.0 across multiple semesters.'
  }
];

export default function CertificationsAndAwards() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Certifications & Awards
      </motion.h2>

      <div className="space-y-10">
        {honors.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded shadow-md border-l-4 border-blue-500"
          >
            <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.issuer} &middot; {item.date}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
