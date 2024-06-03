import { toast } from "react-toastify";
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
export const getProducts = async () => {
  try {
    const response = await axiosWithCredentials.get(`/product/`);
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
export const addToCart = async (values) => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const { id } = values;

  const payload = {
    user: userData?.user_id,
    product: id,
  };

  try {
    const response = await axiosWithCredentials.post(`/add-to-cart/`, payload);

    toast.success("Successfully added to cart");
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    console.error("Error fetching order details:", error);
    throw error;
  }
};
