import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const TennisBall = (props) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.7;
    }
  });

  return (
    <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <group {...props} ref={meshRef}>
        {/* Tennis Ball */}
        <mesh>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial color="#CCFF00" roughness={0.9} />
        </mesh>

        {/* Tennis Ball Curved Lines */}
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[0.2, 0.008, 8, 32, Math.PI]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
        <mesh rotation={[0, 0, -Math.PI / 4]}>
          <torusGeometry args={[0.2, 0.008, 8, 32, Math.PI]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
        <mesh rotation={[Math.PI, 0, Math.PI / 4]}>
          <torusGeometry args={[0.2, 0.008, 8, 32, Math.PI]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
        <mesh rotation={[Math.PI, 0, -Math.PI / 4]}>
          <torusGeometry args={[0.2, 0.008, 8, 32, Math.PI]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
      </group>
    </Float>
  );
};

export default TennisBall;
