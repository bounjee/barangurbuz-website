"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function BackgroundAnimation() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    // Generate random positions only on client side to avoid hydration mismatch
    const symbols = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        char: ["∑", "∫", "π", "√", "∞", "Δ", "θ", "λ", "β", "Ω"][i % 10],
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        size: Math.random() * 30 + 20,
    }))

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Radial Gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,rgba(var(--primary),0.05),transparent)]" />

            {/* Floating Math Symbols */}
            {symbols.map((s) => (
                <motion.div
                    key={s.id}
                    className="absolute text-primary/10 font-bold font-serif"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                        opacity: [0, 0.4, 0],
                        y: [0, -100],
                    }}
                    transition={{
                        duration: s.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: s.delay,
                    }}
                    style={{
                        left: s.left,
                        top: s.top,
                        fontSize: `${s.size}px`,
                    }}
                >
                    {s.char}
                </motion.div>
            ))}
        </div>
    )
}
