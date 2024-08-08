import { useAnimations, useGLTF } from '@react-three/drei';
import React , { useEffect, useRef }from 'react';
import birdScene from '../assets/3d/bird.glb';
import { useFrame } from '@react-three/fiber';

const Bird = ({ scale, position, rotation, isRotating }) => {
  const ref = useRef();
  const { scene, animations} = useGLTF(birdScene);
  const { actions } = useAnimations(animations, ref)

  useEffect(() => {
      actions['Take 001'].play();
  }, [])

  useFrame((_, delta) => {
      ref.current.rotation.y += 0.15 * delta;
  })
  
  return (
    <mesh scale={scale} position={position} rotation={rotation} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
