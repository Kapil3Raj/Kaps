// HeroSection.jsx
import gsap from "gsap";
import { useEffect, useRef } from "react"
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import bgImg from "../assets/images/desBg3.webp"

gsap.registerPlugin(MotionPathPlugin);



const DesHeroSection = () => {
  const h1_1Ref = useRef(null)
  const h1_2Ref = useRef(null)
  const h1_3Ref = useRef(null)
  const h1_4Ref = useRef(null)
  const ball = useRef(null)
  const path = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    gsap.set(ball.current, { scale: window.innerWidth < 756 ? 1.7 : 1, transformOrigin: "50% 50%" });
    tl.to(ball.current, { duration: 2, rotate: 360, motionPath: { path: path.current, align: path.current, alignOrigin: [0.95, 0.95], }, transformOrigin: "50% 50%", ease: "power1.out", })
      .fromTo(h1_1Ref.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power4.out" })
      .fromTo(h1_2Ref.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power4.out" })
      .fromTo(h1_3Ref.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power4.out" })
      .fromTo(h1_4Ref.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power4.out" })


  }, [])

  return (
    <section className="h-screen w-full max-w-[1440px] flex flex-col items-center justify-start px-6 pb-10 bg-des-white relative" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} >
      <div className="w-full h-40">
        <div className="w-full h-40  absolute left-0 " style={{ transform: "scaleX(-1)" }}>
          <svg
            className="w-[125%] h-full"
            style={{ pointerEvents: "none" }}
            viewBox="0 0  1440 100"
            width="100%"
            height="100%"
          >
            <defs>
              <linearGradient id="paint0_linear_238_6" x1="50%" y1="0%" x2="50%" y2="100%" gradientUnits="userSpaceOnUse">
                <stop offset="0.505157" stopColor="#FF7517" />
                <stop offset="0.505257" stopColor="#111111" />
              </linearGradient>
            </defs>
            <path
              ref={path}
              d="M-50 100 H300"
              stroke="#111111"
              strokeWidth="2"

            />
            <circle
              ref={ball}
              cx="-50%"
              cy="50%"
              r="40"
              fill="url(#paint0_linear_238_6)"
              style={{ position: "absolute" }}
            />
          </svg>

        </div>
      </div>
      <div className="w-full sm:w-[80%] flex flex-col justify-center gap-3 md:gap-5  z-1">
        <h1 className="w-full text-5xl lg:text-7xl font-des-font1 font-black mix-blend-difference">
          <span ref={h1_1Ref} className="text-des-organe block">Designs</span>
          <span ref={h1_2Ref} className="block">That Speak,</span>
          <span ref={h1_3Ref} className="text-des-organe block">Experiences</span>
          <span ref={h1_4Ref} className="block">That Stick.</span>
        </h1>
        <p className="w-full sm:w-[70%] md:text-xl text-des-black font-des-font2">
          I craft visual identities and user-centered designs that are not just beautiful,
          but meaningful, memorable, and built for real impact.
        </p>
        <div className="w-full h-auto flex justify-start items-center gap-2 ">
          <button className="p-1 md:p-2 bg-des-white w-32 md:w-48 font-semibold text-base md:text-xl text-des-organe ring-inset ring-2 rounded-l-full cursor-pointer hover:scale-90 duration-150">Contact Me</button>
          <button className="p-1 md:p-2 bg-des-organe w-32 md:w-48 font-semibold text-base md:text-xl text-des-white rounded-r-full cursor-pointer hover:scale-90 duration-150 ">View Projects</button>
        </div>
      </div>

    </section>
  )
}

export default DesHeroSection
