import { toast } from "react-toastify";
import { axiosWithCredentials } from "../../providers";

export const deleteProduct = async (values, { setSubmitting }) => {
  try {
    const { itemId } = values;

    const response = await axiosWithCredentials.put(
      `/delete-product/${itemId}/`
    );

    console.log(response.data, "ressppp");
    toast.success("Successfuly Deleted");
    setSubmitting(false);
  } catch (error) {
    console.log(error, "nbbb");
  }
};
