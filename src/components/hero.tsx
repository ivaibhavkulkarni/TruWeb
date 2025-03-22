"use client"

import React, { useState, useEffect, useRef, Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, Stage, Html } from "@react-three/drei"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("3D rendering error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-full w-full bg-gray-100 rounded-lg">
          <div className="text-center p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">3D Model Error</h3>
            <p className="text-gray-500">There was a problem loading the 3D model.</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Model component for the 3D model
function Model() {
  const [error, setError] = useState(false)

  // Using the built-in duck model that's available in the v0 environment
  const gltf = useLoader(GLTFLoader, "/model/Plotter_logo.glb", undefined, (error) => {
    console.error("Error loading 3D model:", error)
    setError(true)
  })

  if (error) {
    return (
      <Html center>
        <div className="bg-red-50 p-4 rounded-lg text-red-500 text-center">
          <p>Failed to load 3D model</p>
          <p className="text-xs mt-2">Please check the model path</p>
        </div>
      </Html>
    )
  }

  return <primitive object={gltf.scene} scale={0.8} position={[0, -0.5, 0]} />
}

// Loading component for the 3D model
function ModelLoader() {
  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#EF9520] border-r-transparent"></div>
      </div>
    </Html>
  )
}

// Carousel slides data
const slides = [
  {
    id: 1,
    title: "Unleash Precision & Versatility with the Trubot Plotter Machine",
    description:
      "Cutting-edge technology meets limitless possibilities—effortlessly craft hydrogel screen protectors and skins for over 50,000 device models with unmatched accuracy! Let me know if you’d like any further tweaks!",
    buttonText: "Learn More",
    buttonLink: "#learn-more",
    model: true,
  },
  {
    id: 2,
    title: "Experience Precision Cutting Like Never Before!",
    description:
      "The Trubot Plotter Cutting Machine delivers precision, speed, and versatility with advanced blade control for flawless cuts. Built for efficiency and ease, it features an interactive About Screen for total control. Trubot redefines precision cutting.",
    buttonText: "See Features",
    buttonLink: "#features",
    model: false,
    image: "/leaves.jpg?height=600&width=800",
  },
  {
    id: 3,
    title: " Innovation, Integrity & Sustainable Excellence",
    description:
      "We deliver cutting-edge solutions with quality and integrity. Committed to sustainability, we embrace eco-friendly practices for a greener future. Customer-focused and collaborative, we lead with purpose.",
    buttonText: "Our Commitment",
    buttonLink: "#commitment",
    model: false,
    image: "https://wallpaperaccess.com/full/13646.jpg",
  },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const totalSlides = slides.length

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 3000) // Change slide every 2 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, nextSlide]) //Corrected dependency

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  // Resume auto-play on mouse leave
  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }
  
  return (
    <div
      className="relative w-full h-screen overflow-hidden mt-10 md:mt-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      {/* Slides */}
      <div className="h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute top-0 left-0 w-full h-full transition-opacity duration-1000 mt-5",
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
            style={
              !slide.model
                ? {
                    backgroundImage: `url(${slide.image || "/placeholder.svg"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {}
            }
          >
            <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8">
              {/* Text Content */}
              <div className="flex-1 max-w-xl z-20 p-6 lg:p-12 bg-black/30 backdrop-blur-sm rounded-lg text-white">
                <h1 className="text-2xl md:text-4xl font-bold mb-6]">{slide.title}</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{slide.description}</p>
                <Button className="bg-[#EF9520] text-white hover:bg-[#EF9520]/90">{slide.buttonText}</Button>
              </div>

              {/* 3D Model or Image */}
              <div className="flex-1 w-full h-[50vh] lg:h-full">
                {slide.model ? (
                  <ErrorBoundary>
                    <Canvas>
                      <Suspense fallback={<ModelLoader />}>
                        <Stage environment="studio" intensity={0.5}>
                          <Model />
                        </Stage>
                        <OrbitControls  enableZoom={false} autoRotate autoRotateSpeed={3} />
                      </Suspense>
                    </Canvas>
                  </ErrorBoundary>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {/* Background image is now applied to the parent container */}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 mb-5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-1 rounded-full transition-all duration-300",
              currentSlide === index ? "bg-[#EF9520] w-8" : "bg-gray-400 hover:bg-gray-600",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

