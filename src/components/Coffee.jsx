import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const Coffee = (props) => {
  const meshRef = useRef();
  const steamRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (steamRef.current) {
      steamRef.current.position.y = 0.4 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.7}>
      <group {...props} ref={meshRef}>
        {/* Coffee Cup Base */}
        <mesh position={[0, -0.05, 0]}>
          <cylinderGeometry args={[0.32, 0.28, 0.02, 32]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>

        {/* Coffee Cup */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.25, 0.4, 32]} />
          <meshStandardMaterial color="#F5F5DC" roughness={0.2} metalness={0.1} />
        </mesh>

        {/* Coffee Rim */}
        <mesh position={[0, 0.2, 0]}>
          <torusGeometry args={[0.3, 0.02, 8, 32]} />
          <meshStandardMaterial color="#E5E5DC" />
        </mesh>

        {/* Coffee */}
        <mesh position={[0, 0.18, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 0.02, 32]} />
          <meshStandardMaterial color="#3C2415" roughness={0.8} />
        </mesh>

        {/* Coffee Foam */}
        <mesh position={[0, 0.19, 0]}>
          <cylinderGeometry args={[0.26, 0.26, 0.01, 32]} />
          <meshStandardMaterial color="#F5F5F0" opacity={0.9} transparent />
        </mesh>

        {/* Handle */}
        <mesh position={[0.35, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.15, 0.025, 8, 16]} />
          <meshStandardMaterial color="#F5F5DC" roughness={0.2} />
        </mesh>

        {/* Enhanced Steam effect */}
        <group ref={steamRef}>
          <mesh position={[-0.05, 0.4, 0]}>
            <sphereGeometry args={[0.015, 8, 8]} />
            <meshStandardMaterial color="#FFFFFF" opacity={0.7} transparent />
          </mesh>
          <mesh position={[0, 0.5, 0]}>
            <sphereGeometry args={[0.012, 8, 8]} />
            <meshStandardMaterial color="#FFFFFF" opacity={0.5} transparent />
          </mesh>
          <mesh position={[0.05, 0.6, 0]}>
            <sphereGeometry args={[0.008, 8, 8]} />
            <meshStandardMaterial color="#FFFFFF" opacity={0.3} transparent />
          </mesh>
          <mesh position={[-0.02, 0.7, 0]}>
            <sphereGeometry args={[0.005, 8, 8]} />
            <meshStandardMaterial color="#FFFFFF" opacity={0.2} transparent />
          </mesh>
        </group>

        {/* Coffee beans decoration */}
        <mesh position={[0.1, 0.1, 0.32]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[-0.08, 0.05, 0.32]}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
      </group>
    </Float>
  );
};

export default Coffee;
