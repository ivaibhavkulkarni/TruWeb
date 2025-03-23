"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function AboutSection() {
  const slides = [
    { src: "/ip.jpeg", alt: "About Trubot 1" },
    { src: "/ipad.jpeg", alt: "About Trubot 2" },
    { src: "/mac.jpg", alt: "About Trubot 3" },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section id="about" className="py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    zIndex: currentSlide === index ? 10 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Image 
                    src={slide.src || "/placeholder.svg"} 
                    alt={slide.alt} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </motion.div>
              ))}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300",
                      currentSlide === index ? "bg-[#EF9520] w-6 sm:w-8" : "bg-gray-400 hover:bg-gray-600",
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <div className="space-y-4 text-gray-700 text-sm sm:text-base">
              <p>
                The mobile and electronics refurbishment industry is booming, driven by rising demand for affordable,
                high-quality devices and a strong push for sustainability. With new device costs soaring, refurbished
                products offer the perfect balance of value and reliability, attracting eco-conscious consumers.
              </p>
              <p>
                Smartphones lead this market, powered by advanced refurbishment technologies that enhance quality and
                build trust. Emerging markets like Asia and Africa are fueling rapid growth, highlighting the industrys
                vast potential.
              </p>
              <p>
                Despite challenges like quality control and counterfeit risks, collaboration and environmental awareness
                are shaping this sector into a hub of innovation, sustainability, and profitability.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-gray-100 px-2 py-2 sm:px-4 sm:py-2 rounded-md text-center">
                <span className="block text-xl sm:text-3xl font-bold text-[#ef9520]">500+</span>
                <span className="text-xs sm:text-sm text-gray-600">Clients Worldwide</span>
              </div>
              <div className="bg-gray-100 px-2 py-2 sm:px-4 sm:py-2 rounded-md text-center">
                <span className="block text-xl sm:text-3xl font-bold text-[#ef9520]">100%</span>
                <span className="text-xs sm:text-sm text-gray-600">Client Satisfaction</span>
              </div>
              <div className="bg-gray-100 px-2 py-2 sm:px-4 sm:py-2 rounded-md text-center">
                <span className="block text-xl sm:text-3xl font-bold text-[#ef9520]">24/7</span>
                <span className="text-xs sm:text-sm text-gray-600">Support Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}