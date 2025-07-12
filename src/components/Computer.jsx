import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Computer = (props) => {
  const { nodes } = useGLTF('/models/computer.glb');
  const computerRef = useRef();

  // Add floating animation
  useFrame((state) => {
    if (computerRef.current) {
      computerRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      computerRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.8) * 0.01;
    }
  });

  return (
    <group ref={computerRef} {...props} dispose={null}>
      <primitive object={nodes.Scene || nodes.Computer || Object.values(nodes)[0]} />
    </group>
  );
};

useGLTF.preload('/models/computer.glb');
export default Computer;
