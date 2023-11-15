import useUser from "../hooks/useUser";

const Content = () => {
  const { user, isLoading } = useUser();
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <h1>Your info:</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  );
};

export default Content;
