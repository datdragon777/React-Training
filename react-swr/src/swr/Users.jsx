import useSWR from "swr";

const Users = () => {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users", {
    refreshInterval: 2,
  });

  if (error) return <h1>{error}</h1>;
  return (
    <div className="App">
      {data ? (
        data.map((user) => {
          return <h1 key={user.id}>{user.name}</h1>;
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Users;
