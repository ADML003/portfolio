import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const CodeBrackets = (props) => {
  const groupRef = useRef();
  const leftBracket = useRef();
  const rightBracket = useRef();

  useFrame((state) => {
    if (leftBracket.current) {
      leftBracket.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (rightBracket.current) {
      rightBracket.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + Math.PI) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <group {...props} ref={groupRef}>
        {/* Left Bracket < */}
        <group ref={leftBracket} position={[-0.15, 0, 0]}>
          <mesh position={[0, 0.1, 0]} rotation={[0, 0, -0.5]}>
            <boxGeometry args={[0.15, 0.02, 0.02]} />
            <meshStandardMaterial color="#00D8FF" emissive="#00D8FF" emissiveIntensity={0.4} />
          </mesh>
          <mesh position={[0, -0.1, 0]} rotation={[0, 0, 0.5]}>
            <boxGeometry args={[0.15, 0.02, 0.02]} />
            <meshStandardMaterial color="#00D8FF" emissive="#00D8FF" emissiveIntensity={0.4} />
          </mesh>
        </group>

        {/* Right Bracket > */}
        <group ref={rightBracket} position={[0.15, 0, 0]}>
          <mesh position={[0, 0.1, 0]} rotation={[0, 0, 0.5]}>
            <boxGeometry args={[0.15, 0.02, 0.02]} />
            <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.4} />
          </mesh>
          <mesh position={[0, -0.1, 0]} rotation={[0, 0, -0.5]}>
            <boxGeometry args={[0.15, 0.02, 0.02]} />
            <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.4} />
          </mesh>
        </group>

        {/* Center Code Symbol */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#F7DF1E" emissive="#F7DF1E" emissiveIntensity={0.5} />
        </mesh>

        {/* Floating particles around */}
        <mesh position={[0.1, 0.15, 0.1]}>
          <sphereGeometry args={[0.008, 8, 8]} />
          <meshStandardMaterial color="#FF6B6B" emissive="#FF6B6B" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[-0.1, -0.15, -0.1]}>
          <sphereGeometry args={[0.008, 8, 8]} />
          <meshStandardMaterial color="#4ECDC4" emissive="#4ECDC4" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0.15, -0.05, 0.08]}>
          <sphereGeometry args={[0.006, 8, 8]} />
          <meshStandardMaterial color="#A8E6CF" emissive="#A8E6CF" emissiveIntensity={0.6} />
        </mesh>
      </group>
    </Float>
  );
};

export default CodeBrackets;
