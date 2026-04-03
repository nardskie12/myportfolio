"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"

export function ContactHeroSection() {
  return (
    <section className="relative border-b border-border/60 bg-muted/20 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0, rotate: -12 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-4 inline-block"
        >
          <div className="rounded-2xl bg-primary/10 p-4 backdrop-blur-sm">
            <Send className="h-12 w-12 text-primary sm:h-16 sm:w-16" />
          </div>
        </motion.div>
        <h1 className="mb-4 bg-gradient-to-r from-primary via-primary/85 to-primary/70 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
          Get In Touch
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Let&apos;s collaborate and bring your ideas to life. I&apos;m always
          open to discussing new projects and opportunities.
        </p>
      </div>
    </section>
  )
}
