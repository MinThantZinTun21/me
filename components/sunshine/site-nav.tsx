"use client"

import { Github, Mail } from "lucide-react"

type SiteNavProps = {
  onContact: () => void
  onGithub: () => void
}

export function SiteNav({ onContact, onGithub }: SiteNavProps) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-sky-soft/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#top"
          className="font-script text-2xl font-semibold text-sky-deep focus-ring cursor-pointer md:text-3xl"
        >
          Min Thant Zin Tun
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {[
            { href: "#about", label: "About" },
            { href: "#projects", label: "Projects" },
            { href: "#journey", label: "Journey" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-sky-deep focus-ring cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onGithub}
            aria-label="Open GitHub profile"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-sky-deep transition-colors duration-200 hover:bg-white/60 focus-ring"
          >
            <Github className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onContact}
            className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-md transition-transform duration-200 hover:scale-[1.03] focus-ring"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Get in touch</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
