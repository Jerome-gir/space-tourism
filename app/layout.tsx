import type { Metadata } from "next"
import { Bellefair, Barlow_Condensed } from "next/font/google"
import "./globals.css"

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
})

const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
})

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bellefair.variable} ${barlow_condensed.variable}`}>
        {children}
      </body>
    </html>
  )
}
