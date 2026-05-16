import React from "react";
import InnerBrands from "./InnerBrands";

const Brands = () => {
  const BrandsImg = [
    {
      img: "Images/Brands/brand-1.webp",
    },
    {
      img: "Images/Brands/brand-2.webp",
    },
    {
      img: "Images/Brands/brand-3.webp",
    },
    {
      img: "Images/Brands/brand-4.webp",
    },
    {
      img: "Images/Brands/brand-5.webp",
    },
    {
      img: "Images/Brands/brand-6.webp",
    },
    {
      img: "Images/Brands/brand-7.webp",
    },
    {
      img: "Images/Brands/brand-8.webp",
    },
    {
      img: "Images/Brands/brand-9.webp",
    },
    {
      img: "Images/Brands/brand-10.webp",
    },
    {
      img: "Images/Brands/brand-11.webp",
    },
    {
      img: "Images/Brands/brand-12.webp",
    },
    {
      img: "Images/Brands/brand-13.webp",
    },
  ];

  return (
    <section className="trusted-brands">
      <div className="container">
        <div className="outter flex ac">
          <div className="track flex ac">
            {BrandsImg.map((imgs, idx) => (
              <InnerBrands key={idx} img={imgs.img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
