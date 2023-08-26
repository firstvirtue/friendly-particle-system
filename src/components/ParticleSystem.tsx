import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber"
import { Particle } from "./Particle"

export function ParticleSystem(props) {
  const { position } = props;

  const particles = Array.from(Array(300).keys())

  useFrame((state, delta) => {
    // console.log(particles)
  })

  useEffect(() => {
    console.log(position)
  }, [position])

  return (
    <>
      { particles.map(x => {
        return <Particle position={position} />
      }) }
    </>
  )
}