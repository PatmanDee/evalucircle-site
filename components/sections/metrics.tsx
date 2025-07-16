"use client"

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"
import content from "@/lib/content.json"

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })
  const displayed = useTransform(springValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  return (
    <span ref={ref}>
      <motion.span>{displayed}</motion.span>
      {suffix}
    </span>
  )
}

export function Metrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted Worldwide</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of organizations that have transformed their feedback culture with Evalucircle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-8 rounded-2xl glass-morphism hover:bg-purple-500/10 transition-colors duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-4">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-xl text-gray-300 font-medium">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
