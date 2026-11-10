"use client"

import Image from "next/image"
import { Github, Mail } from "lucide-react"
import { profile } from "@/lib/portfolio-content"

type SiteNavProps = {
  onContact: () => void
  onGithub: () => void
}

const links = [
  { href: "#systems", label: "Systems" },
  { href: "#about", label: "Profile" },
  { href: "#experience", label: "Journey" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Contact" },
]

export function SiteNav({ onContact, onGithub }: SiteNavProps) {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/95 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6"
      >
        <a
          href="#top"
          className="flex min-w-0 cursor-pointer items-center gap-3 focus-ring"
        >
          <span className="relative h-9 w-9 shrink-0 overflow-hidden border-2 border-foreground">
            <Image
              src={profile.avatar}
              alt=""
              fill
              className="object-cover"
              sizes="36px"
            />
          </span>
          <span className="truncate font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
            {profile.shortName}
          </span>
        </a>

        <div className="flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden cursor-pointer px-2 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground transition-colors duration-150 hover:text-primary focus-ring lg:inline"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onGithub}
            aria-label="GitHub"
            className="flex h-11 w-11 cursor-pointer items-center justify-center border-2 border-transparent text-foreground transition-colors duration-150 hover:border-foreground hover:bg-muted focus-ring"
          >
            <Github className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onContact}
            className="hard-btn inline-flex h-11 cursor-pointer items-center gap-2 border-2 border-foreground bg-primary px-3 font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground focus-ring sm:px-4"
          >
            <Mail className="h-3.5 w-3.5" />
            Hire
          </button>
        </div>
      </nav>
    </header>
  )
}
