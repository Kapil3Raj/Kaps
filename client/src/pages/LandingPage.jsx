import { Link, useNavigate } from 'react-router-dom'
import gsap from "gsap"
import { useEffect, useRef, useState } from 'react'
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import desBgImg from "../assets/images/desBg2.webp"
import bgImg from "../assets/images/devBg3.webp";

// Register GSAP plugins
gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin)

const LandingPage = () => {
  // Refs for DOM elements
  const one_box_Ref = useRef(null)
  const one_text_Ref = useRef(null)
  const two_text_Ref = useRef(null)
  const ball = useRef(null)
  const path = useRef(null)        // For design motion path
  const devPathRef = useRef(null)  // For development motion path

  const navigate = useNavigate()

  // 🔒 State to lock buttons after one is clicked
  const [buttonLocked, setButtonLocked] = useState(false)

  /**
   * 🔹 Entrance animation for first-time visitors only
   */
  useEffect(() => {
    const visited = sessionStorage.getItem("visitedOnce")

    if (!visited) {
      const tl1 = gsap.timeline()

      tl1.fromTo(
        one_box_Ref.current,
        { opacity: 1, yPercent: 100 },
        { opacity: 1, yPercent: 0, duration: 1, ease: "none", delay: 0.5 }
      )
        .fromTo(
          one_text_Ref.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "none", delay: 0.5 }
        )
        .fromTo(
          two_text_Ref.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "none", delay: 0.5 }
        )

      // Mark as visited so animation won’t repeat
      sessionStorage.setItem("visitedOnce", "true")
    }
  }, [])

  /**
   * 🔹 Make "development" path responsive to screen height
   */
  useEffect(() => {
    function updateDevPath() {
      const height = window.innerHeight

      devPathRef.current.setAttribute(
        "d",
        `M296 5H5V119.24H298V${height}`
      )
    }

    updateDevPath()
    window.addEventListener("resize", updateDevPath)

    return () => window.removeEventListener("resize", updateDevPath)
  }, [])

  /**
   * 🔹 Animation when "DESIGNS" button is clicked
   */
  function designClicked() {
    if (buttonLocked) return // 🚫 ignore if already clicked
    setButtonLocked(true)    // 🔒 lock buttons

    // Adjust scale for smaller screens
    gsap.set(ball.current, {
      scale: window.innerWidth < 756 ? 1.7 : 1,
      transformOrigin: "50% 50%",
    })

    // Animate ball along the horizontal path
    gsap.to(ball.current, {
      duration: 3,
      rotate: 1080, // Spins while moving
      motionPath: {
        path: path.current,
        align: path.current,
        alignOrigin: [1, 1],
      },
      transformOrigin: "50% 50%",
      ease: "none",
      onComplete: () => navigate("/designs"),
    })
  }

  /**
   * 🔹 Animation when "DEVELOPMENTS" button is clicked
   */
  function developmentClicked() {
    if (buttonLocked) return // 🚫 ignore if already clicked
    setButtonLocked(true)    // 🔒 lock buttons

    const devPath = devPathRef.current

    // Instantly make stroke visible
    gsap.set(devPath, { opacity: 1 })

    // Animate the stroke drawing
    gsap.from(devPath, {
      duration: 4,
      drawSVG: "0%",
      ease: "none",
      onComplete: () => navigate("/developments"),
    })
  }

  return (
    <main className='w-[100%]  h-screen flex flex-col items-center'>
      {/* ------------------ First Section (Designs) ------------------ */}
      <div className='bg-des-white w-full max-w-[1440px] h-full flex flex-col relative' style={{ backgroundImage: `url(${desBgImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>

        {/* Designs Button */}
        <div className='flex justify-center items-end flex-2 md:pb-10 z-3'>
          <button
            disabled={buttonLocked} // 🔒 disable when locked
            className={"text-2xl sm:text-3xl md:text-4xl text-des-organe bg-des-white //            hover:text-des-white hover:bg-des-organe border-4 //            py-2 px-4 sm:px-6 rounded-full font-dev-font1 font-bold //            cursor-pointer duration-150 ease-in-out relative //            "}
            onClick={designClicked}
          >
            DESIGNS
          </button>
        </div>

        {/* "One Creator" Text Box */}
        <div className='flex justify-center items-end flex-1 z-10'>
          <h2
            ref={one_box_Ref}
            className='bg-des-black text-lg sm:text-2xl md:text-5xl text-des-white 
                       p-2 sm:p-3 font-des-font2 w-48 sm:w-60 md:w-96 
                       h-12 sm:h-15 md:h-20 font-bold flex justify-center items-center'
          >
            <span ref={one_text_Ref}>One Creator</span>
          </h2>
        </div>

        {/* Motion Path + Ball Animation */}
        <div className='w-full h-full absolute pointer-events-none z-0 left-0 overflow-hidden' style={{ transform: "scaleX(-1)" }}>
          <svg
            className="w-[110%] h-full"
            style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
            viewBox="0 0 1440 120"
            width="110%"
            height="100%"
          >
            {/* Gradient Fill for Ball */}
            <defs>
              <linearGradient id="paint0_linear_238_6" x1="50%" y1="0%" x2="50%" y2="100%" gradientUnits="userSpaceOnUse">
                <stop offset="0.505157" stopColor="#FF7517" />
                <stop offset="0.505257" stopColor="#111111" />
              </linearGradient>
            </defs>

            {/* Motion Path */}
            <path
              ref={path}
              d="M0 100 H1440"
              stroke="#111111"
              strokeWidth="2"
            />

            {/* Moving Ball */}
            <circle
              ref={ball}
              cx="-50%"
              cy="50%"
              r="40"
              fill="url(#paint0_linear_238_6)"
            />
          </svg>
        </div>
      </div>

      {/* ------------------ Second Section (Developments) ------------------ */}
      <div className='bg-dev-black w-full h-full flex flex-col max-w-[1440px]' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>

        {/* "Two Worlds" Text Box */}
        <div className='flex justify-center items-start flex-1 z-10'>
          <h2
            className='bg-dev-white text-lg sm:text-2xl md:text-5xl text-dev-black 
                       p-2 sm:p-3 font-des-font2 w-48 sm:w-60 md:w-96 
                       h-12 sm:h-15 md:h-20 font-bold flex justify-center items-center'
          >
            <span ref={two_text_Ref}>Two Worlds.</span>
          </h2>
        </div>

        {/* Development Button + SVG Path */}
        <div className='flex justify-center items-start pt-10 flex-2 overflow-hidden'>
          <div className='relative w-full flex justify-center'>

            {/* Development Path */}
            <svg
              className="w-auto h-screen absolute translate-x-20 sm:-translate-x-10 translate-y-5 z-1"
              viewBox="0 0 534 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref={devPathRef}
                stroke="#59CE8F"
                opacity="0"
                strokeWidth="7"
              />
            </svg>

            {/* Developments Button */}
            <button
              disabled={buttonLocked} // 🔒 disable when locked
              className={"relative text-2xl sm:text-3xl md:text-4xl text-dev-cyan hover:text-dev-black hover:bg-dev-cyan bg-dev-black border-4 py-2 px-4 sm:px-6 font-dev-font1 font-bold cursor-pointer duration-150 ease-in-out z-2 "}
              onClick={developmentClicked}
            >
              DEVELOPMENTS
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LandingPage
