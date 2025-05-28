"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Heart, MapPin, Calendar } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Luxury Manhattan Penthouse",
    category: "Residential",
    location: "New York, NY",
    year: "2024",
    description:
      "A sophisticated penthouse featuring floor-to-ceiling windows, custom millwork, and curated art pieces that create an urban sanctuary.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    beforeImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    tags: ["Modern", "Luxury", "Minimalist"],
    area: "3,500 sq ft",
    duration: "6 months",
    featured: true,
  },
  {
    id: 2,
    title: "Tech Startup Headquarters",
    category: "Commercial",
    location: "San Francisco, CA",
    year: "2024",
    description:
      "An innovative workspace designed to foster creativity and collaboration with flexible zones and biophilic design elements.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    beforeImage:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    tags: ["Modern", "Tech", "Collaborative"],
    area: "12,000 sq ft",
    duration: "8 months",
    featured: true,
  },
  {
    id: 3,
    title: "Scandinavian Family Home",
    category: "Residential",
    location: "Portland, OR",
    year: "2023",
    description:
      "A warm and inviting family home that embraces hygge principles with natural materials and cozy textures.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    beforeImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    tags: ["Scandinavian", "Family", "Cozy"],
    area: "2,800 sq ft",
    duration: "4 months",
    featured: false,
  },
  {
    id: 4,
    title: "Boutique Hotel Lobby",
    category: "Hospitality",
    location: "Miami, FL",
    year: "2023",
    description:
      "An elegant hotel lobby that captures the essence of Miami&apos;s vibrant culture with bold colors and tropical influences.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    beforeImage:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    tags: ["Hospitality", "Tropical", "Luxury"],
    area: "1,200 sq ft",
    duration: "3 months",
    featured: false,
  },
]

const categories = ["All", "Residential", "Commercial", "Hospitality"]

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = projects.filter((project) => activeCategory === "All" || project.category === activeCategory)

  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="featured-projects" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-3 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold mb-6">
            Our Portfolio
          </span>
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Featured
            <span className="block text-gradient">Projects</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our latest interior design projects that showcase innovation, elegance, and exceptional
            craftsmanship.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-gray-100 rounded-full p-2 flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-amber-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Project - Large Display */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-luxury group">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={featuredProject.image || "/placeholder.svg"}
                    alt={featuredProject.title}
                    width={1400}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />

                  {/* Before/After Toggle */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Featured Project
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-gray-900 text-white p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="text-amber-400 text-sm font-semibold">{featuredProject.category}</span>
                    <h3 className="font-playfair text-3xl lg:text-4xl font-bold mt-2 mb-4">{featuredProject.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{featuredProject.description}</p>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-amber-400" />
                      <div>
                        <div className="text-sm text-gray-400">Location</div>
                        <div className="font-medium">{featuredProject.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-amber-400" />
                      <div>
                        <div className="text-sm text-gray-400">Completed</div>
                        <div className="font-medium">{featuredProject.year}</div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white rounded-full w-fit">
                    <Link href={`/portfolio/${featuredProject.id}`} className="flex items-center">
                      View Full Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl shadow-soft hover:shadow-luxury transition-all duration-500 overflow-hidden hover-lift"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        hoveredProject === project.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="flex space-x-4">
                        <Button
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-gray-900"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-gray-900"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button asChild size="lg" className="bg-gray-900 hover:bg-amber-600 text-white rounded-full px-8">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
