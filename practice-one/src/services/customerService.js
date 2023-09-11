export const getAllCustomerService = async () => {
  try {
    const response = await fetch(
      "https://64e70a09b0fd9648b78f3e0a.mockapi.io/customers"
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
