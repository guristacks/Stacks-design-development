import React from "react";

const WorkLeftCard = (props) => {
  return (
    <div className="work flex f-clmn">
      <div className="work-cat flex ac">
        <p>{props.tag1}</p>
        <p>{props.tag2} </p>
        <p>{props.tag3}</p>
      </div>
      <a href="#WORK">
        <img
          src={props.img}
          srcset={props.srcset}
          sizes="(max-width: 768px) 100vw, 50vw"
          width="685"
          height="457"
          loading="lazy"
          alt="Project image"
        />
      </a>
      <p>
        <a href="#WORK">{props.date}</a>
      </p>
      <h3>
        <a href="#WORK">
          {props.title}
        </a>
      </h3>
    </div>
  );
};

export default WorkLeftCard;
