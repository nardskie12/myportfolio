"use client"

import { motion } from "framer-motion"
import { Code } from "lucide-react"

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Next.js", level: 70 },
  { name: "Express.js", level: 65 },
  { name: "Figma", level: 75 },
]

export function AboutSkillsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm sm:p-8"
      >
        <div className="mb-6 flex items-start gap-4">
          <div className="shrink-0 rounded-xl bg-primary/10 p-3">
            <Code className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="mb-6 text-xl font-semibold text-foreground sm:text-2xl">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground sm:text-base">
                      {skill.name}
                    </span>
                    <span className="text-xs text-muted-foreground sm:text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full border border-border/80 bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: index * 0.06 + 0.1,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-primary via-primary/85 to-primary/70"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
