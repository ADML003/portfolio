import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const NextJsLogo = (props) => {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group {...props} ref={meshRef}>
        {/* Outer Ring */}
        <group ref={ringRef}>
          <mesh>
            <torusGeometry args={[0.5, 0.02, 8, 32]} />
            <meshStandardMaterial color="#FFFFFF" opacity={0.3} transparent />
          </mesh>
        </group>

        {/* Next.js Circle Background */}
        <mesh>
          <cylinderGeometry args={[0.4, 0.4, 0.08, 32]} />
          <meshStandardMaterial color="#000000" roughness={0.1} metalness={0.3} />
        </mesh>

        {/* Glowing edge */}
        <mesh>
          <torusGeometry args={[0.4, 0.01, 8, 32]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.2} />
        </mesh>

        {/* Next.js "N" Letter - Left vertical */}
        <mesh position={[-0.15, 0, 0.05]}>
          <boxGeometry args={[0.05, 0.35, 0.02]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>

        {/* Next.js "N" Letter - Diagonal */}
        <mesh position={[0, 0, 0.05]} rotation={[0, 0, Math.PI / 6]}>
          <boxGeometry args={[0.05, 0.4, 0.02]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>

        {/* Next.js "N" Letter - Right vertical */}
        <mesh position={[0.15, 0, 0.05]}>
          <boxGeometry args={[0.05, 0.35, 0.02]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>

        {/* Tech symbols around the logo */}
        <mesh position={[0.3, 0.15, 0.06]}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshStandardMaterial color="#00D8FF" emissive="#00D8FF" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0.3, 0, 0.06]}>
          <boxGeometry args={[0.02, 0.02, 0.01]} />
          <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[0.3, -0.15, 0.06]}>
          <sphereGeometry args={[0.012, 6, 6]} />
          <meshStandardMaterial color="#F7DF1E" emissive="#F7DF1E" emissiveIntensity={0.2} />
        </mesh>

        {/* Left side tech elements */}
        <mesh position={[-0.3, 0.1, 0.06]}>
          <sphereGeometry args={[0.01, 8, 8]} />
          <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[-0.3, -0.1, 0.06]}>
          <boxGeometry args={[0.015, 0.015, 0.01]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.2} />
        </mesh>
      </group>
    </Float>
  );
};

export default NextJsLogo;
