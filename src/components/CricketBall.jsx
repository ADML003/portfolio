import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const CricketBallAndBat = (props) => {
  const groupRef = useRef();
  const ballRef = useRef();
  const batRef = useRef();

  useFrame((state) => {
    if (ballRef.current) {
      ballRef.current.rotation.x = state.clock.elapsedTime * 0.8;
      ballRef.current.rotation.y = state.clock.elapsedTime * 0.6;
    }
    if (batRef.current) {
      batRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <group {...props} ref={groupRef}>
        {/* Cricket Ball */}
        <group ref={ballRef} position={[0.8, 0.3, 0]}>
          <mesh>
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshStandardMaterial color="#CC3E3E" roughness={0.8} />
          </mesh>

          {/* Cricket Ball Seam */}
          <mesh>
            <torusGeometry args={[0.12, 0.005, 8, 32]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.12, 0.005, 8, 32]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
        </group>

        {/* Cricket Bat */}
        <group ref={batRef} position={[0, 0, 0]} rotation={[0, 0, -0.3]}>
          {/* Bat Blade */}
          <mesh position={[0, 0.4, 0]}>
            <boxGeometry args={[0.12, 0.8, 0.04]} />
            <meshStandardMaterial color="#D4A574" roughness={0.7} />
          </mesh>

          {/* Bat Handle */}
          <mesh position={[0, -0.3, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.4, 16]} />
            <meshStandardMaterial color="#8B4513" roughness={0.9} />
          </mesh>

          {/* Bat Grip */}
          <mesh position={[0, -0.45, 0]}>
            <cylinderGeometry args={[0.035, 0.035, 0.15, 16]} />
            <meshStandardMaterial color="#2F2F2F" roughness={1.0} />
          </mesh>

          {/* Rubber Grip Lines */}
          <mesh position={[0, -0.42, 0]}>
            <torusGeometry args={[0.037, 0.002, 8, 32]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
          <mesh position={[0, -0.48, 0]}>
            <torusGeometry args={[0.037, 0.002, 8, 32]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
        </group>
      </group>
    </Float>
  );
};

export default CricketBallAndBat;
