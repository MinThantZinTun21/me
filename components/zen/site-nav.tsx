"use client"

import Image from "next/image"
import { Github, Mail } from "lucide-react"
import { profile } from "@/lib/portfolio-content"

type SiteNavProps = {
  onContact: () => void
  onGithub: () => void
}

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Journey" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Craft" },
  { href: "#contact", label: "Contact" },
]

export function SiteNav({ onContact, onGithub }: SiteNavProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/55 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-md items-center justify-between gap-2 px-5 py-3.5"
      >
        <a href="#top" className="flex min-w-0 cursor-pointer items-center gap-2.5 focus-ring">
          <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full shadow-soft-sm ring-1 ring-border">
            <Image
              src={profile.avatar}
              alt=""
              fill
              className="object-cover"
              sizes="32px"
            />
          </span>
          <span className="truncate font-serif text-base text-ink">{profile.shortName}</span>
        </a>

        <div className="flex items-center gap-0.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden cursor-pointer px-1.5 py-2 text-[10px] font-medium tracking-wide text-muted-foreground transition-colors duration-250 hover:text-ink focus-ring sm:inline md:px-2 md:text-[11px]"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onGithub}
            aria-label="GitHub"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-ink/70 transition-colors duration-250 hover:bg-muted hover:text-ink focus-ring"
          >
            <Github className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onContact}
            className="soft-btn inline-flex h-10 cursor-pointer items-center gap-1.5 rounded-full bg-ink px-3.5 text-xs font-medium tracking-wide text-primary-foreground focus-ring"
          >
            <Mail className="h-3.5 w-3.5" />
            Hello
          </button>
        </div>
      </nav>
    </header>
  )
}
