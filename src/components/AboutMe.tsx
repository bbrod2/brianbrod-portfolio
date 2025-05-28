'use client';

import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
      >
        I'm Brian Brod, a Full-Stack Software Engineer with a strong focus on backend development, system optimization, and building secure, scalable applications. With experience in technologies like Java, Spring Boot, MySQL, and React, I've contributed to impactful software solutions in healthcare and nonprofit sectors. I hold a degree in Kinesiology from UIC and a Full-Stack Java Developer certification from Per Scholas.
        <br /><br />
        Beyond coding, I actively volunteer through ASEZ WAO, leading environmental clean-up efforts and community service events. I'm passionate about using technology to solve real-world problems, collaborate effectively in teams, and keep learning every day.
      </motion.p>
    </section>
  );
}
