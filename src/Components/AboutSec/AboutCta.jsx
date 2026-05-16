import React from "react";
import { MoveUpRight } from "lucide-react";

const AboutCta = () => {
  return (
    <div className="about-cta flex ac">
      <button className="yellow-btn">About stacks</button>
      <button className="yellow-icon">
        <MoveUpRight size={16} />
      </button>
    </div>
  );
};

export default AboutCta;
