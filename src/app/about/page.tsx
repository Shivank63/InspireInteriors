"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Target } from "lucide-react"

const stats = [
  { icon: Award, label: "Years Experience", value: "12+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Clock, label: "Projects Completed", value: "750+" },
  { icon: Target, label: "Success Rate", value: "98%" },
]

const team = [
  {
    name: "Sakshi Verma",
    role: "Founder & Lead Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "With over 15 years of experience, Sarah founded Inspire Interiors with a vision to create spaces that truly reflect her clients' personalities and lifestyles.",
  },
  {
    name: "Garvit Awashti",
    role: "Senior Interior Designer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Michael specializes in commercial and hospitality design, bringing innovative solutions and sustainable practices to every project.",
  },
  {
    name: "Tushti Patel",
    role: "Design Consultant",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Emily focuses on residential projects and has a keen eye for color theory and space optimization, creating harmonious living environments.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            // initial={{ opacity: 0, y: 30 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-gray-900 mb-6">About Inspire Interiors</h1>
            <p className="text-gray-600 text-lg lg:text-xl">
              We are passionate designers dedicated to creating beautiful, functional spaces that enhance the way you
              live, work, and experience your environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              // initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.8 }}
            >
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 2012, Inspire Interiors began as a small studio with a big vision: to create interiors that
                not only look beautiful but also enhance the daily lives of our clients. What started as a passion
                project has grown into a full-service design firm known for our personalized approach and attention to
                detail.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that great design should be accessible to everyone, regardless of budget or space size. Our
                team works closely with each client to understand their unique needs, lifestyle, and aesthetic
                preferences, creating custom solutions that reflect their personality and enhance their daily
                experience.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have transformed hundreds of spaces across residential, commercial, and
                hospitality sectors, always maintaining our commitment to excellence, sustainability, and client
                satisfaction.
              </p>
            </motion.div>

            <motion.div
              // initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our design studio"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-600 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            // initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Over the years, we've built a reputation for excellence and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  // initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="font-playfair text-3xl lg:text-4xl font-bold text-amber-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            // initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              // initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To create inspiring, functional, and beautiful interior spaces that enhance our clients' quality of life
                while reflecting their unique personality and style. We strive to make exceptional design accessible and
                to build lasting relationships through trust, creativity, and excellence.
              </p>
            </motion.div>

            <motion.div
              // initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.8 }}
              className="bg-amber-50 p-8 rounded-lg"
            >
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>
                    <strong>Integrity:</strong> Honest communication and transparent processes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>
                    <strong>Creativity:</strong> Innovative solutions tailored to each client
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>
                    <strong>Excellence:</strong> Uncompromising quality in every detail
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>
                    <strong>Sustainability:</strong> Environmentally conscious design choices
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            // initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our talented team of designers brings diverse expertise and a shared passion for creating exceptional
              interior spaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                // initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
