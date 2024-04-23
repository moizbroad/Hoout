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
          <img src={signUpLeft} alt="signupleftImg" className="w-[100%]" style={{objectFit: "cover"  , minHeight: "142vh"}} />
          <div>
            <div className=" yellowBar absolute xl:top-[35%] top-[30%] left-[50%] translate-x-[-50%]  bg-[#FBC700] w-[291px]  rounded-xl flex items-center xl:py-[10px] py-[6px] xl:px-[20px] px-[12px] gap-2 mb-[22.34px]">
              <div className="w-[40px] h-[38px] rounded-[50%] grid place-items-center bg-[#00000066]">
              <img src={blackRin} alt="" />
              </div>
              <h6 className="flex-1 xl:text-20 lg:text-18 md:text-16
 font-medium text-center">Lorem Ipsum is </h6>
            </div>
            <div className=" absolute top-[43%]  left-[50%] translate-x-[-50%]  w-[291px]  rounded-lg   xl:py-[21px] py-[12px] xl:px-[25px] lg:px-[18px] px-[10px] gap-2 mb-[22.34px] min-h-[120px]" style={{ backgroundImage: `url(${slBlurBg})` }}>
              <div className="w-[56px] h-[51px] rounded-lg  grid place-items-center  p-[6px] bg-[#000]">
              <img src={microscope} alt="" className="mb-[5px]" />
              </div>
              <h6 className="flex-1 xl:text-20 lg:text-18 md:text-16
 font-normal leading-[24px]  mt-[10px] text-primary">Lorem Ipsum is simply dummy text of the printing </h6>
            </div>
            <div className=" grayBar absolute xl:top-[50%] lg:top-[65%] top-[70%] xl:right-[-10%] lg:right-[1%] right-[5%] translate-x-[20%]  bg-[#5A5A5A] min-w-[200px]  rounded-full flex items-center xl:py-[10px] py-[5px] xl:px-[20px] px-[10px] gap-2 mb-[22.34px]">
               <div className="w-[40px] h-[38px] rounded-[50%] bg-[#9c9c9c] grid place-items-center text-white">
              <img src={whiteRin} alt="" />
              </div>
              <h6 className="flex-1 xl:text-18 lg:text-16 text-14
 font-normal text-center text-primary	">Lorem Ipsum is </h6>
            </div>
          </div>
        </div>
        <div className="xl:min-w-[650px] min-w-[auto] signUpRight xl:w-[50%] lg:w-[55%] w-[60%] xl:py-[25px] py-[18px] xl:px-[51px] lg:px-[30px] px-[20px]">
          <div className="signUpHead flex justify-start xl:mb-[46px] lg:mb-[30px] mb-[20px]">
            <img src={houtLogo} alt="" className="xl:w-[160px] xl:h-[46px] lg:w-[140px] lg:h-[40px] w-[120px] h-[35px] object-cover" />
          </div>
          <div className="signUpFormSec xl:px-[80px] lg:px-[30px] px-[5px] ">
            <div className="text-center xl:mb-[42px] lg:mb-[30px] mb-[20px]">
              <h4 className="xl:text-24 lg:text-20 text-18 font-semibold">
                Get Started With houttotaal.nl
              </h4>
              <span className="xl:text-15 text-14 text-gray-500 block font-normal	">
                Getting started is easy
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
                  <button className="bg-[#FBC700] block text-black text-center xl:py-[19px] lg:py-[16px] py-[12px] px-[25px] w-full font-semibold mb-[23px] xl:text-[14px] text-[13px]">
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
