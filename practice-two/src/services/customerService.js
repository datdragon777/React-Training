import { BASE_URL, PATH } from '@constants';

// Get customer list
const getAllCustomerService = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  const data = await response.json();
  return data;
};

const service = async (path, method, data) => {
  const url = `${BASE_URL}/${path}`;
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { data: await response.json(), error: null };
    } else {
      const errorData = await response.json();
      return { error: errorData };
    }
  } catch (error) {
    return { error };
  }
};

// Create customer
const createCustomerService = async (customerData) => {
  const response = await service(`${PATH}`, 'POST', customerData);
  return response;
};

// Update customer
const updateCustomerService = async (id, customerData) => {
  const response = await service(`${PATH}/${id}`, 'PUT', customerData);
  return response;
};

// Delete customer
const deleteCustomerService = async (id) => {
  const response = await service(`${PATH}/${id}`, 'DELETE');
  return response;
};

export {
  getAllCustomerService,
  createCustomerService,
  updateCustomerService,
  deleteCustomerService,
};
