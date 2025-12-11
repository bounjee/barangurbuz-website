"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
    const phoneNumber = "905313470718"
    const message = encodeURIComponent("Merhaba, özel ders hakkında bilgi almak istiyorum.")

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-green-500/30 group"
            aria-label="WhatsApp ile İletişime Geç"
        >
            <MessageCircle size={24} className="fill-white" />
            <span className="font-medium pr-1 hidden group-hover:inline-block animate-in fade-in slide-in-from-right-2 duration-300">
                WhatsApp
            </span>
        </a>
    )
}
