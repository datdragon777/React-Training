import { useState } from "react";
import useSWR from "swr";

const fetchData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

// eslint-disable-next-line react/prop-types
const Page = ({ index }) => {
  const { data: posts, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts?_page=${index}&_limit=10`,
    fetchData
  );

  return (
    <div className="App">
      {error ? (
        <div className="error-message">Error: {error.message}</div>
      ) : (
        <div>
          {posts ? (
            posts.map((post) => <p key={post.id}>{post.title}</p>)
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      )}
    </div>
  );
};

const Pagination = () => {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div>
      <Page index={pageIndex} />
      <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
