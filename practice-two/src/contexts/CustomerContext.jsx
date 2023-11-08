import { useReducer, createContext, useState, useEffect } from 'react';
import { initialCustomer, customerReducer } from '@stores';

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customerReducer, initialCustomer);
  // const [toastInfo, setToastInfo] = useState([]);
  // const [showToast, setShowToast] = useState(false);

  // const showToastInfo = (message, type) => {
  //   setToastInfo([message, type]);
  //   setShowToast(!showToast);
  // };

  // useEffect(() => {
  //   if (toastInfo) {
  //     const timeout = setTimeout(() => {
  //       setToastInfo([]);
  //       setShowToast(!showToast);
  //     }, 4000);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [toastInfo, showToast]);

  const customerContextValue = {
    state,
    dispatch,
  };

  return (
    <CustomerContext.Provider value={customerContextValue}>
      {children}
    </CustomerContext.Provider>
  );
};
