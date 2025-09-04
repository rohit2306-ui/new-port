"use client";
import React from "react";
import { ExternalLink, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const Research: React.FC = () => {
  const mainResearch = {
    title: "Infinite Memory Storage using Signals in Space",
    status: "Ongoing Research",
    description: `This independent theory explores the possibility of utilizing natural signals and spatial frequency domains as infinite storage mediums. By leveraging the properties of quantum noise, wave interference, and spatial signal resonance, this research aims to demonstrate a practical path toward limitless data retention without physical memory modules.`,
    summaryPoints: [
      "Conceptual model based on electromagnetic spatial stability",
      "Daily logs and theoretical updates published on Medium",
      "Long-term vision for redefining digital storage and computation",
    ],
    blogLink:
      "https://medium.com/@rtech3388/infinite-memory-30b395ba40c4",
    impactNote:
      "This work is currently in conceptual development and aims to open new frontiers in theoretical computer science and space-based computation.",
  };

  return (
    <section
      id="research"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Subtle animated background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-500 blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header with fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            My Research
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exploring groundbreaking theories like infinite memory storage using
            signals in space. More research, publications, and innovations are
            linked below.
          </p>
        </motion.div>

        {/* Main Research Card */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl relative overflow-hidden"
        >
          {/* Highlight Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-4"
          >
            <Lightbulb size={28} className="text-yellow-500" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {mainResearch.title}
            </h3>
          </motion.div>

          {/* Status Badge */}
          <span className="inline-block mb-6 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
            {mainResearch.status}
          </span>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
          >
            {mainResearch.description}
          </motion.p>

          {/* Bullet Points */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2"
          >
            {mainResearch.summaryPoints.map((point, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {point}
              </motion.li>
            ))}
          </motion.ul>

          {/* Impact Note */}
          <p className="text-sm text-gray-500 italic mb-6">
            {mainResearch.impactNote}
          </p>

          {/* Link */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={mainResearch.blogLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-500 transition-all"
          >
            <ExternalLink size={18} />
            Read Full Theory on Medium
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
