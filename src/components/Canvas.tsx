import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ParticleSystem } from './ParticleSystem'
import { VehicleSystem } from './VehicleSystem'
import { Vector3 } from 'three';
import { Perf } from 'r3f-perf';
import { OrbitControls } from "@react-three/drei";

export default function Canv() {
  const ref = useRef()
  const savedCallback = useRef();
  const [mouse, setMouse] = useState({x: 0, y: 0})
  
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const gravity = useRef(new Vector3(0, -2, 0));
  const wind = useRef(new Vector3(1.5, 0.8, 0));
  const [force, setForce] = useState(new Vector3())

  const pos = useRef();

  useEffect(() => {
    // console.log(force, gravity.current, wind.current)

    setForce(force.addVectors(force, wind.current))
    setForce(force.addVectors(force, gravity.current))
  }, [])

  useEffect(() => {
    // console.log('force: ', force)
  }, [force])

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

        // setForce(new Vector3())
        // wind.current = new Vector3(1 * Math.random() + 0.5, 1 * Math.random() + 0.5, 0);
        // setForce(force.addVectors(force, wind.current))
        // setForce(force.addVectors(force, gravity.current))
      }}
      onMouseMove={ event => {
        var rect = ref.current?.getBoundingClientRect();
        // setMouse({
        //   x: event.clientX - (rect.width / 2),
        //   y: -event.clientY + (rect.height / 2),
        // })
      }}
      style={{background: 'white'}}
     >
      <Perf />
        <ambientLight />
        {/* <ParticleSystem position={mouse} force={force} /> */}
        <VehicleSystem position={mouse} force={force} />
        <OrbitControls />
     </Canvas>
  );
}