import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber"
import { Particle } from "./Particle"

export function ParticleSystem(props) {
  const { position, force } = props;

  const particles = Array.from(Array(10).keys())

  useFrame((state, delta) => {
    // console.log(particles)
  })

  return (
    <>
      { particles.map((x, i) => {
        return <Particle key={i} position={position} force={force}/>
      }) }
    </>
  )
}