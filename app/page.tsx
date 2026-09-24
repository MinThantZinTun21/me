"use client"

import { useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Award,
  BookOpen,
  Car,
  CreditCard,
  Github,
  GraduationCap,
  Heart,
  Linkedin,
  Mail,
  Phone,
  Share2,
  ShoppingCart,
  Smartphone,
  Video,
} from "lucide-react"
import { SiteNav } from "@/components/y2k/site-nav"
import { Y2KBanner } from "@/components/y2k/banner"
import { Y2KBubbles } from "@/components/y2k/bubbles"
import { MagneticCard } from "@/components/y2k/magnetic-card"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const projects = [
  { title: "Banking App", category: "Finance", description: "Biometrics + realtime banking.", technologies: ["Kotlin", "MVVM", "Room"], icon: CreditCard },
  { title: "Video Streaming", category: "Entertainment", description: "Offline + recommendations.", technologies: ["ExoPlayer", "Firebase"], icon: Video },
  { title: "E-commerce", category: "Retail", description: "AR previews + payments.", technologies: ["Java", "AR Core"], icon: ShoppingCart },
  { title: "Telehealth", category: "Healthcare", description: "Video consults + Rx.", technologies: ["WebRTC", "Room"], icon: Heart },
  { title: "Ride Sharing", category: "Transport", description: "Live tracking + pay.", technologies: ["Maps", "Realtime"], icon: Car },
  { title: "Social Network", category: "Social", description: "Messaging + feeds.", technologies: ["Firebase", "WorkManager"], icon: Share2 },
]

const skills = [
  { name: "Android", level: 95 },
  { name: "Kotlin / Java", level: 92 },
  { name: "Architecture", level: 90 },
  { name: "Performance", level: 88 },
  { name: "Leadership", level: 85 },
  { name: "Flutter", level: 75 },
]

const techs = ["Kotlin", "Java", "Flutter", "Firebase", "MVVM", "Room", "Retrofit", "Dagger", "RxJava", "Git"]

