"use client"

import { motion, useInView } from "framer-motion"
import { Target, Users, ClipboardList, BarChart3, FileText, Link } from "lucide-react"
import { useRef } from "react"
import content from "@/lib/content.json"

const iconMap = {
  target: Target,
  users: Users,
  clipboard: ClipboardList,
  chart: BarChart3,
  file: FileText,
  link: Link,
}

export function FeaturesDetailed() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {content.features.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{content.features.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.items.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
