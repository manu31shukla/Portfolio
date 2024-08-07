import { useAnimations, useGLTF } from '@react-three/drei';
import React , { useEffect, useRef }from 'react';
import birdScene from '../assets/3d/bird.glb';

const Bird = ({ scale, position, rotation, isRotating }) => {
  const ref = useRef();
  const { scene, animations} = useGLTF(birdScene);
  const { actions } = useAnimations(animations, ref)

  useEffect(() => {
    if(isRotating){
      actions['Take 001'].play();
    }
    else{
      actions['Take 001'].stop();
    }
  }, [actions, isRotating])
  
  return (
    <mesh scale={scale} position={position} rotation={rotation} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
