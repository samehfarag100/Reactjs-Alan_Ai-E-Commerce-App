import React, { useEffect, useRef } from "react";
import useFetch from "../../Hooks/UseFetch";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useDispatch } from "react-redux";
import { getCategoryDetails, categoryItemTitle } from "../../REdux/CartRedux";
import { useNavigate } from "react-router-dom";
const useCategoriesHooks = () => {
  const [data, loading, error] = useFetch(`/categories?populate=*`);
  const alanBtnRef = useRef({}).current;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryTitleList = data?.map((item) => {
    return item?.attributes?.title;
  });
  // To Open Category By Voice
  useEffect(() => {
    dispatch(categoryItemTitle(categoryTitleList));
    alanBtnRef.btnInstance = alanBtn({
      key: "5c32ae605f0ceb72c97a944ec0d99d9a2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: function ({ command, payload }) {
        if (command === "open-category") {
          if (payload.name === "women") {
            navigate(`/products/1`);
          } else if (payload.name === "men") {
            navigate(`/products/2`);
          } else if (payload.name === "children") {
            navigate(`/products/3`);
          } else if (payload.name === "accessories") {
            navigate(`/products/4`);
          }
        }
      },
    });
    alanBtnRef.btnInstance.activate();
    alanBtnRef.btnInstance.callProjectApi(
      "getCategoryTitle",
      { value: categoryTitleList },
      function (error, result) {
        // handle error and result here
      }
    );
  }, [data]);

  return [data];
};

export default useCategoriesHooks;
