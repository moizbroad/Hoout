import React, { useEffect, useState } from "react";
import rightArrow from "../assets/shopPage/rightArrow.svg";
import { axiosApi } from "../providers";
import { useNavigate } from "react-router-dom";

export const PrivacyPolicy = () => {

  const navigate = useNavigate()

  const [state, setState] = useState({
    privacy: [],
  });

  useEffect(() => {
    handleGetPolicy();
  }, []);

  const handleGetPolicy = async () => {
    try {
      const response = await axiosApi.get("/privacy-policy/");
      setState((prev) => ({
        ...prev,
        privacy: response.data,
      }));
    } catch (error) {
      toast.error("Somthing went wrong");
    }
  };
  return (
    <>
      <section className="about flex justify-center items-center !pt-18 ">
        <div className="w-[320px] m-auto  text-center bg-transparentGray text-white py-[35px] rounded-lg ">
          <div className="text-white text-48 font-medium">Privacy Policy </div>
          <div className="text-white flex items-center justify-center gap-x-3 pt-5 ">
            <div className="flex items-center gap-x-3">
              <p className="cursor-pointer" onClick={() => navigate('/')}>Home</p> <img src={rightArrow} />
            </div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </section>

      <section className="grid xl:grid-cols-2  lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1   px-[100px] lg:px-[60px] md:px[40px] sm:px-[30px] xs:px-[20px]  pt-[100px] gap-x-2 ">
        <section className="xl:w-[100%] lg:w-[100%] w-[100%]  text-16  ">
          {state.privacy.length &&
            state.privacy.map((item) => {
              return (
                <section className="xl:w-[100%] lg:w-[100%] w-[100%]  text-16  ">
                  {item.content}
                </section>
              );
            })}
        </section>
      </section>
    </>
  );
};
