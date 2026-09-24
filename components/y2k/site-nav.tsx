"use client"

import Image from "next/image"
import { Github, Mail } from "lucide-react"

type SiteNavProps = {
  onContact: () => void
  onGithub: () => void
}

export function SiteNav({ onContact, onGithub }: SiteNavProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5 md:px-6">
        <a href="#top" className="flex items-center gap-2.5 focus-ring cursor-pointer">
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-neon-cyan/70 ring-offset-1 ring-offset-background">
            <Image
              src="https://github.com/MinThantZinTun21.png"
              alt=""
              fill
              className="object-cover"
              sizes="36px"
            />
          </span>
          <span className="font-display text-xs font-bold tracking-wide text-neon-pink y2k-glow md:text-sm">
            MTZT·21
          </span>
        </a>

        <div className="hidden items-center gap-5 md:flex">
          {[
            { href: "#about", label: "About" },
            { href: "#projects", label: "Work" },
            { href: "#skills", label: "Stack" },
            { href: "#contact", label: "Ping" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-200 hover:text-neon-cyan focus-ring cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onGithub}
            aria-label="GitHub"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border text-foreground transition-transform duration-200 hover:scale-110 hover:border-neon-cyan hover:text-neon-cyan focus-ring"
          >
            <Github className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onContact}
            className="chrome-btn inline-flex h-10 cursor-pointer items-center gap-1.5 rounded-full px-4 text-[11px] font-bold uppercase tracking-wider text-primary-foreground transition-transform duration-200 hover:scale-105 active:scale-95 focus-ring"
          >
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Contact</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
