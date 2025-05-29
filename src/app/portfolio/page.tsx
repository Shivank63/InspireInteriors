"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Hospitality",
  "Minimalist",
  "Modern",
];

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Home",
    category: "Residential",
    tags: ["Minimalist", "Modern"],
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "A serene and sophisticated living space featuring clean lines and natural materials.",
    href: "/portfolio/modern-minimalist-home",
  },
  {
    id: 2,
    title: "Corporate Office Redesign",
    category: "Commercial",
    tags: ["Modern"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Transforming a traditional office into a collaborative and inspiring workspace.",
    href: "/portfolio/corporate-office-redesign",
  },
  {
    id: 3,
    title: "Luxury Penthouse",
    category: "Residential",
    tags: ["Modern"],
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "An elegant penthouse design combining luxury with comfort and functionality.",
    href: "/portfolio/luxury-penthouse",
  },
  {
    id: 4,
    title: "Boutique Hotel Lobby",
    category: "Hospitality",
    tags: ["Modern"],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Creating a welcoming and memorable first impression for hotel guests.",
    href: "/portfolio/boutique-hotel-lobby",
  },
  {
    id: 5,
    title: "Scandinavian Apartment",
    category: "Residential",
    tags: ["Minimalist"],
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Light, airy spaces with natural textures and functional design.",
    href: "/portfolio/scandinavian-apartment",
  },
  {
    id: 6,
    title: "Tech Startup Office",
    category: "Commercial",
    tags: ["Modern"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Dynamic workspace designed to foster creativity and collaboration.",
    href: "/portfolio/tech-startup-office",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return (
      project.category === activeCategory ||
      project.tags.includes(activeCategory)
    );
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            // initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-gray-600 text-lg lg:text-xl">
              Explore our collection of thoughtfully designed spaces that
              showcase our commitment to excellence and innovation in interior
              design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            // initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              // transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  // initial={{ opacity: 0, y: 30 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href={project.href}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-amber-400 text-sm font-medium">
                          {project.category}
                        </span>
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-gray-300 text-xs px-2 py-1 bg-black/30 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-playfair text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold mb-6">
              Ready to Create Your Dream Space?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to bring your vision to life with our
              expert design services.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
