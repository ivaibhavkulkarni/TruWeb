"use client"

import React, { useState, Suspense } from "react";
import { Ripple } from "@/components/magicui/ripple";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stage, Html } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// Define the props interface for the Model component
interface ModelProps {
  modelPath: string;
}

// Model component for the 3D model
const Model: React.FC<ModelProps> = ({ modelPath }) => {
  const [error, setError] = useState<boolean>(false);

  const gltf = useLoader(GLTFLoader, modelPath, undefined, (event) => {
    console.error("Error loading 3D model:", event);
    setError(true);
  });

  if (error) {
    return (
      <Html center>
        <div className="bg-red-50 p-4 rounded-lg text-red-500 text-center">
          <p>Failed to load 3D model</p>
          <p className="text-xs mt-2">Please check the model path</p>
        </div>
      </Html>
    );
  }

  return <primitive object={gltf.scene} scale={0.8} position={[0, 0, 0]} />;
};

// Loading component
const ModelLoader: React.FC = () => {
  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#EF9520] border-r-transparent"></div>
      </div>
    </Html>
  );
};

// Main component
const RippleDemo: React.FC = () => {
  const modelPath: string = "/model/Plotter_logo.glb";

  return (
    <div className="relative flex w-full h-[calc(100vh-4rem)] mt-16 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      {/* Transparent overlay for better mobile scrolling */}
      <div
        className="absolute inset-0 z-20 pointer-events-auto touch-auto"
        style={{
          background: "rgba(0, 0, 0, 0)", // Fully transparent
          WebkitTapHighlightColor: "transparent", // Prevents tap highlight on mobile
        }}
      />

      {/* 3D Model Canvas */}
      <div className="relative w-full h-full z-10">
        <Canvas>
          <Suspense fallback={<ModelLoader />}>
            <Stage environment="studio" intensity={-0.1}>
              <Model modelPath={modelPath} />
            </Stage>
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={2}
              enablePan={false}
              enableRotate={true}
              minAzimuthAngle={0}
              maxAzimuthAngle={0}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Ripple Effect - positioned absolutely to appear behind the model */}
      <div className="absolute inset-0 z-0">
        <Ripple />
      </div>
    </div>
  );
};

export default RippleDemo;