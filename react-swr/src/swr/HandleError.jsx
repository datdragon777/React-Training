import useSWR from "swr";

const fetchData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.')
    error.info = await response.json()
    error.status = response.status
    throw error
  }

  return response.json();
};

const HandleError = () => {
  const { data: posts, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetchData
  );

  return (
    <div className="App">
      {error ? (
        <div className="error-message">Error: {error.message}</div>
      ) : (
        <div>
          {posts ? (
            posts.map((post) => (
              <p key={post.id}>{post.title}</p>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default HandleError;
