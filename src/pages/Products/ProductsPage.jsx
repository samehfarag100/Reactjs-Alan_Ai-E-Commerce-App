import React, { useState } from "react";
import "./Products.scss";
import ListComponent from "../../components/List/ListComponent";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/UseFetch";
const ProductsPage = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const [data, loading, error] = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
    
  
  const handelChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCategory(
      isChecked
        ? [...selectedSubCategory, value]
        : selectedSubCategory.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      {/* ############## Products Left Side ############## */}
      <div className="left">
        {/* ######### Filter Category ######### */}
        <div className="filterItem">
          <h2>Product Category</h2>
          {data?.map((item) => (
            <div className="input_item" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handelChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        {/* ######### Filter Price ######### */}
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="input_item">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        {/* ######### Filter Sorting ######### */}
        <div className="filterItem">
          <h2>Sort by </h2>
          <div className="input_item">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="input_item">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      {/* ############## Products Right Side ############## */}
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/10912814/pexels-photo-10912814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <ListComponent
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          selectedSubCategory={selectedSubCategory}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
