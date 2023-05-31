'use client'

import React, { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Landing from "./Landing/landing";
import Footer from "./Footer/footer";

function About() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.075,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("lenis-scroll");

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return <div>
  <Landing />
      <Footer />
      </div>
}

export default About;