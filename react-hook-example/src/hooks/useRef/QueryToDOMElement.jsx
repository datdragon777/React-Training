import { useEffect, useRef } from "react";

const QueryToDOMElement = () => {
  const ref = useRef(null);
  console.log(ref);
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <>
      <input type="text" ref={ref} />
      <button>CLICK BUTTON</button>
    </>
  );
};

export default QueryToDOMElement;
