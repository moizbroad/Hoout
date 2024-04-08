import React from "react";
import ContactInputField from "../Common/ContactInputField";

export const ContactusSection = () => {
  return (
    <section className="bg-[#000000] py-[119px]">
      <div className="text-[#fff] font-bold text-60 text-center ">
        Contact US
      </div>
      <div className="text-18 text-[#fff] pt-[40px] text-center">
        {" "}
        We invite you to contact us with any questions or concerns. Our
        dedicated team is ready to guide and support you.
      </div>

      <div className="px-[100px] pt-[99px]">
        {" "}
        <div className="flex  gap-x-[4.5%] ">
          {" "}
          <div className="w-[30%]">
            {" "}
            <ContactInputField placeholder="FirstName*" />
          </div>
          <div className="w-[30%]">
            {" "}
            <ContactInputField placeholder="LastName*" />
          </div>
          <div className="w-[30%]">
            {" "}
            <ContactInputField placeholder="E-mail Address" />
          </div>
        </div>
        <div className="pt-[60px] flex gap-x-[10%]">
          {" "}
          <div className="w-[45%]">
            {" "}
            <ContactInputField placeholder="Company" />
          </div>
          <div className="w-[45%]">
            {" "}
            <ContactInputField placeholder="Phone Number" />
          </div>
        </div>
        <div className="pt-[60px]">
          {" "}
          <div>
            {" "}
            <ContactInputField placeholder="Message*" />{" "}
          </div>
        </div>
      </div>

      <div className="flex justify-end px-[100px]">
        <div className=" border-[#fff] border-2  mt-[40px] ">
          {" "}
          <button className="text-18 px-16 py-2 text-[#fff] "> Send </button>
        </div>
      </div>
    </section>
  );
};
