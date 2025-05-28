"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star } from "lucide-react"
import { useEffect, useState } from "react"

const services = [
  "Home Design",
  "Office Design",
  "Retail Space Design",
  "Luxury Interiors",
  "Custom Furniture"
]

export default function Hero() {
  const [currentService, setCurrentService] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
          alt="Luxury modern interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 gradient-overlay" />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 glass-effect rounded-2xl p-4 text-white hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="flex items-center space-x-2">
          <Star className="h-5 w-5 text-amber-400 fill-current" />
          <span className="text-sm font-medium">500+ Happy Clients</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-10 glass-effect rounded-2xl p-4 text-white hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-amber-400">12+</div>
          <div className="text-sm">Years Experience</div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-playfair text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight"
        >
          Transform Your
          <span className="block text-gradient">Dream Space</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl lg:text-3xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed"
        >
          Creating extraordinary interiors that blend luxury, functionality, and your unique personality into spaces
          that inspire daily life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-7 text-lg rounded-full shadow-luxury hover-lift"
          >
            <Link href="/contact" className="flex items-center">
              Start Your Journey
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white/30 text-amber-600 hover:bg-white hover:text-gray-900 px-10 py-7 text-lg rounded-full backdrop-blur-sm hover-lift"
          >
            <Link href="/portfolio" className="flex items-center">
              <Play className="mr-3 h-5 w-5" />
              View Our Work
            </Link>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
        >
          {[{ number: "750+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "25+", label: "Design Awards" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-amber-400 font-playfair">{stat.number}</div>
              <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Animated Services at Bottom */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full text-white text-md font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.span
          key={currentService}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {services[currentService]}
        </motion.span>
      </motion.div>
    </section>
  )
}
