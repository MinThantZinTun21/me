import type { Metadata } from "next"
import { Exo_2, Orbitron } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const exo = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Min Thant Zin Tun — Android Developer",
  description: "Y2K-styled portfolio of a senior Android developer.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo.variable}`}>
      <body className={exo.className}>{children}</body>
    </html>
  )
}
