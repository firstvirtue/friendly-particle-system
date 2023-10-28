import React, { useEffect, useRef, useState } from "react";
import { gsap, Quart, CustomEase } from "gsap";

import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase)

export function ExpandTransition() {

  const ref = useRef()

  // [NOTE] Make transition image, set styles top left width height
  // and trigger animation

  useEffect(() => {
    
  }, [])

  const style = {
    position: 'absolute',
    top: '30%',
    left: '30%',
    // transform: 'translate3d(-50%, -50%, 0)',
    width: '400px',
    height: '400px',
    objectFit: 'cover',
  }

  CustomEase.create(
    "cubic",
    ".8,-.5,.2,1.4"
  )


  return (
    <>
      <img src="/assets/img/lush_value_01@3x.jpeg" alt="" style={style}
      ref={ref} 
      onClick={function() {

        const rect = ref.current.getBoundingClientRect()
        const x = window.innerWidth / rect.width
        const y = window.innerHeight / rect.height
        console.log(x, y)
        gsap.to(ref.current, 
          { 
            width: window.innerWidth, 
            height: window.innerHeight, 
            // transform: 'translate3d(-50%, -50%, 0)',
            // top: '50%',
            // left: '50%',
            top: 0,
            left: 0,
            duration: 1.2,
            ease: 'cubic',
          })
      }}/>
    </>
  )
}