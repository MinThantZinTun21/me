import type { Metadata } from "next"
import { Caveat, Quicksand } from "next/font/google"
import "./globals.css"

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Min Thant Zin Tun — Android Developer",
  description:
    "Senior Android developer crafting warm, reliable mobile experiences across finance, health, and everyday apps.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${caveat.variable} ${quicksand.variable}`}>
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
