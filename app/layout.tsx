import type { Metadata } from "next"
import { Kalam, Patrick_Hand } from "next/font/google"
import { buildPersonJsonLd, profile } from "@/lib/portfolio-content"
import "./globals.css"

const kalam = Kalam({
  subsets: ["latin"],
  variable: "--font-kalam",
  display: "swap",
  weight: ["400", "700"],
})

const patrick = Patrick_Hand({
  subsets: ["latin"],
  variable: "--font-patrick",
  display: "swap",
  weight: ["400"],
})

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.description,
  authors: [{ name: profile.name, url: profile.url }],
  creator: profile.name,
  keywords: [
    "Senior Android Developer",
    "Kotlin",
    "Java",
    "Yangon",
    "Min Thant Zin Tun",
    "Multi-module Android",
    "Gradle BOM",
    "Jenkins",
  ],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
    url: profile.url,
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: profile.avatar,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
    images: [profile.avatar],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = buildPersonJsonLd()
  const jsonLdHtml = JSON.stringify(jsonLd).replace(/</g, "\\u003c")

  return (
    <html lang="en" className={`${kalam.variable} ${patrick.variable}`}>
      <body className={patrick.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml }}
        />
        {children}
      </body>
    </html>
  )
}
