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

export const validationResetPass = Yup.object().shape({
  op: Yup.string().required("Old password is required"),
  nPassword: Yup.string().required("New password is required"),
  rnPassword: Yup.string()
    .required("Repeat new password is required")
    .oneOf([Yup.ref("nPassword"), null], "Passwords must match"),
});

export const validationProfile = Yup.object().shape({
  fName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  cName: Yup.string(),
  phoneNumber: Yup.string(),
});
