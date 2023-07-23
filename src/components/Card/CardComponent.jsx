import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
const CardComponent = ({ item }) => {
  const urlUpload = "http://localhost:1337";
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card_container">
        <div className="card">
          <div className="images">
            {item?.attributes.isNew && <span>New Season</span>}
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item.attributes.img.data.attributes.url
              }
              className="mainImage"
            />
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item.attributes.img2.data.attributes.url
              }
              className="secondImage"
            />
          </div>
          <h2>{item.attributes.title}</h2>
          <div className="prices">
            <h3 className="oldPrice">
              ${item.oldPrice || item?.attributes.price + 20}
            </h3>
            <h3 className="price">${item.attributes.price}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardComponent;
