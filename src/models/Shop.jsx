import React, { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import {a} from '@react-spring/three'

import japaneseTeaShopPath from '../assets/3d/japanese_tea_shop.glb';

const Shop = ({scale, position, rotation, isRotating, setIsRotating,   setCurrentStage,
  ...props}) => {
  const shopRef = useRef();

  const {gl, viewport} = useThree();
  const { nodes, materials } = useGLTF(japaneseTeaShopPath)

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
  const previousRotation = useRef(0);

  const handlePointerDown = (e) => {
    e.stopPropagation(); 
    e.preventDefault(); 
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation(); 
    e.preventDefault(); 
    setIsRotating(false);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    const delta = (clientX - lastX.current)/viewport.width;

    shopRef.current.rotation.y += delta * 0.02 * Math.PI ;

    lastX.current = clientX;
    rotationSpeed.current = delta * 0.001 * Math.PI;
  }

  const handleKeyDown = (e) => {  
    if(e.key === 'ArrowRight') {
      shopRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current =  0.001 / Math.PI;

      if(!isRotating) { setIsRotating(true); }
    } else if(e.key === 'ArrowLeft') {
      shopRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.001 * Math.PI;

      if(!isRotating) { setIsRotating(true); }
    }
  }

  const handleKeyUp = (e) => {  
    if(e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      setIsRotating(false);
     }
    }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault(); 

    if(isRotating) {
      handlePointerUp(e);
  }
}

useFrame(() => {
  if (isRotating) {
    shopRef.current.rotation.y += rotationSpeed.current;
  } else {
    rotationSpeed.current *= dampingFactor;
    shopRef.current.rotation.y += rotationSpeed.current;
  }

  const rotation = shopRef.current.rotation.y;
  const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  const prevRotation = previousRotation.current;

  const thresholds = [Math.PI / 2, Math.PI, 3 * Math.PI / 2, 2 * Math.PI];

  const buffer = 0.01; 

  thresholds.forEach((threshold, index) => {
    const crossedClockwise = prevRotation < threshold - buffer && normalizedRotation >= threshold + buffer;
    const crossedCounterClockwise = prevRotation > threshold + buffer && normalizedRotation <= threshold - buffer;

    if (crossedClockwise || crossedCounterClockwise) {
      setCurrentStage(index + 1);
      console.log(`Stage ${index + 1} activated`);
    }
  });

  previousRotation.current = normalizedRotation;
});
// setCurrentStage(false);



useEffect(() => {
  const canvas = gl.domElement;
  canvas.addEventListener('pointerup', handlePointerUp);
  canvas.addEventListener('pointermove', handlePointerMove);
  canvas.addEventListener('pointerdown', handlePointerDown);
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);

  return () => {
    canvas.removeEventListener('pointerdown', handlePointerDown);
    canvas.removeEventListener('pointerup', handlePointerUp);
    canvas.removeEventListener('pointermove', handlePointerMove);
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('keyup', handleKeyUp);
  }
},
[gl, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown, handleKeyUp]);

  return (
<a.group ref={shopRef} scale={scale} position={position}setCurrentStage={setCurrentStage}  {...props}>
      <group scale={0.01}>
        <group position={[0, 100, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh  
              
            
            geometry={nodes.Cube001_Roof_Tiles_0.geometry}
            material={materials.Roof_Tiles}
          />
          <mesh
            
            geometry={nodes.Cube001_Building_0.geometry}
            material={materials.Building}
          />
        </group>
        <group position={[0, 100, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            
            geometry={nodes.Cube003_Roof_Tiles_0.geometry}
            material={materials.Roof_Tiles}
          />
          <mesh
            
            geometry={nodes.Cube003_Building_0.geometry}
            material={materials.Building}
          />
        </group>
        <group
          position={[107.861, 112.397, -0.587]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[100, 93.891, 100]}>
          <mesh
            
            geometry={nodes.Cube004_Roof_Tiles_0.geometry}
            material={materials.Roof_Tiles}
          />
          <mesh
            
            geometry={nodes.Cube004_Building_0.geometry}
            material={materials.Building}
          />
        </group>
        <group
          position={[-88.117, 4.559, -5.896]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={37.615}>
          <mesh
            
            geometry={nodes.Cube011_Brown_0.geometry}
            material={materials.Brown}
          />
          <mesh
            
            geometry={nodes.Cube011_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            
            geometry={nodes.Cube011_Material003_0.geometry}
            material={materials['Material.003']}
          />
          <mesh
            
            geometry={nodes.Cube011_Material006_0.geometry}
            material={materials['Material.006']}
          />
          <mesh
            
            geometry={nodes.Cube011_Material007_0.geometry}
            material={materials['Material.007']}
          />
          <mesh
            
            geometry={nodes.Cube011_Material005_0.geometry}
            material={materials['Material.005']}
          />
          <mesh
            
            geometry={nodes.Cube011_Material008_0.geometry}
            material={materials['Material.008']}
          />
        </group>
        <group
          position={[-9.069, 41.236, -68.738]}
          rotation={[-Math.PI / 2, 0, -0.235]}
          scale={7.665}>
          <mesh
            
            geometry={nodes.Circle002_Brown_0.geometry}
            material={materials.Brown}
          />
          <mesh
            
            geometry={nodes.Circle002_Material005_0.geometry}
            material={materials['Material.005']}
          />
        </group>
        <group position={[69.274, 37.863, -68.783]} rotation={[-Math.PI / 2, 0, 0]} scale={4.253}>
          <mesh
            
            geometry={nodes.Cylinder_Orange_0.geometry}
            material={materials.Orange}
          />
          <mesh
            
            geometry={nodes.Cylinder_Roof_Tiles_0.geometry}
            material={materials.Roof_Tiles}
          />
        </group>
        <group
          position={[57.138, 15.574, -72.791]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[5.798, 3.05, 7.399]}>
          <mesh
            
            geometry={nodes.Cube005_Material015_0.geometry}
            material={materials['Material.015']}
          />
          <mesh
            
            geometry={nodes.Cube005_Building_0.geometry}
            material={materials.Building}
          />
        </group>
        <group position={[0, -30.276, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={210.5}>
          <mesh
            
            geometry={nodes.Cube006_Brown001_0.geometry}
            material={materials['Brown.001']}
          />
          <mesh
            
            geometry={nodes.Cube006_Material016_0.geometry}
            material={materials['Material.016']}
          />
        </group>
        <group
          position={[-51.213, 73.63, -66.317]}
          rotation={[-Math.PI / 2, 0, -0.272]}
          scale={1.978}>
          <mesh
            
            geometry={nodes.Cube030_Material004_0.geometry}
            material={materials['Material.004']}
          />
          <mesh
            
            geometry={nodes.Cube030_Material019_0.geometry}
            material={materials['Material.019']}
          />
          <mesh
            
            geometry={nodes.Cube030_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
        <group position={[91.77, 20.53, 95.808]} rotation={[-Math.PI / 2, 0, 0.211]} scale={2.714}>
          <mesh
            
            geometry={nodes.Cube013_Material004_0.geometry}
            material={materials['Material.004']}
          />
          <mesh
            
            geometry={nodes.Cube013_Material019_0.geometry}
            material={materials['Material.019']}
          />
          <mesh
            
            geometry={nodes.Cube013_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
        <group
          position={[-73.749, -10.183, 164.906]}
          rotation={[-Math.PI / 2, 0, 0.211]}
          scale={[3.863, 3.863, 7.827]}>
          <mesh
            
            geometry={nodes.Cube014_DarkGreen_0.geometry}
            material={materials.DarkGreen}
          />
          <mesh
            
            geometry={nodes.Cube014_Orange_0.geometry}
            material={materials.Orange}
          />
        </group>
        <group
          position={[121.928, 0.299, 38.851]}
          rotation={[-Math.PI / 2, 0, -2.497]}
          scale={[11.931, 11.931, 18.53]}>
          <mesh
            
            geometry={nodes.Circle007_Orange_0.geometry}
            material={materials.Orange}
          />
          <mesh
            
            geometry={nodes.Circle007_Brown_0.geometry}
            material={materials.Brown}
          />
          <mesh
            
            geometry={nodes.Circle007_Material005_0.geometry}
            material={materials['Material.005']}
          />
        </group>
        <group
          position={[102.001, -17.697, 137.786]}
          rotation={[-Math.PI / 2, 0, 0.211]}
          scale={[5.86, 5.86, 6.168]}>
          <mesh
            
            geometry={nodes.Cube012_Material022_0.geometry}
            material={materials['Material.022']}
          />
          <mesh
            
            geometry={nodes.Cube012_Material021_0.geometry}
            material={materials['Material.021']}
          />
        </group>
        <group
          position={[80.554, -22.833, 135.591]}
          rotation={[-Math.PI / 2, 0, 0.737]}
          scale={1.233}>
          <mesh
            
            geometry={nodes.Cube017_Material004_0.geometry}
            material={materials['Material.004']}
          />
          <mesh
            
            geometry={nodes.Cube017_Material019_0.geometry}
            material={materials['Material.019']}
          />
          <mesh
            
            geometry={nodes.Cube017_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
        <group
          position={[124.806, -22.556, 134.363]}
          rotation={[-Math.PI / 2, 0, -2.821]}
          scale={[4, 4, 4.21]}>
          <mesh
            
            geometry={nodes.Cube018_Material023_0.geometry}
            material={materials['Material.023']}
          />
          <mesh
            
            geometry={nodes.Cube018_Material024_0.geometry}
            material={materials['Material.024']}
          />
        </group>
        <group
          position={[122.674, 18.744, 95.102]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[8.559, 8.559, 10.017]}>
          <mesh
            
            geometry={nodes.Cube019_Brown_0.geometry}
            material={materials.Brown}
          />
          <mesh
            
            geometry={nodes.Cube019_Emmission_0.geometry}
            material={materials.Emmission}
          />
        </group>
        <group position={[57.304, 44.642, -68.728]} rotation={[-Math.PI / 2, 0, 0]} scale={3.555}>
          <mesh
            
            geometry={nodes.Plane009_Material027_0.geometry}
            material={materials['Material.027']}
          />
          <mesh
            
            geometry={nodes.Plane009_Material026_0.geometry}
            material={materials['Material.026']}
          />
        </group>
        <group
          position={[-86.422, 43.578, 55.034]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1.907, 1.907, 3.361]}>
          <mesh
            
            geometry={nodes.Plane008_Material002_0.geometry}
            material={materials['Material.002']}
          />
          <mesh
            
            geometry={nodes.Plane008_Material025_0.geometry}
            material={materials['Material.025']}
          />
        </group>
        <group
          position={[16.655, 49.056, -69.45]}
          rotation={[-Math.PI / 2, 0, -2.243]}
          scale={[4, 4, 4.21]}>
          <mesh
            
            geometry={nodes.Cube021_Material023_0.geometry}
            material={materials['Material.023']}
          />
          <mesh
            
            geometry={nodes.Cube021_Material024_0.geometry}
            material={materials['Material.024']}
          />
        </group>
        <group
          position={[-71.258, 63.118, -68.632]}
          rotation={[-Math.PI / 2, 0, 1.004]}
          scale={76.239}>
          <mesh
            
            geometry={nodes.Cube022_Material005_0.geometry}
            material={materials['Material.005']}
          />
          <mesh
            
            geometry={nodes.Cube022_Material003_0.geometry}
            material={materials['Material.003']}
          />
          <mesh
            
            geometry={nodes.Cube022_Material007_0.geometry}
            material={materials['Material.007']}
          />
          <mesh
            
            geometry={nodes.Cube022_Material006_0.geometry}
            material={materials['Material.006']}
          />
        </group>
        <group
          position={[105.429, -0.587, -76.249]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[6.699, 6.699, 13.973]}>
          <mesh
            
            geometry={nodes.Circle019_Black_0.geometry}
            material={materials.Black}
          />
          <mesh
            
            geometry={nodes.Circle019_Material002_0.geometry}
            material={materials['Material.002']}
          />
          <mesh
            
            geometry={nodes.Circle019_Material029_0.geometry}
            material={materials['Material.029']}
          />
        </group>
        <mesh
           
            
          geometry={nodes.Cube_Building_0.geometry}
          material={materials.Building}
          position={[0, 100, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
           
            
          geometry={nodes.Circle_Roof_Tiles_0.geometry}
          material={materials.Roof_Tiles}
          position={[-100.403, 174.392, 91.278]}
          rotation={[0.566, 0, 0]}
          scale={[4.662, 4.567, 4.567]}
        />
        <mesh
           
            
          geometry={nodes.Circle004_Roof_Tiles_0.geometry}
          material={materials.Roof_Tiles}
          position={[125.919, 112.366, 66.376]}
          rotation={[Math.PI / 2, 1.179, -Math.PI / 2]}
          scale={[4.662, 2.624, 2.852]}
        />
        <mesh
           
            
          geometry={nodes.Circle006_Roof_Tiles_0.geometry}
          material={materials.Roof_Tiles}
          position={[95.831, 174.392, -90.644]}
          rotation={[2.576, 0, Math.PI]}
          scale={[4.662, 4.567, 4.567]}
        />
        <mesh
           
            
          geometry={nodes.Cube002_Roof_Tiles_0.geometry}
          material={materials.Roof_Tiles}
          position={[0, 100, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
           
            
          geometry={nodes.Vert001_Roof_Tiles_0.geometry}
          material={materials.Roof_Tiles}
          position={[-105.964, 237.742, 3.186]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
           
            
          geometry={nodes.Circle001_Roof_Tiles_0.geometry}
          material={materials.Roof_Tiles}
          position={[-89.93, 112.366, 107.116]}
          rotation={[0.392, 0, 0]}
          scale={[4.662, 2.624, 2.852]}
        />
        <mesh
           
            
          geometry={nodes.Vert003_Roof_Tiles_0.geometry}
          material={materials.Roof_Tiles}
          position={[-103.737, 237.742, -2.806]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
           
            
          geometry={nodes.Cube015_Brown_0.geometry}
          material={materials.Brown}
          position={[-70.38, 62.224, 79.904]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
           
            
          geometry={nodes.Cube007_Material002_0.geometry}
          material={materials['Material.002']}
          position={[0, -3.73, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
           
            
          geometry={nodes.Cube008_Material009_0.geometry}
          material={materials['Material.009']}
          position={[0, -3.73, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
           
            
          geometry={nodes.Plane_Red_0.geometry}
          material={materials.material}
          position={[4.604, 18.294, -4.31]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[17.376, 17.376, 16.361]}
        />
        <mesh
           
            
          geometry={nodes.Cube010_Brown_0.geometry}
          material={materials.Brown}
          position={[4.413, 35.564, -66.505]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-24.935, 3.717, 5.749]}
        />
        <mesh
           
            
          geometry={nodes.Vert007_Black_0.geometry}
          material={materials.Black}
          position={[-2.496, 20.327, -0.222]}
          rotation={[-Math.PI / 2, 0, 0.64]}
          scale={87.545}
        />
        <mesh
           
            
          geometry={nodes.Vert006_Material017_0.geometry}
          material={materials['Material.017']}
          position={[-116.145, 1.889, 111.466]}
          rotation={[-Math.PI / 2, 0, 0.64]}
          scale={184.907}
        />
        <mesh
           
            
          geometry={nodes.Plane001_Brown_0.geometry}
          material={materials.Brown}
          position={[100, 174.81, 0]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={4.717}
        />
        <mesh
           
            
          geometry={nodes.Plane002_Brown_0.geometry}
          material={materials.Brown}
          position={[-100.466, 174.81, 0]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={4.717}
        />
        <mesh
           
            
          geometry={nodes.Cube016_Red_0.geometry}
          material={materials.material}
          position={[63.372, 21.628, -70.522]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[13.62, 7.166, 17.383]}
        />
        <mesh
           
            
          geometry={nodes.Plane003_Material011_0.geometry}
          material={materials['Material.011']}
          position={[5.215, 134.246, 104.742]}
          scale={[43.744, 16.516, 12.508]}
        />
        <mesh
           
            
          geometry={nodes.Plane015_Material016_0.geometry}
          material={materials['Material.016']}
          position={[-159.623, -33.655, 81.926]}
          rotation={[-1.781, -0.713, -0.676]}
          scale={[-1.81, 1.872, 1.714]}
        />
        <mesh
           
            
          geometry={nodes.Plane004_Material016_0.geometry}
          material={materials['Material.016']}
          position={[-159.623, -33.655, 105.29]}
          rotation={[-1.698, 0.607, 2.969]}
          scale={[-1.233, 1.275, 1.167]}
        />
        <mesh
           
            
          geometry={nodes.Plane005_Material016_0.geometry}
          material={materials['Material.016']}
          position={[-159.623, -33.655, 52.814]}
          rotation={[-1.173, 0.736, 2.039]}
          scale={[-1.607, 1.662, 1.521]}
        />
        <mesh
           
            
          geometry={nodes.Plane006_Material016_0.geometry}
          material={materials['Material.016']}
          position={[-199.019, -33.337, 41.241]}
          rotation={[-2.171, 0.58, -2.8]}
          scale={[-1.364, 1.57, 1.225]}
        />
        <mesh
           
            
          geometry={nodes.Plane007_Material016_0.geometry}
          material={materials['Material.016']}
          position={[-181.475, -33.337, -43.19]}
          rotation={[-1.615, 0.807, 2.648]}
          scale={[-1.885, 2.169, 1.692]}
        />
        <mesh
           
            
          geometry={nodes.Cube009_Brown_0.geometry}
          material={materials.Brown}
          position={[-62.079, 35.544, -70.644]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[16.734, 18.974, 18.974]}
        />
        <mesh
           
            
          geometry={nodes.Cube020_Material009_0.geometry}
          material={materials['Material.009']}
          position={[-83.643, 30.626, 57.043]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={12.462}
        />
        <mesh
           
            
          geometry={nodes.Circle008_Red_0.geometry}
          material={materials.material}
          position={[33.328, 5.245, -5.204]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[7.943, 7.943, 5.069]}
        />
        <mesh
           
            
          geometry={nodes.Circle009_Red_0.geometry}
          material={materials.material}
          position={[4.81, 5.251, 25.585]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[7.943, 7.943, 5.069]}
        />
        <mesh
           
            
          geometry={nodes.Circle010_Red_0.geometry}
          material={materials.material}
          position={[-26.624, 5.509, -1.313]}
          rotation={[-Math.PI / 2, 0, 0.345]}
          scale={[7.943, 7.943, 5.069]}
        />
        <mesh
           
            
          geometry={nodes.Plane010_Material026_0.geometry}
          material={materials['Material.026']}
          position={[0.551, 5.264, 1.103]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={46.572}
        />
        <mesh
           
            
          geometry={nodes.Cylinder001_Black_0.geometry}
          material={materials.Black}
          position={[12.452, 22.794, -11.587]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={2.33}
        />
        <mesh
           
            
          geometry={nodes.Cylinder002_Black_0.geometry}
          material={materials.Black}
          position={[8.86, 22.794, 6.928]}
          rotation={[-Math.PI / 2, 0, 0.435]}
          scale={2.33}
        />
        <mesh
           
            
          geometry={nodes.Circle011_Black_0.geometry}
          material={materials.Black}
          position={[-41.594, 42.737, -59.032]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-1.694, 1.694, 2.259]}
        />
        <mesh
           
            
          geometry={nodes.Circle012_Black_0.geometry}
          material={materials.Black}
          position={[-83.303, 42.737, -59.032]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-1.694, 1.694, 2.259]}
        />
        <mesh
           
            
          geometry={nodes.Circle013_Black_0.geometry}
          material={materials.Black}
          position={[-41.594, 28.865, -59.032]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-2.503, 2.503, 2.259]}
        />
        <mesh
           
            
          geometry={nodes.Circle014_Black_0.geometry}
          material={materials.Black}
          position={[-83.303, 28.865, -59.032]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-2.503, 2.503, 2.259]}
        />
        <mesh
           
            
          geometry={nodes.Circle015_Black_0.geometry}
          material={materials.Black}
          position={[-41.594, 20.845, -59.032]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-2.503, 2.503, 2.259]}
        />
        <mesh
           
            
          geometry={nodes.Circle016_Black_0.geometry}
          material={materials.Black}
          position={[-83.303, 20.845, -59.032]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-2.503, 2.503, 2.259]}
        />
        <mesh
           
            
          geometry={nodes.Circle017_Black_0.geometry}
          material={materials.Black}
          position={[-61.981, 28.865, -59.032]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-2.503, 2.503, 2.259]}
        />
        <mesh
           
            
          geometry={nodes.Circle018_Black_0.geometry}
          material={materials.Black}
          position={[-61.981, 20.845, -59.032]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-2.503, 2.503, 2.259]}
        />
        <mesh
           
            
          geometry={nodes.Vert002__0.geometry}
          material={materials['Vert.002__0']}
          position={[-10.96, 132.545, 105.951]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={15.246}
        />
        <mesh
           
            
          geometry={nodes.Vert004__0.geometry}
          material={materials['Vert.002__0']}
          position={[20.27, 133.01, 106.095]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={17.487}
        />
      </group>
      </a.group>
  )
}

export default Shop;