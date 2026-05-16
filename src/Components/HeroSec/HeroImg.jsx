import React from "react";

const HeroImg = () => {
  return (
    <div className="hero-image">
      <img
        src="/Images/Hero/hero-bg.webp"
        loading="eager"
        fetchpriority="high"
        width="1920"
        height="1080"
        alt="Main background hero image"
      />
    </div>
  );
};

export default HeroImg;
