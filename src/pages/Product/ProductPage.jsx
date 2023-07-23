import React, { useEffect, useRef, useState } from "react";
import "./Product.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/UseFetch";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getDetailsForOneProduct } from "../../REdux/CartRedux";
import alanBtn from "@alan-ai/alan-sdk-web";
const ProductPage = () => {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantityItem] = useState(1);
  const alanBtnRef = useRef({}).current;
  const dispatch = useDispatch();
  // function to increase item
  const increaseItem = () => {
    setQuantityItem(quantity + 1);
  };
  // function to decrease item
  const decreaseItem = () => {
    setQuantityItem(quantity - 1);
  };
  // url To get single product

  const [data, loading, error] = useFetch(`/products/${id}?populate=*`);
  useEffect(() => {
    const getProductInfo = async () => {
      await dispatch(
         getDetailsForOneProduct({
          id: data?.id,
          title: data?.attributes.title,
          desc: data?.attributes.desc,
          price: data?.attributes.price,
          img:
            process.env.REACT_APP_UPLOAD_URL +
            data?.attributes.img.data.attributes.url,
          quantity,
        })
      );
    };

    getProductInfo();
  }, [data]);



  return (
    <div className="product">
      {/* ############### Product Single Page Left Side ############### */}
      {loading ? (
        "Loading...."
      ) : (
        <>
          <div className="left">
            {/* ############ Left side Part One ############ */}
            <div className="left_side_part_one">
              <img
                className="image_preview"
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                onClick={(e) =>
                  setSelectedImage(
                    process.env.REACT_APP_UPLOAD_URL +
                      data?.attributes?.img?.data?.attributes?.url
                  )
                }
              />
              <img
                className="image_preview"
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                onClick={(e) =>
                  setSelectedImage(
                    process.env.REACT_APP_UPLOAD_URL +
                      data?.attributes?.img2?.data?.attributes?.url
                  )
                }
              />
            </div>
            {/* ############ Left side Part Two ############ */}
            <div className="left_side_part_two">
              <img
                className="main_image"
                src={
                  selectedImage === null
                    ? process.env.REACT_APP_UPLOAD_URL +
                      data?.attributes?.img3?.data?.attributes?.url
                    : selectedImage
                }
              />
            </div>
          </div>
          {/* ############### Product Single Page Right Side ############### */}
          <div className="right">
            {/* ############# Product Data ############# */}
            <div className="product_data">
              <h3 className="product_name">{data?.attributes?.title}</h3>
              <p className="product_price">${data?.attributes?.price}</p>
              <p className="product_description">{data?.attributes?.desc}</p>
            </div>
            {/* ############# Product Quantity ############# */}
            <div className="quantity">
              <button
                disabled={quantity === 1}
                onClick={decreaseItem}
                className={`decries_item ${
                  quantity === 1 && "disabel_button"
                } `}
              >
                -
              </button>
              <span className="item_number">{quantity}</span>
              <button onClick={increaseItem} className="increase_item">
                +
              </button>
            </div>
            {/* ############# Product Add To Cart ############# */}
            <button
              className="add_to_Cart"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img:
                      process.env.REACT_APP_UPLOAD_URL +
                      data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <ShoppingCartIcon /> Add To Cart
            </button>
            {/* ############# Product More Link To Buy ############# */}
            <div className="link">
              <div>
                <FavoriteBorderIcon /> Add To Wish List
              </div>
              <div>
                <BalanceIcon /> Add To Compare
              </div>
            </div>

            {/* ############# Product Details ############# */}
            <div className="product_details">
              <p className="product_brand">
                <span>Vendor : </span> Polo
              </p>
              <p className="product_type">
                <span>Product Type :</span> T-Shirt
              </p>
              <p className="product_tag">
                <span>Tag :</span> T-Shirt, Women, Top
              </p>
            </div>

            <hr />

            {/* ############# Product More Info ############# */}

            <div className="more_details">
              <p className="product_description">Description</p>
              <hr />
              <p className="product_more_info">Additional Information</p>
              <hr />
              <p className="product_faq">Faq</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
