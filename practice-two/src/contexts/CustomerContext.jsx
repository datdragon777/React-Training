import { createContext, useContext, useReducer } from 'react';

const CustomerContext = createContext();

const customerReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_CUSTOMER': {
      return { ...state, customers: [...state.customers, action.payload] };
    }
    case 'UPDATE_CUSTOMER': {
      const updatedCustomer = state.customers.map((customer) => {
        if (customer.id === action.payload.id) {
          return { ...customer, ...action.payload };
        }
        return customer;
      });
      return { ...state, customers: updatedCustomer };
    }
    case 'DELETE_CUSTOMER': {
      const filteredCustomers = state.customers.filter(
        (customer) => customer.id !== action.payload
      );
      return { ...state, customers: filteredCustomers };
    }
    default:
      return state;
  }
};

const CustomerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customerReducer, { customer: [] });
  return (
    <CustomerProvider value={{ state, dispatch }}>{children}</CustomerProvider>
  );
};

const useCustomerContext = () => {
  return useContext(CustomerContext);
};

export { CustomerProvider, useCustomerContext };
