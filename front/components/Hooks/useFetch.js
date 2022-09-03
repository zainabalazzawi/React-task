import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, [url]);
  return { data };
};

export default useFetch;
