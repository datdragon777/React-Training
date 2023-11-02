import { useReducer, createContext } from 'react';
import { initialCustomer, customerReducer } from '@stores';

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customerReducer, initialCustomer);
  
  return (
    <CustomerContext.Provider value={[state, dispatch]}>
      {children}
    </CustomerContext.Provider>
  );
};
