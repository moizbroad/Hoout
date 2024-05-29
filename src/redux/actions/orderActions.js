import { axiosWithCredentials } from "../../providers";

export const getOrderDetails = async (orderId) => {
  try {
    const response = await axiosWithCredentials.get(`/order/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order details:", error);
    throw error;
  }
};
export const getWishList = async () => {
  try {
    const response = await axiosWithCredentials.get(`/wishlist/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order details:", error);
    throw error;
  }
};
