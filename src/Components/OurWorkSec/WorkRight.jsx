import React from "react";
import WorkRightCard from "./WorkRightCard";
import RightGoogle from "./RightGoogle";

const WorkRight = () => {
  const RightCards = [
    {
      tag1: "Shopify",
      tag2: "Website",
      tag3: "SEO",
      img: "Images/Work/work-3.webp",
      date: "2024 • Nth Degree",
      srcset:
        "Images/Work/work-3.webp 400w, Images/Work/work-3.webp 800w, Images/Work/work-3.webp 1200w",

      title: (
        <>
          Furniture designed to <br /> the greatest extent
        </>
      ),
    },
    {
      tag1: "SEO",
      tag2: "Branding",
      tag3: "Content",
      img: "Images/Work/work-4.webp",
      date: "2024 • YMC",
      srcset:
        "Images/Work/work-4.webp 400w, Images/Work/work-4.webp 800w, Images/Work/work-4.webp 1200w",
      title: (
        <>
          Redefining a leading <br /> global talent group
        </>
      ),
    },
  ];

  return (
    <div className="work-right flex f-clmn">
      {RightCards.map((card, idx) => (
        <WorkRightCard
          key={idx}
          tag1={card.tag1}
          tag2={card.tag2}
          tag3={card.tag3}
          img={card.img}
          srcset={card.srcset}
          date={card.date}
          title={card.title}
        />
      ))}

      <RightGoogle />
    </div>
  );
};

export default WorkRight;
