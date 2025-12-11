"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
  {
    title: "İlkokul Matematiği",
    grades: "1-4. Sınıf",
    description: "Temel matematik kavramları, sayılar, dört işlem, problem çözme becerileri.",
    topics: ["Sayılar ve Basamak", "Dört İşlem", "Kesirler", "Problem Çözme"],
  },
  {
    title: "Ortaokul Matematiği",
    grades: "5-8. Sınıf",
    description: "Cebir, geometri, oran-orantı ve LGS hazırlığı.",
    topics: ["Cebir", "Geometri", "Oran-Orantı", "LGS Hazırlık"],
  },
  {
    title: "Lise Matematiği",
    grades: "9-12. Sınıf",
    description: "Fonksiyonlar, türev-integral, analitik geometri ve YKS/AYT hazırlığı.",
    topics: ["Fonksiyonlar", "Türev & İntegral", "Analitik Geometri", "YKS/AYT"],
  },
  {
    title: "Üniversite Hazırlık",
    grades: "Mezun",
    description: "Yoğun sınav hazırlığı, konu tekrarı ve test çözüm teknikleri.",
    topics: ["Konu Tekrarı", "Test Teknikleri", "Zaman Yönetimi", "Sınav Stratejisi"],
  },
]

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
  }

  return (
    <section id="hizmetler" className="py-20 border-b border-primary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium mb-2">Hizmetler</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Her Seviyeye Uygun Dersler</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            İlkokuldan üniversite hazırlığa kadar her seviyede matematik dersi veriyorum. Öğrencinizin ihtiyacına göre
            özelleştirilmiş program.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
                <CardHeader>
                  <CardDescription className="text-primary">{service.grades}</CardDescription>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.topics.map((topic) => (
                      <li key={topic} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
