import { useReducer, createContext } from 'react';
import { initialCustomer, customerReducer } from '@stores';
import { actionReducerCustomer } from '@stores';
import { ACTION_TYPES_CUSTOMER } from '@constants';

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customerReducer, initialCustomer);

  const getListCustomerDispatch = (data) => {
    dispatch(actionReducerCustomer(ACTION_TYPES_CUSTOMER.GET_LIST, data));
  };

  const createCustomerDispatch = (data) => {
    dispatch(actionReducerCustomer(ACTION_TYPES_CUSTOMER.ADD, data));
  };

  const updateCustomerDispatch = (data) => {
    dispatch(actionReducerCustomer(ACTION_TYPES_CUSTOMER.UPDATE, data));
  };

  const deleteCustomerDispatch = (data) => {
    dispatch(actionReducerCustomer(ACTION_TYPES_CUSTOMER.DELETE, data));
  };

  const customerContextValue = {
    state,
    getListCustomerDispatch,
    createCustomerDispatch,
    updateCustomerDispatch,
    deleteCustomerDispatch,
  };

  return (
    <CustomerContext.Provider value={customerContextValue}>
      {children}
    </CustomerContext.Provider>
  );
};
