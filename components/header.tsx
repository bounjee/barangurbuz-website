"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Hakkımda", href: "/#hakkimda" },
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "Neden Ben?", href: "/#neden-ben" },
  { label: "Blog", href: "/blog" },
  { label: "Yorumlar", href: "/#yorumlar" },
  { label: "İletişim", href: "/#iletisim" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">∑</span>
            <span className="text-lg font-semibold text-foreground">Baran Gürbüz Matematik</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="/#iletisim">Ücretsiz Deneme Dersi</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link href="/#iletisim" onClick={() => setMobileMenuOpen(false)}>
                Ücretsiz Deneme Dersi
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
