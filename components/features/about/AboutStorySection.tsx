"use client"

import { motion } from "framer-motion"
import { Sparkles, Target } from "lucide-react"

export function AboutStorySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm sm:p-8"
        >
          <div className="flex items-start gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.55 }}
              className="shrink-0 rounded-xl bg-primary/10 p-3"
            >
              <Sparkles className="h-6 w-6 text-primary" />
            </motion.div>
            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground sm:text-2xl">
                Who I Am
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                I&apos;m <strong className="text-primary">Bernard Bioco</strong>,
                a dedicated{" "}
                <strong className="text-primary">BSIT 3rd Year Student</strong>{" "}
                with a passion for creating exceptional digital experiences. I
                combine technical expertise with creative design to build
                solutions that make a real impact.
              </p>
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm sm:p-8"
        >
          <div className="flex items-start gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.55 }}
              className="shrink-0 rounded-xl bg-primary/10 p-3"
            >
              <Target className="h-6 w-6 text-primary" />
            </motion.div>
            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground sm:text-2xl">
                My Goals
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Continuously learning and growing in the ever-evolving tech
                landscape. My goal is to become a full-stack developer who
                creates meaningful, user-centered applications that solve
                real-world problems.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
