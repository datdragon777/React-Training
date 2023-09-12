import { BASE_URL, PATH } from "@constants";

export const getAllCustomerService = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/${PATH}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
