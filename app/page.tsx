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
import { SiteNav } from "@/components/sunshine/site-nav"
import { SunshineSky } from "@/components/sunshine/sunshine-sky"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const projects = [
  {
    title: "Banking App",
    category: "Finance",
    description:
      "Secure mobile banking with biometrics and real-time transactions.",
    technologies: ["Kotlin", "MVVM", "Biometrics", "Room"],
    icon: CreditCard,
  },
  {
    title: "Video Streaming",
    category: "Entertainment",
    description:
      "High-performance streaming with offline viewing and recommendations.",
    technologies: ["Kotlin", "ExoPlayer", "Firebase", "ML Kit"],
    icon: Video,
  },
  {
    title: "E-commerce",
    category: "Retail",
    description:
      "Shopping app with AR product previews and secure payments.",
    technologies: ["Java", "AR Core", "Payments", "Firebase"],
    icon: ShoppingCart,
  },
  {
    title: "Telehealth",
    category: "Healthcare",
    description:
      "HIPAA-aware telehealth with video consults and prescriptions.",
    technologies: ["Kotlin", "WebRTC", "Room", "Compliance"],
    icon: Heart,
  },
  {
    title: "Ride Sharing",
    category: "Transportation",
    description:
      "Location-based rides with live tracking and payments.",
    technologies: ["Java", "Maps", "Realtime DB", "Payments"],
    icon: Car,
  },
  {
    title: "Social Network",
    category: "Social",
    description:
      "Messaging and content sharing built for mobile-first feeds.",
    technologies: ["Kotlin", "Firebase", "ExoPlayer", "WorkManager"],
    icon: Share2,
  },
]

const domains = [
  { name: "Finance", icon: CreditCard, description: "Banking & payments", projects: "15+" },
  { name: "Streaming", icon: Video, description: "Media & entertainment", projects: "8+" },
  { name: "Commerce", icon: ShoppingCart, description: "Retail platforms", projects: "12+" },
  { name: "Health", icon: Heart, description: "Telehealth apps", projects: "6+" },
  { name: "Mobility", icon: Car, description: "Rides & logistics", projects: "10+" },
  { name: "Social", icon: Share2, description: "Community products", projects: "7+" },
]

const skills = [
  { name: "Android Development", level: 95, years: "10+" },
  { name: "Kotlin & Java", level: 92, years: "8+" },
  { name: "Architecture Patterns", level: 90, years: "7+" },
  { name: "Performance", level: 88, years: "6+" },
  { name: "Team Leadership", level: 85, years: "5+" },
  { name: "Flutter", level: 75, years: "1+" },
]

const techs = [
  "Android Studio",
  "Kotlin",
  "Java",
  "Flutter",
  "Firebase",
  "Git",
  "REST APIs",
  "MVVM",
  "Room DB",
  "Retrofit",
  "Dagger",
  "RxJava",
]

