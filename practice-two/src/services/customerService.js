import { BASE_URL, PATH } from '@constants';
import { mutate } from 'swr';

// Get customer list
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
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (response.ok) {
      mutate(url);
      return {data: await response.json(), error: null};
    } else {
      const errorData = await response.json();
      console.log(errorData.message);
      throw new Error(errorData.message || 'Error while sending request');
    }
  } catch (error) {
    return { data: null, error};
  }
};

// Create customer
const createCustomerService = (customerData) => {
  return request(`${PATH}`, 'POST', customerData);
};

// Get info customer to fill form
const getCustomerByIdService = (id) => {
  return request(`${PATH}/${id}`, 'GET');
};

// Update customer
const updateCustomerService = (id, customerData) => {
  return request(`${PATH}/${id}`, 'PUT', customerData);
};

// Delete customer
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
