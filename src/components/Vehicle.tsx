import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Vector3 } from 'three';

export function Vehicle(props) {
  const { target, force } = props;
  
  // let velocity = 0.002;
  // const acceleration = 0.001;
  const size = useRef(7 * Math.random() + 0.5)
  let velocity = useRef(new Vector3(3 * Math.random() - 3 / 3, 3 * Math.random() - 3 / 3, 0));
  let acceleration = useRef(new Vector3());
  // meshRef.current.position.x = 0;
  // meshRef.current.position.y = 0;

  const maxspeed = useRef(10 * Math.random() + 5);
  
  // const force = useRef(new Vector3(0, 0, 0));
  // const gravity = useRef(new Vector3(0, -0.4, 0));
  const mass = 100 * Math.random() + 50

  const meshRef = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    if(!meshRef.current) return;

    const desired = new Vector3()
    desired.x = target.x - meshRef.current.position.x;
    desired.y = target.y - meshRef.current.position.y;
    desired.normalize();
    
    desired.multiplyScalar(maxspeed.current);
    
    const steer = new Vector3()
    steer.x = desired.x - velocity.current.x
    steer.y = desired.y - velocity.current.y
    steer.z = desired.z - velocity.current.z
    
    // apply force | f = m * a;
    
    const force = steer;
    
    acceleration.current.x += force.x / mass;
    acceleration.current.y += force.y / mass;
    acceleration.current.z += force.z / mass;

    velocity.current.x += acceleration.current.x;
    velocity.current.y += acceleration.current.y;
    velocity.current.z += acceleration.current.z;
    
    meshRef.current.position.x += velocity.current.x;
    meshRef.current.position.y += velocity.current.y;
    meshRef.current.position.z += velocity.current.z;

    acceleration.current.x = 0
    acceleration.current.y = 0
    acceleration.current.z = 0
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

      <sphereGeometry args={[size.current, 16, 16]} />
      <meshStandardMaterial color={'#000'} />
    </mesh>
  )
}