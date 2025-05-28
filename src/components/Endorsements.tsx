'use client';

import { motion } from 'framer-motion';

const endorsements = [
  {
    author: 'Engineering Manager',
    text: `I would like to use this channel to recognize Brian for his quality level of effort, tenacity, and perseverance by doing a break fix on one of our APIs related to latency in a short period of time and in the process also resolving one of the toughest code vulnerabilities we have had so far in the same section of the code. He replaced a problematic library with native Java code, eliminating the issue entirely, all while pulling a 12-hour workday. I am really fortunate to work with such a smart, hard-working, and tenacious team member with a great attitude who makes our entire team more successful. Thank you Brian!`
  },
  {
    author: 'Technical Lead',
    text: `Brian, this recognition is to acknowledge your continued excellence in developing transformative services for our TDSaaS team. In such a short period of time, you ensured that our code not only meets service requirements, but also offers enduring quality by proactively eliminating vulnerabilities in the open-source ecosystem. Your professionalism and work ethic are exceptional. Thank you for all your support.`
  },
  {
    author: 'Product Owner',
    text: `The rollout of our Self-Service Data Minimization solution on the Health Care Platform Console is a monumental achievement. Brian, along with the team, delivered an innovative, no-code approach to file layout adaptation that significantly enhances customer efficiency and control. Your collaboration, knowledge sharing, and dedication were instrumental in making this a success. Thank you for going the extra mile without compromising quality.`
  }
];

export default function Endorsements() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Endorsements
      </motion.h2>

      <div className="space-y-12">
        {endorsements.map((t, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white dark:bg-gray-800 border-l-4 border-blue-500 p-6 rounded shadow-md"
          >
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <footer className="mt-4 text-sm text-blue-600 font-semibold">– {t.author}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
