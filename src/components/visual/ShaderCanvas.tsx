import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';

import fragmentShader from `./fragmentShader`;
import vertexShader from `./vertexShader`;

const Cube = () => {
  const mesh = useRef();

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[1, 1, 32, 32]} />
      {/* <meshBasicMaterial color={0xffffff} /> */}
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
    </mesh>
  );
};

export const Scene = () => {
  return (
    <Canvas camera={{ position: [0.0, 0.0, 1.0] }}>
      <Cube />
      <OrbitControls />
    </Canvas>
  );
};