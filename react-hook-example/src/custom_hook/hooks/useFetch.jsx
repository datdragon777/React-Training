import { useEffect } from "react";
import useReducer from "./useReducer";

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "fetchAPI/request":
      return { ...state, isLoading: action.isLoading };
    case "fetchAPI/success":
    case "fetchAPI/error":
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        data: action.data,
      };
    default:
      return state;
  }
};

const useFetch = (url) => {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: [],
    isLoading: false,
    isError: null,
  });

  useEffect(() => {
    (async () => {
      dispatch({ type: "fetchAPI/request", isLoading: true });
      try {
        const res = await fetch(url);
        const { data } = await res.json();
        dispatch({
          type: "fetchAPI/success",
          isLoading: false,
          isError: null,
          data,
        });
      } catch (error) {
        dispatch({
          type: "fetchAPI/success",
          isLoading: false,
          isError: error,
          data: [],
        });
      }
    })();
  }, [url]);

  return { ...state };
};

export default useFetch;
