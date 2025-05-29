"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Building, Palette, CuboidIcon as Cube, Check, Star } from "lucide-react"

const services = [
  {
    title: "Residential Design",
    subtitle: "Luxury Home Interiors",
    description:
      "Transform your home into a sanctuary of style and comfort with our bespoke residential design services.",
    features: ["Full Home Design", "Room Makeovers", "Custom Furniture", "Space Planning"],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: Home,
    price: "From $2,500",
    rating: 4.9,
    projects: "320+ Projects",
  },
  {
    title: "Commercial Interiors",
    subtitle: "Professional Workspace Design",
    description: "Create inspiring work environments that boost productivity and reflect your brand identity.",
    features: ["Office Design", "Retail Spaces", "Brand Integration", "Ergonomic Solutions"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: Building,
    price: "From $5,000",
    rating: 4.8,
    projects: "180+ Projects",
  },
  {
    title: "Renovation & Styling",
    subtitle: "Space Transformation",
    description: "Breathe new life into existing spaces with strategic updates and professional styling.",
    features: ["Room Refresh", "Furniture Styling", "Color Consultation", "Decor Selection"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: Palette,
    price: "From $1,200",
    rating: 4.9,
    projects: "250+ Projects",
  },
  {
    title: "3D Visualization",
    subtitle: "Photorealistic Renderings",
    description: "See your space come to life before construction begins with stunning 3D visualizations.",
    features: ["3D Renderings", "Virtual Tours", "Material Previews", "Design Revisions"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: Cube,
    price: "From $800",
    rating: 5.0,
    projects: "400+ Renderings",
  },
]

export default function Services() {
  return (
    <section className="py-20 lg:py-32 gradient-bg-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* <span className="inline-block px-6 py-3 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6">
            Our Expertise
          </span> */}
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Premium Design
            <span className="block text-gradient">Services</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer comprehensive interior design services that transform spaces into
            extraordinary experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                // initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-white rounded-3xl shadow-soft hover:shadow-luxury transition-all duration-500 overflow-hidden hover-lift"
              >
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                    <span className="text-white text-sm font-medium">{service.rating}</span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-6 left-6 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {service.price}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-amber-600 text-sm font-semibold">{service.subtitle}</span>
                    <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-gray-900 mt-1">{service.title}</h3>
                  </div>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-amber-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">{service.projects}</div>
                    <Button
                      asChild
                      className="bg-gray-900 hover:bg-amber-600 text-white rounded-full px-6 py-2 transition-all duration-300"
                    >
                      <Link href="/contact" className="flex items-center">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Not sure which service you need?</h3>
            <p className="text-gray-600 mb-6">
              Book a free consultation and let our experts guide you to the perfect solution for your space.
            </p>
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8">
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
