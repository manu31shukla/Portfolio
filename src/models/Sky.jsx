import { useGLTF } from '@react-three/drei';
import React from 'react';
import cloudScene from '../assets/3d/sky.glb';

const Sky = ({ scale, position, rotation }) => {
  const sky = useGLTF(cloudScene);

  return (
    <mesh scale={scale} position={position} rotation={rotation}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
