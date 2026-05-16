import React from "react";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

const About = () => {
  return (
    <section id="ABOUT" className="about-us">
      <div className="container">
        <div className="about-row flex sb">
          <AboutLeft />
          <AboutRight />
        </div>
      </div>
    </section>
  );
};

export default About;
