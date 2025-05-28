'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Optum',
    range: 'Jan 2022 – Present',
    points: [
      'Led technical reviews and created manuals for devs and users.',
      'Mentored interns and gave live code demos to stakeholders.',
      'Optimized backend systems with Spring Boot and modernized React UI.',
      'Remediated 100+ security vulnerabilities using CodeQL.',
      'Built internal tools to replace costly third-party apps.',
    ],
  },
  {
    title: 'Full-Stack Java Developer Certification',
    company: 'Per Scholas',
    range: 'Graduated June 2021',
    points: [
      'Completed an intensive full-stack Java bootcamp.',
      'Built a Student-Course App using Spring Boot and JSP.',
      'Practiced Agile and Scrum in collaborative projects.',
    ],
  },
  {
    title: 'B.S. in Kinesiology',
    company: 'UIC – University of Illinois at Chicago',
    range: 'Graduated May 2021',
    points: [
      'Graduated Cum Laude with Honors College distinction.',
      'President of UIC EBS Club (2018–2021).',
    ],
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });

  return (
    <section ref={ref} className="relative px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">My Journey</h2>

      <div className="relative">
        {/* Vertical animated progress line behind cards */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="origin-top absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-600 rounded z-0"
        ></motion.div>

        <div className="relative space-y-32 flex flex-col items-center z-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="w-full md:w-2/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700"
            >
              <span className="block mb-2 text-lg font-semibold text-gray-400 dark:text-gray-500">{exp.range}</span>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-blue-700 font-medium">{exp.company}</p>
              <ul className="list-disc ml-5 mt-3 text-gray-700 dark:text-gray-300">
                {exp.points.map((point, j) => (
                  <li key={j} className="mt-1">{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}