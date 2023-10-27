import { ACTION_TYPES } from '@constants';

export const initialCustomer = {
  customers: [],
};

export const customerReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE: {
      return { customers: [...state.customers, action.payload], ...state };
    }
    case ACTION_TYPES.UPDATE: {
      const updatedCustomer = state.customers.map((customer) => {
        if (customer.id === action.payload.id) {
          return { ...customer, ...action.payload };
        }
        return customer;
      });
      return { ...state, customers: updatedCustomer };
    }
    case ACTION_TYPES.DELETE: {
      const filteredCustomers = state.customers.filter(
        (customer) => customer.id !== action.payload.id
      );
      return { ...state, customers: filteredCustomers };
    }
    default:
      return state;
  }
};
