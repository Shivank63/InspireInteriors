"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-playfair text-3xl lg:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-gray-300 text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s bring your vision to life. Schedule a consultation today and discover how we can create the
            perfect interior for your lifestyle.
          </p>

          <motion.div
            // initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              <Link href="/contact" className="flex items-center">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-amber-600 hover:bg-white hover:text-gray-900 px-8 py-3"
            >
              <Link href="/contact" className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Today
              </Link>
            </Button>
          </motion.div>

          <motion.div
            // initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            // transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-gray-400 text-sm"
          >
            <p>Free consultation • No obligation • Professional advice</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
