import React, { useEffect, useState } from "react";
import Camera from "../assets/DashboardImages/CameraImg.png";
import InputField from "../components/Common/InputField";
import Button from "../components/Common/Button";
import DropDown from "../components/Common/DropDown";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikField from "../components/Common/FormikField";
import {
  passwordValidationSchema,
  validationDelivery,
  validationInvoice,
  validationProfile,
} from "../utils/validations";
import {
  getProfile,
  updateDelivery,
  updateInvoiceDelivery,
  updatePass,
  updateProfile,
} from "../redux/actions/profileActions";

export const UserProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [state, setState] = useState({
    userData: null,
  });

  const handleFileInputChange = (e) => {
    setSelectedImage(e.target.files[0]);
    // Generate image preview
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const fetchUser = async () => {
    try {
      const res = await getProfile();
      setState((prev) => ({
        ...prev,
        userData: res?.data,
      }));
      console.log(res, "fetchUser");
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <div className="xl:py-[48px] lg:py-[38px] py-[28px] xl:px-[170px] lg:px-[100px] px-[60px] bg-[rgb(250,250,250)] h-full min-h-[86vh]">
        <div className="flex justify-center mb-[23px]">
          <div className="uploadImgWrap">
            <div className="imgGrayBox">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full previewImage  rounded-full"
                  style={{ aspectRatio: "1/1" }}
                />
              ) : (
                <img src={Camera} alt="Profile" />
              )}
              <input type="file" onChange={handleFileInputChange}></input>
            </div>
            <h6 className="text-14 text-yellow" onClick={handleFileInputChange}>
              Upload Photo
            </h6>
          </div>
        </div>

        {/* user profile card section */}
        {/* account detail card  */}
        <div className="myCard rounded-[4px] mb-[30px]">
          <h5 className="xl:text-20 lg:text-18 md:text-16 font-semibold xl:mb-[30px] mb-[24px]">
            Account Details
          </h5>
          <Formik
            initialValues={{
              firstName: state?.userData?.first_name ?? "",
              lastName: state?.userData?.last_name ?? "",
              companyName: state?.userData?.company_name ?? "",
              email: state?.userData?.email ?? "",
              phone: state?.userData?.phone ?? "",
            }}
            validationSchema={validationProfile}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              const updatedVal = {
                first_name: values?.firstName,
                last_name: values?.lastName,
                email: values?.email,
                company_name: values?.companyName,
                phone: values?.phone,
              };

              try {
                await updateProfile(updatedVal, { setSubmitting });
                fetchUser();
                resetForm();
              } catch (error) {
                console.error("Error updating user data:", error);
                setSubmitting(false);
              }
            }}
            enableReinitialize={true}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="formSec">
                  <div className="flex gap-[20px] mb-[30px]">
                    <div className="w-1/2 mb-6 md:mb-0">
                      <Field
                        component={FormikField}
                        name="firstName"
                        label="First name *"
                        placeholder="First name"
                      />
                    </div>
                    <div className="w-1/2">
                      <Field
                        component={FormikField}
                        name="lastName"
                        label="Last name *"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[20px] mb-[30px]">
                    <div className="w-1/2 mb-6 md:mb-0">
                      <Field
                        component={FormikField}
                        name="companyName"
                        label="Company name"
                        placeholder="Company name"
                      />
                    </div>
                    <div className="w-1/2">
                      <Field
                        component={FormikField}
                        name="phone"
                        label="Phone number"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div className="flex xl:mb-[30px] mb-[20px]">
                    <div className="w-full mb-6 md:mb-0">
                      <Field
                        component={FormikField}
                        name="email"
                        label="Email *"
                        placeholder="Email"
                        type="email"
                      />
                    </div>
                  </div>
                  <Button
                    btnText="Save Changes"
                    paddingX="20px"
                    breakpoint="w-[207px]"
                    type="submit"
                    disabled={isSubmitting}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Password detail card  */}
        <div className="myCard rounded-[4px] mb-[30px]">
          <h5 className="text-20 font-semibold mb-[30px]">Password</h5>
          <Formik
            initialValues={{
              op: "",
              nPassword: "",
              rnPassword: "",
            }}
            validationSchema={passwordValidationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                await updatePass(values, { setSubmitting });
                resetForm(false);
                setSubmitting(false);
              } catch (error) {
                console.error("Error updating password:", error);
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="formSec">
                  <div className="flex gap-[20px] mb-[24px]">
                    <div className="w-[48.5%]  md:mb-0">
                      <Field
                        component={FormikField}
                        name="oldPassword"
                        label="Old password"
                        placeholder="Old password"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[20px] mb-[24px]">
                    <div className="w-1/2 md:mb-0">
                      <Field
                        component={FormikField}
                        name="newPassword"
                        label="New password"
                        placeholder="New password"
                        type="password"
                      />
                    </div>
                    <div className="w-1/2">
                      <Field
                        component={FormikField}
                        name="repeatNewPassword"
                        label="Repeat new password"
                        placeholder="Repeat new password"
                        type="password"
                      />
                    </div>
                  </div>
                  <div>
                    <Button
                      btnText="Save Changes"
                      paddingX="20px"
                      breakpoint="w-[207px]"
                      type="submit"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Delivery Address  */}
        <div className="myCard rounded-[4px] mb-[30px]">
          <h5 className="text-20 font-semibold mb-[30px]">Delivery Address</h5>
          <Formik
            initialValues={{
              stNumber: "",
              zCode: "",
              city: "",
              country: "",
            }}
            validationSchema={validationDelivery}
            onSubmit={updateDelivery}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="formSec">
                  <div className="flex gap-[20px] mb-[24px]">
                    <div className="w-1/2 md:mb-0">
                      <Field
                        component={FormikField}
                        name="stNumber"
                        label="Street and Number"
                        placeholder="Street and Number"
                        id="stNumber"
                      />
                    </div>
                    <div className="w-1/2">
                      <Field
                        component={FormikField}
                        name="zCode"
                        label="Zip Code"
                        placeholder="12345"
                        id="zCode"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[20px] mb-[24px]">
                    <div className="w-1/2 md:mb-0">
                      <Field
                        component={FormikField}
                        name="city"
                        label="City"
                        id="zCode"
                        type="number"
                        placeholder="Add City"
                      />
                    </div>
                    <div className="w-1/2">
                      <Field
                        component={FormikField}
                        name="country"
                        width="w-[100%]"
                        paddingY="12px"
                        label="Country"
                        firstOptionText="Country"
                        placeholder="Add Country"
                      />
                    </div>
                  </div>
                  <div>
                    <Button
                      btnText="Save Changes"
                      paddingX="20px"
                      breakpoint="w-[207px]"
                      type="submit"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        {/* Invoice Address  */}
        <div className="myCard rounded-[4px] mb-[30px]">
          <h5 className="text-20 font-semibold mb-[30px]">Invoice Address</h5>
          <Formik
            initialValues={{
              stNumber: "",
              zCode: "",
              city: "",
              country: "",
            }}
            validationSchema={validationInvoice}
            onSubmit={updateInvoiceDelivery}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="formSec">
                  <div className="flex gap-[20px] mb-[24px]">
                    <div className="w-1/2 md:mb-0">
                      <Field
                        component={FormikField}
                        name="stNumber"
                        label="Street and Number"
                        placeholder="Street and Number"
                        id="stNumber"
                      />
                    </div>
                    <div className="w-1/2">
                      <Field
                        component={FormikField}
                        name="zCode"
                        label="Zip Code"
                        placeholder="12345"
                        id="zCode"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[20px] mb-[24px]">
                    <div className="w-1/2 md:mb-0">
                      <Field
                        component={FormikField}
                        name="city"
                        width="w-[100%]"
                        paddingY="12px"
                        firstOptionText="City"
                        label="City"
                        placeholder="Add city"
                      />
                    </div>
                    <div className="w-1/2">
                      <Field
                        component={FormikField}
                        name="country"
                        width="w-[100%]"
                        paddingY="12px"
                        firstOptionText="Country"
                        placeholder="Add country"
                        label="Country"
                      />
                    </div>
                  </div>
                  <div>
                    <Button
                      btnText="Save Changes"
                      paddingX="20px"
                      breakpoint="w-[207px]"
                      type="submit"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        {/* user profile card section end */}
      </div>
    </div>
  );
};
