import React from "react";
import signUpLeft from "../assets/authImages/signUpLeft.svg";
import houtLogo from "../assets/authImages/houtLogo.svg";
import googleIcon from "../assets/authImages/googleIcon.svg";
import faceBookIcon from "../assets/authImages/faceBookIcon.svg";
import appleIcon from "../assets/authImages/appleIcon.svg";
import grayLine from "../assets/authImages/grayLine.svg";
import blackRin from "../assets/authImages/blackRin.svg";
import whiteRin from "../assets/authImages/whiteRin.svg";
import microscope from "../assets/authImages/microscope.svg";
import slBlurBg from "../assets/authImages/slBlurBg.png";
import InputField from "../components/Common/InputField";

const Signup = () => {
  return (
    <div>
      <div className="signUpMain flex min-h-screen">
        <div className="signUpLeft w-[50%] relative">
          <img src={signUpLeft} alt="signupleftImg" className="w-[100%]" />
          <div>
            <div className=" yellowBar absolute top-[35%] left-[50%] translate-x-[-50%]  bg-[#FBC700] w-[291px]  rounded-xl flex items-center py-[10px] px-[20px] gap-2 mb-[22.34px]">
              <div className="w-[40px] h-[38px] rounded-[50%] bg-[hw] grid place-items-center bg-[#00000066]">
              <img src={blackRin} alt="" />
              </div>
              <h6 className="flex-1 text-20 font-medium text-center">Lorem Ipsum is </h6>
            </div>
            <div className=" absolute top-[43%] left-[50%] translate-x-[-50%]  w-[291px]  rounded-lg   py-[21px] px-[25px] gap-2 mb-[22.34px] min-h-[120px]" style={{ backgroundImage: `url(${slBlurBg})` }}>
              <div className="w-[56px] h-[51px] rounded-lg  grid place-items-center  p-[6px] bg-[#000]">
              <img src={microscope} alt="" className="mb-[5px]" />
              </div>
              <h6 className="flex-1 text-20 font-normal leading-[24px]  mt-[10px] text-primary">Lorem Ipsum is simply dummy text of the printing </h6>
            </div>
            <div className=" grayBar absolute top-[50%] right-[-10%] translate-x-[20%]  bg-[#5A5A5A] min-w-[200px]  rounded-full flex items-center py-[10px] px-[20px] gap-2 mb-[22.34px]">
               <div className="w-[40px] h-[38px] rounded-[50%] bg-[#9c9c9c] grid place-items-center text-white">
              <img src={whiteRin} alt="" />
              </div>
              <h6 className="flex-1 text-18 font-normal text-center text-primary	">Lorem Ipsum is </h6>
            </div>
          </div>
        </div>
        <div className="signUpRight w-[50%] py-[25px] px-[51px]">
          <div className="signUpHead flex justify-end mb-[46px]">
            <img src={houtLogo} alt="" />
          </div>
          <div className="signUpFormSec px-[100px] ">
            <div className="text-center mb-[42px]">
              <h4 className="text-24 font-semibold">
                Get Started With houttotaal.nl
              </h4>
              <span className="text-15 text-gray-500 block font-normal	">
                Getting started is easy
              </span>
            </div>
            <form action="" className="w-full">
              {/* social auth row  */}
              <div className="socialAuthRow flex gap-3 mb-[12px]">
                <a
                  href="#"
                  className="w-[32%] flex gap-2 items-center rounded-md	border-inherit	px-[20px] py-[11px] text-center border-[1px] text-12 font-medium"
                >
                  <img src={googleIcon} alt="" />
                  Google
                </a>
                <a
                  href="#"
                  className="w-[32%] flex gap-2 items-center rounded-md	border-inherit	px-[20px] py-[11px] text-center border-[1px] text-12 font-medium"
                >
                  <img src={faceBookIcon} alt="" />
                  Facebook
                </a>
                <a
                  href="#"
                  className="w-[32%] flex gap-2 items-center rounded-md	border-inherit	px-[20px] py-[11px] text-center border-[1px] text-12 font-medium"
                >
                  <img src={appleIcon} alt="" />
                  Apple
                </a>
              </div>

              <div className="flex justify-between items-center mb-[24px]">
                <div className="w-[32%]">
                  <img src={grayLine} alt="" />
                </div>
                <h5 className="w-[32%] text-13 text-center font-normal">
                  or continue with{" "}
                </h5>
                <div className="w-[32%]">
                  <img src={grayLine} alt="" />
                </div>
              </div>
              <div className="formSec">
                <div className="mb-[23px]">
                <InputField placeholder="First Name"/>
                </div>
                <div className="mb-[23px]">

                <InputField placeholder="Last Name"/>
                </div>
                <div className="mb-[23px]">

                <InputField placeholder="Company Name"/>
                </div>
                <div className="mb-[23px]">
                <InputField placeholder="Enter Email"/>
                </div>
                <div className="mb-[23px]">
                <InputField placeholder="Password"/>
                </div>
                <div className="mb-[23px]">
                <InputField placeholder="Confirm Password"/>
                </div>
                <div className="w-full ">
                  <button className="bg-[#FBC700] block text-black text-center py-[19px] px-[25px] w-full font-semibold mb-[23px]">
                    Create Account
                  </button>
                  <span className="flex justify-end text-14">Have an account? <a href="#" className="text-yellow-400 ml-1 font-semibold">Sign in!</a></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
