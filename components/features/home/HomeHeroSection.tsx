"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FileText, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HomeHeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20 sm:pt-24">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-0 right-0 h-64 w-64 animate-pulse rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 animate-pulse rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96 [animation-delay:1s]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, type: "spring" }}
            className="order-2 flex justify-center lg:order-1 lg:justify-start"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.03, rotate: 3 }}
                transition={{ type: "spring", stiffness: 320 }}
                className="relative h-56 w-56 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 shadow-2xl ring-4 ring-primary/25 sm:h-64 sm:w-64 md:h-80 md:w-80"
              >
                <Image
                  src="/profile1.jpg"
                  alt="Bernard Bioco"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 280px, 320px"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="order-1 space-y-6 text-center lg:order-2 lg:text-left"
          >
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-wider text-primary sm:text-base">
                Welcome to My Portfolio
              </p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-primary via-primary/85 to-primary/70 bg-clip-text text-transparent">
                  I&apos;m Bernard
                </span>
                <br />
                <span className="text-foreground">Bioco</span>
              </h1>
            </div>

            <p className="text-lg font-medium text-muted-foreground sm:text-xl md:text-2xl">
              Full Stack Web Developer &amp; UI/UX Designer
            </p>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              Crafting digital experiences through code and design. Currently
              pursuing BSIT while building innovative web solutions with modern
              technologies.
            </p>

            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/85 shadow-lg shadow-primary/25"
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-5 w-5" />
                    View Resume
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
