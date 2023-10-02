import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useUser = () => {
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/users/5`,
    fetcher
  );
  return {
    user: data,
    isLoading,
    isError: error,
  };
};

export default useUser;
