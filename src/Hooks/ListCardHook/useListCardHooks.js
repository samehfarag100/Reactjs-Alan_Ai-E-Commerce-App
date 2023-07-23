import React, { useCallback, useEffect, useRef } from "react";
import useFetch from "../../Hooks/UseFetch";
import UserAlan from "../../Hooks/UserAlan";
import { useDispatch } from "react-redux";
import { getAllProduct, getDetailsForOneProduct } from "../../REdux/CartRedux";
import alanBtn from "@alan-ai/alan-sdk-web";

const useListCardHooks = ({ catId, maxPrice, sort, selectedSubCategory }) => {
  const dispatch = useDispatch();
  const alanBtnRef = useRef({}).current;

  const [data, loading, error] = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${selectedSubCategory.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}`
  );
  const productTitleList = data?.map((item) => {
    return item?.attributes?.title;
  });
  console.log(data);

  useEffect(() => {
    dispatch(getAllProduct(productTitleList));
    dispatch(getDetailsForOneProduct(data));
    alanBtnRef.btnInstance = alanBtn({
      key: "5c32ae605f0ceb72c97a944ec0d99d9a2e956eca572e1d8b807a3e2338fdd0dc/stage",
    });
    alanBtnRef.btnInstance.activate();
    alanBtnRef.btnInstance.callProjectApi(
      "getProductTitle",
      { value: productTitleList },
      function (error, result) {
        // handle error and result here
      }
    );
  }, [data]);

  return [loading, data];
};

export default useListCardHooks;
