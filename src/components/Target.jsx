import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
  );

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
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