export default function Y2KPortfolio() {
  const pageRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = () => {
    const subject = "Let's Discuss Your Android Project"
    const body = `Hi Min Thant Zin Tun,\n\nI visited your portfolio and I'm interested in discussing a potential Android development project.\n\nBest regards,`
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=minthantzintun21@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank",
    )
  }

  const handleGithubClick = () => {
    window.open("https://github.com/MinThantZinTun21", "_blank")
  }

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "back.out(1.4)" } })
          .from(".hero-avatar", { scale: 0, rotate: -20, duration: 0.6 })
          .from(".hero-brand", { y: 24, opacity: 0, duration: 0.45 }, "-=0.25")
          .from(".hero-line", { y: 16, opacity: 0, duration: 0.4 }, "-=0.2")
          .from(".hero-cta", { scale: 0.85, opacity: 0, duration: 0.35, stagger: 0.06 }, "-=0.15")

        gsap.from(".stat-chip", {
          scale: 0.8,
          opacity: 0,
          stagger: 0.05,
          duration: 0.35,
          ease: "back.out(1.6)",
          scrollTrigger: { trigger: "#stats", start: "top 90%" },
        })

        gsap.from(".project-tile", {
          opacity: 0,
          y: 20,
          scale: 0.94,
          duration: 0.4,
          stagger: { each: 0.05, grid: "auto" },
          ease: "back.out(1.3)",
          scrollTrigger: { trigger: "#projects-grid", start: "top 85%" },
        })

        gsap.fromTo(
          ".skill-fill",
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left",
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: { trigger: "#skills", start: "top 80%" },
          },
        )

        gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 14,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          })
        })
      })
      return () => mm.revert()
    },
    { scope: pageRef },
  )

  return (
    <div id="top" ref={pageRef} className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Y2KBanner />
      <SiteNav onContact={handleSendMessage} onGithub={handleGithubClick} />

      {/* Compact hero */}
      <section className="y2k-bg relative py-10 md:py-14">
        <Y2KBubbles />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-start gap-6 px-4 md:flex-row md:items-center md:gap-10 md:px-6">
          <div className="hero-avatar relative h-20 w-20 shrink-0 animate-float overflow-hidden rounded-full ring-4 ring-neon-pink/60 ring-offset-2 ring-offset-background md:h-24 md:w-24">
            <Image
              src="https://github.com/MinThantZinTun21.png"
              alt="Min Thant Zin Tun"
              fill
              className="object-cover"
              sizes="96px"
              priority
            />
          </div>

          <div className="min-w-0 flex-1 space-y-3">
            <p className="hero-brand font-display text-2xl font-bold text-neon-pink y2k-glow md:text-4xl">
              Min Thant Zin Tun
            </p>
            <h1 className="hero-line text-base font-semibold text-neon-cyan md:text-xl">
              Android that hits different — Y2K chrome edition
            </h1>
            <p className="hero-line max-w-lg text-sm text-muted-foreground">
              10 years shipping mobile products. Style #21 · compact · high motion.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <button
                type="button"
                onClick={handleSendMessage}
                className="hero-cta chrome-btn inline-flex h-10 cursor-pointer items-center gap-2 rounded-full px-5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-transform duration-200 hover:scale-105 active:scale-95 focus-ring"
              >
                <Mail className="h-3.5 w-3.5" />
                Start project
              </button>
              <a
                href="#projects"
                className="hero-cta inline-flex h-10 cursor-pointer items-center rounded-full border border-neon-cyan/50 px-5 text-xs font-bold uppercase tracking-wider text-neon-cyan transition-all duration-200 hover:bg-neon-cyan/10 hover:scale-105 focus-ring"
              >
                See work
              </a>
            </div>
          </div>
        </div>

        <div id="stats" className="relative z-10 mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-2 px-4 sm:grid-cols-4 md:px-6">
          {[
            { n: "50+", l: "Apps" },
            { n: "10+", l: "Years" },
            { n: "15+", l: "Led" },
            { n: "1M+", l: "Downloads" },
          ].map((s) => (
            <div
              key={s.l}
              className="stat-chip glossy-card rounded-2xl px-3 py-3 text-center transition-transform duration-200 hover:-translate-y-1 hover:border-neon-pink/50"
            >
              <div className="font-display text-lg text-neon-cyan md:text-xl">{s.n}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About compact */}
      <section id="about" className="border-t border-border py-10 md:py-12">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2 md:px-6">
          <div className="reveal space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neon-pink">About</p>
            <h2 className="font-display text-xl font-bold md:text-2xl">Built for speed & gloss</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Decade of Android for startups and enterprise — clean architecture, sharp performance, interfaces that feel alive.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-neon-cyan" />
                B.Sc. CS — Thaton University
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-neon-cyan" />
                Android Instructor — 1.5 yrs
              </li>
              <li className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-neon-cyan" />
                SE Diploma — 6 months
              </li>
            </ul>
          </div>
          <div className="reveal grid grid-cols-3 gap-2 content-start">
            {["Kotlin", "Compose", "MVVM", "CI/CD", "Mentoring", "Ship"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-neon-pink/30 bg-neon-pink/10 px-2 py-2 text-center text-[10px] font-bold uppercase tracking-wide text-neon-pink transition-transform duration-200 hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects compact magnetic grid */}
      <section id="projects" className="border-t border-border bg-muted/30 py-10 md:py-12">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="reveal mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neon-cyan">Work</p>
              <h2 className="font-display text-xl font-bold md:text-2xl">Selected drops</h2>
            </div>
            <p className="hidden text-xs text-muted-foreground sm:block">Hover = magnetic pull</p>
          </div>

          <div id="projects-grid" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <MagneticCard key={project.title}>
                <article className="project-tile glossy-card group cursor-pointer rounded-2xl p-4 transition-colors duration-200 hover:border-neon-cyan/50">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-neon-pink to-neon-cyan text-primary-foreground transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6">
                    <project.icon className="h-4 w-4" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neon-pink">{project.category}</p>
                  <h3 className="mt-0.5 font-display text-sm font-bold">{project.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {project.technologies.map((t) => (
                      <span key={t} className="rounded-full bg-muted px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </MagneticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Skills compact */}
      <section id="skills" className="border-t border-border py-10 md:py-12">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <p className="reveal text-[10px] font-bold uppercase tracking-[0.25em] text-neon-pink">Stack</p>
          <h2 className="reveal mb-5 font-display text-xl font-bold md:text-2xl">Skills & tools</h2>
          <div className="mb-6 grid gap-3 sm:grid-cols-2">
            {skills.map((skill, i) => (
              <div key={skill.name} className="reveal space-y-1">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-wide">
                  <span>{skill.name}</span>
                  <span className="text-neon-cyan">{skill.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className={`skill-fill h-full rounded-full ${i % 2 === 0 ? "bg-gradient-to-r from-neon-pink to-neon-cyan" : "bg-gradient-to-r from-neon-cyan to-chrome"}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {techs.map((tech) => (
              <span
                key={tech}
                className="reveal cursor-default rounded-full border border-border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-muted-foreground transition-all duration-200 hover:border-neon-pink hover:text-neon-pink hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact compact */}
      <section id="contact" className="border-t border-border bg-gradient-to-br from-neon-pink/15 via-background to-neon-cyan/15 py-10 md:py-12">
        <div className="reveal mx-auto max-w-xl px-4 text-center md:px-6">
          <p className="font-display text-xs font-bold tracking-[0.3em] text-neon-cyan">PING ME</p>
          <h2 className="mt-2 font-display text-2xl font-bold y2k-glow md:text-3xl">Let&apos;s ship something glossy</h2>
          <p className="mt-2 text-sm text-muted-foreground">Drop a line — Android ideas welcome.</p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <a
              href="mailto:minthantzintun21@gmail.com"
              className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full border border-border px-4 text-xs font-bold focus-ring hover:border-neon-cyan"
            >
              <Mail className="h-3.5 w-3.5" />
              minthantzintun21@gmail.com
            </a>
            <a
              href="tel:+959975816345"
              className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full border border-border px-4 text-xs font-bold focus-ring hover:border-neon-pink"
            >
              <Phone className="h-3.5 w-3.5" />
              +959975816345
            </a>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            <button
              type="button"
              onClick={handleSendMessage}
              className="chrome-btn inline-flex h-10 cursor-pointer items-center gap-2 rounded-full px-6 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-transform duration-200 hover:scale-105 active:scale-95 focus-ring"
            >
              Send message
            </button>
            <button
              type="button"
              onClick={handleGithubClick}
              className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-full border border-neon-cyan/40 px-6 text-xs font-bold uppercase tracking-wider text-neon-cyan transition-transform duration-200 hover:scale-105 focus-ring"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <Smartphone className="h-3.5 w-3.5 text-neon-pink" />
            <span className="text-[10px] font-bold uppercase tracking-widest">MTZT · Style #21 Y2K</span>
          </div>
          <p className="text-[10px] text-muted-foreground">© {new Date().getFullYear()} · 50 styles catalogued</p>
          <div className="flex gap-1">
            <button type="button" onClick={handleGithubClick} aria-label="GitHub" className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full focus-ring hover:text-neon-cyan">
              <Github className="h-3.5 w-3.5" />
            </button>
            <button type="button" aria-label="LinkedIn" className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full focus-ring hover:text-neon-pink">
              <Linkedin className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
