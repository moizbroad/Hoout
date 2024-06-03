import { toast } from "react-toastify";
import { axiosApi, axiosWithCredentials } from "../../providers";

export const updatePass = async (values, { setSubmitting }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  try {
    const { oldPassword, newPassword, repeatNewPassword } = values;

    const response = await axiosWithCredentials.put(
      `/accounts/change-password/${userData?.user_id}/`,
      {
        old_password: oldPassword,
        password: newPassword,
        password2: repeatNewPassword,
      }
    );

    console.log(response.data, "ressppp");
    toast.success("Successfuly Updated");
    setSubmitting(false);
  } catch (error) {
    console.log(error, "nbbb");
    if (error?.response?.data?.password) {
      error?.response?.data?.password.map((item) => {
        toast.error(item);
      });
    } else if (error?.response?.data?.old_password?.old_password) {
      toast.error(error?.response?.data?.old_password?.old_password);
    } else {
      toast.error("Something went wrong!");
    }
    console.error("Error:", error);
  }
};

export const getProfile = async (id) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  try {
    const response = await axiosWithCredentials.get(
      `/accounts/retrieve-user/${userData?.user_id}/`
    );
    return response;
  } catch (error) {
    console.error("Error:", error);
    toast.error("Something went wrong!");
  }
};

export const updateProfile = async (values, { setSubmitting }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  try {
    const { first_name, last_name, email, company_name, phone } = values;

    const payload = {
      first_name,
      last_name,
      email,
      company_name: company_name || null,
      phone: phone || null,
    };

    const response = await axiosWithCredentials.put(
      `/accounts/update-profile/${userData?.user_id}/`,
      payload
    );
    toast.success("Successfully Updated");
    console.log("Response:", response.data);

    setSubmitting(false);
  } catch (error) {
    console.error("Error:", error);
    toast.error("Something went wrong!");
    setSubmitting(false);
  }
};

export const updateDelivery = async (values, { setSubmitting }) => {
  try {
    const { stNumber, zCode, city, country } = values;

    const payload = {
      stNumber,
      zCode,
      city,
      country: country || null,
    };

    const response = await axiosWithCredentials.post(
      "/accounts/update-address/",
      payload
    );
    toast.success("Successfuly Updated");
    console.log("Response:", response.data);

    setSubmitting(false);
  } catch (error) {
    console.error("Error:", error);
    toast.error("Something went wrong!");
  }
};

export const resetPasswordLink = async (values, { setSubmitting }) => {
  try {
    const { email } = values;
    const payload = {
      email,
    };
    const response = await axiosApi.post("/accounts/forget_password/", payload);
    setSubmitting(false);
    toast.success("Reset link sent to your email");
    return response;
  } catch (error) {
    console.error("Error:", error);
    toast.error("Error sending password reset link");
  }
};

export const resetPassword = async (values, { setSubmitting }) => {
  try {
    const { password, uid } = values;

    const payload = {
      password,
      password1: password,
    };

    const response = await axiosWithCredentials.post(
      `accounts/forget_password/confirm/${uid}/`,
      payload
    );
    toast.success("Your password has been reset successfully");
    setSubmitting(false);
    return response;
  } catch (error) {
    console.error("Error:", error);
    toast.error("Something went wrong!");
    setSubmitting(false);
    throw error;
  }
};

export const updateInvoiceDelivery = async (values, { setSubmitting }) => {
  try {
    const { stNumber, zCode, city, country } = values;

    const payload = {
      stNumber,
      zCode,
      city,
      country: country || null,
    };

    const response = await axiosWithCredentials.post(
      "/update-address/",
      payload
    );
    toast.success("Successfuly Updated");
    console.log("Response:", response.data);

    setSubmitting(false);
  } catch (error) {
    console.error("Error:", error);
    toast.error("Something went wrong!");
  }
};

export const uploadProfilePic = async (selectedImage) => {
  // Pass selectedImage as a parameter
  try {
    if (!selectedImage) {
      toast.error("No image selected.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    // Make a POST request to your server to upload the image using Axios
    const response = await axiosWithCredentials.post(
      "/upload-profile-image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
        },
      }
    );

    if (response.status === 200) {
      // Check response status instead of response.ok
      toast.success("Image uploaded successfully.");
      // Optionally, you can update the UI or show a success message
    } else {
      toast.error("Failed to upload image:", response.statusText);
      // Optionally, you can handle error cases or show an error message
    }
  } catch (error) {
    toast.error("Error uploading image:", error);
  }
};
