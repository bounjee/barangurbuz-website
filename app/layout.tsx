import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BackgroundAnimation } from "@/components/background-animation"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Matematik Özel Ders | Baran Gürbüz",
  description:
    "Profesyonel matematik özel ders hizmeti. İlkokul, ortaokul, lise ve üniversite hazırlık dersleri. Online ve yüz yüze seçenekleri.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <BackgroundAnimation />
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
