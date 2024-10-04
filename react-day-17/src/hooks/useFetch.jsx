import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);

  async function fetchApi() {
    const response = await fetch(url);
    const responseData = await response.json();
    setData((data) => responseData);
    setLoading(false);
  }
  useEffect(() => {
    setLoading(true);
    fetchApi();
  }, []);

  return { data, loading };
};

export default useFetch;
