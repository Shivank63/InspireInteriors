"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const faqs = [
  {
    question: "How long does a typical interior design project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A single room redesign typically takes 4-6 weeks, while full home renovations can take 3-6 months. We provide detailed timelines during the consultation phase.",
  },
  {
    question: "Do you work within specific budget ranges?",
    answer:
      "We work with a variety of budgets and will discuss your investment level during our initial consultation. We believe great design is achievable at any budget level and will create solutions that maximize your investment.",
  },
  {
    question: "Can you work with my existing furniture and decor?",
    answer:
      "We love incorporating pieces that have sentimental value or are in great condition. Our designers are skilled at blending existing items with new elements to create a cohesive, refreshed look.",
  },
  {
    question: "Do you provide 3D renderings of the design?",
    answer:
      "Yes, we provide detailed 3D renderings for most projects. This helps you visualize the final result before any work begins and allows for adjustments to ensure the design meets your expectations.",
  },
  {
    question: "What is included in your design services?",
    answer:
      "Our comprehensive services include space planning, color consultation, furniture selection, lighting design, window treatments, accessory styling, and project management. We handle everything from concept to completion.",
  },
  {
    question: "Do you offer virtual design consultations?",
    answer:
      "Yes, we offer virtual consultations for clients who prefer remote services or are located outside our primary service area. Virtual consultations include video calls, digital mood boards, and detailed design plans.",
  },
]

export default function FAQ() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our interior design services and process.
          </p>
        </motion.div>

        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-amber-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
