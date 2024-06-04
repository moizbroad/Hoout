import { toast } from "react-toastify";
import { axiosWithCredentials } from "../../providers";

export const deleteProduct = async (values) => {
  try {
    const { id } = values;

    const response = await axiosWithCredentials.delete(
      `/delete-product/${id}/`
    );

    toast.success("Successfully deleted");
  } catch (error) {
    toast.error("Something went wrong ");
    console.log(error, "nbbb");
  }
};
export const deleteWishList = async (values) => {
  try {
    const { id } = values;

    const response = await axiosWithCredentials.delete(
      `/delete-wishlist/${id}/`
    );
    console.log(response.data, "ressppp");
    toast.success("Successfuly Deleted");
    return response;
  } catch (error) {
    toast.error("Something went wrong ");

    console.log(error, "nbbb");
  }
};
