import * as Yup from "yup";
export const validationInvoice = Yup.object().shape({
  stNumber: Yup.string().required("Street and Number is required"),
  zCode: Yup.string().required("Zip Code is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
});

export const validationDelivery = Yup.object().shape({
  stNumber: Yup.string().required("Street and Number is required"),
  zCode: Yup.number().required("Zip Code is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
});

export const validationProfile = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  companyName: Yup.string(),
  phone: Yup.string(),
});

export const passwordValidationSchema = Yup.object({
  oldPassword: Yup.string().required("Old password is required"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /(?=.*[a-z])/,
      "Password must contain at least one lowercase letter"
    )
    .matches(
      /(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(/(?=.*\d)/, "Password must contain at least one number")
    .required("New password is required"),
  repeatNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Repeat new password is required"),
});
