import React from "react";
import HeroSlider from "../../components/heroslider/HeroSlider";
import Categories from "../../components/category/Categories";

const Home = () => {
  document.title = "Home | Cherry Cart";
  return (
    <div>
      <HeroSlider />
      <Categories />
    </div>
  );
};

export default Home;
