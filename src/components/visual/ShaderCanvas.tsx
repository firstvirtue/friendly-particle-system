import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Color } from "three";

import fragmentShader from `./fragmentShader`;
import vertexShader from `./vertexShader`;

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
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
      <planeGeometry args={[1, 1, 32, 32]} />
      {/* <meshBasicMaterial color={0xffffff} /> */}
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        wireframe
        uniforms={uniform}
      />
    </mesh>
  );
};

export const Scene = () => {
  return (
    <Canvas camera={{ position: [1.0, 1.0, 1.0] }}>
      <Cube />
      <OrbitControls />
    </Canvas>
  );
};