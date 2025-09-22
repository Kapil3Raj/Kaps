import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
gsap.registerPlugin(MotionPathPlugin)

const Try = () => {
  const ball = useRef(null)
  const path = useRef(null)

  useEffect(() => {
    gsap.to(ball.current, {
      duration: 5,
      rotate:1080,
      motionPath: {
        path: path.current,
        align: path.current, // <-- fix: align should be the path ref, not 'center'
       alignOrigin: [0.5, 0.5]
      },
      transformOrigin: "50% 50%",
      ease: "power1.inOut"
    })
  }, [])

  return (
    <div>
      {/* Ball as a separate SVG element */}
      <svg className='w-full h-full' style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
        <circle
          ref={ball}
          cx="50.6138"
          cy="50.6138"
          r="50"
          fill="url(#paint0_linear_238_6)"
        />
        <defs>
          <linearGradient id="paint0_linear_238_6" x1="50.6138" y1="0.613766" x2="50.6138" y2="100.614" gradientUnits="userSpaceOnUse">
            <stop offset="0.505157" stopColor="#FF7517" />
            <stop offset="0.505257" stopColor="#111111" />
          </linearGradient>
        </defs>
      </svg>
      {/* Path SVG */}
      <svg  viewBox="0 0 945 367" fill="none" xmlns="http://www.w3.org/2000/svg" className=' w-[50%] h-[50%]'>
        <path
          ref={path}
          d="M0 1H310C310 1 347 176 405.5 256.5C464 337 685 366.5 685 366.5H945"
          stroke="black"
        />
      </svg>
    </div>
  )
}

export default Try