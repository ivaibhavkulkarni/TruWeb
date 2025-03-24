"use client"

import React, { useState, Suspense } from "react"
import { Ripple } from "@/components/magicui/ripple"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, Stage, Html } from "@react-three/drei"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

// Define the props interface for the Model component
interface ModelProps {
  modelPath: string
}

// Model component for the 3D model
function Model({ modelPath }: ModelProps) {
  const [error, setError] = useState(false)

  const gltf = useLoader(GLTFLoader, modelPath, undefined, (error) => {
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

  return <primitive object={gltf.scene} scale={0.8} position={[0, 0, 0]} />
}

// Loading component
function ModelLoader() {
  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#EF9520] border-r-transparent"></div>
      </div>
    </Html>
  )
}

export default function RippleDemo() {
  // Replace this path with your actual 3D model path
  const modelPath = "/model/Plotter_logo.glb" // Update this to your model's location

  return (
    <div className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      {/* 3D Model Canvas */}
      <div className="relative w-full h-[600px] z-10">
        <Canvas>
          <Suspense fallback={<ModelLoader />}>
            <Stage environment="studio" intensity={-0.1}>
              <Model modelPath={modelPath} />
            </Stage>
            <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={2}
              minPolarAngle={0}        // Restricts rotation to not go below horizon
              maxPolarAngle={Math.PI/2} // Limits rotation to horizontal plane
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Ripple Effect - positioned absolutely to appear behind the model */}
      <div className="absolute inset-0 z-0">
        <Ripple />
      </div>
    </div>
  )
}