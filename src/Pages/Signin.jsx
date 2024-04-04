import React from "react";
import signInRight from "../assets/authImages/signInRight.svg";
import houtLogo from "../assets/authImages/houtLogo.svg";
import googleIcon from "../assets/authImages/googleIcon.svg";
import faceBookIcon from "../assets/authImages/faceBookIcon.svg";
import appleIcon from "../assets/authImages/appleIcon.svg";
import grayLine from "../assets/authImages/grayLine.svg";
import thumbsUp from "../assets/authImages/thumbsUp.svg";
import signinBlur from "../assets/authImages/signinBlur.png";
import InputField from "../components/Common/InputField";

const Signin = () => {
  return (
    <>
      <div>
      <div className="signUpMain flex flex-row-reverse min-h-screen">
        <div className="signUpLeft w-[50%] relative">
          <img src={signInRight} alt="signupleftImg" className="w-[100%]" />
          <div>
            <div className=" yellowBar absolute bottom-[20%] left-[50%] translate-x-[-50%]  w-[70%]  rounded-lg   py-[42px] px-[37px] gap-2 mb-[22.34px] min-h-[120px]" style={{ backgroundImage: `url(${signinBlur})` }}>
            
               <div className="yellowBar   bg-[#FBC700] w-[80%]  rounded-xl items-center py-[10px] px-[20px] gap-2 mb-[22.34px] flex">
            <img src={thumbsUp} alt="" />
            <div>
              <h6 className="text-22">Lorem Ipsum is simply</h6>
            </div>
          </div>
              <h6 className="flex-1 text-20 font-normal leading-[24px]  mt-[10px] text-primary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h6>
            </div>
           
          </div>
        </div>
        <div className="signUpRight w-[50%] py-[25px] px-[51px]">
          <div className="signUpHead flex justify-start mb-[46px]">
            <img src={houtLogo} alt="" />
          </div>
          <div className="signUpFormSec px-[100px] ">
            <div className="text-center mb-[42px]">
              <h4 className="text-24 font-semibold">
                Welcome Back
              </h4>
              <span className="text-15 text-gray-500 block font-normal	">
                Login into your account
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
                <InputField placeholder="Enter Email"/>
                </div>
                <div className="mb-[23px]">
                <InputField placeholder="Password"/>
                </div>

              <div className="recPasswrd mb-[30px] flex w-full justify-between">
                <div className="flex gap-2  items-center">
                <input type="checkbox" id="switch" /><label for="switch"></label>
                <span className="block">Remember me</span>
                </div>
                 
                <a href="#" className="text-14 text-red">
                Recover Password </a> </div>
              

               
                <div className="w-full ">
                  <button className="bg-[#FBC700] block text-black text-center py-[19px] px-[25px] w-full font-semibold mb-[23px]">
                    Log In
                  </button>
                  <span className="flex justify-end text-14">Don't have an account? <a href="#" className="text-yellow-400 ml-1 font-semibold">Sign up!</a></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signin;
