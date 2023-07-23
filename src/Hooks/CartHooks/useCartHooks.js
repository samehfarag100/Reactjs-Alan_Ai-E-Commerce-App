import React, { useEffect, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequst } from "../../makeRequst";
import { useDispatch, useSelector } from "react-redux";

const useCartHooks = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });

    return total.toFixed(2);
  };
  const stripePromise = loadStripe(
    "pk_test_51L1adLH4O1Xn203MOzIhneKGtlKv7MiBzjykb1lZYOWjP3VJ46Q6zQEXXZOTJtZmFEO2BWhzXODWgfRhDnWgApfZ00wiPO82d2"
  );

  const handelPayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequst.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return [products, dispatch, totalPrice, handelPayment];
};

export default useCartHooks;
