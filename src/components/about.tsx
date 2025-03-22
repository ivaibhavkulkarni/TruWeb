"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=800" alt="About Trubot" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The mobile and electronics refurbishment industry is booming, driven by rising demand for affordable, high-quality devices and a strong push for sustainability. With new device costs soaring, refurbished products offer the perfect balance of value and reliability, attracting eco-conscious consumers.
              </p>
              <p>
              Smartphones lead this market, powered by advanced refurbishment technologies that enhance quality and build trust. Emerging markets like Asia and Africa are fueling rapid growth, highlighting the industry's vast potential.
              </p>
              <p>
              Despite challenges like quality control and counterfeit risks, collaboration and environmental awareness are shaping this sector into a hub of innovation, sustainability, and profitability.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-gray-100 px-4 py-2 rounded-md">
                <span className="block text-3xl font-bold text-[#ef9520]">500+</span>
                <span className="text-sm text-gray-600">Clients Worldwide</span>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-md">
                <span className="block text-3xl font-bold text-[#ef9520]">100%</span>
                <span className="text-sm text-gray-600">Client Satisfaction</span>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-md">
                <span className="block text-3xl font-bold text-[#ef9520]">24/7</span>
                <span className="text-sm text-gray-600">Support Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

