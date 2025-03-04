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
                At Trubot, we're passionate about creating intelligent automation solutions that transform how
                businesses operate. Founded in 2020, our team of experts combines deep industry knowledge with
                cutting-edge AI technology.
              </p>
              <p>
                Our mission is to empower organizations of all sizes to achieve more with less effort through smart,
                adaptive automation that learns and improves over time.
              </p>
              <p>
                We believe that the future of work is collaborative, with humans and AI working together to achieve
                extraordinary results. Trubot is at the forefront of this revolution, creating tools that augment human
                capabilities rather than replace them.
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

