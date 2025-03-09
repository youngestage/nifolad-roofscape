
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { Mesh } from "three";

interface RotatingCubeProps {
  position?: [number, number, number];
  color?: string;
  speed?: number;
}

const RotatingCube = ({ 
  position = [0, 0, 0], 
  color = "#1E2A3B", 
  speed = 0.01 
}: RotatingCubeProps) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed;
      meshRef.current.rotation.y += speed * 1.5;
    }
  });

  return (
    <Box 
      args={[1, 1, 1]} 
      position={position} 
      ref={meshRef}
    >
      <meshStandardMaterial color={color} />
    </Box>
  );
};

export default RotatingCube;
