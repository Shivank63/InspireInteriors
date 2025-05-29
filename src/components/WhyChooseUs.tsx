"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Palette, Shield, Heart } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Award-Winning Design",
    description: "Recognized for excellence in interior design with multiple industry awards.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled designers with diverse backgrounds and specialized expertise.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Projects completed on schedule without compromising on quality.",
  },
  {
    icon: Palette,
    title: "Personalized Approach",
    description: "Custom solutions tailored to your unique style and requirements.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Commitment to the highest standards of craftsmanship and materials.",
  },
  {
    icon: Heart,
    title: "Client Satisfaction",
    description: "98% client satisfaction rate with long-term relationships.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Inspire Interiors?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We combine creativity, expertise, and dedication to deliver exceptional interior design solutions that
            exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                // initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
