import useUser from "../hooks/useUser";

const Avatar = () => {
  const { user, isLoading } = useUser();
  if (isLoading) return <h1>Loading...</h1>;

  return <div>{user.username}</div>;
};

export default Avatar;
