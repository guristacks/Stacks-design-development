import React from "react";
import { MoveUpRight } from "lucide-react";

const BlogCta = () => {
  return (
    <div className="two-cta flex ac">
      <button className="yellow-btn">View our blogs</button>
      <button className="yellow-icon">
        <MoveUpRight size={16} />
      </button>
    </div>
  );
};

export default BlogCta;
