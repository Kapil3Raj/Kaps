import gsap from "gsap"; 
import { useRef, useEffect } from "react";
import bgImg from "../assets/images/devBg2.webp";



const DevHeroSection = () => {
  const h1_1 = useRef(null);
  const h1_2 = useRef(null);
  const gradient = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline()

    t1.fromTo(gradient.current,{opacity:0 },{opacity:1,duration:0.8,delay:0.8 ,ease:"none"})
      .fromTo(gradient.current,{opacity:1 },{opacity:0,duration:0.2})
      .fromTo(gradient.current,{opacity:0 },{opacity:1,duration:0.2})
      .fromTo(gradient.current,{opacity:1 },{opacity:0,duration:0.1})
      .fromTo(gradient.current,{opacity:0 },{opacity:1,duration:0.1})
      .fromTo(gradient.current,{opacity:1 },{opacity:0,duration:0.1})
      .fromTo(gradient.current,{opacity:0 },{opacity:1,duration:0.1})
      .fromTo(gradient.current,{opacity:1 },{opacity:0,duration:0.05})
      .fromTo(gradient.current,{opacity:0 },{opacity:1,duration:0.05})
      .fromTo(gradient.current,{opacity:1 },{opacity:0,duration:0.05})
      .fromTo(gradient.current,{opacity:0 },{opacity:1,duration:0.05})
      .fromTo(gradient.current,{opacity:0 },{opacity:1,duration:0.8,ease:"none"})
      .fromTo(h1_1.current, { opacity: 0},{opacity:1, duration: 0.8,ease: "sine.out" })
      .fromTo(h1_2.current, { opacity: 0},{opacity:1, duration: 0.8,ease: "sine.out" })
        
  }, []);

  

  return (
    <section className='bg-dev-black w-full max-w-[1440px] h-screen flex justify-center items-center px-6' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
      <div ref={gradient} className='w-full max-w-[1440px] md:w-[80%] h-40 bg-dev-cyan absolute -top-30 z-1 rounded-full blur-3xl'></div>
      <div className='text-dev-white w-full md:w-[70%] flex flex-col gap-5 md:gap-7 justify-center items-start sm:items-center'>
        <h1 ref={h1_1} className='font-dev-font1 text-4xl lg:text-6xl font-bold text-left sm:text-center'>
          Code That Connects,<br />
          <span ref={h1_2} className='text-dev-cyan'>Solutions That Scale.</span>
        </h1>
        <p className='font-dev-font2 text-sm md:text-lg text-left sm:text-center w-[90%]'>
          I architect robust digital platforms writing clear code and crafting intuitive user flows for maximum impact.
        </p>
        <div className='font-dev-font2 flex gap-3 justify-center '>
          <button ref={button} className="p-1 md:p-2 bg-dev-black w-32 md:w-48 font-bold text-sm md:text-lg text-dev-cyan ring-inset ring-2 cursor-pointer hover:opacity-50" >Contact Me</button>
          <button ref={button}  className="p-1 md:p-2 bg-dev-cyan w-32 md:w-48 font-bold text-sm md:text-lg text-dev-black cursor-pointer hover:opacity-50 duration-150">View Projects</button>
        </div>
      </div>
    </section>
  );
}

export default DevHeroSection;
