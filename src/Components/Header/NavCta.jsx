import React from "react";
import { MoveUpRight } from 'lucide-react';

const NavCta = () => {
  return (
    <div className="nav-right flex ac">
      <button className="yellow-btn">Start a project</button>
      <button className="yellow-icon">
        <MoveUpRight size={16} />
      </button>
    </div>
  );
};

export default NavCta;
