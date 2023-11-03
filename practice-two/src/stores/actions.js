import { ACTION_TYPES } from '@constants';

const getListCustomer = (payload) => {
  return {
    type: ACTION_TYPES.GET_LIST,
    payload,
  };
};

const createCustomer = (payload) => {
  return {
    type: ACTION_TYPES.CREATE,
    payload,
  };
};

const updateCustomer = (payload) => {
  return {
    type: ACTION_TYPES.UPDATE,
    payload,
  };
};

const deleteCustomer = (payload) => {
  return {
    type: ACTION_TYPES.DELETE,
    payload,
  };
};

export { getListCustomer, createCustomer, updateCustomer, deleteCustomer };
