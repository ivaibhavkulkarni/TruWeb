"use client"
import { motion, type Variants } from "framer-motion"
import { useState, useEffect } from "react"

// Define product interface
interface Product {
  id: number
  name: string
  description: string
  image: string
}

export default function Products() {
  const products: Product[] = [
    {
      id: 1,
      name: "iPhone",
      description: "Latest smartphone with cutting-edge technology",
      image: "/ip.jpeg",
    },
    {
      id: 2,
      name: "iPad",
      description: "Powerful tablet for work and entertainment",
      image: "/ipad.jpeg",
    },
    {
      id: 3,
      name: "MacBook",
      description: "Premium laptop for professionals",
      image: "/mac.jpg",
    },
    {
      id: 4,
      name: "MacBook",
      description: "Premium laptop for professionals",
      image: "/mac.jpg",
    },
    {
      id: 5,
      name: "MacBook",
      description: "Premium laptop for professionals",
      image: "/mac.jpg",
    },
    {
      id: 7,
      name: "MacBook",
      description: "Premium laptop for professionals",
      image: "/mac.jpg",
    },
    {
      id: 8,
      name: "MacBook",
      description: "Premium laptop for professionals",
      image: "/mac.jpg",
    },
    {
      id: 9,
      name: "MacBook",
      description: "Premium laptop for professionals",
      image: "/mac.jpg",
    },
  ]

  // Add this at the top of your component, after the products array
  useEffect(() => {
    // Preload all product images
    products.forEach((product) => {
      if (product.image) {
        const img = new Image()
        img.src = product.image
      }
    })
  }, [])

  const [currentIndexMobile, setCurrentIndexMobile] = useState(0)
  const [currentIndexDesktop, setCurrentIndexDesktop] = useState(0)
  const itemsPerViewMobile = 1
  const itemsPerViewDesktop = 3
  const slideInterval = 3000 // 3 seconds

  // Auto-slide effect for both mobile and desktop
  useEffect(() => {
    // Mobile auto-slide
    const mobileInterval = setInterval(() => {
      setCurrentIndexMobile((prev) => (prev >= products.length - 1 ? 0 : prev + 1))
    }, slideInterval)

    // Desktop auto-slide
    const desktopInterval = setInterval(() => {
      setCurrentIndexDesktop((prev) => {
        const maxIndex = Math.ceil(products.length / itemsPerViewDesktop) - 1
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, slideInterval)

    // Cleanup both intervals
    return () => {
      clearInterval(mobileInterval)
      clearInterval(desktopInterval)
    }
  }, [products.length, slideInterval])

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section id="products" className="py-20 px-4 md:px-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our innovative range of products crafted to elevate your digital experience.
          </p>
        </motion.div>

        {/* Mobile View - Carousel (1 product at a time) */}
        <div className="md:hidden relative overflow-hidden w-full">
          <div className="relative w-full h-[350px]">
            {products.map((product: Product, index: number) => (
              <motion.div
                key={product.id}
                className="absolute top-0 left-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentIndexMobile === index ? 1 : 0,
                  zIndex: currentIndexMobile === index ? 10 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  <div className="relative w-full h-48 flex-shrink-0">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).src = "/placeholder.svg?height=200&width=300"
                      }}
                    />
                  </div>
                  <div className="p-4 flex-grow">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: products.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndexMobile(index)}
                className={`rounded-full transition-all duration-300 ${
                  currentIndexMobile === index ? "bg-[#EF9520] w-6 sm:w-8 h-2" : "bg-gray-400 hover:bg-gray-600 w-2 h-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View - Carousel (3 products, with auto-slide) */}
        <div className="hidden md:block overflow-hidden">
          <div className="relative">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${currentIndexDesktop * (100 / itemsPerViewDesktop)}%`,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {products.map((product: Product) => (
                <motion.div
                  key={product.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 flex-shrink-0 w-[calc(33.33%-1rem)]"
                >
                  <div className="relative w-full h-48">
                    <img
                      src={product.image || "/placeholder.svg?height=200&width=300"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).src = "/placeholder.svg?height=200&width=300"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(products.length / itemsPerViewDesktop) }).map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndexDesktop(index)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndexDesktop === index
                    ? "bg-[#EF9520] w-6 sm:w-8 h-2"
                    : "bg-gray-400 hover:bg-gray-600 w-2 h-2"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-gradient-to-r from-[#ef9520] to-[#d88418] hover:from-[#d88418] hover:to-[#ef9520] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Explore All Products
          </button>
        </motion.div>
      </div>
    </section>
  )
}

