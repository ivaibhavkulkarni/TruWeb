"use client"

import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, Stage } from "@react-three/drei"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"


function Model() {
    const gltf = useLoader(GLTFLoader, "/model/Plotter_logo.glb")
    return <primitive object={gltf.scene} scale={1.5} />
  }

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 flex flex-col lg:flex-row items-center justify-center gap-8 p-4">
      <div className="flex-1 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Our Amazing Product</h1>
        <p className="text-lg text-gray-600 mb-8">
          Experience innovation at its finest with our revolutionary product. Designed for the future, built for you.
        </p>
        <Button className="bg-[#EF9520] text-white hover:bg-[#EF9520]/90">Learn More</Button>
      </div>

      <div className="flex-1 w-full aspect-square">
        <Canvas>
          <Suspense fallback={null}>
            <Stage environment="studio" intensity={0.5}>
              <Model />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

