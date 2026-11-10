"use client"

import { useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowUpRight,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import { SiteNav } from "@/components/sketch/site-nav"
import { SketchAtmosphere } from "@/components/sketch/atmosphere"
import {
  about,
  contact,
  education,
  experience,
  philosophy,
  profile,
  projects,
  skills,
} from "@/lib/portfolio-content"

gsap.registerPlugin(ScrollTrigger)

export default function PortfolioPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = () => {
    const subject = "Android project — hello from your portfolio"
    const body = `Hi ${profile.name},\n\nI visited your portfolio and I'd like to talk about an Android project.\n\nBest regards,`
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank",
    )
  }

  const handleGithubClick = () => {
    window.open(profile.github, "_blank")
  }

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power2.out" } })
          .from(".sk-hero-brand", { opacity: 0, y: 18, duration: 0.55 })
          .from(".sk-hero-line", { opacity: 0, y: 12, duration: 0.4 }, "-=0.3")
          .from(".sk-hero-copy", { opacity: 0, y: 10, duration: 0.35 }, "-=0.22")
          .from(".sk-hero-cta", { opacity: 0, y: 8, duration: 0.3, stagger: 0.06 }, "-=0.18")

        gsap.utils.toArray<HTMLElement>(".sk-reveal").forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 16,
            duration: 0.42,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          })
        })

        gsap.utils.toArray<HTMLElement>(".sk-meter-fill").forEach((el) => {
          const level = Number(el.dataset.level ?? 0)
          gsap.fromTo(
            el,
            { width: "0%" },
            {
              width: `${level}%`,
              duration: 0.75,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            },
          )
        })
      })
    },
    { scope: pageRef },
  )

  return (
    <div ref={pageRef} id="top" className="relative min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:border-[2.5px] focus:border-pencil focus:bg-wash-yellow focus:px-4 focus:py-2 focus:font-hand focus:text-lg"
      >
        Skip to content
      </a>

      <SketchAtmosphere />

      <div className="relative z-10">
        <SiteNav onContact={handleSendMessage} onGithub={handleGithubClick} />

        <main id="main">
          <section
            aria-labelledby="hero-heading"
            className="relative flex min-h-[92svh] flex-col justify-center border-b-[3px] border-dashed border-pencil px-4 pb-16 pt-20 sm:px-6"
          >
            <div className="mx-auto w-full max-w-5xl">
              <p className="sk-hero-brand mb-3 font-body text-lg text-primary">
                {profile.role} · {profile.workLocation}
              </p>
              <h1
                id="hero-heading"
                className="sk-hero-brand max-w-4xl font-hand text-[clamp(2.8rem,9vw,5.75rem)] text-pencil"
              >
                <span className="sketch-underline">{profile.name}</span>
              </h1>
              <p className="sk-hero-line mt-5 max-w-xl font-hand text-2xl text-secondary sm:text-3xl">
                {profile.tagline}
              </p>
              <p className="sk-hero-copy mt-4 max-w-lg text-lg text-muted-foreground">
                {profile.summary}
              </p>
              <div className="sk-hero-cta mt-10 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleSendMessage}
                  className="sketch-btn inline-flex h-12 cursor-pointer items-center gap-2 bg-primary px-5 font-body text-lg text-primary-foreground focus-ring"
                >
                  Say hello
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <a
                  href="#work"
                  className="sketch-btn inline-flex h-12 cursor-pointer items-center gap-2 bg-card px-5 font-body text-lg text-pencil focus-ring"
                >
                  See the work
                </a>
              </div>
              <ul className="sk-hero-cta mt-12 flex flex-wrap gap-3">
                {profile.highlights.map((h) => (
                  <li
                    key={h.label}
                    className="border-[2.5px] border-pencil bg-wash-yellow/50 px-4 py-2 sketch-radius shadow-pencil-sm"
                  >
                    <span className="font-hand text-xl text-pencil">{h.value}</span>
                    <span className="ml-2 font-body text-base text-muted-foreground">{h.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="approach"
            aria-labelledby="approach-heading"
            className="border-b-[3px] border-dashed border-pencil px-4 py-20 sm:px-6"
          >
            <div className="mx-auto max-w-5xl">
              <p className="sk-reveal font-body text-lg text-primary">{philosophy.eyebrow}</p>
              <h2 id="approach-heading" className="sk-reveal mt-2 font-hand text-4xl sm:text-5xl">
                {philosophy.title}
              </h2>
              <p className="sk-reveal mt-4 max-w-2xl text-lg text-muted-foreground">{philosophy.body}</p>
              <ul className="mt-12 grid gap-5 md:grid-cols-3">
                {philosophy.pillars.map((pillar, i) => (
                  <li
                    key={pillar.title}
                    className={`sk-reveal sketch-panel p-6 ${i % 2 === 0 ? "sketch-panel-tilt" : "sketch-panel-tilt-r"}`}
                  >
                    <p className="font-body text-base text-secondary">Layer {i + 1}</p>
                    <h3 className="mt-2 font-hand text-2xl">{pillar.title}</h3>
                    <p className="mt-3 text-base text-muted-foreground">{pillar.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="about"
            aria-labelledby="about-heading"
            className="border-b-[3px] border-dashed border-pencil px-4 py-20 sm:px-6"
          >
            <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.9fr_1.2fr] lg:items-start">
              <div className="sk-reveal">
                <div className="relative aspect-square w-full max-w-sm border-[3px] border-pencil sketch-radius-alt shadow-pencil">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                    priority
                  />
                </div>
              </div>
              <div>
                <p className="sk-reveal font-body text-lg text-primary">{about.eyebrow}</p>
                <h2 id="about-heading" className="sk-reveal mt-2 font-hand text-4xl sm:text-5xl">
                  {about.title}
                </h2>
                <p className="sk-reveal mt-4 text-lg text-muted-foreground">{about.body}</p>
                <ul className="sk-reveal mt-6 space-y-3">
                  {about.details.map((d) => (
                    <li key={d} className="border-l-[3px] border-primary pl-4 text-base">
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="sk-reveal mt-8 flex flex-wrap gap-2">
                  {profile.knowsAbout.map((topic) => (
                    <span
                      key={topic}
                      className="border-2 border-dashed border-pencil bg-card px-3 py-1.5 font-body text-base"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="sk-reveal mt-6 flex flex-wrap items-center gap-4 font-body text-base text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    {profile.location}
                  </span>
                  <span>Languages: {profile.languages.map((l) => l.label).join(" · ")}</span>
                </div>
                {profile.interests.length > 0 && (
                  <div className="sk-reveal mt-8">
                    <h3 className="font-hand text-2xl">Interests</h3>
                    <ul className="mt-3 flex flex-wrap gap-3">
                      {profile.interests.map((item) => (
                        <li
                          key={item.title}
                          className="border-2 border-pencil bg-wash-coral/40 px-3 py-2 sketch-radius"
                        >
                          <span className="font-hand text-lg">{item.title}</span>
                          <span className="ml-2 font-body text-sm text-muted-foreground">{item.note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="sk-reveal mt-10">
                  <h3 className="font-hand text-2xl">Education</h3>
                  <ul className="mt-4 space-y-4">
                    {education.map((ed) => (
                      <li key={ed.title} className="sketch-panel p-4">
                        <div className="flex items-start gap-3">
                          <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <p className="font-hand text-xl leading-snug">{ed.title}</p>
                            <p className="font-body text-base text-muted-foreground">{ed.org}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{ed.note}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section
            id="experience"
            aria-labelledby="experience-heading"
            className="border-b-[3px] border-dashed border-pencil px-4 py-20 sm:px-6"
          >
            <div className="mx-auto max-w-5xl">
              <p className="sk-reveal font-body text-lg text-primary">Journey</p>
              <h2 id="experience-heading" className="sk-reveal mt-2 font-hand text-4xl sm:text-5xl">
                Experience sketched in order
              </h2>
              <ol className="mt-12 space-y-4">
                {experience.map((job, i) => (
                  <li
                    key={`${job.org}-${job.period}`}
                    className={`sk-reveal sketch-panel p-5 sm:p-6 ${i % 2 === 0 ? "sketch-panel-tilt" : "sketch-panel-tilt-r"}`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-body text-base text-primary">{job.period}</p>
                      <p className="font-body text-sm text-muted-foreground">{job.location}</p>
                    </div>
                    <h3 className="mt-1 font-hand text-2xl">
                      {job.title}
                      <span className="ml-2 font-body text-base text-secondary">@ {job.org}</span>
                    </h3>
                    <p className="mt-3 text-base text-muted-foreground">{job.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section
            id="work"
            aria-labelledby="work-heading"
            className="border-b-[3px] border-dashed border-pencil px-4 py-20 sm:px-6"
          >
            <div className="mx-auto max-w-5xl">
              <p className="sk-reveal font-body text-lg text-primary">Work</p>
              <h2 id="work-heading" className="sk-reveal mt-2 font-hand text-4xl sm:text-5xl">
                Selected pages from the book
              </h2>
              <ul className="mt-12 grid gap-5 sm:grid-cols-2">
                {projects.map((project, i) => (
                  <li key={project.title}>
                    <article
                      className={`sk-reveal sketch-panel flex h-full flex-col p-6 ${i % 2 === 0 ? "sketch-panel-tilt" : "sketch-panel-tilt-r"}`}
                    >
                      <p className="font-body text-base text-secondary">{project.category}</p>
                      <h3 className="mt-2 font-hand text-3xl">{project.title}</h3>
                      <p className="mt-3 flex-1 text-base text-muted-foreground">{project.description}</p>
                      <p className="mt-4 font-body text-base text-primary">{project.outcome}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((t) => (
                          <li
                            key={t}
                            className="border border-dashed border-pencil px-2 py-1 font-body text-sm text-muted-foreground"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                      {project.codeRepository && (
                        <a
                          href={project.codeRepository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex cursor-pointer items-center gap-1 font-body text-base text-pencil underline decoration-dashed underline-offset-4 focus-ring"
                        >
                          Open on GitHub
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="skills"
            aria-labelledby="skills-heading"
            className="border-b-[3px] border-dashed border-pencil px-4 py-20 sm:px-6"
          >
            <div className="mx-auto max-w-5xl">
              <p className="sk-reveal font-body text-lg text-primary">{skills.eyebrow}</p>
              <h2 id="skills-heading" className="sk-reveal mt-2 font-hand text-4xl sm:text-5xl">
                {skills.title}
              </h2>
              <div className="mt-12 grid gap-10 lg:grid-cols-2">
                {skills.groups.map((group) => (
                  <div key={group.name} className="sk-reveal">
                    <h3 className="font-hand text-2xl text-secondary">{group.name}</h3>
                    <ul className="mt-5 space-y-5">
                      {group.items.map((item) => (
                        <li key={item.name}>
                          <div className="mb-2 flex justify-between font-body text-base">
                            <span>{item.name}</span>
                            <span className="text-primary">{item.level}%</span>
                          </div>
                          <div
                            className="sketch-meter"
                            role="meter"
                            aria-valuenow={item.level}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`${item.name} proficiency`}
                          >
                            <span
                              className="sk-meter-fill"
                              data-level={item.level}
                              style={{ width: `${item.level}%` }}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <ul className="sk-reveal mt-12 flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <li
                    key={tool}
                    className="border-[2.5px] border-pencil bg-card px-3 py-2 font-body text-base shadow-pencil-sm"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="contact"
            aria-labelledby="contact-heading"
            className="border-b-[3px] border-dashed border-pencil px-4 py-20 sm:px-6"
          >
            <div className="mx-auto max-w-5xl">
              <p className="sk-reveal font-body text-lg text-primary">{contact.eyebrow}</p>
              <h2 id="contact-heading" className="sk-reveal mt-2 max-w-2xl font-hand text-4xl sm:text-5xl">
                {contact.title}
              </h2>
              <p className="sk-reveal mt-4 max-w-xl text-lg text-muted-foreground">{contact.body}</p>
              <ul className="sk-reveal mt-10 space-y-3">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="sketch-btn inline-flex w-full max-w-md cursor-pointer items-center gap-3 bg-card px-5 py-4 font-body text-lg focus-ring sm:w-auto"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={profile.phoneHref}
                    className="sketch-btn inline-flex w-full max-w-md cursor-pointer items-center gap-3 bg-card px-5 py-4 font-body text-lg focus-ring sm:w-auto"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    {profile.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sketch-btn inline-flex w-full max-w-md cursor-pointer items-center gap-3 bg-primary px-5 py-4 font-body text-lg text-primary-foreground focus-ring sm:w-auto"
                  >
                    <Github className="h-4 w-4" />
                    GitHub showcase
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </main>

        <footer className="px-4 py-10 sm:px-6">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 sketch-panel p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-hand text-2xl text-primary">{profile.shortName}</p>
              <p className="mt-1 font-body text-base text-muted-foreground">
                © {new Date().getFullYear()} {profile.name}
              </p>
            </div>
            <nav aria-label="Social">
              <ul className="flex flex-wrap gap-3">
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sketch-btn inline-flex h-11 cursor-pointer items-center px-4 font-body text-base focus-ring"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="sketch-btn inline-flex h-11 cursor-pointer items-center bg-wash-yellow px-4 font-body text-base focus-ring"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  )
}
