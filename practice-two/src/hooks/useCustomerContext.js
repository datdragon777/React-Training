import { useContext } from 'react';
import { CustomerContext } from '@contexts';

const useCustomerContext = () => {
  const {state, dispatch, toastInfo, showToastInfo} = useContext(CustomerContext);
 
  return {state, dispatch, toastInfo, showToastInfo};
};

export default useCustomerContext;
