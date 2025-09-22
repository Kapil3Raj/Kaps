import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Navbar from '../components/Navbar.jsx'
import DevHeroSection from '../components/DevHeroSection.jsx';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Development = () => {
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true
    });
  }, []);

  return (
    <main >
      <div id="smooth-wrapper" className='bg-dev-black'>
        <div id="smooth-content" className='flex flex-col items-center'>
          <Navbar />
          <DevHeroSection />
        </div>
      </div>
    </main>
  )
}

export default Development
