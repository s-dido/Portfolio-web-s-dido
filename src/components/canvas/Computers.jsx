import {Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader'


// [] ``
const Computers = () => {
  
  const { scene } = useGLTF('/desktop_pc/scene.gltf')
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={"black"}/>
      <pointLight intensity={1}/>
      <primitive object={scene}/>
    </mesh>
  )
}

const ComputersCanvas = () =>{
  return(
    <Canvas frameloop='demand' shadows camera = {{position: [20, 5, 10], fov: 25}} gl={{preserveDrawingBuffer: true}}>
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <Computers/>
        </Suspense>

        <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;