import React from "react";

const InnerBrands = (props) => {
  return (
    <div className="inner flex ac">
      <img
        loading="lazy"
        src={props.img}
        alt="Trusted Brands Logo"
      />
    </div>
  );
};

export default InnerBrands;
