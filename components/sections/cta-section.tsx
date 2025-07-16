"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { CheckCircle } from "lucide-react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  const benefits = ["14-day free trial", "No setup fees", "Cancel anytime", "24/7 support"]

  return (
    <section
      className="py-24 px-6 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-800 dark:to-purple-900"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Feedback Culture?</h2>

          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Join thousands of organizations that have revolutionized their evaluation processes with Evalucircle.
          </p>

          <div className="flex flex-wrap justify-center gap-6 my-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2 text-purple-100"
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AnimatedButton variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Free Trial
            </AnimatedButton>
            <AnimatedButton variant="secondary" className="border-white text-white hover:bg-white/10">
              Schedule Demo
            </AnimatedButton>
          </div>

          <p className="text-sm text-purple-200 mt-4">No credit card required • Setup in under 5 minutes</p>
        </motion.div>
      </div>
    </section>
  )
}
