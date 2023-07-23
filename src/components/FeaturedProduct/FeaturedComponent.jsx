import React, { useEffect, useState } from "react";
import "./Featured.scss";
import CardComponent from "../Card/CardComponent";
import useFeaturesHooks from "../../Hooks/FeaturesHooks/useFeaturesHooks";
const FeaturedComponent = ({ type }) => {
  const [error, loading, data] = useFeaturesHooks({ type });

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> {type} Products </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          ipsum veniam nihil hic sequi voluptas, quod deleniti numquam quae
          laboriosam quas repudiandae at minus consectetur placeat? Pariatur
          nihil alias ipsam.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something Went Wrong!!"
          : loading
          ? "Loading"
          : data
              ?.slice(0, 4)
              .map((item) => <CardComponent item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedComponent;
