const createCustomer = (payload) => {
  return {
    type: 'CREATE_CUSTOMER',
    payload,
  };
};

const updateCustomer = (payload) => {
  return {
    type: 'UPDATE_CUSTOMER',
    payload,
  };
};

const deleteCustomer = (payload) => {
  return {
    type: 'DELETE_CUSTOMER',
    payload,
  };
};

export { createCustomer, updateCustomer, deleteCustomer };
