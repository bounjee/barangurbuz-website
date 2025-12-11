"use client"

import { motion } from "framer-motion"
import { Phone, Search, BookOpen, Trophy } from "lucide-react"

const steps = [
    {
        icon: Phone,
        title: "1. Tanışma & Planlama",
        description: "İletişime geçin, hedeflerinizi konuşalım.",
    },
    {
        icon: Search,
        title: "2. Seviye Analizi",
        description: "Eksikleri belirleyip size özel yol haritası çizelim.",
    },
    {
        icon: BookOpen,
        title: "3. Özel Ders Süreci",
        description: "Konu anlatımı ve soru çözümüyle eksikleri kapatalım.",
    },
    {
        icon: Trophy,
        title: "4. Hedeflenen Başarı",
        description: "Düzenli takip ve sınav odaklı çalışmayla hedefe ulaşın.",
    },
]

export function Process() {
    return (
        <section id="nasil-calisiyorum" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nasıl Çalışıyorum?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Başarı tesadüf değildir. İşte adım adım uyguladığımız sistem.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center bg-background p-4"
                        >
                            <div className="w-24 h-24 rounded-full bg-card border-4 border-primary/10 flex items-center justify-center mb-6 shadow-sm relative z-10 transition-transform hover:scale-110 duration-300">
                                <step.icon className="w-10 h-10 text-primary" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground text-sm">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
