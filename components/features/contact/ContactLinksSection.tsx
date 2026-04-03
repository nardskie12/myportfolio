"use client"

import { motion } from "framer-motion"
import { Mail, Github, MapPin, Send } from "lucide-react"

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "biocobernard@gmail.com",
    link: "mailto:biocobernard@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "nardskie12",
    link: "https://github.com/nardskie12",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, type: "spring" as const, stiffness: 120 },
  },
}

export function ContactLinksSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2"
      >
        {contactItems.map((item) => {
          const Icon = item.icon
          return (
            <motion.a
              key={item.label}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={
                item.link.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.99 }}
              className="group rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-colors hover:border-primary/40 sm:p-8"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-border/80 bg-muted/50 sm:h-16 sm:w-16">
                <Icon className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">
                {item.label}
              </h3>
              <p className="break-all text-sm text-muted-foreground transition-colors group-hover:text-foreground sm:text-base">
                {item.value}
              </p>
              <div className="mt-4 h-1 rounded-full bg-gradient-to-r from-primary via-primary/85 to-primary/70" />
            </motion.a>
          )
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-center"
      >
        <div className="mx-auto max-w-2xl rounded-2xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
          <h3 className="mb-4 text-xl font-semibold text-foreground sm:text-2xl">
            Let&apos;s Work Together
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Whether you have a project in mind, want to collaborate, or just
            want to say hello, I&apos;d love to hear from you. Feel free to reach
            out through any of the channels above.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden />
              <span>Philippines</span>
            </div>
            <div className="flex items-center gap-2">
              <Send className="h-4 w-4" aria-hidden />
              <span>Available for Projects</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
