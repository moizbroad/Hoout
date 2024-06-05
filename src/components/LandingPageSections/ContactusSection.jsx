import React, { useState } from "react";
import ContactInputField from "../Common/ContactInputField";
import { axiosApi } from "../../providers";
import { toast } from "react-toastify";

export const ContactusSection = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    phone_number: "",
    message: "",
  });

  const handleSendQuery = async () => {
    try {
      const response = await axiosApi.post("/contact-form/", state);
      if (response.status === 201) {
        toast.success("Query sent successfuly");
        setState((prevState) => ({
          ...prevState,
          first_name: "",
          last_name: "",
          email: "",
          company: "",
          phone_number: "",
          message: "",
        }));
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section
      className="bg-[#000000] py-[60px] md:pt-[80px] lg:pt-[119px] xl:pt-[119px] pb-[119px]"
      id="contact-us"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="text-[#fff] font-bold text-30 md:text-40 lg:text-50 xl:text-60 text-center ">
          Contact US
        </div>
        <div className="text-16 md:text-17 lg:text-18 xl:text-18 text-[#fff] pt-[40px] text-center">
          {" "}
          We invite you to contact us with any questions or concerns. Our
          dedicated team is ready to guide and support you.
        </div>

        <div className="px-[30px] md:px-[80px] lg:px-[100px] xl:px-[100px] pt-[30px] md:pt-[70px] lg:pt-[100px] xl:pt-[100px]">
          {" "}
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-6 lg:gap-[4.5%] xl:gap-[4.5%]">
            {" "}
            <div className="w-[100%] md:w-[30%] lg:w-[30%] xl:w-[30%]">
              {" "}
              <ContactInputField
                value={state.first_name}
                color={"#fff"}
                onChange={(e) => {
                  setState((prev) => ({
                    ...prev,
                    first_name: e.target.value,
                  }));
                }}
                placeholder="FirstName*"
              />
            </div>
            <div className="w-[100%] md:w-[30%] lg:w-[30%] xl:w-[30%]">
              {" "}
              <ContactInputField
                value={state.last_name}
                color={"#fff"}
                onChange={(e) => {
                  setState((prev) => ({
                    ...prev,
                    last_name: e.target.value,
                  }));
                }}
                placeholder="LastName*"
              />
            </div>
            <div className="w-[100%] md:w-[30%] lg:w-[30%] xl:w-[30%]">
              {" "}
              <ContactInputField
                value={state.email}
                onChange={(e) => {
                  setState((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
                color={"#fff"}
                placeholder="E-mail Address"
              />
            </div>
          </div>
          <div className="pt-[24px] md:pt-[24px] lg:pt-[60px] xl:pt-[60px] flex flex-col md:flex-row lg:flex-row xl:flex-row gap-6 md:gap-6 lg:gap-[10%] xl:gap-[10%]">
            {" "}
            <div className="w-[100%] md:w-[45%] lg:w-[45%] xl:w-[45%]">
              {" "}
              <ContactInputField
                value={state.company}
                onChange={(e) => {
                  setState((prev) => ({
                    ...prev,
                    company: e.target.value,
                  }));
                }}
                color={"#fff"}
                placeholder="Company"
              />
            </div>
            <div className="w-[100%] md:w-[45%] lg:w-[45%] xl:w-[45%]">
              {" "}
              <ContactInputField
                value={state.phone_number}
                onChange={(e) => {
                  setState((prev) => ({
                    ...prev,
                    phone_number: e.target.value,
                  }));
                }}
                color={"#fff"}
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="pt-[24px] md:pt-[24px] lg:pt-[60px] xl:pt-[60px]">
            {" "}
            <div>
              {" "}
              <ContactInputField
                value={state.message}
                onChange={(e) => {
                  setState((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }));
                }}
                color={"#fff"}
                placeholder="Message*"
              />{" "}
            </div>
          </div>
        </div>

        <div className="flex justify-end px-[100px]">
          <div className=" border-[#fff] border-2  mt-[40px] ">
            {" "}
            <button
              className="text-18 px-16 py-2 text-[#fff] "
              onClick={handleSendQuery}
            >
              {" "}
              Send{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
