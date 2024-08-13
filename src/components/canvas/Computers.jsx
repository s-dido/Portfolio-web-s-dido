import {Suspense, useEffect, useState} from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Loader} from '../Loader';




// [] ``
const Computers = ({isMobile}) => {
  
  const { scene } = useGLTF('/desktop_pc/scene.gltf')
  
  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor={"black"}/>
      <pointLight intensity={1}/>
      <spotLight position={[-20, 50 ,10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize ={1024} />
      <primitive object={scene} scale ={ isMobile ? 0.7 : 0.60} position ={isMobile ? [0, -2, -2.2 ]:[0.5, -3.5, -1.15 ] } rotation = {[-0.01, 0.2, -0.1]}/>
    </mesh>
  )
}

const ComputersCanvas = () =>{

  const [isMobile, setIsMobile] = useState (false);

  useEffect (() => { 
    
    // add event listener for changes to the screen size

    const mediaQuery = window.matchMedia('(max-heigth:350px)');

    // Set the Initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);
    
    // Define the callback function to handle changes to the media query 
    const handleMediaQueryChange = (event) =>{

      setIsMobile(event.matches);

      // Remove the listener when the component is unmounted 
      return() =>{
        mediaQuery.removeEventListener ('change', handleMediaQueryChange);
      }
    }
  }, [])

  return(
    <Canvas frameloop= "demand" shadows camera = {{position: [20, 3, 5], fov: 25}} gl={{preserveDrawingBuffer: true}}>
        <Suspense fallback={<Loader/>}>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <Computers isMobile={isMobile}/>
        </Suspense>

        <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;