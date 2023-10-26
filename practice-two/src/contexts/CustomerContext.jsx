import { useReducer, createContext } from 'react';
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

  const handleCreateCustomer = (customer) => {
    dispatch(createCustomer(customer));
  };

  const handleUpdateCustomer = (customer) => {
    dispatch(updateCustomer(customer));
  };

  const handleDeleteCustomer = (customer) => {
    dispatch(deleteCustomer(customer));
  };

  const constextValue = {
    state,
    handleCreateCustomer,
    handleUpdateCustomer,
    handleDeleteCustomer,
  };

  return (
    <CustomerContext.Provider value={constextValue}>
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerProvider;
