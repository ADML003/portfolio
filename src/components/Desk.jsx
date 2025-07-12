import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Desk = (props) => {
  const { nodes } = useGLTF('/models/desk.glb');
  const deskRef = useRef();

  // Add gentle floating animation
  useFrame((state) => {
    if (deskRef.current) {
      deskRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.6) * 0.008;
      deskRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
    }
  });

  return (
    <group ref={deskRef} {...props} dispose={null}>
      <primitive object={nodes.Scene || Object.values(nodes)[0]} />
    </group>
  );
};

useGLTF.preload('/models/desk.glb');
export default Desk;
