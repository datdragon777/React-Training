import { BASE_URL, PATH } from "@constants";

const getAllCustomerService = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${PATH}`);
    return response.json();
  } catch (error) {
    return new Error("Sorry! Having some error, please try again");
  }
};

export default getAllCustomerService;
