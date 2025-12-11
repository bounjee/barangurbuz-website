"use client"

import { GraduationCap, Award, BookOpen } from "lucide-react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 })
  const display = useTransform(spring, (current) => Math.round(current) + suffix)

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return <motion.span ref={ref}>{display}</motion.span>
}

export function About() {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  }

  return (
    <section id="hakkimda" className="py-20 overflow-hidden border-b border-primary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20 items-center md:items-stretch">
          <motion.div
            className="w-full md:w-auto shrink-0 flex justify-center md:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
          >
            <div className="bg-secondary rounded-2xl overflow-hidden max-w-xs w-72 lg:w-80 h-full">
              <img
                src="/professional-male-math-teacher-portrait.jpg"
                alt="Baran Gürbüz - Matematik Öğretmeni"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full md:flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Baran Gürbüz</h3>
            <p className="text-xl text-primary font-medium mb-6">Matematik Öğretmeni & Eğitim Koçu</p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Matematik öğretmeni olarak 5 yılı aşkın süredir hem sınıf ortamında hem de birebir özel derslerle öğrencilerime destek oluyorum. Hatay Mustafa Kemal Üniversitesi İlköğretim Matematik Öğretmenliği mezunuyum.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
              Derslerimde basitten karmaşığa giden, anlaşılır ve sistemli bir anlatım kullanıyor; her öğrencinin seviyesine ve öğrenme hızına göre bireyselleştirilmiş bir program hazırlıyorum. Amacım, öğrencilerimin sadece sınavlarda başarılı olması değil, aynı zamanda matematiği gerçekten anlayıp sevmeleri ve kendilerine güven duymaları.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-secondary">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Lisans</div>
                  <div className="text-xs text-muted-foreground">Hatay MKÜ</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-secondary">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Uzmanlık</div>
                  <div className="text-xs text-muted-foreground">LGS & YKS</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-secondary">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground flex gap-1">
                    <Counter value={5} suffix="+" /> Yıl
                  </div>
                  <div className="text-xs text-muted-foreground">Deneyim</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
