import React from "react";
import smallVideo from "../../assets/addToCart/smallVideo.svg";
import Button from "../Common/Button";

const OrderComplete = () => {
  return (
    <>
      <section className="mx-[351px]  shadow-2xl mb-[130px]">
        <div className="px-[95px]">
          <div className="pt-[80px] text-center text-28 text-[#6C7275] ">
            Thank you!
          </div>
          <div className="text-40 font-medium  text-center pt-4">
            Your order has been received
          </div>
          <div className="pt-[40px] flex justify-center">
            <img src={smallVideo} />{" "}
          </div>

          <div className="flex justify-between px-[123px] items-center pt-5 ">
            <div className="text-[#6C7275] text-14 font-semibold">
              Order code:
            </div>
            <div className="text-14 font-semibold">#0123_45678</div>
          </div>
          <div className="flex justify-between  px-[123px] items-center pt-5">
            <div className="text-[#6C7275] text-14 font-semibold">Date:</div>
            <div className="text-14 font-semibold">October 19, 2023</div>
          </div>
          <div className="flex justify-between  px-[123px] items-center pt-5">
            <div className="text-[#6C7275] text-14 font-semibold">Total:</div>
            <div className="text-14 font-semibold">$1,345.00</div>
          </div>
          <div className="flex justify-between px-[123px]  items-center pt-5">
            <div className="text-[#6C7275] text-14 font-semibold">
              Payment method:
            </div>
            <div className="text-14 font-semibold">Credit Card</div>
          </div>
          <div className="flex justify-between  px-[123px]  items-center pt-5">
            <div className="text-[#6C7275] text-14 font-semibold">
              Estimated Delivery Time:
            </div>
            <div className="text-14 font-semibold">5 days</div>
          </div>

          <div className="pt-[20px] flex justify-center pb-[80px]">
            <Button btnText="Back to Home " breakpoint="w-[323px]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderComplete;
