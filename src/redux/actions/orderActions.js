import { toast } from "react-toastify";
import { axiosWithCredentials } from "../../providers";

export const getOrderDetails = async (month, payment, day) => {
  try {
    const response = await axiosWithCredentials.get(
      `/order-filter/?month=${month ?? null}&payment_method=${
        payment ?? null
      }&day=${day ?? null}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching order details:", error);
    throw error;
  }
};
export const getProducts = async () => {
  try {
    const response = await axiosWithCredentials.get(`/product-filter/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order details:", error);
    throw error;
  }
};

export const getCart = async () => {
  const cartId = localStorage.getItem("cartId");
  try {
    const response = await axiosWithCredentials.get(`/cart/`);
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

  const { id, price } = values;

  const payload = {
    cart: userData.card_id,
    user: userData?.user_id,
    product: id,
    quantity: 1,
    product_price: price,
  };

  try {
    const response = await axiosWithCredentials.post(`/add-to-cart/`, payload);

    toast.success("Successfully added to cart");
    return response.data;
  } catch (error) {
    if (error.response.data.product?.length) {
      toast.error(error.response.data.product[0]);
    } else {
      toast.error("Something went wrong");
    }
    throw error;
  }
};

export const changeQuantity = async (values) => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const { id, price, productId, quantity } = values;

  const payload = {
    cart: userData.card_id,
    user: userData?.user_id,
    product: productId,
    quantity,
    product_price: price,
  };

  try {
    const response = await axiosWithCredentials.put(
      `/change-quantity/${id}/`,
      payload
    );

    // toast.success("Successfully added to cart");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCartItem = async (id) => {
  try {
    const response = await axiosWithCredentials.delete(
      `/delete/add-to-cart/${id}/`
    );
    toast.success("Successfully deleted item");

    return response.data;
  } catch (error) {
    console.error("Error fetching order details:", error);
    throw error;
  }
};
