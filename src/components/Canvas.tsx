import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Particle } from './Particle';

export default function Canv() {
  return (
     <Canvas
      className="canvas"
      camera={{
        position: [0, 0, 50],
        fov: 15,
        near: 0.1,
        far: 1000,
      }}
     >
        <ambientLight />
        <Particle />
     </Canvas>
  );
}