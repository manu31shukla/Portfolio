import React from 'react'
import { Html } from '@react-three/drei'

const Loader = () => {
  return (
   <Html center>
    <div className='flex justify-center items-center'>
        <div className='animate-spin rounded-full h-64 w-64 border-t-4 border-b-4 border-darkBrown'></div>
        <p className='absolute text-lg text-darkBrown'>Something cool is loading...</p>
    </div>
    </Html>
  )
}

export default Loader
