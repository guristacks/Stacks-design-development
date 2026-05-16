import React from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavCta from "./NavCta";
import MobileMenuBtn from "./MobileMenuBtn";
import MobileCloseBtn from "./MobileCloseBtn";

const Nav = () => {
  return (
    <nav aria-label="Main Navigation" className="navbar flex ac sb">
      <NavLogo />

      <NavLinks />

      <NavCta />

      <MobileMenuBtn />
      
      <MobileCloseBtn />
    </nav>
  );
};

export default Nav;