export default function SunshinePortfolio() {
  const pageRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = () => {
    const subject = "Let's Discuss Your Android Project"
    const body = `Hi Min Thant Zin Tun,

I visited your portfolio and I'm interested in discussing a potential Android development project.

Best regards,`
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=minthantzintun21@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailUrl, "_blank")
  }

  const handleGithubClick = () => {
    window.open("https://github.com/MinThantZinTun21", "_blank")
  }

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const heroTl = gsap.timeline({ defaults: { ease: "expo.out" } })
        heroTl
          .from(".hero-brand", { y: 48, opacity: 0, duration: 0.9 })
          .from(".hero-headline", { y: 36, opacity: 0, duration: 0.8 }, "-=0.45")
          .from(".hero-copy", { y: 24, opacity: 0, duration: 0.7 }, "-=0.4")
          .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.35")

        gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
          gsap.from(section.querySelectorAll(".reveal-item"), {
            opacity: 0,
            y: 28,
            duration: 0.55,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
            },
          })
        })

        gsap.from(".project-tile", {
          opacity: 0,
          scale: 0.92,
          y: 20,
          duration: 0.45,
          stagger: { each: 0.06, from: "start", grid: "auto" },
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: "#projects-grid",
            start: "top 80%",
          },
        })

        const pinSection = document.querySelector("#journey-pin")
        if (pinSection && window.matchMedia("(min-width: 768px)").matches) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: pinSection,
                start: "top top",
                end: "+=120%",
                scrub: 1,
                pin: true,
              },
            })
            .from(".journey-item", {
              opacity: 0,
              x: (i) => (i % 2 === 0 ? -40 : 40),
              stagger: 0.15,
            })
            .to(".journey-progress", { scaleX: 1, ease: "none" }, 0)
        }

        gsap.fromTo(
          ".skill-fill",
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left center",
            duration: 0.9,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#skills",
              start: "top 75%",
            },
          },
        )
      })

      return () => mm.revert()
    },
    { scope: pageRef },
  )

  return (
    <div id="top" ref={pageRef} className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteNav onContact={handleSendMessage} onGithub={handleGithubClick} />

      {/* Hero — brand, headline, line, CTAs, full-bleed sky */}
      <section className="relative flex min-h-[100svh] items-end pb-16 pt-28 md:items-center md:pb-24 md:pt-24">
        <SunshineSky />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="max-w-2xl space-y-6">
            <p className="hero-brand font-script text-5xl leading-none text-sky-deep md:text-7xl lg:text-8xl">
              Min Thant Zin Tun
            </p>
            <h1 className="hero-headline text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              Android that feels like morning light
            </h1>
            <p className="hero-copy max-w-lg text-lg text-muted-foreground md:text-xl">
              Ten years of shipping mobile products that stay fast, clear, and kind to users.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleSendMessage}
                className="hero-cta inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-8 text-base font-semibold text-accent-foreground shadow-lg transition-transform duration-200 hover:scale-[1.03] focus-ring"
              >
                <Mail className="h-5 w-5" />
                Start a project
              </button>
              <a
                href="#projects"
                className="hero-cta inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-sky-deep/20 bg-white/50 px-8 text-base font-semibold text-sky-deep backdrop-blur-sm transition-colors duration-200 hover:bg-white/80 focus-ring"
              >
                See the work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="reveal-section relative z-10 py-[var(--space-3xl)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-8">
          <div className="space-y-6">
            <p className="reveal-item font-script text-3xl text-primary md:text-4xl">About</p>
            <h2 className="reveal-item text-3xl font-semibold leading-tight md:text-4xl">
              Building mobile stories across{" "}
              <span className="text-primary">finance, health, and play</span>
            </h2>
            <p className="reveal-item text-lg text-muted-foreground">
              I&apos;ve spent a decade shaping Android apps for startups and enterprise teams —
              clean architecture, careful performance, and experiences people actually enjoy.
            </p>
            <p className="reveal-item text-lg text-muted-foreground">
              Outside of shipping, I teach and mentor so the next wave of developers can move faster with confidence.
            </p>
            <ul className="reveal-item space-y-3 pt-2">
              <li className="flex items-center gap-3 text-foreground/80">
                <GraduationCap className="h-5 w-5 text-accent" />
                B.Sc. Computer Science — Thaton University
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <Award className="h-5 w-5 text-accent" />
                Android Development Instructor — 1.5 years
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <BookOpen className="h-5 w-5 text-accent" />
                Software Engineering Diploma — 6 months
              </li>
            </ul>
          </div>

          <div className="reveal-item relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sun/40 via-sky-mid/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 shadow-xl">
              <Image
                src="https://github.com/MinThantZinTun21.png"
                alt="Portrait of Min Thant Zin Tun"
                width={480}
                height={480}
                className="aspect-square w-full object-cover"
                priority
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { number: "50+", label: "Apps delivered" },
                { number: "10+", label: "Years building" },
                { number: "15+", label: "People led" },
                { number: "1M+", label: "Downloads" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/70 px-4 py-3 text-center shadow-sm backdrop-blur-sm">
                  <div className="font-script text-3xl text-sky-deep">{stat.number}</div>
                  <div className="text-xs font-medium text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="reveal-section relative bg-white/40 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-14 max-w-2xl space-y-4">
            <p className="reveal-item font-script text-3xl text-primary md:text-4xl">Projects</p>
            <h2 className="reveal-item text-3xl font-semibold md:text-4xl">Work that ships in the sun</h2>
            <p className="reveal-item text-lg text-muted-foreground">
              Selected apps across industries — each one tuned for clarity, speed, and trust.
            </p>
          </div>

          <div id="projects-grid" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="project-tile group cursor-pointer rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-sun text-accent-foreground transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <project.icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium text-primary">{project.category}</p>
                <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Journey — pinned on desktop */}
      <section id="journey" className="relative">
        <div id="journey-pin" className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-24 md:px-8">
          <div className="mb-10 space-y-3">
            <p className="font-script text-3xl text-primary md:text-4xl">Journey</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Industries I&apos;ve lit up</h2>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
              <div className="journey-progress h-full w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-accent via-sun to-primary" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain) => (
              <div
                key={domain.name}
                className="journey-item flex items-start gap-4 rounded-3xl border border-border bg-white/70 p-5 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <domain.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{domain.name}</h3>
                  <p className="text-sm text-muted-foreground">{domain.description}</p>
                  <p className="mt-1 text-sm font-semibold text-accent">{domain.projects} projects</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="reveal-section bg-gradient-to-b from-transparent to-sky-soft py-[var(--space-3xl)]">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-12 space-y-3">
            <p className="reveal-item font-script text-3xl text-primary md:text-4xl">Craft</p>
            <h2 className="reveal-item text-3xl font-semibold md:text-4xl">Skills & tools</h2>
          </div>

          <div className="mb-14 grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name} className="reveal-item space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>{skill.name}</span>
                  <span className="text-primary">{skill.years}</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-border">
                  <div
                    className="skill-fill h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {techs.map((tech) => (
              <span
                key={tech}
                className="reveal-item rounded-full border border-border bg-white/80 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact climax */}
      <section id="contact" className="reveal-section relative overflow-hidden py-[var(--space-3xl)]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sun/30 via-sky-mid/20 to-primary/20" />
        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-8">
          <p className="reveal-item font-script text-4xl text-sky-deep md:text-5xl">Let&apos;s build</p>
          <h2 className="reveal-item mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Ready for something bright together?
          </h2>
          <p className="reveal-item mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Tell me about your next Android idea — I&apos;ll help turn it into a product that feels alive.
          </p>

          <div className="reveal-item mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:minthantzintun21@gmail.com"
              className="inline-flex h-12 min-w-[220px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white/80 px-6 font-medium text-sky-deep shadow-sm transition-colors duration-200 hover:bg-white focus-ring"
            >
              <Mail className="h-5 w-5" />
              minthantzintun21@gmail.com
            </a>
            <a
              href="tel:+959975816345"
              className="inline-flex h-12 min-w-[220px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white/80 px-6 font-medium text-sky-deep shadow-sm transition-colors duration-200 hover:bg-white focus-ring"
            >
              <Phone className="h-5 w-5" />
              +959975816345
            </a>
          </div>

          <div className="reveal-item mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleSendMessage}
              className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-10 text-base font-semibold text-accent-foreground shadow-lg transition-transform duration-200 hover:scale-[1.03] focus-ring"
            >
              <Mail className="h-5 w-5" />
              Send a message
            </button>
            <button
              type="button"
              onClick={handleGithubClick}
              className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-sky-deep/25 bg-transparent px-10 text-base font-semibold text-sky-deep transition-colors duration-200 hover:bg-white/50 focus-ring"
            >
              <Github className="h-5 w-5" />
              View GitHub
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-white/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-sun">
              <Smartphone className="h-5 w-5 text-accent-foreground" />
            </div>
            <span className="font-script text-2xl text-sky-deep">Min Thant Zin Tun</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Min Thant Zin Tun</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleGithubClick}
              aria-label="GitHub"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-sky-deep transition-colors duration-200 hover:bg-muted focus-ring"
            >
              <Github className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="LinkedIn"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-sky-deep transition-colors duration-200 hover:bg-muted focus-ring"
            >
              <Linkedin className="h-5 w-5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
