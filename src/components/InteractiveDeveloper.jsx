import React, { useEffect, useRef, useState } from 'react';
import { useFrame, useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const InteractiveDeveloper = ({ animationName = 'idle', ...props }) => {
  const group = useRef();
  const [currentAnimation, setCurrentAnimation] = useState('');

  const { scene } = useGLTF('/models/animations/developer.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  // Load all animations
  const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
  const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
  const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
  const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');

  // Name the animations with safety checks and ensure they target the correct object
  React.useMemo(() => {
    if (idleAnimation[0]) {
      idleAnimation[0].name = 'idle';
    }
    if (saluteAnimation[0]) {
      saluteAnimation[0].name = 'salute';
    }
    if (clappingAnimation[0]) {
      clappingAnimation[0].name = 'clapping';
    }
    if (victoryAnimation[0]) {
      victoryAnimation[0].name = 'victory';
    }
  }, [idleAnimation, saluteAnimation, clappingAnimation, victoryAnimation]);

  const { actions, mixer } = useAnimations(
    [idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]].filter(Boolean),
    group,
  );

  // Respond to external animation changes
  useEffect(() => {
    console.log('Animation change requested:', animationName, 'Current:', currentAnimation);
    console.log('Available actions:', Object.keys(actions));

    if (actions[animationName]) {
      console.log('Switching to animation:', animationName);
      // Stop all current animations
      Object.values(actions).forEach((action) => {
        if (action) {
          action.stop();
        }
      });
      // Start new animation with a small delay to ensure clean transition
      setTimeout(() => {
        if (actions[animationName]) {
          const action = actions[animationName];
          console.log('Starting animation:', animationName, 'Action exists:', !!action);
          console.log('Mixer:', mixer);
          action.reset();
          action.setLoop(2201, Infinity); // Loop infinitely
          action.play();
          console.log('Animation playing:', action.isRunning());
          console.log('Animation weight:', action.getEffectiveWeight());
          setCurrentAnimation(animationName);
        }
      }, 100);
    } else if (!actions[animationName]) {
      console.log('Animation not found:', animationName, 'Available:', Object.keys(actions));
    }
  }, [animationName, actions]);

  // Initialize with the provided animation
  useEffect(() => {
    console.log('Initializing animations, actions available:', Object.keys(actions));
    console.log('Initial animationName:', animationName);
    if (actions[animationName]) {
      console.log('Starting initial animation:', animationName);
      actions[animationName].play();
      setCurrentAnimation(animationName);
    }
  }, [actions, animationName]);

  // Update mixer and gentle floating motion
  useFrame((state) => {
    // Update animation mixer
    if (mixer) {
      mixer.update(state.clock.getDelta());
    }

    if (group.current) {
      // Re-enable floating motion for better visual feedback
      const time = state.clock.elapsedTime;
      const baseY = props.position?.[1] || -3;

      // Small floating effect
      let floatIntensity = 0.02;
      const floatY = Math.sin(time * 0.6) * floatIntensity;
      group.current.position.y = baseY + floatY;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
};

useGLTF.preload('/models/animations/developer.glb');

export default InteractiveDeveloper;
