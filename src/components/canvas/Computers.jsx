import {Suspense, useEffect, useState} from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Loader} from '../Loader';




// [] ``
const Computers = () => {
  
  const { scene } = useGLTF('/desktop_pc/scene.gltf')
  
  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor={"black"}/>
      <pointLight intensity={1}/>
      <spotLight position={[-20, 50 ,10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize ={1024} />
      <primitive object={scene} scale ={0.60} position ={[0, -4, -1.5 ]} rotation = {[-0.01, -0.2, -0.1]}/>
    </mesh>
  )
}

const ComputersCanvas = () =>{
  return(
    <Canvas frameloop= "demand" shadows camera = {{position: [20, 3, 5], fov: 25}} gl={{preserveDrawingBuffer: true}}>
        <Suspense fallback={<Loader/>}>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <Computers/>
        </Suspense>

        <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;