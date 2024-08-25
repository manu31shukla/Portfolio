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
  }, [actions])

  useFrame(({ clock, camera }) => {
      ref.current.position.y = Math.sin(clock.elapsedTime)*0.2 + 2

      if(ref.current.position.x > camera.position.x + 12 ){
        ref.current.rotation.y = Math.PI;
        ref.current.position.z += 1;
      }
      else if(ref.current.position.x < camera.position.x - 12 ){
        ref.current.rotation.y = 0;
        ref.current.position.z -= 1;
      }
      if (ref.current.rotation.y === 0){
        ref.current.position.x += 0.01;
        ref.current.position.z -= 0.01;

      }
      else{
        ref.current.position.x -= 0.01;
        ref.current.position.z += 0.01;

      }
  })
  
  return (
    <mesh scale={scale} position={position} rotation={rotation} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
