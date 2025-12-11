"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        stiffness: 100,
        damping: 10
      }
    },
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-primary/10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-medium">Ücretsiz Deneme Dersi</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Matematiği <span className="text-primary">Sevdirerek</span> Öğretiyorum
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              5 yıllık deneyimle, her seviyeden öğrenciye bireysel ve etkili matematik eğitimi sunuyorum.
              Ezberci değil, <span className="text-foreground font-medium">mantığa dayalı</span> ve <span className="text-foreground font-medium">yeni nesil</span> eğitim modeli ile başarıya ulaşın.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link href="#iletisim">
                  Hemen Başla
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group bg-transparent">
                <Link href="#hakkimda">
                  <Play className="mr-2 h-4 w-4" />
                  Tanıtım Videosu
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>İlk ders ücretsiz</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Online veya yüz yüze</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Sağ Taraf: Hibrit Eğitim Kompozisyonu */}
          <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">

            {/* Arka Plan - Kareli Defter / Grid Efekti */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-full opacity-50 mask-image-radial-gradient" />

            {/* Dekoratif Daireler */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-[90%] h-[90%] border border-dashed border-primary/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[70%] h-[70%] border border-dotted border-primary/30 rounded-full"
            />

            {/* Merkez: Öğretmen Portresi */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 w-56 h-56 md:w-80 md:h-80 rounded-full p-2 bg-background border-4 border-primary/10 shadow-[0_0_50px_rgba(var(--primary),0.3)]"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="/barangurbuz.jpg"
                  alt="Baran Gürbüz"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-0 right-0 text-center text-white font-bold tracking-wide">Baran Gürbüz</div>
              </div>

              {/* Rozet: Deneyim */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-sm border border-primary/20 text-foreground px-6 py-2 rounded-xl text-sm font-bold shadow-xl whitespace-nowrap z-20 flex gap-2">
                <span className="text-primary">5+ Yıl</span>Deneyim
              </div>
            </motion.div>

            {/* Yörünge Sistemi / Orbiting Cards */}
            {/* Yüzen Element 1: Yüz Yüze Eğitim */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              className="absolute top-0 -left-6 md:-left-4 z-20"
            >
              <div className="bg-card/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-primary/20 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">Yüz Yüze</div>
                  <div className="text-[10px] text-muted-foreground">Birebir İlgi</div>
                </div>
              </div>
            </motion.div>

            {/* Yüzen Element 2: Online Eğitim */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -right-6 md:-right-4 z-20"
            >
              <div className="bg-card/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-primary/20 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">Online</div>
                  <div className="text-[10px] text-muted-foreground">Uzaktan Eğitim</div>
                </div>
              </div>
            </motion.div>

            {/* Yüzen Element 3: Başarı/Hedef */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -top-6 right-0 md:right-4 z-20"
            >
              <div className="bg-card/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-primary/20 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">%100</div>
                  <div className="text-[10px] text-muted-foreground">Memnuniyet</div>
                </div>
              </div>
            </motion.div>

            {/* Yüzen Element 4: Soru Çözümü */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-0 left-0 md:left-6 z-20"
            >
              <div className="bg-card/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-primary/20 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <span className="font-bold font-mono text-lg">π</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">LGS & YKS</div>
                  <div className="text-[10px] text-muted-foreground">Sınav Hazırlığı</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
