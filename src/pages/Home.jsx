import React , { Suspense }from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      POPUP

      </div> */}
      <Canvas className='w-full h-screen relative' camera={{near:0.1, far:100}}>
        <Suspense fallback={<Loader/>}>
          <directionalLight intensity={0.5} position={[0, 10, 0]} />
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <spotLight position={[0, 10, 0]} />
          <hemisphereLight skyColor={'#ffffff'} groundColor={'#000000'} intensity={0.5} />
        </Suspense>
      </Canvas>

    </section>
  )
}

export default Home
