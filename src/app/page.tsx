'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import AboutMe from '@/components/AboutMe';
import Endorsements from '@/components/Endorsements';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  useEffect(() => {
    document.title = 'Brian Brod | Software Engineer';
  }, []);

  return (
    <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      <section className="min-h-[60vh] relative flex flex-col justify-center items-center text-center p-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Brian Brod
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl max-w-2xl"
        >
          Full-Stack Developer specializing in backend development, system optimization, and secure scalable applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 flex gap-4"
        >
          <a
            href="https://www.linkedin.com/in/brianbrod"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/bbrod2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
          >
            GitHub
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6"
        >
          <span className="text-2xl text-gray-400">↓</span>
        </motion.div>
      </section>

      <AboutMe />
      <Projects />
      <Endorsements />
      <SkillsSection />

      {/* Ensure the timeline is at the end for better flow */}
      <Timeline />

      <footer className="text-center p-6 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Brian Brod. Built with Next.js, Tailwind CSS, and Framer Motion.
      </footer>
    </main>
  );
}
