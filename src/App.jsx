import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/HeroSec/Hero";
import Who from "./Components/WhoWeAreSec/Who";
import Brands from "./Components/TrustedBrandsSec/Brands";
import Work from "./Components/OurWorkSec/Work";
import Services from "./Components/ServicesSec/Services";
import About from "./Components/AboutSec/About";
import Together from "./Components/TogetherSec/Together";
import Blogs from "./Components/BlogsSec/Blogs";
import Ai from "./Components/AiSec/Ai";
import Script from "./Script";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <main role="main">
      <Script />
      <Header />
      <Hero />
      <Who />
      <Brands />
      <Work />
      <Services />
      <About />
      <Together />
      <Blogs />
      <Ai />
      <Footer />
    </main>
  );
};

export default App;
