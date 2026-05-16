import React from "react";
import { MoveUpRight } from "lucide-react";

const HeroCta = () => {
  return (
    <div className="cta-set flex ac jc">
      <div className="two-cta flex ac">
        <button className="yellow-btn">View our work</button>
        <button className="yellow-icon">
          <MoveUpRight size={16} />
        </button>
      </div>
      <div className="two-cta flex ac">
        <button className="grey-btn">Get in touch</button>
        <button className="grey-icon">
          <MoveUpRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default HeroCta;
