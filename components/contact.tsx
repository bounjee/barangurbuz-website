"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Mesajınız alındı! En kısa sürede dönüş yapacağım.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <section id="iletisim" className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf: Çağrı Metni */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Matematikte Başarıya <br className="hidden md:block" />
              <span className="text-primary">Bir Adım Kaldı</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              Özel ders programı oluşturmak veya aklınıza takılan soruları sormak için formu doldurun.
              Sizin için en uygun planı birlikte yapalım.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium text-foreground/80 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Ücretsiz İlk Görüşme
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Kişiye Özel Program
              </div>
            </div>
          </div>

          {/* Sağ Taraf: Form - Glowing Effect */}
          <div className="relative group rounded-2xl p-[1px] overflow-hidden">
            {/* Spinning Gradient Border */}
            <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--primary)_50%,transparent_100%)] opacity-75" />

            {/* Card Content */}
            <div className="relative bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 h-full">
              <h3 className="text-xl font-semibold mb-6">Bize Yazın</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      placeholder="Adınız Soyadınız"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="E-posta"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      type="tel"
                      placeholder="Telefon"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder="Konu"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Textarea
                    placeholder="Mesajınız..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="resize-none bg-background min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full text-lg font-medium h-12" size="lg">
                  Gönder
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
