import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Smartphone,
  Code,
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
  Zap,
  Globe,
  Mail,
  Phone,
  Download,
  ExternalLink,
} from "lucide-react"

export default function AndroidDeveloperLanding() {
  const domains = [
    { name: "Finance", icon: CreditCard, description: "Banking & payment solutions" },
    { name: "Video Streaming", icon: Video, description: "Media & entertainment apps" },
    { name: "E-commerce", icon: ShoppingCart, description: "Online shopping platforms" },
    { name: "Telehealth", icon: Heart, description: "Healthcare & medical apps" },
    { name: "Taxi Apps", icon: Car, description: "Transportation & ride-sharing" },
    { name: "Gym & Fitness", icon: Dumbbell, description: "Health & wellness apps" },
    { name: "Delivery", icon: Truck, description: "Logistics & delivery services" },
    { name: "Social", icon: Share2, description: "Social networking platforms" },
  ]

  const integrations = [
    "Zoom SDK",
    "Twilio",
    "Google Maps",
    "Google Places",
    "Stream Chat",
    "WebSocket",
    "Pushy Notifications",
    "Facebook SDK",
    "Google Auth",
  ]

  const skills = [
    "Legacy Code Maintenance",
    "Performance Optimization",
    "Greenfield Projects",
    "Code Architecture",
    "Team Leadership",
    "Technical Mentoring",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-emerald-100 rounded-full">
                <Smartphone className="h-12 w-12 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Senior Android Developer</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              10+ years of expertise building robust mobile applications across finance, healthcare, e-commerce, and
              social platforms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience & Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A decade of mobile development experience with a proven track record of delivering high-quality
              applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <Code className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">10+ Years</CardTitle>
                <CardDescription>Android Development Experience</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">1.5 Years</CardTitle>
                <CardDescription>Teaching Android Development</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">6 Months</CardTitle>
                <CardDescription>Flutter Development</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Domain Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Domain Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Extensive experience across diverse industries and application types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <domain.icon className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
                  <CardTitle className="text-lg">{domain.name}</CardTitle>
                  <CardDescription>{domain.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Proficiency</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive experience with modern development practices and third-party integrations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Core Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-3 h-6 w-6 text-emerald-600" />
                  Core Competencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Integrations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-3 h-6 w-6 text-emerald-600" />
                  Third-Party Integrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {integrations.map((integration, index) => (
                    <Badge key={index} variant="secondary" className="bg-emerald-100 text-emerald-800">
                      {integration}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Teaching */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education & Teaching</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strong educational background combined with passion for knowledge sharing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-emerald-600 mb-4" />
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">B.C.Sc</h4>
                  <p className="text-gray-600">Thaton University</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900">Diploma in Software Engineering</h4>
                  <p className="text-gray-600">6-month intensive course</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <Users className="h-10 w-10 text-emerald-600 mb-4" />
                <CardTitle>Teaching Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Android Development Instructor</h4>
                  <p className="text-gray-600 mb-4">1.5 years of teaching experience</p>
                  <p className="text-sm text-gray-500">
                    Mentored aspiring developers in Android fundamentals, best practices, and real-world application
                    development
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your next mobile project and how my expertise can help bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center mb-6">
            <Smartphone className="h-8 w-8 text-emerald-400 mr-3" />
            <span className="text-xl font-semibold">Senior Android Developer</span>
          </div>
          <p className="text-gray-400 mb-4">Building exceptional mobile experiences for over a decade</p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Phone className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
