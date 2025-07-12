import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const Database = (props) => {
  const meshRef = useRef();
  const dataFlowRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (dataFlowRef.current) {
      dataFlowRef.current.position.y = Math.sin(state.clock.elapsedTime * 3) * 0.05;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.5}>
      <group {...props} ref={meshRef}>
        {/* Database Cylinder Base */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.08, 32]} />
          <meshStandardMaterial color="#2C3E50" roughness={0.3} metalness={0.7} />
        </mesh>

        {/* Database Cylinder Middle */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.08, 32]} />
          <meshStandardMaterial color="#34495E" roughness={0.3} metalness={0.7} />
        </mesh>

        {/* Database Cylinder Top */}
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.08, 32]} />
          <meshStandardMaterial color="#2C3E50" roughness={0.3} metalness={0.7} />
        </mesh>

        {/* Top Ellipse */}
        <mesh position={[0, 0.14, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.18, 0.01, 8, 32]} />
          <meshStandardMaterial color="#3498DB" emissive="#3498DB" emissiveIntensity={0.3} />
        </mesh>

        {/* Data Flow Lines */}
        <group ref={dataFlowRef}>
          <mesh position={[0.25, 0.05, 0]}>
            <boxGeometry args={[0.1, 0.01, 0.01]} />
            <meshStandardMaterial color="#E74C3C" emissive="#E74C3C" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[-0.25, 0.05, 0]}>
            <boxGeometry args={[0.1, 0.01, 0.01]} />
            <meshStandardMaterial color="#2ECC71" emissive="#2ECC71" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[0, 0.05, 0.25]}>
            <boxGeometry args={[0.01, 0.01, 0.1]} />
            <meshStandardMaterial color="#F39C12" emissive="#F39C12" emissiveIntensity={0.5} />
          </mesh>
        </group>

        {/* Binary Data Points */}
        <mesh position={[0.15, 0.2, 0.1]}>
          <sphereGeometry args={[0.008, 8, 8]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.7} />
        </mesh>
        <mesh position={[-0.12, 0.18, -0.08]}>
          <sphereGeometry args={[0.006, 8, 8]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.7} />
        </mesh>
        <mesh position={[0.08, 0.22, -0.12]}>
          <sphereGeometry args={[0.005, 8, 8]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.7} />
        </mesh>
      </group>
    </Float>
  );
};

export default Database;
