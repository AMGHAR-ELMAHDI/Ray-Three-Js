import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans, Noto_Sans_JP } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "桜肌 SakuraHada - Japanese Moroccan Skincare",
  description:
    "Experience the harmony of Japanese tradition and Moroccan botanicals in luxury skincare that transcends time and culture.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${openSans.variable} ${notoSansJP.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
