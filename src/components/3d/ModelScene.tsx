
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import RotatingCube from "./RotatingCube";

interface ModelSceneProps {
  className?: string;
}

const ModelScene = ({ className = "" }: ModelSceneProps) => {
  return (
    <div className={`w-full h-[300px] ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <Suspense fallback={null}>
          <RotatingCube position={[-2, 0, 0]} color="#2D4356" speed={0.01} />
          <RotatingCube position={[0, 0, 0]} color="#1E2A3B" speed={0.015} />
          <RotatingCube position={[2, 0, 0]} color="#0F172A" speed={0.02} />
          <Environment preset="city" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          autoRotate={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default ModelScene;
