import React from "react";
import { MoveRight } from "lucide-react";
import { MoveLeft } from "lucide-react";

const BlogArrows = () => {
  return (
    <div className="blog-arrows flex ac">
      <button className="arrow left disabled">
        <MoveLeft size={16} />
      </button>
      <button className="arrow right">
        <MoveRight size={16} />
      </button>
    </div>
  );
};

export default BlogArrows;
