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
import Switch from "../components/Common/Switch";

const Signin = () => {
  return (
    <>
      <div>
        <div className="signUpMain flex flex-row-reverse min-h-screen">
          <div className="signUpLeft w-[50%] relative">
            <img
              src={signInRight}
              alt="signupleftImg"
              className="w-[100%]"
              style={{ objectFit: "cover", minHeight: "100vh" }}
            />
            <div>
              <div
                className=" yellowBar absolute bottom-[20%] left-[50%] translate-x-[-50%]  xl:w-[70%] lg:w-[80%] w-[90%]  rounded-lg   xl:py-[40px] lg:py-[30px] py-[20px]  xl:px-[35px] lg:px-[25px] px-[18px] gap-2 xl:mb-[22.34px] mb-[14px] min-h-[120px]"
                style={{ backgroundImage: `url(${signinBlur})` }}
              >
                <div className="yellowBar  bg-[#FBC700] w-[90%]  rounded-xl items-center py-[10px] xl:px-[20px] px-[14px] gap-2 mb-[22.34px] flex">
                  <img src={thumbsUp} alt="" />
                  <div>
                    <h6
                      className="xl:text-20 lg:text-18 md:text-16
"
                    >
                      Lorem Ipsum is simply
                    </h6>
                  </div>
                </div>
                <h6
                  className="flex-1 xl:text-20 lg:text-18 md:text-16
 font-normal leading-[24px]  mt-[10px] text-primary"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </h6>
              </div>
            </div>
          </div>
          <div className="xl:min-w-[650px] min-w-[auto] signUpRight xl:w-[50%] lg:w-[55%] w-[60%] xl:py-[25px] py-[18px] xl:px-[51px] lg:px-[30px] px-[20px]">
            <div className="signUpHead flex justify-start xl:mb-[46px] lg:mb-[30px] mb-[20px]">
              <img
                src={houtLogo}
                alt=""
                className="xl:w-[160px] xl:h-[46px] lg:w-[140px] lg:h-[40px] w-[120px] h-[35px] object-cover"
              />
            </div>
            <div className="signUpFormSec xl:px-[80px] lg:px-[30px] px-[5px] ">
              <div className="text-center xl:mb-[42px] lg:mb-[30px] mb-[20px]">
                <h4 className="xl:text-24 lg:text-20 text-18 font-semibold">
                  Welcome Back
                </h4>
                <span className="xl:text-15 text-14 text-gray-500 block font-normal	">
                  Login into your account
                </span>
              </div>
              <form action="" className="w-full">
                {/* social auth row  */}
                <div className="socialAuthRow flex gap-3 mb-[12px]">
                  <a
                    href="#"
                    className="w-[32%] flex gap-2 items-center rounded-md	xl:px-[20px] lg:px-[16px] px-[10px] xl:py-[10px] lg:py-[8px] py-[6px] text-center text-12 font-medium"
                    style={{ border: "1px solid #ccc" }}
                  >
                    <img src={googleIcon} alt="" />
                    <span> Google </span>
                  </a>
                  <a
                    href="#"
                    className="w-[32%] flex gap-2 items-center rounded-md		xl:px-[20px] lg:px-[16px] px-[10px] xl:py-[10px] lg:py-[8px] py-[6px] text-center text-12 font-medium"
                    style={{ border: "1px solid #ccc" }}
                  >
                    <img src={faceBookIcon} alt="" />
                    <span> Facebook </span>
                  </a>
                  <a
                    href="#"
                    className=" w-[32%] flex gap-2 items-center rounded-md xl:px-[20px] lg:px-[16px] px-[10px] xl:py-[10px] lg:py-[8px] py-[6px] text-center text-12 font-medium"
                    style={{ border: "1px solid #ccc" }}
                  >
                    <img src={appleIcon} alt="" />
                    <span> Apple </span>
                  </a>
                </div>

                <div className="flex justify-between items-center xl:mb-[24px] mb-[15px]">
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
                    <InputField placeholder="Enter Email" />
                  </div>
                  <div className="mb-[23px]">
                    <InputField placeholder="Password" />
                  </div>

                  <div className="recPasswrd xl:mb-[30px] mb-[15px] flex w-full justify-between">
                    <Switch />
                    <a href="#" className="text-14 text-red">
                      Recover Password{" "}
                    </a>{" "}
                  </div>

                  <div className="w-full ">
                    <button className="bg-[#FBC700] block text-black text-center xl:py-[19px] lg:py-[16px] py-[12px] px-[25px] w-full font-semibold mb-[23px] xl:text-[14px] text-[13px]">
                      Log In
                    </button>
                    <span className="flex justify-end text-14">
                      Don't have an account?{" "}
                      <a
                        href="#"
                        className="text-yellow-400 ml-1 font-semibold"
                      >
                        Sign up!
                      </a>
                    </span>
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
