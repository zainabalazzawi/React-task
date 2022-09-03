import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState();

  useEffect(() => {}, []);
  return { data };
};

export default useFetch;
