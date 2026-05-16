import React from "react";

import HeroImg from "./HeroImg";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section id="HERO" className="hero">
      <HeroImg />
      <div className="container">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
