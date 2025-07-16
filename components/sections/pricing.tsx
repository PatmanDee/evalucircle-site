"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Star } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import content from "@/lib/content.json"

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  return (
    <section
      id="pricing"
      className="py-24 px-6 bg-gradient-to-b from-transparent to-purple-50 dark:to-purple-900/10"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{content.pricing.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{content.pricing.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content.pricing.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-purple-500 bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-900 shadow-xl"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-purple-300 dark:hover:border-purple-600"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  {typeof plan.price === "number" ? (
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                      <span className="text-gray-600 dark:text-gray-400">/{plan.period}</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</div>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <AnimatedButton variant={plan.popular ? "primary" : "secondary"} className="w-full">
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </AnimatedButton>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
