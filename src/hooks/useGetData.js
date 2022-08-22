import { useState, useEffect } from "react";
export const useGetData = (counter) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = () => {
      const response = fetch(`https://picsum.photos/id/${counter}/200/200`);
      return response;
    };
    getData()
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((error) => setError(error));
  }, [counter]);
  return { data, error };
};
