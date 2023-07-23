import React, { useEffect, useState } from "react";
import { makeRequst } from "../makeRequst";

const useFetch =  (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await makeRequst.get(url);
        setData(response.data.data);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };
    fetchData();
  }, [url]);

  return [ data, loading, error] ;
};

export default useFetch;
