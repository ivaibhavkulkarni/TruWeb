"use client";

import React, { Suspense } from "react";
import { Ripple } from "@/components/magicui/ripple";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Html, useGLTF } from "@react-three/drei";

interface ModelProps {
  modelPath: string;
}

const Model: React.FC<ModelProps> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath, true); // Second arg enables Draco support
  return <primitive object={scene} scale={0.8} position={[0, 0, 0]} />;
};

const ModelLoader: React.FC = () => {
  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#EF9520] border-r-transparent"></div>
      </div>
    </Html>
  );
};

const RippleDemo: React.FC = () => {
  const modelPath: string = "/model/Plotter_logotwo.glb";
  return (
    <div className="relative flex w-full h-[calc(100vh-4rem)] mt-16 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <div
        className="absolute inset-0 z-20 pointer-events-auto touch-auto"
        style={{
          background: "rgba(0, 0, 0, 0)",
          WebkitTapHighlightColor: "transparent",
        }}
      />
      <div className="relative w-full h-full z-10">
        <Canvas>
          <Suspense fallback={<ModelLoader />}>
            <Stage environment="studio" intensity={-0.1}>
              <Model modelPath={modelPath} />
            </Stage>
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={5}
              enablePan={false}
              enableRotate={true}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute inset-0 z-0">
        <Ripple />
      </div>
    </div>
  );
};

export default RippleDemo;