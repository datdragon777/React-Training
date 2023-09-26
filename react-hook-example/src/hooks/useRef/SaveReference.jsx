/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";

const SaveReference = () => {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);
  /**
   * {
   *   current: 0
   * }
   */

  const handleClick = () => {
    countRef.current = countRef.current + 1;
  };

  useEffect(() => {
    setInterval(() => {
      countRef.current = countRef.current + 1;
      console.log({ countRef: countRef.current });
    }, 1000);
  }, [count]);

  return <button onClick={handleClick}>CLick button</button>;
};

export default SaveReference;
