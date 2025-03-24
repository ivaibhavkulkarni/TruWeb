"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Check, ArrowRight, Smartphone, Building2, RefreshCw } from "lucide-react"

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: "Device Refurbishment",
      description:
        "Professional restoration of smartphones, tablets, and laptops to like-new condition with thorough testing and quality assurance.",
      features: ["Data wiping", "Hardware repairs", "Software updates", "Quality testing", "Warranty included"],
    },
    {
      title: "Bulk Purchase Solutions",
      description:
        "Specialized services for businesses looking to acquire multiple refurbished devices with custom configurations and volume discounts.",
      features: [
        "Volume pricing",
        "Custom configurations",
        "Deployment assistance",
        "Extended warranties",
        "Dedicated account manager",
      ],
    },
    {
      title: "Trade-in Programs",
      description:
        "Sustainable solutions for upgrading your technology by trading in old devices for credit toward refurbished replacements.",
      features: [
        "Fair market valuation",
        "Data security",
        "Environmental compliance",
        "Credit options",
        "Seamless transitions",
      ],
    },
  ]

  return (
    <section id="service-section" className="py-12 px-4 sm:px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive solutions for mobile and electronics refurbishment, helping businesses and
            individuals access high-quality devices at affordable prices while promoting sustainability and reducing
            electronic waste.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="sticky top-24">
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className={cn(
                      "p-4 rounded-lg cursor-pointer transition-all duration-300",
                      activeService === index
                        ? "bg-[#EF9520] text-white shadow-lg"
                        : "bg-white hover:bg-gray-100 border border-gray-200",
                    )}
                    onClick={() => setActiveService(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        {index === 0 && (
                          <Smartphone className={activeService === index ? "text-white" : "text-[#EF9520]"} size={20} />
                        )}
                        {index === 1 && (
                          <Building2 className={activeService === index ? "text-white" : "text-[#EF9520]"} size={20} />
                        )}
                        {index === 2 && (
                          <RefreshCw className={activeService === index ? "text-white" : "text-[#EF9520]"} size={20} />
                        )}
                        <h3 className="font-bold text-lg">{service.title}</h3>
                      </div>
                      <ArrowRight
                        className={cn(
                          "transition-transform duration-300",
                          activeService === index ? "transform rotate-90" : "",
                        )}
                        size={18}
                      />
                    </div>
                  </motion.div>
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
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                {activeService === 0 && <Smartphone className="text-[#EF9520]" size={24} />}
                {activeService === 1 && <Building2 className="text-[#EF9520]" size={24} />}
                {activeService === 2 && <RefreshCw className="text-[#EF9520]" size={24} />}
                <h3 className="text-xl sm:text-2xl font-bold text-[#EF9520]">{services[activeService].title}</h3>
              </div>

              <p className="text-gray-700 mb-6">{services[activeService].description}</p>

              <div className="space-y-3 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="text-[#EF9520] flex-shrink-0" size={18} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white px-2 py-2 sm:px-4 sm:py-3 rounded-md text-center shadow-sm">
                <span className="block text-xl sm:text-3xl font-bold text-[#ef9520]">50+</span>
                <span className="text-xs sm:text-sm text-gray-600">Service Options</span>
              </div>
              <div className="bg-white px-2 py-2 sm:px-4 sm:py-3 rounded-md text-center shadow-sm">
                <span className="block text-xl sm:text-3xl font-bold text-[#ef9520]">98%</span>
                <span className="text-xs sm:text-sm text-gray-600">Success Rate</span>
              </div>
              <div className="bg-white px-2 py-2 sm:px-4 sm:py-3 rounded-md text-center shadow-sm">
                <span className="block text-xl sm:text-3xl font-bold text-[#ef9520]">1-3</span>
                <span className="text-xs sm:text-sm text-gray-600">Day Turnaround</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

