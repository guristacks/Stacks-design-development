import React from "react";
import WorkTitle from "./WorkTitle";
import WorkLeftCard from "./WorkLeftCard";

const WorkLeft = () => {
  const LeftCards = [
    {
      tag1: "Branding",
      tag2: "Website",
      tag3: "SEO",
      img: "Images/Work/work-1.webp",
      srcset:
        "Images/Work/work-1.webp 400w, Images/Work/work-1.webp 800w, Images/Work/work-1.webp 1200w",
      date: "2023 • Gary Neville",
      title: (
        <>
          Refreshing Gary <br /> Neville's digital presence
        </>
      ),
    },
    {
      tag1: "SEO",
      tag2: "Branding",
      tag3: "Content",
      img: "Images/Work/work-2.webp",
      srcset:
        "Images/Work/work-2.webp 400w, Images/Work/work-2.webp 800w, Images/Work/work-2.webp 1200w",
      date: "2024 • Sketch Studios",
      title: (
        <>
          A workplace consultancy <br /> creating inspiring environments
        </>
      ),
    },
  ];

  return (
    <div className="work-left flex f-clmn">
      <WorkTitle />
      {LeftCards.map((card, idx) => (
        <WorkLeftCard
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
    </div>
  );
};

export default WorkLeft;
