"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import { ModeToggle } from "@/components/common/mode-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

function pathMatches(pathname: string, itemPath: string) {
  if (itemPath === "/home") {
    return pathname === "/home" || pathname === "/"
  }
  if (itemPath === "/blog") {
    return pathname === "/blog" || pathname.startsWith("/blog/")
  }
  return pathname === itemPath || pathname.startsWith(`${itemPath}/`)
}

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header>
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md"
        aria-label="Primary"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Link
              href="/home"
              className="text-lg font-bold tracking-tight text-primary sm:text-xl"
            >
              Bernard Bioco
            </Link>
          </motion.div>

          <div className="hidden items-center gap-2 md:flex">
            <div className="flex space-x-1">
              {navItems.map((item, index) => {
                const isActive = pathMatches(pathname, item.path)
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.path}
                      className={cn(
                        "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 rounded-lg border border-primary/30 bg-primary/10"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 32,
                          }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
            <ModeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-border/80 md:hidden"
            >
              <div className="space-y-1 px-4 py-4">
                {navItems.map((item, index) => {
                  const isActive = pathMatches(pathname, item.path)
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: index * 0.04 }}
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                          isActive
                            ? "border border-primary/30 bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
