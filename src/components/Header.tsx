"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsScrolled(currentScrollY > 0)

      // Calculate scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollableHeight = documentHeight - windowHeight
      const progress = Math.min(currentScrollY / scrollableHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          transform: `translateY(${Math.min(scrollY * 0.1, 10)}px)`,
        }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/" className="flex items-center group">
                <div className="relative">
                  <span
                    className={`font-playfair text-2xl lg:text-3xl font-bold transition-all duration-300 ${
                      isScrolled ? "text-gray-900" : "text-white"
                    }`}
                  >
                    Inspire
                  </span>
                  <span
                    className={`font-playfair text-2xl lg:text-3xl font-bold transition-all duration-300 ${
                      isScrolled ? "text-amber-600" : "text-amber-400"
                    }`}
                  >
                    Interiors
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full" />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:flex items-center space-x-1"
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                      pathname === item.href
                        ? isScrolled
                          ? "text-amber-600 bg-amber-50"
                          : "text-amber-400 bg-white/10"
                        : isScrolled
                          ? "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8 ${
                        pathname === item.href ? "bg-amber-600 w-3/4 left-1/8" : "bg-amber-600"
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Info & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hidden lg:flex items-center space-x-4"
            >
              {/* Contact Icons */}
              <div className="flex items-center space-x-3">
                <a
                  href="tel:+15551234567"
                  className={`p-2 rounded-full transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-600 hover:text-amber-600 hover:bg-amber-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Phone className="h-4 w-4" />
                </a>
                <a
                  href="mailto:hello@inspireinteriors.com"
                  className={`p-2 rounded-full transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-600 hover:text-amber-600 hover:bg-amber-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                className={`transition-all duration-300 rounded-full px-6 py-2 font-medium ${
                  isScrolled
                    ? "bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-xl"
                    : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-gray-900"
                }`}
              >
                <Link href="/book-consultation">Book Consultation</Link>
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </nav>
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-amber-600 origin-left z-10"
          style={{
            width: `${scrollProgress * 100}%`,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrollProgress }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        />

        {/* Progress Bar Background */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 transition-opacity duration-300 ${
            isScrolled ? "opacity-100 bg-gray-200" : "opacity-0"
          }`}
        />
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <Link href="/" className="flex items-center">
                    <span className="font-playfair text-2xl font-bold text-gray-900">Inspire</span>
                    <span className="font-playfair text-2xl font-bold text-amber-600">Interiors</span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-6 py-8">
                  <nav className="space-y-2">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-200 ${
                            pathname === item.href
                              ? "text-amber-600 bg-amber-50 border-l-4 border-amber-600"
                              : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Contact Info */}
                <div className="px-6 py-6 border-t border-gray-100 bg-gray-50">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Phone className="h-5 w-5" />
                      <span className="text-sm">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Mail className="h-5 w-5" />
                      <span className="text-sm">hello@inspireinteriors.com</span>
                    </div>
                    <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-full mt-4">
                      <Link href="/book-consultation">Book Consultation</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
