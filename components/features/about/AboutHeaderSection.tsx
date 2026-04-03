"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

export function AboutHeaderSection() {
  return (
    <section className="relative border-b border-border/60 bg-muted/20 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, type: "spring" }}
          className="mb-4 inline-block"
        >
          <div className="rounded-2xl bg-primary/10 p-4 backdrop-blur-sm">
            <GraduationCap className="h-12 w-12 text-primary sm:h-16 sm:w-16" />
          </div>
        </motion.div>
        <h1 className="mb-4 bg-gradient-to-r from-primary via-primary/85 to-primary/70 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
          About Me
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Discover my journey, passion, and expertise in web development
        </p>
      </div>
    </section>
  )
}
