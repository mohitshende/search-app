import { useEffect, useState } from "react";

function useGetData(endpoint: string) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProduct = () => {
    try {
      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          setData(data.products);
          setIsLoading(false);
        });
    } catch (error) {
      console.log("error fetching data", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return { data, isLoading };
}

export default useGetData;
