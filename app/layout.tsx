import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Anish Kumar — Graphic Designer & Visual Creator",
  description:
    "Portfolio of Anish Kumar — graphic designer crafting bold, futuristic identities, motion graphics and digital experiences.",
  generator: "v0.app",
  openGraph: {
    title: "Anish Kumar — Graphic Designer & Visual Creator",
    description:
      "Bold, futuristic identities, motion graphics and digital experiences.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased selection:bg-accent/30 selection:text-accent">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
