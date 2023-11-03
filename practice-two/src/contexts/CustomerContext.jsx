import { useReducer, createContext, useState, useEffect } from 'react';
import { initialCustomer, customerReducer } from '@stores';

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customerReducer, initialCustomer);
  const [toastInfo, setToastInfo] = useState(null);

  const showToastInfo = (message) => {
    setToastInfo(message);
  };

  useEffect(() => {
    if (toastInfo) {
      const timeout = setTimeout(() => {
        setToastInfo(null); 
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [toastInfo, setToastInfo]);
   
  const customerContextValue = {
    state,
    dispatch,
    toastInfo,
    showToastInfo,
  };

  return (
    <CustomerContext.Provider value={customerContextValue}>
      {children}
    </CustomerContext.Provider>
  );
};
