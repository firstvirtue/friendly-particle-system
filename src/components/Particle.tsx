import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Vector3 } from 'three';

export function Particle(props) {
  const { position } = props;
  
  // let velocity = 0.002;
  // const acceleration = 0.001;
  let velocity = useRef(new Vector3(0, 0, 0));
  let acceleration = useRef(new Vector3(0.2 * Math.random() - 0.2 / 2, 0.2 * Math.random() - 0.2 / 2, 0));
  
  // const force = useRef(new Vector3(0, 0, 0));
  const gravity = useRef(new Vector3(0, -0.4, 0));
  const mass = 10 * Math.random() + 10

  const meshRef = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    // console.log(position)

    velocity.current = (new Vector3(0, 0, 0));
    acceleration.current = (new Vector3(0.2 * Math.random() - 0.2 / 2, 0.2 * Math.random() - 0.2 / 2, 0));

    meshRef.current.position.x = position.x;
    meshRef.current.position.y = position.y;

  }, [position])

  useFrame((state, delta) => {
    // meshRef.current.rotation.x += delta;
    let force = gravity.current

    // f = m * a;
    acceleration.current.x += force.x / mass;
    acceleration.current.y += force.y / mass;
    acceleration.current.z += force.z / mass;

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
      position={[0, 3, 0]}
      // onClick={(event) => setActive(!active)}
      // onPointerOver={(event) => setHover(true)}
      // onPointerOut={(event) => setHover(false)}
      >

      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}