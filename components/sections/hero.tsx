"use client"

import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import content from "@/lib/content.json"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 nebula-bg dark:nebula-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40 dark:via-black/20 dark:to-black/40" />

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight gradient-text"
            style={{
              fontSize: "clamp(4rem, 8vw, 7rem)",
              fontWeight: 800,
            }}
          >
            {content.hero.headline}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content.hero.subheadline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatedButton variant="primary">{content.hero.primaryCTA}</AnimatedButton>
            <AnimatedButton variant="secondary">{content.hero.secondaryCTA}</AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
