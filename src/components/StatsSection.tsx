"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Target } from "lucide-react"

const stats = [
  { icon: Award, label: "Years Experience", value: "12+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Clock, label: "Projects Completed", value: "750+" },
  { icon: Target, label: "Success Rate", value: "98%" },
]



export default function Process() {
    return(
        <>
{/* Stats Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
      </>
    )
}

 
