import React from "react";
import { MoveUpRight } from 'lucide-react';

const NavLinks = () => {
  return (
    <ul className="nav-links flex ac">
      <li className="look">
        <p>• Have a look around...</p>
      </li>
      <li>
        <a className="links" href="#SERVICES">
          Services <sup>13</sup>
        </a>
      </li>
      <li>
        <a className="links" href="#WORK">
          Work
        </a>
      </li>
      <li>
        <a className="links" href="#ABOUT">
          About
        </a>
      </li>
      <li>
        <a className="links" href="#BLOG">
          Blog
        </a>
      </li>
      <li>
        <a className="links" href="#CONTACT">
          Contact
        </a>
      </li>

      <li className="nav-start flex ac">
        <button className="yellow-btn">Start a project</button>
        <button className="yellow-icon">
          <MoveUpRight size={16} />
        </button>
      </li>
    </ul>
  );
};

export default NavLinks;
