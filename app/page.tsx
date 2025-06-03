"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Smartphone,
  Users,
  GraduationCap,
  Video,
  CreditCard,
  ShoppingCart,
  Heart,
  Car,
  Dumbbell,
  Truck,
  Share2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Github,
} from "lucide-react"
import Image from "next/image"

export default function MaterialAndroidDeveloper() {
  const domains = [
    {
      name: "Finance",
      icon: CreditCard,
      description: "Banking & payment solutions",
      color: "bg-blue-100 text-blue-700",
    },
    {
      name: "Video Streaming",
      icon: Video,
      description: "Media & entertainment apps",
      color: "bg-purple-100 text-purple-700",
    },
    {
      name: "E-commerce",
      icon: ShoppingCart,
      description: "Online shopping platforms",
      color: "bg-indigo-100 text-indigo-700",
    },
    { name: "Telehealth", icon: Heart, description: "Healthcare & medical apps", color: "bg-pink-100 text-pink-700" },
    {
      name: "Taxi Apps",
      icon: Car,
      description: "Transportation & ride-sharing",
      color: "bg-cyan-100 text-cyan-700",
    },
    {
      name: "Gym & Fitness",
      icon: Dumbbell,
      description: "Health & wellness apps",
      color: "bg-teal-100 text-teal-700",
    },
    {
      name: "Delivery",
      icon: Truck,
      description: "Logistics & delivery services",
      color: "bg-violet-100 text-violet-700",
    },
    {
      name: "Social",
      icon: Share2,
      description: "Social networking platforms",
      color: "bg-sky-100 text-sky-700",
    },
  ]

  const integrations = [
    { name: "Zoom SDK", color: "bg-blue-50 text-blue-800 border-blue-200" },
    { name: "Twilio", color: "bg-purple-50 text-purple-800 border-purple-200" },
    { name: "Google Maps", color: "bg-cyan-50 text-cyan-800 border-cyan-200" },
    { name: "Google Places", color: "bg-teal-50 text-teal-800 border-teal-200" },
    { name: "Stream Chat", color: "bg-indigo-50 text-indigo-800 border-indigo-200" },
    { name: "WebSocket", color: "bg-slate-50 text-slate-800 border-slate-200" },
    { name: "Pushy Notifications", color: "bg-violet-50 text-violet-800 border-violet-200" },
    { name: "Facebook SDK", color: "bg-sky-50 text-sky-800 border-sky-200" },
    { name: "Google Auth", color: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  ]

  const skills = [
    { name: "Legacy Code Maintenance", level: 95, color: "bg-gradient-to-r from-blue-400 to-blue-600" },
    { name: "Performance Optimization", level: 90, color: "bg-gradient-to-r from-purple-400 to-purple-600" },
    { name: "Greenfield Projects", level: 88, color: "bg-gradient-to-r from-indigo-400 to-indigo-600" },
    { name: "Code Architecture", level: 92, color: "bg-gradient-to-r from-cyan-400 to-cyan-600" },
    { name: "Team Leadership", level: 85, color: "bg-gradient-to-r from-teal-400 to-teal-600" },
    { name: "Technical Mentoring", level: 90, color: "bg-gradient-to-r from-violet-400 to-violet-600" },
  ]

  const handleSendMessage = () => {
    const subject = "Let's Discuss Your Android Project"
    const body = `Hi Min Thant Zin Tun,

I visited your portfolio and I'm interested in discussing a potential Android development project.

Best regards,`

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=minthantzintun21@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailUrl, "_blank")
  }

  const handleLetsConnect = () => {
    const subject = "Let's Connect - Android Development Opportunity"
    const body = `Hello Min Thant Zin Tun,

I came across your impressive portfolio and would love to connect with you regarding potential collaboration opportunities.

Looking forward to hearing from you!

Best regards,`

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=minthantzintun21@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailUrl, "_blank")
  }

  const handleGithubClick = () => {
    window.open("https://github.com/MinThantZinTun21", "_blank")
  }

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Animated Wave Background */}
      <div className="wave-background">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(224, 247, 250, 0.4)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(179, 136, 235, 0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(74, 144, 226, 0.2)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255, 255, 255, 0.1)" />
          </g>
        </svg>
      </div>

      {/* Wave Animation CSS */}
      <style jsx>{`
        .wave-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }
        
        .waves {
          position: absolute;
          width: 100%;
          height: 100%;
          bottom: 0;
          left: 0;
          transform: translateY(50%);
        }
        
        .parallax > use {
          animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
        }
        
        .parallax > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 7s;
        }
        
        .parallax > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }
        
        .parallax > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
        }
        
        .parallax > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 20s;
        }
        
        @keyframes move-forever {
          0% {
            transform: translate3d(-90px, 0, 0);
          }
          100% {
            transform: translate3d(85px, 0, 0);
          }
        }
        
        /* Additional animations */
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        
        @keyframes section-fade-in {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        
        @keyframes skill-bar-fill {
          0% { width: 0%; }
          100% { width: var(--skill-width); }
        }
        
        .animate-float-gentle { animation: float-gentle 6s ease-in-out infinite; }
        .animate-pulse-soft { animation: pulse-soft 4s ease-in-out infinite; }
        .section-container { animation: section-fade-in 1s ease-out; }
        .animate-skill-fill { animation: skill-bar-fill 2s ease-out forwards; }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 section-container">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Profile Image */}
            <div className="relative">
              <div
                className="w-80 h-80 rounded-full overflow-hidden shadow-2xl animate-pulse-soft"
                style={{ background: "linear-gradient(135deg, #4A90E2, #357ABD)", padding: "6px" }}
              >
                <div className="w-full h-full rounded-full overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
                  <Image
                    src="https://github.com/MinThantZinTun21.png"
                    alt="Min Thant Zin Tun - Android Developer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div
                className="absolute -bottom-6 -right-6 p-4 rounded-full shadow-lg animate-float-gentle"
                style={{ background: "linear-gradient(135deg, #4A90E2, #357ABD)" }}
              >
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div
                className="absolute -top-6 -left-6 p-4 rounded-full shadow-lg animate-pulse-soft"
                style={{ backgroundColor: "#1F2933" }}
              >
                <Github className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium animate-pulse-soft"
                style={{ backgroundColor: "#E0F7FA", color: "#357ABD" }}
              >
                <Award className="w-5 h-5" />
                Senior Android Developer
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight" style={{ color: "#1F2933" }}>
                Min Thant Zin Tun
              </h1>

              <p className="text-2xl leading-relaxed max-w-3xl" style={{ color: "#4A5568" }}>
                Crafting exceptional mobile experiences for over a decade. Specialized in building robust, scalable
                Android applications across finance, healthcare, and social platforms.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3" style={{ color: "#4A5568" }}>
                  <Calendar className="w-6 h-6" style={{ color: "#4A90E2" }} />
                  <span className="font-medium text-lg">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3" style={{ color: "#4A5568" }}>
                  <MapPin className="w-6 h-6" style={{ color: "#B388EB" }} />
                  <span className="font-medium text-lg">Myanmar</span>
                </div>
                <div className="flex items-center gap-3" style={{ color: "#4A5568" }}>
                  <BookOpen className="w-6 h-6" style={{ color: "#357ABD" }} />
                  <span className="font-medium text-lg">Teaching & Mentoring</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button
                  size="lg"
                  className="rounded-full px-10 py-6 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  style={{ background: "linear-gradient(135deg, #4A90E2, #357ABD)", color: "white" }}
                  onClick={handleLetsConnect}
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Mail className="mr-3 h-6 w-6 relative z-10" />
                  <span className="relative z-10">Let's Connect</span>
                </Button>
                <Button
                  size="lg"
                  className="rounded-full px-10 py-6 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group border-2"
                  style={{ backgroundColor: "transparent", color: "#1F2933", borderColor: "#C8D6E5" }}
                  onClick={handleGithubClick}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: "#1F2933" }}
                  ></div>
                  <Github className="mr-3 h-6 w-6 relative z-10 group-hover:text-white transition-colors duration-300" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    View GitHub
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 section-container">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6" style={{ color: "#1F2933" }}>
              Core Expertise
            </h2>
            <p className="text-2xl max-w-3xl mx-auto" style={{ color: "#4A5568" }}>
              Proven track record in mobile development with measurable impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl transform hover:scale-105 bg-white/80"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-xl" style={{ color: "#1F2933" }}>
                    {skill.name}
                  </span>
                  <span className="text-lg font-medium" style={{ color: "#4A5568" }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-4 rounded-full" style={{ backgroundColor: "#E2E8F0" }}>
                  <div
                    className={`h-4 rounded-full ${skill.color} animate-skill-fill`}
                    style={{ "--skill-width": `${skill.level}%` } as React.CSSProperties}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Expertise */}
      <section className="py-32 section-container">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6" style={{ color: "#1F2933" }}>
              Industry Experience
            </h2>
            <p className="text-2xl max-w-3xl mx-auto" style={{ color: "#4A5568" }}>
              Diverse portfolio across multiple industries and application types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl backdrop-blur-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300 group text-center bg-white/80"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-20 h-20 rounded-2xl ${domain.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <domain.icon className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ color: "#1F2933" }}>
                  {domain.name}
                </h3>
                <p className="text-base" style={{ color: "#4A5568" }}>
                  {domain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Integrations */}
      <section className="py-32 section-container">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20 p-12 rounded-3xl backdrop-blur-sm bg-white/80">
            <h2 className="text-5xl font-bold mb-6" style={{ color: "#1F2933" }}>
              Technical Integrations
            </h2>
            <p className="text-2xl max-w-3xl mx-auto mb-12" style={{ color: "#4A5568" }}>
              Extensive experience with modern APIs and third-party services
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {integrations.map((integration, index) => (
                <Badge
                  key={index}
                  className={`${integration.color} px-6 py-3 rounded-full font-medium border-2 hover:scale-105 transition-transform duration-200 cursor-default text-base`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {integration.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Teaching */}
      <section className="py-32 section-container">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="p-12 rounded-3xl backdrop-blur-sm hover:shadow-xl transition-all duration-300 bg-white/80">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
                style={{ backgroundColor: "#E0F7FA", color: "#357ABD" }}
              >
                <GraduationCap className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-8" style={{ color: "#1F2933" }}>
                Education
              </h3>
              <div className="space-y-8">
                <div className="p-6 rounded-2xl" style={{ backgroundColor: "#F7FAFC" }}>
                  <h4 className="font-bold text-xl mb-2" style={{ color: "#1F2933" }}>
                    Bachelor of Computer Science
                  </h4>
                  <p className="text-lg" style={{ color: "#4A5568" }}>
                    Thaton University
                  </p>
                </div>
                <div className="p-6 rounded-2xl" style={{ backgroundColor: "#F7FAFC" }}>
                  <h4 className="font-bold text-xl mb-2" style={{ color: "#1F2933" }}>
                    Diploma in Software Engineering
                  </h4>
                  <p className="text-lg" style={{ color: "#4A5568" }}>
                    6-month intensive program
                  </p>
                </div>
              </div>
            </div>

            <div className="p-12 rounded-3xl backdrop-blur-sm hover:shadow-xl transition-all duration-300 bg-white/80">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
                style={{ backgroundColor: "#F0E6FF", color: "#B388EB" }}
              >
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-8" style={{ color: "#1F2933" }}>
                Teaching & Mentoring
              </h3>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl" style={{ backgroundColor: "#F7FAFC" }}>
                  <h4 className="font-bold text-xl mb-3" style={{ color: "#1F2933" }}>
                    Android Development Instructor
                  </h4>
                  <p className="text-lg mb-4" style={{ color: "#4A5568" }}>
                    1.5 years of teaching experience
                  </p>
                  <p className="text-base" style={{ color: "#718096" }}>
                    Mentored 50+ aspiring developers in Android fundamentals, best practices, and real-world application
                    development
                  </p>
                </div>
                <div className="p-6 rounded-2xl" style={{ backgroundColor: "#E0F7FA" }}>
                  <h4 className="font-bold text-xl mb-2" style={{ color: "#1F2933" }}>
                    Flutter Development
                  </h4>
                  <p className="text-lg" style={{ color: "#4A5568" }}>
                    6 months of cross-platform experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 section-container">
        <div className="max-w-5xl mx-auto px-8">
          <div
            className="p-16 rounded-3xl text-white overflow-hidden relative text-center"
            style={{ background: "linear-gradient(135deg, #4A90E2, #357ABD)" }}
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h2 className="text-5xl font-bold mb-8">Ready to Build Something Amazing?</h2>
              <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
                Let's discuss your next mobile project and create exceptional user experiences together
              </p>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
                <a
                  href="mailto:minthantzintun21@gmail.com"
                  className="flex items-center justify-center gap-4 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 hover:bg-white/30 transition-all duration-300 text-lg"
                >
                  <Mail className="w-6 h-6" />
                  <span className="font-medium">minthantzintun21@gmail.com</span>
                </a>
                <a
                  href="tel:+959975816345"
                  className="flex items-center justify-center gap-4 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 hover:bg-white/30 transition-all duration-300 text-lg"
                >
                  <Phone className="w-6 h-6" />
                  <span className="font-medium">+959975816345</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-bold shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  onClick={handleSendMessage}
                >
                  <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Mail className="mr-3 h-6 w-6 relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </Button>
                <Button
                  size="lg"
                  className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-10 py-6 text-lg font-bold shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  onClick={handleGithubClick}
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Github className="mr-3 h-6 w-6 relative z-10" />
                  <span className="relative z-10">GitHub Profile</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white/80">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="flex justify-center items-center mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4"
              style={{ background: "linear-gradient(135deg, #4A90E2, #357ABD)" }}
            >
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <span className="text-3xl font-bold" style={{ color: "#1F2933" }}>
              Min Thant Zin Tun
            </span>
          </div>
          <p className="text-xl mb-8" style={{ color: "#4A5568" }}>
            Building exceptional mobile experiences with passion and precision
          </p>
          <div className="flex justify-center items-center gap-6 mb-6">
            <a
              href="https://github.com/MinThantZinTun21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors duration-200 text-lg"
              style={{ color: "#4A5568" }}
            >
              <Github className="w-6 h-6" />
              <span className="font-medium">@MinThantZinTun21</span>
            </a>
          </div>
          <p className="text-base" style={{ color: "#718096" }}>
            © 2024 Min Thant Zin Tun. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
