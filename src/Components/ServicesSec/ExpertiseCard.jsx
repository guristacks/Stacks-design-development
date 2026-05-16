import React from "react";

const ExpertiseCard = (props) => {
  return (
    <div className="expertises flex">
      <img
        loading="lazy"
        src={props.img}
        alt="Our service image"
      />
      <h3>
        <a href="#EXPERTS">{props.title}</a>
      </h3>
    </div>
  );
};

export default ExpertiseCard;
