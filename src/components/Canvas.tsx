import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Particle } from './Particle';
import { ParticleSystem } from './ParticleSystem'

export default function Canv() {
  const ref = useRef()
  const [mouse, setMouse] = useState({x: 0, y: 0})
  
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    
  }, [height])

  const z = 600;
  const fov = 2 * Math.atan((height/2)/z) * (180 / Math.PI)

  return (
     <Canvas
     ref={ref}
      className="canvas"
      camera={{
        position: [0, 0, z],
        fov: fov,
        near: 100,
        far: 2000,
        aspect: width/height
      }}
      onClick={ event => {
        var rect = ref.current?.getBoundingClientRect();
        setMouse({
          x: event.clientX - (rect.width / 2),
          y: -event.clientY + (rect.height / 2),
        })
        
      }}
     >
        <ambientLight />
        <ParticleSystem position={mouse}/>
     </Canvas>
  );
}