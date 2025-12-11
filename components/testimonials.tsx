"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Zeynep K.",
    role: "8. Sınıf Öğrencisi",
    content:
      "Matematikten gerçekten korkuyordum. Baran hocayla çalışmaya başladıktan sonra hem konuları anladım hem de netlerim ciddi şekilde arttı. Anlatım tarzı çok sade ve akılda kalıcı.",
  },
  {
    name: "Ahmet Can",
    role: "KPSS Ön Lisans Öğrencisi",
    content:
      "Online ders olmasına rağmen sınıfta ders işliyormuş gibi verim aldım. Soru çözümündeki yöntemleri çok pratik ve anlaşılır. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Fatma Y.",
    role: "Veli Yorumu",
    content:
      "Çocuğum matematiği sevmiyordu, Baran öğretmen sayesinde dersi artık severek çalışıyor. Düzenli geri bildirim vermesi bizim için büyük rahatlık.",
  },
  {
    name: "Kerem S.",
    role: "7. Sınıf Öğrencisi",
    content:
      "Konuyu adım adım, acele etmeden anlatıyor. Takıldığım yerleri sabırla tekrar açıklıyor. Kısa sürede ilerleme kaydettim.",
  },
  {
    name: "Buse A.",
    role: "Lise Temel Matematik Öğrencisi",
    content:
      "Ders içeriğini tamamen öğrencinin ihtiyacına göre ayarlıyor. Hem disiplinli hem motive edici bir öğretmen. Sınava hazırlık sürecimde çok faydasını gördüm.",
  },
  {
    name: "Mehmet S.",
    role: "TYT - YKS Öğrencisi",
    content:
      "Matematik temelim çok zayıftı, sıfırdan başladık. Baran Hoca'nın sabrı sayesinde şimdi denemelerde hedeflediğim netlere ulaştım. Teşekkürler!",
  },
  {
    name: "Ayşe Erdem",
    role: "Veli Yorumu",
    content:
      "Kızımın LGS hazırlık sürecinde en büyük destekçimiz oldu. Hem akademik hem de motivasyon açısından harika bir öğretmen.",
  },
  {
    name: "Caner D.",
    role: "9. Sınıf Öğrencisi",
    content:
      "Dersler çok keyifli geçiyor, zamanın nasıl geçtiğini anlamıyorum. Formül ezberlemek yerine mantığını kavradım.",
  },
]

export function Testimonials() {
  return (
    <section id="yorumlar" className="py-20 overflow-hidden border-b border-primary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium mb-2">Yorumlar</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Öğrenci ve Velilerimiz Ne Diyor?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Yüzlerce öğrenci ve velinin güvenini kazandım. İşte onlardan bazıları.
          </p>
        </div>

        <div className="relative h-[600px] overflow-hidden mask-gradient">
          {/* Gradient Masks to fade in/out */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10"></div>

          <div className="grid md:grid-cols-2 gap-6 h-full">
            {/* First Column - Scrolls Up */}
            <div className="flex flex-col gap-6">
              <motion.div
                animate={{ y: [0, -1000] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex flex-col gap-6"
              >
                {[...testimonials, ...testimonials].map((testimonial, i) => (
                  <Card key={`col1-${i}`} className="bg-card border-border shrink-0">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-4">
                        <Quote className="w-8 h-8 text-primary/30" />
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, starIndex) => (
                            <Star key={starIndex} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">{testimonial.content}</p>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>

            {/* Second Column - Scrolls Down/Offset */}
            <div className="hidden md:flex flex-col gap-6">
              <motion.div
                animate={{ y: [-500, -1500] }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex flex-col gap-6"
              >
                {[...testimonials.slice(3, 8), ...testimonials, ...testimonials].map((testimonial, i) => (
                  <Card key={`col2-${i}`} className="bg-card border-border shrink-0">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-4">
                        <Quote className="w-8 h-8 text-primary/30" />
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, starIndex) => (
                            <Star key={starIndex} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">{testimonial.content}</p>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
