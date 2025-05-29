"use client"

import { motion } from "framer-motion"
import { MessageSquare, Lightbulb, Palette, Hammer, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "We start with an in-depth consultation to understand your vision, needs, and budget.",
  },
  {
    icon: Lightbulb,
    title: "Concept Development",
    description: "Our team creates initial concepts and mood boards to visualize your space.",
  },
  {
    icon: Palette,
    title: "Design Planning",
    description: "Detailed design plans, 3D renderings, and material selections are prepared.",
  },
  {
    icon: Hammer,
    title: "Implementation",
    description: "Professional installation and project management ensure flawless execution.",
  },
  {
    icon: CheckCircle,
    title: "Final Reveal",
    description: "Your transformed space is revealed, complete with styling and finishing touches.",
  },
]

export default function Process() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Design Process</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From initial consultation to final reveal, we follow a proven process to ensure your project exceeds
            expectations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-amber-200" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.title}
                  // initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  // transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className={`${isEven ? "lg:text-right" : "lg:text-left"}`}>
                      <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
