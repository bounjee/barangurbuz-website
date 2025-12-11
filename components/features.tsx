"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, Award, BookOpen, Monitor, Activity, Heart } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Users,
    title: "Kişiye Özel Öğretim Planı",
    description: "Her öğrencinin öğrenme hızı ve seviyesi farklıdır. Derslerimi öğrencinin ihtiyaçlarına göre şekillendirerek en verimli ilerlemeyi sağlarım.",
  },
  {
    icon: Lightbulb,
    title: "Anlaşılır ve Sade Anlatım",
    description: "Karmaşık konuları basitleştirerek, örneklerle pekiştirerek ve adım adım ilerleyerek kalıcı öğrenme oluştururum.",
  },
  {
    icon: Award,
    title: "5+ Yıllık Deneyim",
    description: "Hem sınıf öğretmeni hem özel ders eğitmeni olarak edindiğim tecrübeyi tüm öğrencilere en etkili şekilde yansıtırım.",
  },
  {
    icon: BookOpen,
    title: "Yeni Müfredata Uygun İçerik",
    description: "Güncel MEB müfredatıyla tamamen uyumlu şekilde konu anlatımı, kazanım odaklı çalışma ve soru çözümü sunarım.",
  },
  {
    icon: Monitor,
    title: "Online & Yüz Yüze Ders Seçeneği",
    description: "İhtiyaca göre esnek programlarla online ya da yüz yüze ders imkanı sağlarım.",
  },
  {
    icon: Activity,
    title: "Düzenli Takip ve Geri Bildirim",
    description: "Her ders sonrası ödevlendirme, ilerleme raporu ve velilere düzenli bilgilendirme ile takip sürecini sürekli kontrol altında tutarım.",
  },
  {
    icon: Heart,
    title: "Motivasyon ve Rehberlik Desteği",
    description: "Öğrencinin özgüvenini artıran, derse karşı ilgisini canlı tutan ve hedeflerine göre yönlendiren bir eğitim yaklaşımı sunarım.",
  },
]

export function Features() {
  return (
    <section id="neden-ben" className="py-20 overflow-hidden border-b border-primary/10">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-primary text-sm font-medium mb-2">Neden Ben?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Fark Yaratan Özellikler</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Sadece ders anlatmıyorum, gerçekten öğretiyorum.
        </p>
      </div>

      <div className="relative w-full">
        {/* Gradient Maskeler */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee Container */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 py-4 px-6"
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 80,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ width: "max-content" }}
          >
            {[...features, ...features].map((feature, index) => (
              <div key={index} className="min-w-[300px] md:min-w-[350px]">
                <Card className="bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
