import React from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { removeItem, resetCart } from "../../REdux/CartRedux";

import useCartHooks from "../../Hooks/CartHooks/useCartHooks";
const CartComponent = () => {
  const [products, dispatch, totalPrice, handelPayment] = useCartHooks();

  return (
    <div className="cart">
      {/* ########### Cart Title ########### */}
      <h3 className="product_cart_title">Products In Your Cart</h3>

      {/* ########### Cart Data_1 ########### */}
      {products.map((item) => (
        <div className="product_cart_data" key={item.id}>
          {/* ########### Cart Data Image ########### */}

          <div className="product_cart_image">
            <img src={item.img} />
          </div>
          {/* ########### Cart Data Details ########### */}

          <div className="product_cart_details">
            <h3 className="product_cart_name">{item.title}</h3>
            <p className="product_cart_description">
              {item.desc?.substring(0, 100)}
            </p>
            <p className="product_cart_price">
              {" "}
              {item.quantity} * ${item.price}
            </p>
          </div>

          <div
            className="delete_product"
            onClick={() => dispatch(removeItem(item.id))}
          >
            <DeleteOutlineIcon />
          </div>
        </div>
      ))}

      {/* ########### Cart Subtotal_2 ########### */}
      <div className="product_cart_subtotal">
        <p className="product_cart_subtotal_title">SubTotal</p>
        <p className="product_cart_subtotal_price">${totalPrice()}</p>
      </div>
      {/* ########### Cart Checkout_3 ########### */}
      <div className="product_cart_button" onClick={handelPayment}>
        <button className="checkout_product">Proceed to checkout</button>
      </div>
      {/* ########### Cart Reset_4 ########### */}
      <div className="product_cart_reset">
        <p className="reset_button" onClick={() => dispatch(resetCart())}>
          Reset Cart
        </p>
      </div>
    </div>
  );
};

export default CartComponent;
