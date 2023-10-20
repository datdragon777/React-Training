import { BASE_URL, PATH } from '@constants';

const getAllCustomerService = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  const data = await response.json();
  return data;
};

const request = async (path, method, data) => {
  const url = `${BASE_URL}/${path}`;
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Error while sending request');
  }
};

const createCustomerService = (customerData) => {
  return request(`${PATH}`, 'POST', customerData);
};

const getCustomerByIdService = (id) => {
  return request(`${PATH}/${id}`, 'GET');
};

const updateCustomerService = (id, customerData) => {
  return request(`${PATH}/${id}`, 'PUT', customerData);
};

const deleteCustomerService = (id) => {
  return request(`${PATH}/${id}`, 'DELETE');
};

export {
  getAllCustomerService,
  createCustomerService,
  getCustomerByIdService,
  updateCustomerService,
  deleteCustomerService,
};
