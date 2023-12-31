import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Color } from "three";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useTexture } from '@react-three/drei';
import { Vector3 } from "three";
import * as THREE from "three";

// import fragmentShader from `./fragmentShader`;
// import vertexShader from `./vertexShader`;

import fragmentShader from `./coordFragmentShader`;
import vertexShader from `./coordVertexShader`;


const Cube = () => {
  const mesh = useRef();
  const uniform = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_colorA: { value: new Color("#FFFFFF") },
      u_colorB: { value: new Color("#FEB3D9") },
    }),
    []
  )

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();

    // console.log(mesh?.current?.geometry.attributes)
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        wireframe
        uniforms={uniform}
      />
    </mesh>
  );
};

const BasicParticles = () => {

  // const texture = useLoader(TextureLoader, '/assets/img/lush_value_01@3x.jpeg')
  const texture = useLoader(TextureLoader, '/assets/img/screenshot-0.png')

  // const texture = useTexture('/assets/img/lush_value_01@3x.jpeg')
  console.log('texture:: ', texture)

  const count = 20000;
  const radius = 2;

  const particlesPosition = useMemo(() => {
    // Create a Float32Array of count*3 length
    // -> we are going to generate the x, y, and z values for 2000 particles
    // -> thus we need 6000 items in this array
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Generate random values for x, y, and z on every loop
      let x = (Math.random() - 0.5) * 1;
      let y = (Math.random() - 0.5) * 1;
      let z = (Math.random() - 0.5) * 0.3;
      // let z = 0;

      // We add the 3 values to the attribute array for every loop
      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [count]);

  console.log(particlesPosition)

  const ptsRef = useRef()
  const uniform = useMemo(
    () => ({
      uTime: { value: 0.0 },
      uRadius: { value: radius },
      u_colorA: { value: new Color("#FFFFFF") },
      u_colorB: { value: new Color("#FEB3D9") },
      tex: { value: texture },
      diffuse: { value: new Vector3(0.5, 0.5, 0.5) }
    }),
    []
  )

  useFrame((state) => {
    const { clock } = state;
    ptsRef.current.material.uniforms.uTime.value = clock.getElapsedTime();

    // console.log(mesh?.current?.geometry.attributes)
  });

  return (
    <>
    <points ref={ptsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        // wireframe
        uniforms={uniform}
      />
      
    </points>

    {/* <mesh>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        wireframe
        
        uniforms={uniform}
      />
    </mesh> */}
    </>
  )
}


export const Scene = () => {
  return (
    <Canvas camera={{ position: [0.0, 0.0, 1.0] }}>
      <color attach="background" args={["white"]} />
      {/* <Cube /> */}
      <BasicParticles />
      <OrbitControls />
    </Canvas>
  );
};