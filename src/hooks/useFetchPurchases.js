import { useEffect, useState } from "react";

const apiUrl = "https://idme.s3.amazonaws.com/interview/data.json";

const useFetchPurchases = () => {
  const [purchases, setPurchases] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(apiUrl, { mode: "cors" })
      .then((res) => res.json())
      .then((res) => {
        setPurchases(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    purchases,
    isLoading,
  };
};

export default useFetchPurchases;
