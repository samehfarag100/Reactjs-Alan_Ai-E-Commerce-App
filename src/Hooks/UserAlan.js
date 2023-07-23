import React, { useCallback, useEffect, useRef, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  categoryItemTitle,
  hiddenCart,
  removeItem,
  showCart,
} from "../REdux/CartRedux";
import useFetch from "./UseFetch";
import { makeRequst } from "../makeRequst";
import { loadStripe } from "@stripe/stripe-js";
const COMMANDS = {
  OPEN_CART: "open-cart",
  CLOSE_CART: "close-cart",
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
  PAYMENT_METHOD: "pay-now",
  OPEN_CATEGORY: "open-category",
};
const UserAlan = () => {
  const [alanInstance, setAlanInstance] = useState();
  const products = useSelector((state) => state.cart.products);
  const oneProducts = useSelector((state) => state.cart.oneProduct);
  const categoryInfo = useSelector((state) => state.cart.allCategoryDetails);
  const alanBtnRef = useRef({}).current;
  const dispatch = useDispatch();
  const [data, loading, error] = useFetch(`/categories?populate=*`);
  const categoryTitleList = data?.map((item) => {
    return item?.attributes?.title;
  });

  const arr = new Array(categoryTitleList);
  const item = arr.find((i) => i === "women");
  console.log(item);
  //////////////////////////////////  to open cart //////////////////////////////////
  const openCart = useCallback(() => {
    if (products.length === 0) {
      alanInstance.playText("You have no item in your cart");
    } else {
      alanInstance.playText("opening cart");
      dispatch(showCart());
    }
  }, [alanInstance, products]);
  ////////////////////////////////// to close cart //////////////////////////////////
  const closeCart = useCallback(() => {
    alanInstance.playText("Close cart");
    dispatch(hiddenCart());
  }, [alanInstance]);

  ////////////////////////////////// add to cart //////////////////////////////////
  const addItem = useCallback(({ detail: { name, quantity } }) => {
    const item = oneProducts.find(
      (i) => i?.title?.toLowerCase() === name.toLowerCase()
    );

    if (item == null) {
      alanInstance.playText("this item not found here");
    } else {
      dispatch(
        addToCart({
          id: item.id,
          title: item.title,
          desc: item.desc,
          price: item.price,
          img: item.img,
          quantity,
        })
      );
      alanInstance.playText(`added ${quantity} of the ${name} to cart`);
    }
  });
  ////////////////////////////// remove to cart //////////////////////////////////
  const removedItem = useCallback(({ detail: { name } }) => {
    const item = products.find(
      (e) => e?.title?.toLowerCase() === name.toLowerCase()
    );

    if (item == null) {
      alanInstance.playText("this item not found here");
    } else {
      dispatch(removeItem(item?.id));
      alanInstance.playText(`removed ${name} from cart`);
    }
  });

  ///////////////////// Open any By Voice /////////////////////////
  const openCategory = useCallback(() => {
      alanInstance.playText("You have no item in your cart");
      
  }, [alanInstance]);


  ///////////////////// Payment Method By Voice /////////////////////////
  const stripePromise = loadStripe(
    "pk_test_51L1adLH4O1Xn203MOzIhneKGtlKv7MiBzjykb1lZYOWjP3VJ46Q6zQEXXZOTJtZmFEO2BWhzXODWgfRhDnWgApfZ00wiPO82d2"
  );
  const payNow = async () => {
    if (products.length === 0) {
      alanInstance.playText("There is no item in cart to make payment");
    } else {
      alanInstance.playText("I will do that ");
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
    }
  };

  useEffect(() => {
    window.addEventListener(COMMANDS.OPEN_CART, openCart);
    window.addEventListener(COMMANDS.CLOSE_CART, closeCart);
    window.addEventListener(COMMANDS.ADD_ITEM, addItem);
    window.addEventListener(COMMANDS.REMOVE_ITEM, removedItem);
    window.addEventListener(COMMANDS.PAYMENT_METHOD, payNow);
    window.addEventListener(COMMANDS.OPEN_CATEGORY, openCategory);
    return () => {
      window.removeEventListener(COMMANDS.OPEN_CART, openCart);
      window.removeEventListener(COMMANDS.CLOSE_CART, closeCart);
      window.removeEventListener(COMMANDS.ADD_ITEM, addItem);
      window.removeEventListener(COMMANDS.REMOVE_ITEM, removedItem);
      window.removeEventListener(COMMANDS.PAYMENT_METHOD, payNow);
      window.removeEventListener(COMMANDS.OPEN_CATEGORY, openCategory);
    };
  }, [openCart, closeCart, addItem, removedItem, openCategory]);

  ////////////// This Code Fire Alan Ai /////////////////////
  useEffect(() => {
    if (alanInstance != null) return;

    setAlanInstance(
      alanBtn({
        key: "5c32ae605f0ceb72c97a944ec0d99d9a2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: ({ command, payload }) => {
          window.dispatchEvent(new CustomEvent(command, { detail: payload }));
        },
      })
    );
  }, []);
  return null;
};

export default UserAlan;
