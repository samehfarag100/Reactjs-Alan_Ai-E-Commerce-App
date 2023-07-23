import React from "react";
import SliderComponent from "../../components/Slider/SliderComponent";
import "./Home.scss";
import FeaturedComponent from "../../components/FeaturedProduct/FeaturedComponent";
import CategoriesComponent from "../../components/Categories/CategoriesComponent";
import ContactComponent from "../../components/Contact/ContactComponent";
import useFetch from "../../Hooks/UseFetch";
const HomePage = () => {
  const [data, loading, error] = useFetch(`/products?populate=*`)

  return (
    <div className="home">
      <SliderComponent />
      <FeaturedComponent type={"featured"} />
      <CategoriesComponent />
      <FeaturedComponent type={"Trending"} />
      <ContactComponent/>
    </div>
  );
};

export default HomePage;
