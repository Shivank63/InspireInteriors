"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, Building, Palette, CuboidIcon as Cube, ArrowRight, Check } from "lucide-react"

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Design",
    description:
      "Complete home transformations that reflect your personal style and enhance your daily living experience.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Full home design and renovation",
      "Single room makeovers",
      "Kitchen and bathroom design",
      "Custom furniture selection",
      "Color consultation",
      "Space planning and optimization",
    ],
    startingPrice: "$2,500",
  },
  {
    id: "commercial",
    icon: Building,
    title: "Commercial Interiors",
    description: "Professional spaces designed to enhance productivity, brand identity, and customer experience.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Office space design",
      "Retail environment planning",
      "Restaurant and hospitality design",
      "Brand integration",
      "Ergonomic workspace solutions",
      "Sustainable design practices",
    ],
    startingPrice: "$5,000",
  },
  {
    id: "renovation",
    icon: Palette,
    title: "Renovation & Styling",
    description: "Transform existing spaces with strategic updates, styling, and refresh solutions.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Room refresh and styling",
      "Furniture rearrangement",
      "Accessory and decor selection",
      "Paint and finish consultation",
      "Lighting updates",
      "Budget-friendly makeovers",
    ],
    startingPrice: "$1,200",
  },
  {
    id: "3d-rendering",
    icon: Cube,
    title: "3D Rendering",
    description: "Photorealistic visualizations that help you see your space before any work begins.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Photorealistic 3D renderings",
      "Virtual walkthroughs",
      "Multiple design options",
      "Material and finish visualization",
      "Lighting simulation",
      "Revision rounds included",
    ],
    startingPrice: "$800",
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-gray-600 text-lg lg:text-xl">
              From concept to completion, we offer comprehensive interior design services tailored to your unique needs
              and vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isEven ? "" : "lg:grid-flow-col-dense"
                  }`}
                  id={service.id}
                >
                  {/* Image */}
                  <div className={`relative ${isEven ? "" : "lg:col-start-2"}`}>
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={800}
                      height={500}
                      className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-600 rounded-lg -z-10" />
                  </div>

                  {/* Content */}
                  <div className={isEven ? "" : "lg:col-start-1"}>
                    <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-amber-600" />
                    </div>

                    <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>

                    <p className="text-gray-600 text-lg mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-gray-500 text-sm">Starting from</span>
                        <div className="font-playfair text-2xl font-bold text-gray-900">{service.startingPrice}</div>
                      </div>
                    </div>

                    <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                      <Link href="/book-consultation" className="flex items-center">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our streamlined process ensures your project runs smoothly from initial consultation to final reveal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial meeting to discuss your vision and requirements",
              },
              { step: "02", title: "Design", description: "Create detailed plans and 3D visualizations" },
              { step: "03", title: "Approval", description: "Review and refine the design until perfect" },
              { step: "04", title: "Implementation", description: "Professional execution and project management" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and create a space that perfectly reflects your style and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/book-consultation">Book Free Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
