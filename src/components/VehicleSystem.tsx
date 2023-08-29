import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber"
import { Vehicle } from "./Vehicle"

export function VehicleSystem(props) {
  const { position, force } = props;

  const vehicles = Array.from(Array(501).keys())

  useFrame((state, delta) => {
    // console.log(vehicles)
  })

  return (
    <>
      { vehicles.map((x, i) => {
        return <Vehicle key={i} target={position} force={force}/>
      }) }
    </>
  )
}