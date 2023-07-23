import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import CartComponent from "../Cart/CartComponent";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../../REdux/CartRedux";
const NavbarComponent = () => {
  const products = useSelector((state) => state.cart.products);
  const hidden = useSelector((state) => state.cart.openCart.hidden);
  const show = useSelector((state) => state.cart.openCart.hidden);
  // const [openCArt , setOpenCart] = useState(cart)
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="wrapper">
        {/* ########### Navbar Left ########### */}
        <div className="left">
          <div className="item">
            <img src="/imgs/en.png" />
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>

        {/* ########### Navbar Center ########### */}
        <div className="center">
          <Link className="link" to="/">
            UAE Store
          </Link>
        </div>

        {/* ########### Navbar Right ########### */}
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>

          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => dispatch(showCart())}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {!hidden ? <CartComponent /> : null}
    </div>
  );
};
export default NavbarComponent;
