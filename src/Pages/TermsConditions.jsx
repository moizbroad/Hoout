import React, { useEffect, useState } from "react";
import rightArrow from "../assets/shopPage/rightArrow.svg";
import { axiosApi } from "../providers";

export const TermsConditions = () => {
  const [state, setState] = useState({
    terms: [],
  });

  useEffect(() => {
    handleGetTerms();
  }, []);

  const handleGetTerms = async () => {
    try {
      const response = await axiosApi.get("/terms&condition/");
      setState((prev) => ({
        ...prev,
        terms: response.data,
      }));
    } catch (error) {
      toast.error("Somthing went wrong");
    }
  };

  return (
    <>
      <section className="about flex justify-center items-center ">
        <div className="w-[320px] m-auto  text-center bg-transparentGray text-white py-[35px] rounded-lg ">
          <div className="text-white text-48 font-medium">
            Terms and Conditions{" "}
          </div>
          <div className="text-white flex items-center justify-center gap-x-3 pt-5 ">
            <div className="flex items-center gap-x-3">
              Home <img src={rightArrow} />
            </div>
            <div>Terms and Conditions</div>
          </div>
        </div>
      </section>

      <section className="grid xl:grid-cols-2  lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1   px-[100px] lg:px-[60px] md:px[40px] sm:px-[30px] xs:px-[20px]  pt-[100px] gap-x-2 ">
        <section className="xl:w-[100%] lg:w-[100%] w-[100%]  text-16  ">
          {state.terms.length &&
            state.terms.map((item) => {
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
