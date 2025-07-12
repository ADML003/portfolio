import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Plane, Ring, Sphere } from '@react-three/drei';

const HolographicDisplay = (props) => {
  const groupRef = useRef();
  const ringRef = useRef();
  const particlesRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.8;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {/* Main Holographic Screen */}
      <Plane args={[3, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#00FFFF" transparent opacity={0.3} emissive="#004444" emissiveIntensity={0.5} />
      </Plane>

      {/* Screen Border */}
      <Ring args={[1.8, 2, 32]} position={[0, 0, 0.1]}>
        <meshStandardMaterial color="#00DDDD" transparent opacity={0.8} emissive="#003333" emissiveIntensity={0.3} />
      </Ring>

      {/* Rotating Rings */}
      <group ref={ringRef}>
        <Ring args={[2.5, 2.7, 32]} position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#0088FF" transparent opacity={0.6} emissive="#001122" emissiveIntensity={0.4} />
        </Ring>

        <Ring args={[3, 3.2, 32]} position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#00AAFF" transparent opacity={0.4} emissive="#001133" emissiveIntensity={0.3} />
        </Ring>
      </group>

      {/* Floating Data Particles */}
      <group ref={particlesRef}>
        {Array.from({ length: 12 }, (_, i) => (
          <Sphere
            key={i}
            args={[0.05]}
            position={[
              Math.cos((i / 12) * Math.PI * 2) * 3.5,
              Math.sin((i / 6) * Math.PI * 2) * 1.5,
              Math.sin((i / 12) * Math.PI * 2) * 2,
            ]}>
            <meshStandardMaterial color="#00FF88" emissive="#004422" emissiveIntensity={0.6} />
          </Sphere>
        ))}
      </group>

      {/* Holographic Text */}
      <Text position={[0, 0.5, 0.2]} fontSize={0.3} color="#00FFFF" anchorX="center" anchorY="middle">
        DEVELOPER
      </Text>

      <Text position={[0, 0, 0.2]} fontSize={0.2} color="#00DDDD" anchorX="center" anchorY="middle">
        PORTFOLIO
      </Text>

      <Text position={[0, -0.4, 0.2]} fontSize={0.15} color="#00AAAA" anchorX="center" anchorY="middle">
        INTERACTIVE EXPERIENCE
      </Text>

      {/* Base Platform */}
      <Ring args={[3.5, 4, 64]} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#004488" transparent opacity={0.3} emissive="#001122" emissiveIntensity={0.2} />
      </Ring>
    </group>
  );
};

export default HolographicDisplay;
