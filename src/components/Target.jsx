import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Target = (props) => {
  const targetRef = useRef();

  // Store initial position to prevent drift
  const initialPosition = useRef(props.position || [0, 0, 0]);

  useFrame((state) => {
    if (targetRef.current) {
      // Lock position to prevent drift during scroll
      targetRef.current.position.set(
        initialPosition.current[0],
        initialPosition.current[1],
        initialPosition.current[2],
      );

      // Only gentle rotation around Y-axis
      targetRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.2}>
      {/* Stand */}
      <mesh position={[0, -0.55, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.12, 0.16, 0.8, 24]} />
        <meshStandardMaterial color="#6b7280" metalness={0.6} roughness={0.35} />
      </mesh>

      {/* Base */}
      <mesh position={[0, -1, 0]} rotation={[0, 0, Math.PI / 2]} receiveShadow>
        <torusGeometry args={[0.32, 0.08, 18, 50]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.55} roughness={0.4} />
      </mesh>

      {/* Target board */}
      <mesh position={[0, 0.12, 0]} castShadow>
        <cylinderGeometry args={[0.55, 0.55, 0.06, 48]} />
        <meshStandardMaterial color="#ffffff" roughness={0.75} />
      </mesh>

      {/* Target rings */}
      {[0.48, 0.36, 0.24, 0.12].map((radius, idx) => (
        <mesh key={radius} position={[0, 0.16 + idx * 0.001, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[radius - 0.06, radius, 64]} />
          <meshBasicMaterial color={idx % 2 === 0 ? '#ef4444' : '#ffffff'} side={THREE.DoubleSide} />
        </mesh>
      ))}

      {/* Bullseye */}
      <mesh position={[0, 0.165, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.065, 48]} />
        <meshBasicMaterial color="#ef4444" side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Target;
