import React from "react";
import BlogCard from "./BlogCard";

const BlogRight = () => {
  const BlogCards = [
    {
      img: "Images/Blogs/blog-1.webp",
      readTime: "• 2 min read",
      title: (
        <>
          Why did Rise at Seven <br /> choose Stacks
        </>
      ),
      description:
        "It always has a feel good factor when another agency instructs us to totally rebrand their....",
    },
    {
      img: "Images/Blogs/blog-2.webp",
      readTime: "• 6 min read",
      title: (
        <>
          Our Culture, Our Value & <br /> Our Studio
        </>
      ),
      description:
        "In our own words, how important culture, values and studio environment is to us as a web...",
    },
    {
      img: "Images/Blogs/blog-3.webp",
      readTime: "• 10 min read",
      title: (
        <>
          Why haven’t we upscaled <br /> our web design agency?
        </>
      ),
      description:
        "Co-Founder of Stacks explains why we haven't turned our digital agency of 10 staff into...",
    },
    {
      img: "Images/Blogs/blog-4.webp",
      readTime: "• 4 min read",
      title: (
        <>
          Why our studio outside of <br /> Punjab works for us
        </>
      ),
      description:
        "Hi, I'm someone, Co-Founder here at Stacks. I started my web career 18 years ago as a...",
    },
    {
      img: "Images/Blogs/blog-5.webp",
      readTime: "• 6 min read",
      title: (
        <>
          Types of clients we want <br /> to work with
        </>
      ),
      description:
        "Here at Stacks in Punjab, we want to creates website for nice people. Here's a list of...",
    },
    {
      img: "Images/Blogs/blog-6.webp",
      readTime: "• 4 min read",
      title: (
        <>
          Why I chose to work for a <br /> small design agency
        </>
      ),
      description:
        "The size of the business you work for should be well-considered when looking for a job...",
    },
  ];

  return (
    <div className="blog-right flex" id="blogSlider">
      {BlogCards.map((Card, idx) => (
        <BlogCard
          key={idx}
          img={Card.img}
          readTime={Card.readTime}
          title={Card.title}
          des={Card.description}
        />
      ))}
    </div>
  );
};

export default BlogRight;
