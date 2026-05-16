import React from "react";
import AiContent from "./AiContent";

const Ai = () => {
  return (
    <section className="ai-about-us">
      <div className="ai-img ai-1">
        <img
          loading="lazy"
          src="Images/Work/work-1.webp"
          alt="Showcase image"
        />
      </div>
      <div className="ai-img ai-2">
        <img
          loading="lazy"
          src="Images/Work/work-2.webp"
          alt="Showcase image"
        />
      </div>
      <div className="ai-img ai-3">
        <img
          loading="lazy"
          src="Images/Work/work-3.webp"
          alt="Showcase image"
        />
      </div>
      <div className="ai-img ai-4">
        <img
          loading="lazy"
          src="Images/Work/work-4.webp"
          alt="Showcase image"
        />
      </div>

      <div className="container">
        <AiContent />
      </div>
    </section>
  );
};

export default Ai;
