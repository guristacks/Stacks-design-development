import React from "react";
import { MoveUpRight } from 'lucide-react';

const WhoCta = () => {
  return (
    <div className="who-we-are-two-cta row flex ac jc">
      <div className="two-cta cta1 flex ac">
        <button className="yellow-btn">About stacks</button>
        <button className="yellow-icon">
          <MoveUpRight size={16} />
        </button>
      </div>
      <div className="two-cta cta2 flex ac">
        <button className="grey-btn">Meet the team</button>
        <button className="grey-icon">
          <MoveUpRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default WhoCta;
