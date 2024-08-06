import { useGLTF } from '@react-three/drei';
import React from 'react';
import birdScene from '../assets/3d/bird.glb';

const Bird = ({ scale, position, rotation }) => {
  const bird = useGLTF(birdScene);

  return (
    <mesh scale={scale} position={position} rotation={rotation}>
      <primitive object={bird.scene} />
    </mesh>
  );
};

export default Bird;
