import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const Smartphone = (props) => {
  const meshRef = useRef();
  const screenRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
    if (screenRef.current) {
      // Simulate scrolling effect
      screenRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.01;
    }
  });

  return (
    <Float speed={2.0} rotationIntensity={0.4} floatIntensity={0.6}>
      <group {...props} ref={meshRef}>
        {/* Phone Body */}
        <mesh>
          <boxGeometry args={[0.2, 0.4, 0.025]} />
          <meshStandardMaterial color="#1A1A1A" roughness={0.1} metalness={0.9} />
        </mesh>

        {/* Screen */}
        <mesh position={[0, 0, 0.013]} ref={screenRef}>
          <boxGeometry args={[0.17, 0.34, 0.001]} />
          <meshStandardMaterial color="#000033" emissive="#000033" emissiveIntensity={0.5} />
        </mesh>

        {/* App Icons */}
        <mesh position={[-0.05, 0.1, 0.014]}>
          <boxGeometry args={[0.025, 0.025, 0.001]} />
          <meshStandardMaterial color="#FF6B6B" emissive="#FF6B6B" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[0, 0.1, 0.014]}>
          <boxGeometry args={[0.025, 0.025, 0.001]} />
          <meshStandardMaterial color="#4ECDC4" emissive="#4ECDC4" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0.04, 0.08, 0.012]}>
          <boxGeometry args={[0.02, 0.02, 0.001]} />
          <meshStandardMaterial color="#45B7D1" emissive="#45B7D1" emissiveIntensity={0.5} />
        </mesh>

        {/* Status Bar */}
        <mesh position={[0, 0.12, 0.012]}>
          <boxGeometry args={[0.12, 0.008, 0.001]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.3} />
        </mesh>

        {/* Home Button */}
        <mesh position={[0, -0.13, 0.011]}>
          <cylinderGeometry args={[0.01, 0.01, 0.002, 16]} />
          <meshStandardMaterial color="#333333" roughness={0.2} />
        </mesh>

        {/* Camera */}
        <mesh position={[0, 0.13, 0.011]}>
          <cylinderGeometry args={[0.003, 0.003, 0.002, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>
    </Float>
  );
};

export default Smartphone;
