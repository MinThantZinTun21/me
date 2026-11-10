"use client"

import Image from "next/image"
import { Github, Mail } from "lucide-react"
import { profile } from "@/lib/portfolio-content"

type SiteNavProps = {
  onContact: () => void
  onGithub: () => void
}

const links = [
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Journey" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Craft" },
  { href: "#contact", label: "Contact" },
]

export function SiteNav({ onContact, onGithub }: SiteNavProps) {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-pencil border-dashed bg-background/90 backdrop-blur-[2px]">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6"
      >
        <a href="#top" className="flex min-w-0 cursor-pointer items-center gap-2.5 focus-ring">
          <span className="relative h-9 w-9 shrink-0 overflow-hidden border-[2.5px] border-pencil sketch-radius shadow-pencil">
            <Image
              src={profile.avatar}
              alt=""
              fill
              className="object-cover"
              sizes="36px"
            />
          </span>
          <span className="truncate font-hand text-xl text-pencil">{profile.shortName}</span>
        </a>

        <div className="flex items-center gap-0.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden cursor-pointer px-2 py-2 font-body text-base text-muted-foreground transition-colors duration-200 hover:text-pencil focus-ring lg:inline"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onGithub}
            aria-label="GitHub"
            className="flex h-11 w-11 cursor-pointer items-center justify-center text-pencil transition-colors duration-200 hover:text-primary focus-ring"
          >
            <Github className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onContact}
            className="sketch-btn inline-flex h-11 cursor-pointer items-center gap-2 bg-primary px-3 font-body text-base text-primary-foreground focus-ring sm:px-4"
          >
            <Mail className="h-3.5 w-3.5" />
            Hello
          </button>
        </div>
      </nav>
    </header>
  )
}
