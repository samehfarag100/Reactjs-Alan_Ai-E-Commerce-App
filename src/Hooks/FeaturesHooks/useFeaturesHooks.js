import React from "react";
import useFetch from "../../Hooks/UseFetch";

const useFeaturesHooks = ({type}) => {
  const [data, loading, error] = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return [error, loading, data];
};

export default useFeaturesHooks;
