import React from "react";

const BlogCard = (props) => {
  return (
    <div className="blog flex f-clmn">
      <a href="">
        <img loading="lazy" src={props.img} alt="Blog image" />
      </a>
      <p>{props.readTime}</p>
      <h3>
        <a href="#BLOG">
          {props.title}
        </a>
      </h3>
      <p>
        <a href="#BLOG">
          {props.des}
        </a>
      </p>
    </div>
  );
};

export default BlogCard;
