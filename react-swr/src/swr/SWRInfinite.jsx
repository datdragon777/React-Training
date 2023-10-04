import useSWRInfinite from "swr/infinite";

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;
  return `https://jsonplaceholder.typicode.com/posts?_page=${pageIndex}&_limit=10`;
};

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

const SWRInfinite = () => {
  const { data, size, setSize } = useSWRInfinite(getKey, fetchData);
  if (!data) return "loading";

  let totalPosts = 0;
  for (let i = 0; i < data.length; i++) {
    totalPosts += data[i].length;
  }

  return (
    <div className="App">
      
      <p>{totalPosts} posts listed</p>
      {data.map((posts) => {
        return posts.map((post) => <div key={post.id}>{post.title}</div>);
      })}
      <button onClick={() => setSize(size + 1)}>Load more</button>
    </div>
  );
};

export default SWRInfinite;
