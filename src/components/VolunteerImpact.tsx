'use client';

import { motion } from 'framer-motion';

const volunteerWork = [
  {
    title: 'ASEZ WAO Volunteer Leader',
    description:
      'Organized and led multiple environmental clean-up events as part of ASEZ WAO — a global young adult worker volunteer group. Coordinated efforts such as invasive species removal, riverbank cleanups, and city beautification in partnership with local officials. These initiatives not only improved local ecosystems but also fostered community engagement and awareness about environmental issues.',
  },
  {
    title: 'We Love U Foundation Contributor',
    description:
      'Contributed to We Love U Foundation initiatives focused on global welfare and environmental protection. Participated in awareness campaigns, donation drives, and park revitalization projects that positively impacted underserved communities.',
  },
  {
    title: 'Church of God Developer Team Member',
    description:
      'Volunteer member of the Church of God’s developer team. Contributed to the design and development of the regional website, which is listed in the project section. Focused on front-end integration, responsive layouts, and WordPress implementation.',
  }
];

export default function VolunteerImpact() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Volunteer Work / Community Impact
      </motion.h2>

      <div className="space-y-12">
        {volunteerWork.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white dark:bg-gray-800 border-l-4 border-green-500 p-6 rounded shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
