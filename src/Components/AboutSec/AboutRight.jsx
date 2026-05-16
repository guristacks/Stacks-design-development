import React from "react";
import AboutCta from "./AboutCta";

const AboutRight = () => {
  return (
    <div className="about-right">
      <p>
        Born in 2010, Stacks is an Award-Winning Web Design Agency based in
        India specialising in{" "}
        <span>
          <a href="#ABOUT">Web Design</a>
        </span>
        ,{" "}
        <span>
          <a href="#ABOUT">Branding</a>
        </span>
        ,
        <span>
          <a href="#ABOUT">eCommerce</a>
        </span>
        , Digital Marketing and Organic SEO.
      </p>
      <br />
      <p>
        Our content management system of choice is{" "}
        <span>
          <a href="#ABOUT">Craft CMS</a>
        </span>{" "}
        rather than WordPress, allowing you to manage your website pages,
        content and SEO easily. We're proud to be a verified Craft CMS and{" "}
        <span>
          <a href="#ABOUT">Craft Commerce</a>
        </span>{" "}
        professional partner. And we build
        <span>
          <a href="#ABOUT">Shopify</a>
        </span>
        projects every week, a super intuitive eCommerce platform for clients to
        take their business to the next level.
      </p>
      <br />
      <p>
        So, if you need a professional India Web Design Agency to support you
        with your branding or website design,{" "}
        <span>
          <a href="#ABOUT">get in touch</a>
        </span>{" "}
        <a href="#ABOUT">with us today.</a>
      </p>

      <AboutCta />
    </div>
  );
};

export default AboutRight;
