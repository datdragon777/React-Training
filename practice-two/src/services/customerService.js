// import { BASE_URL, PATH } from "@constants";

const getAllCustomerService = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  const data = await response.json();
  return data;
};

export default getAllCustomerService;
