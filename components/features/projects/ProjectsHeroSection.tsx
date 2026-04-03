"use client"

import { motion } from "framer-motion"
import { FolderGit2 } from "lucide-react"

export function ProjectsHeroSection() {
  return (
    <section className="relative border-b border-border/60 bg-muted/20 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, type: "spring" }}
          className="mb-4 inline-block"
        >
          <div className="rounded-2xl bg-primary/10 p-4 backdrop-blur-sm">
            <FolderGit2 className="h-12 w-12 text-primary sm:h-16 sm:w-16" />
          </div>
        </motion.div>
        <h1 className="mb-4 bg-gradient-to-r from-primary via-primary/85 to-primary/70 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
          Projects
        </h1>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
          Selected work and practice builds — dummy entries for this portfolio
          demo.
        </p>
      </div>
    </section>
  )
}
