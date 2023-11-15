import { useState } from "react";

const useReducer = (reducer, initValue) => {
  const [state, setState] = useState(initValue);

  const dispatch = (action) => {
    const newState = reducer(state, action);
    setState(newState);
  };

  return [state, dispatch];
};

export default useReducer;
