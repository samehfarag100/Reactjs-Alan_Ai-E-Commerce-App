import React from "react";
import "./Footer.scss";
const FooterComponent = () => {
  return (
    <div className="footer">
      {/* ########### Footer Top ########### */}
      <div className="top">
        <div className="item">
          <h1>Category</h1>
          <span>women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
            aliquid perferendis aperiam porro saepe magnam alias corporis iusto
            maxime? Rerum, possimus. Facere eligendi autem aperiam expedita
            totam, mollitia voluptate excepturi!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
            aliquid perferendis aperiam porro saepe magnam alias corporis iusto
            maxime? Rerum, possimus. Facere eligendi autem aperiam expedita
            totam, mollitia voluptate excepturi!
          </span>
        </div>
      </div>
      {/* ########### Footer Bottom ########### */}
      <div className="bottom">
        <div className="left">
          <span className="logo">UAE Store</span>
          <span className="copyright">Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/imgs/payment.png" />
        </div>
      </div>
      
    </div>
  );
};

export default FooterComponent;
