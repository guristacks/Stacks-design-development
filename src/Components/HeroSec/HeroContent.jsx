import React from "react";
import HeroCta from "./HeroCta";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <p className="hey">• Hey, We're Stacks 👋🏼</p>
      <h1>
        A web design and <br /> branding agency <br /> in India
      </h1>
      <p className="hero-des">
        Leading web design, development and branding solutions to help
        businesses grow online.
      </p>
      <HeroCta />
    </div>
  );
};

export default HeroContent;
