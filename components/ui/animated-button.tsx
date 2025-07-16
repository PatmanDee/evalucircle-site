"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

interface AnimatedButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  onClick?: () => void
  className?: string
}

export function AnimatedButton({ children, variant = "primary", onClick, className = "" }: AnimatedButtonProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = {
      id: Date.now(),
      x,
      y,
    }

    setRipples((prev) => [...prev, newRipple])

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 600)

    onClick?.()
  }

  const baseClasses = "relative overflow-hidden rounded-full px-8 py-4 font-semibold transition-all duration-300 group"

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-purple-600 to-purple-700 text-white border-2 border-purple-500 hover:from-purple-500 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/25",
    secondary: "bg-transparent text-purple-300 border-2 border-purple-500 hover:bg-purple-500/10 hover:text-purple-200",
  }

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <motion.div initial={{ x: -5, opacity: 0 }} whileHover={{ x: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </span>

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute bg-white/20 rounded-full pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            variant === "primary"
              ? "linear-gradient(45deg, rgba(168, 85, 247, 0.3), rgba(147, 51, 234, 0.3))"
              : "rgba(168, 85, 247, 0.1)",
          filter: "blur(8px)",
        }}
      />
    </motion.button>
  )
}
