import { useEffect, useState } from "react";

export const Watch = () => {
  const [date, setDate] = useState(new Date());
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  useEffect(() => {
    setTimeout(() => setDate(new Date()));
  }, [date]);
  return <div>{`${day}-${month}-${year}/ ${hour}:${minutes}:${seconds}`}</div>;
};
