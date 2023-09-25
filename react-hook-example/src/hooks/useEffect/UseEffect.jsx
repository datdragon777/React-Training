import { useState, useEffect } from "react";

const UseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const callData = async () => {
      try {
        console.log("re-render");
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${resourceType}`
        );
        if (!response.ok) {
          throw new Error("Having some problems");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        return Error("Having some problem when fetching data!");
      }
    };
    callData();
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name || item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default UseEffect;
