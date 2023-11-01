import { ACTION_TYPES } from '@constants';

export const initialCustomer = {
  customers: [],
};

export const customerReducer = (state, action) => {
  const { type, payload } = action;
  const { customers } = state;
  switch (type) {
    case ACTION_TYPES.CREATE: {
      return { ...state, customers: [...customers, payload] };
    }
    case ACTION_TYPES.UPDATE: {
      const updatedCustomer = customers.map((customer) => {
        if (customer.id === payload.id) {
          return { ...customer, ...payload };
        }
        return customer;
      });
      return { ...state, customers: updatedCustomer };
    }
    case ACTION_TYPES.DELETE: {
      const filteredCustomers = customers.filter(
        (customer) => customer.id !== payload.id
      );
      return { ...state, customers: filteredCustomers };
    }
    default:
      return state;
  }
};
