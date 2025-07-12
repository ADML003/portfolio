import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const Laptop = (props) => {
  const meshRef = useRef();
  const screenRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (screenRef.current) {
      screenRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.7}>
      <group {...props} ref={meshRef}>
        {/* Laptop Base */}
        <mesh position={[0, -0.15, 0]}>
          <boxGeometry args={[0.8, 0.06, 0.5]} />
          <meshStandardMaterial color="#2D2D2D" roughness={0.2} metalness={0.8} />
        </mesh>

        {/* Laptop Screen */}
        <group ref={screenRef} position={[0, 0.05, -0.25]} rotation={[-0.2, 0, 0]}>
          <mesh>
            <boxGeometry args={[0.75, 0.45, 0.025]} />
            <meshStandardMaterial color="#1A1A1A" roughness={0.1} metalness={0.9} />
          </mesh>

          {/* Screen Display */}
          <mesh position={[0, 0, 0.013]}>
            <boxGeometry args={[0.68, 0.38, 0.001]} />
            <meshStandardMaterial color="#000000" emissive="#001122" emissiveIntensity={0.4} />
          </mesh>

          {/* Code Lines on Screen */}
          <mesh position={[-0.2, 0.1, 0.014]}>
            <boxGeometry args={[0.2, 0.015, 0.001]} />
            <meshStandardMaterial color="#00FF00" emissive="#00FF00" emissiveIntensity={0.8} />
          </mesh>
          <mesh position={[-0.1, 0.05, 0.014]}>
            <boxGeometry args={[0.25, 0.012, 0.001]} />
            <meshStandardMaterial color="#FFFF00" emissive="#FFFF00" emissiveIntensity={0.7} />
          </mesh>
          <mesh position={[-0.05, 0, 0.014]}>
            <boxGeometry args={[0.3, 0.012, 0.001]} />
            <meshStandardMaterial color="#FF6B6B" emissive="#FF6B6B" emissiveIntensity={0.4} />
          </mesh>
        </group>

        {/* Keyboard */}
        <mesh position={[0, -0.12, 0.05]}>
          <boxGeometry args={[0.5, 0.01, 0.25]} />
          <meshStandardMaterial color="#1A1A1A" roughness={0.8} />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, -0.11, 0.15]}>
          <boxGeometry args={[0.15, 0.005, 0.1]} />
          <meshStandardMaterial color="#333333" roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
};

export default Laptop;
