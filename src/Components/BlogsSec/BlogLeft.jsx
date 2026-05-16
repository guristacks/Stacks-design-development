import React from "react";


import BlogArrows from "./BlogArrows";
import BlogCta from "./BlogCta";

const BlogLeft = () => {
  return (
    <div className="blog-left flex f-clmn">
      <p className="title">• Blog</p>
      <h2>The latest from our design studio</h2>

      <div className="arrow-cta flex f-clmn">
        <BlogCta />
        <BlogArrows />
      </div>
    </div>
  );
};

export default BlogLeft;
