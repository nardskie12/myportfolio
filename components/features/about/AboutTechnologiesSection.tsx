"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Express.js",
  "Figma",
]

export function AboutTechnologiesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm sm:p-8"
      >
        <div className="mb-6 flex items-center gap-4">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            Technologies &amp; Tools
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary sm:text-base"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
