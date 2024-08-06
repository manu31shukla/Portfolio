import React , { Suspense }from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Shop from '../models/Shop'

const Home = () => {
  const adjustShopScreenSize = () => {
    let screenScale= null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0, -0.3, 0.05];

    if (window.innerWidth < 768) {
      screenScale = [6, 6, 6];
    } else {
      screenScale = [10, 10, 10];
    }

    return [screenScale, screenPosition, rotation];
  }

  const [shopScale, shopPosition, shopRotation]= adjustShopScreenSize();
  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      POPUP

      </div> */}
      <Canvas className='w-full h-screen relative' camera={{near:0.1, far:100}}>
        <Suspense fallback={<Loader/>}>
          <directionalLight intensity={0.5} position={[0, 4, 10]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <spotLight position={[0, 10, 0]} />
          <hemisphereLight skyColor={'#ffffff'} groundColor={'#000000'} intensity={0.5} />

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
