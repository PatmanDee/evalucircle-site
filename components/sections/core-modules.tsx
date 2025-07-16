"use client"

import { motion, useInView } from "framer-motion"
import { Target, Users, ClipboardList } from "lucide-react"
import { useRef } from "react"
import content from "@/lib/content.json"

const iconMap = {
  target: Target,
  users: Users,
  clipboard: ClipboardList,
}

export function CoreModules() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  return (
    <section id="features" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Core Modules</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive evaluation tools designed to transform how your organization approaches feedback and growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.coreModules.map((module, index) => {
            const IconComponent = iconMap[module.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  rotateX: 4,
                  scale: 1.02,
                }}
                className="group relative p-8 rounded-2xl glass-morphism hover:bg-purple-500/10 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {module.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">{module.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
