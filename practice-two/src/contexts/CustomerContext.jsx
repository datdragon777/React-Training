import { useReducer, createContext, useCallback } from 'react';
import {
  initialCustomer,
  customerReducer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from '@stores';

export const CustomerContext = createContext();

const CustomerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customerReducer, initialCustomer);

  const handleCreateCustomer = useCallback(
    (customer) => {
      dispatch(createCustomer(customer));
    },
    [dispatch]
  );

  const handleUpdateCustomer = useCallback(
    (customer) => {
      dispatch(updateCustomer(customer));
    },
    [dispatch]
  );

  const handleDeleteCustomer = useCallback(
    (customer) => {
      dispatch(deleteCustomer(customer));
    },
    [dispatch]
  );

  const contextValue = {
    state,
    handleCreateCustomer,
    handleUpdateCustomer,
    handleDeleteCustomer,
  };

  return (
    <CustomerContext.Provider value={contextValue}>
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerProvider;
