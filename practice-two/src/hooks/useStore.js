import { useContext } from 'react';
import { CustomerContext } from '@contexts';

const useStore = () => {
  const [state, dispatch] = useContext(CustomerContext);

  return [state, dispatch];
};

export default useStore;
