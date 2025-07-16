"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import content from "@/lib/content.json"

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-transparent to-purple-900/10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three simple steps to transform your organization's feedback culture and drive meaningful growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {content.howItWorks.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="relative text-center"
            >
              {/* Step number with animated circle */}
              <div className="relative mb-8">
                <motion.div
                  className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-2xl font-bold text-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {step.step}
                </motion.div>

                {/* Animated connecting line (except for last step) */}
                {index < content.howItWorks.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-purple-300"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>

              <p className="text-gray-300 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
