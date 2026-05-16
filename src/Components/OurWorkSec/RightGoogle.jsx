import React from "react";
import { MoveUpRight } from "lucide-react";

const RightGoogle = () => {
  return (
    <div className="google flex f-clmn">
      <h3>
        Like what <br /> you see?
      </h3>
      <div className="two-cta flex ac">
        <button className="yellow-btn">Contact us</button>
        <button className="yellow-icon">
          <MoveUpRight size={16} />
        </button>
      </div>
      <div className="g-stars flex ac">
        <div className="stars">★★★★★</div>
        <div className="google-img">
          <img
            src="Images/Work/google.webp"
            srcset="
                          Images/Work/google.webp 90w,
                          Images/Work/google.webp 180w
                          "
            sizes="90px"
            width="90"
            height="30"
            loading="lazy"
            alt="Google logo"
          />
        </div>
        <p>reviews</p>
      </div>
    </div>
  );
};

export default RightGoogle;
