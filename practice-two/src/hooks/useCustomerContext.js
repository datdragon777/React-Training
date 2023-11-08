import { useContext } from 'react';
import { CustomerContext } from '@contexts';

const useCustomerContext = () => {
  const { state, dispatch } = useContext(CustomerContext);

  return { state, dispatch };
};

export default useCustomerContext;
