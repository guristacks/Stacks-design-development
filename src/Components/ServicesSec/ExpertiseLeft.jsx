import React from "react";
import { Play } from 'lucide-react';

const ExpertiseLeft = () => {
  return (
    <div className="expertise-left flex">
      <div className="hear flex jc ac">
        <div className="hear-img">
          <img
            loading="lazy"
            src="Images/Extras/Guri.WEBP"
            alt="Website's founder image"
          />
          <a href="#EXPERTS">
            <Play size={16} />
          </a>
        </div>
        <div className="hear-col flex f-clmn">
          <h4>
            <a href="#EXPERTS">Hear from Guri</a>
          </h4>
          <p>
            <a href="#EXPERTS">Founder of Stacks</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseLeft;
