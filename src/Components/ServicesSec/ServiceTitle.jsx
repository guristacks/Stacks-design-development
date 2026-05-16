import React from "react";
import ServiceCta from "./ServiceCta";

const ServiceTitle = () => {
  return (
    <div className="headings flex sb">
      <p className="title">• Our Expertise </p>
      <h2>How we take your business to the next level</h2>
      <div className="our-expertise-para flex f-clmn">
        <p>
          We are a digital marketing agency with expertise, and we’re on a
          mission to help you take the next step in your business.
        </p>
        <ServiceCta />
      </div>
    </div>
  );
};

export default ServiceTitle;
