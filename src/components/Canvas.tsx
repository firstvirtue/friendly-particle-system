import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Particle } from './Particle';
import { ParticleSystem } from './ParticleSystem'

export default function Canv() {
  const ref = useRef()
  const [mouse, setMouse] = useState({x: 0, y: 0})

  return (
     <Canvas
     ref={ref}
      className="canvas"
      camera={{
        position: [0, 0, 50],
        fov: 15,
        near: 0.1,
        far: 1000,
      }}
      onClick={ event => {
        var rect = ref.current?.getBoundingClientRect();
        setMouse({
          x: ((event.clientX - rect.left) / window.innerWidth) * 2 - 1,
          y: -((event.clientY - rect.top) / window.innerHeight) * 2 + 1,
        })
        
      }}
     >
        <ambientLight />
        <ParticleSystem position={mouse}/>
     </Canvas>
  );
}