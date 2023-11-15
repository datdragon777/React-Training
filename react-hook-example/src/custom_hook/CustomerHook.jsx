import useFetch from "./hooks/useFetch";

const CustomerHook = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useFetch("https://reqres.in/api/users");

  if (isError) {
    return "Something wrong!!!!";
  }

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    users.map((user) => (
      <p key={user.id}>
        {user.first_name} {user.last_name}
      </p>
    ))
  );
};

export default CustomerHook;
