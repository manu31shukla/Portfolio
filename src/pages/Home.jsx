import React , { Suspense, useState, useEffect, useRef }from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei' 
import Loader from '../components/Loader'
import Shop from '../models/Shop'
import Bird from '../models/Bird'
import HomeInfo from '../components/HomeInfo'
import SoundToggle from '../components/SoundToggle'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const adjustShopScreenSize = () => {
    let screenScale= null;
    let screenPosition = [0, -10.8, -43];
    let rotation = [0, 0, 0];

    if (window.innerWidth < 768) {
      screenPosition = [0, -12, -43];
      screenScale = [10, 9, 10];
    } else {
      screenScale = [15, 15, 15];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustBirdScreenSize = () => {
    let screenScale = [1, 1, 1]; 
    let screenPosition = [-3, 2, 0]; 
    let rotation = [180, 0, 0]; 

    if (window.innerWidth < 768) {
      screenPosition = [0, 0, 0]; 
      screenScale = [0.001, 0.001, 0.001];
    } else {
      screenScale = [0.003, 0.003, 0.003];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [shopScale, shopPosition, shopRotation]= adjustShopScreenSize();
  const [birdScale, birdPosition, birdRotation] = adjustBirdScreenSize();

  const toggleSound = () => {
    setIsSoundOn(prev => !prev);
  };

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>} 
      </div>
      <Canvas 
      className = {`w-full h-screen bg-transparent ${isRotating ? 'curson-grabbing' : 'cursor-grab'}`} camera={{near:0.1, far:100}}>
        <Suspense fallback={<Loader/>}>
          <directionalLight castShadow intensity={0.5} position={[10, 20, 10]} shadow-mapSize-width={2048}   shadow-mapSize-height={2048}/>
          <ambientLight intensity={0.5} />
          <pointLight intensity={0.8} position={[10, 10, 10]} />
          <spotLight intensity={1} position={[0, 20, 0]} angle={0.3} penumbra={1} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
          <hemisphereLight skyColor={'#ffffff'} groundColor={'#000000'} intensity={0.6} />

          <Bird 
          scale={birdScale}
          position={birdPosition}
          rotation={birdRotation}
          isRotating={isRotating}
          />

          <Shop 
            position={shopPosition}
            scale={shopScale}
            rotation={shopRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            currentStage={currentStage}

          />
           <OrbitControls
           enablePan={true}
           enableZoom={false}
           enableRotate={true}
           rotateSpeed={0.1} 
           zoomSpeed={0.5}   
           panSpeed={0.5} 
           dampingFactor={0.2}  
         />
        </Suspense>
      </Canvas>
      <div className='absolute bottom-5 left-0 right-0 flex items-center justify-center z-10 text-white'>
        <div className={`flex items-center ${isMobile ? 'hidden' : 'block'} animate-slide`}>
          <div className='mr-2 arrow-left'>
            &#8592;
          </div>
          <p>Use arrow keys for better navigation</p>
          <div className='ml-2 arrow-right'>
            &#8594;
          </div>
        </div>
        <div className={`text-center ${isMobile ? 'block' : 'hidden'} text-xs`}>
        <div className='mr-2 arrow-left'>
            &#8592;
          </div>
          <span className="mx-1 sm:mx-2">Slide to navigate</span>
          <div className='ml-2 arrow-right'>
            &#8594;
          </div>
        </div>
      </div>
      <SoundToggle 
        isSoundOn={isSoundOn} 
        toggleSound={toggleSound} 
        isMobile={isMobile}
      />
    </section>
  )
}

export default Home
