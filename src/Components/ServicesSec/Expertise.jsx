import React from "react";
import ExpertiseLeft from "./ExpertiseLeft";
import ExpertiseCard from "./ExpertiseCard";

const Expertise = () => {
  const Expertises = [
    {
      img: "Images/Expertise/service-1.webp",
      title: "Brand Identity",
    },
    {
      img: "Images/Expertise/service-2.webp",
      title: "Websites",
    },
    {
      img: "Images/Expertise/service-3.webp",
      title: "SEO",
    },
    {
      img: "Images/Expertise/service-4.webp",
      title: "Craft CMS",
    },
    {
      img: "Images/Expertise/service-5.webp",
      title: "Shopify",
    },
  ];

  return (
    <div id="EXPERTS" className="expertise-wrapper flex f-clmn">
      <div className="expertiserow flex">
        <ExpertiseLeft />

        <div className="outter-expertise flex f-clmn">
          {Expertises.map((ex, idx) => (
            <ExpertiseCard key={idx} img={ex.img} title={ex.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
