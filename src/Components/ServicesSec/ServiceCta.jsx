import React from "react";
import { MoveUpRight } from "lucide-react";

const ServiceCta = () => {
  return (
    <div className="two-cta flex ac">
      <button className="yellow-btn">See all services</button>
      <button className="yellow-icon">
        <MoveUpRight size={16} />
      </button>
    </div>
  );
};

export default ServiceCta;
