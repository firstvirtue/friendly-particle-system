import { useFrame } from "@react-three/fiber"
import { Particle } from "./Particle"

export function ParticleSystem() {

  const particles = Array.from(Array(100).keys())

  useFrame((state, delta) => {
    // console.log(particles)
  })

  return (
    <>
    
      { particles.map(x => {
        return <Particle />
      }) }
    </>
  )
}