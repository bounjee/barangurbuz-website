import Link from "next/link"
import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand & Copyright */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">∑</span>
              <span className="text-lg font-semibold text-foreground">Baran Gürbüz Matematik</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Matematik öğrenmek hiç bu kadar keyifli olmamıştı. Başarıya giden yolda yanınızdayız.
            </p>
            <div className="flex flex-col gap-1 mt-2">
              <p className="text-xs text-muted-foreground">© 2025 Tüm hakları saklıdır.</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                Bu site <a href="https://bounjee.github.io/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium">Mustafa Gürbüz</a> tarafından yapılmıştır <span className="text-red-500 text-[10px]">❤️</span>
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">İletişim</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} />
                <a href="mailto:baran@matematikders.com">baran@matematikders.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} />
                <a href="tel:+905313470718">+90 531 347 07 18</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>Gaziantep, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Navigation & Social */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Hızlı Erişim</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/#hakkimda" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Hakkımda
              </Link>
              <Link href="/#hizmetler" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Hizmetler
              </Link>
              <Link href="/#iletisim" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                İletişim
              </Link>
            </nav>

            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
