export const initialCustomer = {
  customers: [],
};

export const customerReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_CUSTOMER': {
      return { customers: [...state.customers, action.payload], ...state };
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
