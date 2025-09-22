import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Navbar from '../components/Navbar.jsx'
import DesHeroSection from '../components/DesHeroSection.jsx';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Designs = () => {
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true
    });
  }, []);

  return (
    <main >
      <div id="smooth-wrapper" className='bg-des-white'>
        <div id="smooth-content" className='flex flex-col items-center'>
          <Navbar />
          <DesHeroSection />
        </div>
      </div>
    </main>
  )
}

export default Designs
