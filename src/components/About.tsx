"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "./ui/button"

export default function About() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Interior design studio"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-600 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About Inspire Interiors</h2>
            <p className="text-gray-600 text-lg mb-6">
              With over a decade of experience in transforming spaces, we believe that great design should be both
              beautiful and functional. Our team of passionate designers works closely with each client to create
              personalized interiors that reflect their unique style and needs.
            </p>
            <p className="text-gray-600 mb-8">
              From residential homes to commercial spaces, we approach every project with creativity, attention to
              detail, and a commitment to excellence. Our goal is to create environments that not only look stunning but
              also enhance the way you live and work.
            </p>
            <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
