import React from "react";
import BlogLeft from "./BlogLeft";
import BlogRight from "./BlogRight";

const Blogs = () => {
  return (
    <section id="BLOG" className="blogs">
      <div className="container">
        <div className="blog-section flex">
          <BlogLeft />
          <BlogRight />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
