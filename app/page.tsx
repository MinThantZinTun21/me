"use client"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  Smartphone,
  GraduationCap,
  Video,
  CreditCard,
  ShoppingCart,
  Heart,
  Car,
  Share2,
  Mail,
  Phone,
  Award,
  BookOpen,
  Github,
  Linkedin,
  Twitter,
  Star,
  Code,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"

export default function ElegantAndroidDeveloper() {
  const mouseRef = useRef({ x: 0, y: 0 })

  // Projects data - showing 10+ projects
  const projects = [
    {
      title: "Banking App",
      category: "Finance",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      technologies: ["Kotlin", "MVVM", "Biometrics API", "Room DB"],
      icon: CreditCard,
    },
    {
      title: "Video Streaming Platform",
      category: "Entertainment",
      description: "High-performance video streaming app with offline viewing and personalized recommendations.",
      technologies: ["Kotlin", "ExoPlayer", "Firebase", "ML Kit"],
      icon: Video,
    },
    {
      title: "E-commerce Solution",
      category: "Retail",
      description: "Feature-rich shopping app with AR product visualization and secure payment processing.",
      technologies: ["Java", "AR Core", "Payment SDK", "Firebase"],
      icon: ShoppingCart,
    },
    {
      title: "Telehealth Platform",
      category: "Healthcare",
      description: "HIPAA-compliant telehealth solution with video consultations and prescription management.",
      technologies: ["Kotlin", "WebRTC", "HIPAA Compliance", "Room DB"],
      icon: Heart,
    },
    {
      title: "Ride Sharing App",
      category: "Transportation",
      description: "Location-based ride sharing application with real-time tracking and payment integration.",
      technologies: ["Java", "Google Maps API", "Realtime DB", "Payment Gateway"],
      icon: Car,
    },
    {
      title: "Social Network",
      category: "Social",
      description: "Feature-rich social platform with real-time messaging and content sharing capabilities.",
      technologies: ["Kotlin", "Firebase", "ExoPlayer", "WorkManager"],
      icon: Share2,
    },
    {
      title: "Fitness Tracker",
      category: "Health & Fitness",
      description: "Comprehensive fitness tracking app with workout plans and health metrics monitoring.",
      technologies: ["Kotlin", "Health Connect API", "Room DB", "Charts"],
      icon: Award,
    },
    {
      title: "Learning Platform",
      category: "Education",
      description: "Interactive learning application with progress tracking and certification.",
      technologies: ["Java", "ExoPlayer", "Firebase", "PDF Rendering"],
      icon: BookOpen,
    },
    {
      title: "Food Delivery",
      category: "Service",
      description: "On-demand food delivery platform with real-time order tracking and restaurant management.",
      technologies: ["Kotlin", "Google Maps", "Push Notifications", "Payment SDK"],
      icon: Phone,
    },
    {
      title: "Smart Home Control",
      category: "IoT",
      description: "IoT application for controlling smart home devices with voice commands and automation.",
      technologies: ["Kotlin", "Bluetooth LE", "Voice Recognition", "MQTT"],
      icon: Smartphone,
    },
  ]

  const domains = [
    {
      name: "Finance",
      icon: CreditCard,
      description: "Banking & payment solutions",
      projects: "15+ Projects",
    },
    {
      name: "Video Streaming",
      icon: Video,
      description: "Media & entertainment apps",
      projects: "8+ Projects",
    },
    {
      name: "E-commerce",
      icon: ShoppingCart,
      description: "Online shopping platforms",
      projects: "12+ Projects",
    },
    {
      name: "Telehealth",
      icon: Heart,
      description: "Healthcare & medical apps",
      projects: "6+ Projects",
    },
    {
      name: "Transportation",
      icon: Car,
      description: "Ride-sharing & logistics",
      projects: "10+ Projects",
    },
    {
      name: "Social",
      icon: Share2,
      description: "Social networking platforms",
      projects: "7+ Projects",
    },
  ]

  const skills = [
    { name: "Android Development", level: 95, years: "10+" },
    { name: "Kotlin & Java", level: 92, years: "8+" },
    { name: "Architecture Patterns", level: 90, years: "7+" },
    { name: "Performance Optimization", level: 88, years: "6+" },
    { name: "Team Leadership", level: 85, years: "5+" },
    { name: "Flutter", level: 75, years: "1+" },
  ]

  const achievements = [
    { number: "50+", label: "Apps Delivered" },
    { number: "10+", label: "Years Experience" },
    { number: "15+", label: "Team Members Led" },
    { number: "1M+", label: "App Downloads" },
  ]

  // Mouse tracking for subtle parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* SVG Pattern Background */}
        <svg className="absolute w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(245, 158, 11, 0.3)" strokeWidth="1" />
            </pattern>
            <pattern id="circles" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="amber-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(245, 158, 11, 0.1)" />
              <stop offset="50%" stopColor="rgba(217, 119, 6, 0.05)" />
              <stop offset="100%" stopColor="rgba(180, 83, 9, 0.1)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#circles)" />
          <rect width="100%" height="100%" fill="url(#amber-gradient)" />
        </svg>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-amber-600/5 to-amber-800/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-amber-500/5 to-amber-700/10 blur-3xl animate-float-delay"></div>

        {/* Animated Lines */}
        <div className="lines">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="line"></div>
          ))}
        </div>
      </div>

      {/* CSS for Advanced Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(-20px) scale(1.05); opacity: 0.7; }
        }
        
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(20px) scale(1.05); opacity: 0.7; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.3); }
          50% { box-shadow: 0 0 40px rgba(245, 158, 11, 0.5); }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 18s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 60s linear infinite;
        }
        
        /* Animated Lines */
        .lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
        }
        
        .line {
          position: absolute;
          width: 1px;
          height: 100%;
          top: 0;
          left: 50%;
          background: linear-gradient(to bottom, transparent, rgba(245, 158, 11, 0.2), transparent);
          overflow: hidden;
        }
        
        .line::after {
          content: '';
          display: block;
          position: absolute;
          height: 15vh;
          width: 100%;
          top: -50%;
          left: 0;
          background: linear-gradient(to bottom, transparent, rgba(245, 158, 11, 0.6), transparent);
          animation: drop 7s 0s infinite;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
        }
        
        @keyframes drop {
          0% { top: -50%; }
          100% { top: 110%; }
        }
        
        .line:nth-child(1) { left: 10%; animation-delay: 0.5s; }
        .line:nth-child(2) { left: 20%; animation-delay: 1s; }
        .line:nth-child(3) { left: 30%; animation-delay: 1.5s; }
        .line:nth-child(4) { left: 40%; animation-delay: 2s; }
        .line:nth-child(5) { left: 50%; animation-delay: 2.5s; }
        .line:nth-child(6) { left: 60%; animation-delay: 3s; }
        .line:nth-child(7) { left: 70%; animation-delay: 3.5s; }
        .line:nth-child(8) { left: 80%; animation-delay: 4s; }
        .line:nth-child(9) { left: 90%; animation-delay: 4.5s; }
        .line:nth-child(10) { left: 95%; animation-delay: 5s; }
        
        /* Project Card Hover Effects */
        .project-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background: linear-gradient(145deg, rgba(30, 30, 30, 0.6), rgba(20, 20, 20, 0.8));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(245, 158, 11, 0.1);
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.2);
          border: 1px solid rgba(245, 158, 11, 0.3);
        }
        
        .project-card:hover .project-icon {
          transform: scale(1.1) rotate(10deg);
          background: linear-gradient(145deg, rgba(245, 158, 11, 0.8), rgba(217, 119, 6, 1));
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .project-icon {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>

      {/* Navigation with Profile Image */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold">Min Thant Zin Tun</span>
            </div>

            {/* Profile Image in Nav */}
            <div className="hidden md:block">
              <div className="w-[125px] h-[125px] relative overflow-hidden rounded-full border-4 border-amber-600/30 animate-pulse-glow">
                <Image
                  src="https://github.com/MinThantZinTun21.png"
                  alt="Min Thant Zin Tun - Android Developer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-8">
                <a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">
                  About
                </a>
                <a href="#projects" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Projects
                </a>
                <a href="#experience" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Experience
                </a>
                <a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </div>

              <button onClick={handleGithubClick} className="p-2 text-gray-400 hover:text-amber-400 transition-colors">
                <Github className="w-5 h-5" />
              </button>
              <Button
                onClick={handleSendMessage}
                className="bg-amber-600 hover:bg-amber-700 text-black font-medium px-6 py-2 rounded-lg transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative pt-40">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-400 font-medium tracking-wide">SENIOR ANDROID DEVELOPER</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Android</span>
                  <br />
                  <span className="text-amber-400">Development</span>
                  <br />
                  <span className="text-gray-300">Expert</span>
                </h1>

                <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                  Crafting exceptional mobile experiences for over a decade. Specialized in building robust, scalable
                  Android applications across finance, healthcare, and social platforms.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {achievements.slice(0, 2).map((achievement, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-amber-400">{achievement.number}</div>
                    <div className="text-gray-400 text-sm">{achievement.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleSendMessage}
                  className="bg-amber-600 hover:bg-amber-700 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Start a Project
                </Button>
                <Button
                  onClick={handleGithubClick}
                  variant="outline"
                  className="border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Portfolio
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6 pt-4">
                <span className="text-gray-500 text-sm">Follow me:</span>
                <div className="flex space-x-4">
                  <button
                    onClick={handleGithubClick}
                    className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-black" />
                  </button>
                  <button className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-black" />
                  </button>
                  <button className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                    <Twitter className="w-5 h-5 text-gray-400 group-hover:text-black" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Stats and Info */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-600/10 to-amber-800/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-amber-900/20">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center p-4 bg-black/30 rounded-xl border border-amber-900/10">
                      <div className="text-3xl font-bold text-amber-400">{achievement.number}</div>
                      <div className="text-gray-400 text-sm">{achievement.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold text-white">Core Expertise</h3>
                  <div className="space-y-3">
                    {skills.slice(0, 3).map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-white">{skill.name}</span>
                          <span className="text-amber-400 text-sm">{skill.years}</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-px bg-amber-400"></div>
                <span className="text-amber-400 font-medium tracking-wide">ABOUT ME</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                My professional career spans <span className="text-amber-400">10+ years</span>, specializing in Android
                development
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed">
                I've dedicated my career to mastering the art of mobile development, with a particular focus on Android
                applications. From startups to enterprise solutions, I've helped bring countless ideas to life through
                clean, efficient, and user-centered mobile experiences.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                Beyond development, I'm passionate about mentoring the next generation of developers and sharing
                knowledge through teaching and community involvement.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-amber-400 text-sm">{skill.years}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education & Certifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Education & Experience</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">Bachelor of Computer Science - Thaton University</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">Android Development Instructor - 1.5 years</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">Software Engineering Diploma - 6 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - New Layout */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-px bg-amber-400"></div>
              <span className="text-amber-400 font-medium tracking-wide">MY WORK</span>
              <div className="w-12 h-px bg-amber-400"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A selection of my best work across various industries
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card rounded-2xl overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="project-icon w-14 h-14 bg-gradient-to-br from-amber-500/80 to-amber-700 rounded-xl flex items-center justify-center">
                    <project.icon className="w-7 h-7 text-black" />
                  </div>

                  <div>
                    <span className="text-amber-400 text-sm font-medium">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                  </div>

                  <p className="text-gray-400">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button className="text-amber-400 hover:text-amber-300 transition-colors flex items-center text-sm font-medium">
                      <Code className="w-4 h-4 mr-1" />
                      View Details
                    </button>
                    <button className="text-gray-400 hover:text-amber-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - New Layout */}
      <section id="experience" className="py-32 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-px bg-amber-400"></div>
              <span className="text-amber-400 font-medium tracking-wide">EXPERTISE</span>
              <div className="w-12 h-px bg-amber-400"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Industry Experience</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Diverse portfolio across multiple industries and application types
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-amber-600/30 via-amber-500/50 to-amber-600/30"></div>

            <div className="space-y-24">
              {domains.map((domain, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="w-1/2 px-8">
                    <div className={`${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <h3 className="text-2xl font-bold text-white mb-2">{domain.name}</h3>
                      <p className="text-gray-400 mb-3">{domain.description}</p>
                      <span className="text-amber-400 font-medium">{domain.projects}</span>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center border-4 border-black animate-pulse-glow">
                    <domain.icon className="w-6 h-6 text-black" />
                  </div>

                  <div className="w-1/2 px-8">{/* Empty space for alignment */}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-px bg-amber-400"></div>
              <span className="text-amber-400 font-medium tracking-wide">TECHNICAL SKILLS</span>
              <div className="w-12 h-px bg-amber-400"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Technologies & Tools</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
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
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-amber-600/50 transition-all duration-300 text-center group"
              >
                <span className="text-gray-300 group-hover:text-amber-400 transition-colors duration-300 font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-transparent to-black">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-px bg-amber-400"></div>
                <span className="text-amber-400 font-medium tracking-wide">GET IN TOUCH</span>
                <div className="w-12 h-px bg-amber-400"></div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Ready to build something <span className="text-amber-400">amazing</span> together?
              </h2>

              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Let's discuss your next mobile project and create exceptional user experiences that drive results.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:minthantzintun21@gmail.com"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-amber-600 hover:to-amber-700 rounded-xl px-8 py-4 border border-gray-700 hover:border-amber-600 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-black" />
                <span className="font-medium text-gray-300 group-hover:text-black">minthantzintun21@gmail.com</span>
              </a>
              <a
                href="tel:+959975816345"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-amber-600 hover:to-amber-700 rounded-xl px-8 py-4 border border-gray-700 hover:border-amber-600 transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 text-gray-400 group-hover:text-black" />
                <span className="font-medium text-gray-300 group-hover:text-black">+959975816345</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                onClick={handleSendMessage}
                className="bg-amber-600 hover:bg-amber-700 text-black font-semibold px-10 py-4 rounded-xl transition-all duration-300 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
              <Button
                onClick={handleGithubClick}
                variant="outline"
                className="border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-black font-semibold px-10 py-4 rounded-xl transition-all duration-300 text-lg"
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold">Min Thant Zin Tun</span>
            </div>

            <p className="text-gray-400">© 2024 Min Thant Zin Tun. All rights reserved.</p>

            <div className="flex space-x-4">
              <button
                onClick={handleGithubClick}
                className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-black" />
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-black" />
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-black" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
