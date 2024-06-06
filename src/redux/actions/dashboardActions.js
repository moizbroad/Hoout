import { toast } from "react-toastify";
import { axiosWithCredentials } from "../../providers";

export const getStats = async () => {
  try {
    const response = await axiosWithCredentials.get(`/dashboard/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order details:", error);
    throw error;
  }
};
export const getProducts = async () => {
  try {
    const response = await axiosWithCredentials.get(`/product/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order details:", error);
    throw error;
  }
};
