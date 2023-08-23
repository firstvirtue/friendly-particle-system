import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Vector3 } from 'three';

export function Particle(props) {

  // let velocity = 0.002;
  // const acceleration = 0.001;
  const velocity = useRef(new Vector3(0.002, 0.002, 0));
  const acceleration = useRef(new Vector3(0.001, -0.001, 0));

  const meshRef = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    velocity.current.x += acceleration.current.x;
    velocity.current.y += acceleration.current.y;
    velocity.current.z += acceleration.current.z;
    
    meshRef.current.position.x += velocity.current.x;
    meshRef.current.position.y += velocity.current.y;
    meshRef.current.position.z += velocity.current.z;
  })

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      // onClick={(event) => setActive(!active)}
      // onPointerOver={(event) => setHover(true)}
      // onPointerOut={(event) => setHover(false)}
      >

      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}