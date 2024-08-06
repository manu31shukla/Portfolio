import React , { Suspense }from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Shop from '../models/Shop'
import Sky from '../models/Sky'
import Bird from '../models/Bird'

const Home = () => {
  const adjustShopScreenSize = () => {
    let screenScale= null;
    let screenPosition = [0, -7.8, -43];
    let rotation = [0, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [6, 6, 6];
    } else {
      screenScale = [11, 10, 11];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustSkyScreenSize = () => {
    let screenScale = [1, 1, 1]; 
    let screenPosition = [-3, 2, 0]; 
    let rotation = [0, 0, 0]; 

    if (window.innerWidth < 768) {
      screenScale = [0.3, 0.3, 0.3];
    } else {
      screenScale = [0.4, 0.4, 0.4];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustBirdScreenSize = () => {
    let screenScale = [1, 1, 1]; 
    let screenPosition = [-3, 0, 0]; 
    let rotation = [0, 0, 0]; 

    if (window.innerWidth < 768) {
      screenScale = [0.0002, 0.0002, 0.0002];
    } else {
      screenScale = [0.003, 0.003, 0.003];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [shopScale, shopPosition, shopRotation]= adjustShopScreenSize();
  const [skyScale, skyPosition, skyRotation] = adjustSkyScreenSize();
  const [birdScale, birdPosition, birdRotation] = adjustBirdScreenSize();

  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      POPUP

      </div> */}
      <Canvas className='w-full h-screen relative' camera={{near:0.1, far:100}}>
        <Suspense fallback={<Loader/>}>
          <directionalLight castShadow intensity={0.5} position={[10, 20, 10]} shadow-mapSize-width={2048}   shadow-mapSize-height={2048}/>
          <ambientLight intensity={0.5} />
          <pointLight intensity={0.8} position={[10, 10, 10]} />
          <spotLight intensity={1} position={[0, 20, 0]} angle={0.3} penumbra={1} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
          <hemisphereLight skyColor={'#ffffff'} groundColor={'#000000'} intensity={0.6} />

          <Sky 
          scale={skyScale}
          position={skyPosition}
          rotation={skyRotation}
          />

          <Bird 
          scale={birdScale}
          position={birdPosition}
          rotation={birdRotation}
          />

          <Shop 
            position={shopPosition}
            scale={shopScale}
            rotation={shopRotation}
          />
        </Suspense>
      </Canvas>

    </section>
  )
}

export default Home
