import React from "react";
import WorkLeft from "./WorkLeft";
import WorkRight from "./WorkRight";

const Work = () => {
  return (
    <section id="WORK" className="our-work">
      <div className="container">
        <div className="main-work flex sb">

          <WorkLeft />

          <WorkRight />
        </div>
      </div>
    </section>
  );
};

export default Work;
