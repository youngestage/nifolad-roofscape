
import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import RotatingCube from "./RotatingCube";

interface ModelSceneProps {
  className?: string;
}

const ModelScene = ({ className = "" }: ModelSceneProps) => {
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [renderError, setRenderError] = useState(false);
  
  useEffect(() => {
    // Check for WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebGLSupported(!!gl);
    } catch (e) {
      console.error("WebGL detection error:", e);
      setWebGLSupported(false);
    }
  }, []);

  // If WebGL isn't supported or there's a render error, show fallback content
  if (!webGLSupported || renderError) {
    return (
      <div className={`w-full h-[300px] ${className} flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl`}>
        <div className="text-center p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive 3D View</h3>
          <p className="text-gray-600">Your browser doesn't support WebGL, which is required for 3D visualization.</p>
        </div>
      </div>
    );
  }

  // Wrap the Canvas in an error boundary to catch any render errors
  return (
    <div className={`w-full h-[300px] ${className}`}>
      <ErrorBoundary onError={() => setRenderError(true)}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          onCreated={({ gl }) => {
            gl.setClearColor("#f8fafc", 1);
          }}
          fallback={
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-600">Loading 3D elements...</p>
            </div>
          }
        >
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
      </ErrorBoundary>
    </div>
  );
};

// Simple React error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; onError: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("3D rendering error:", error);
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return null; // Return null to trigger the fallback UI
    }
    return this.props.children;
  }
}

export default ModelScene;
