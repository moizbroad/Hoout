import React from "react";

const AccountSideNAv = () => {
  return (
    <>
      <div className="px-[16px] py-[40px] bg-[#F3F5F7] w-[262px] flex justify-center items-center flex-col rounded-[8px] mr-[79px] h-[fit-content]">
        <div className="w-[80px] h-[80px] rounded-[50%] relative">
          <img src={profileImg} className="w-[100%]" />
          <button className="w-[30px] h-[30px] absolute bottom-0 right-0">
            <span>{/* <img src={profilebtn} className="w-[100%]" /> */}</span>
          </button>
        </div>
        <h1 className="text-[16px] text-[#000000] text-center mt-[8px] mb-[48px] font-semibold">
          Sofia Havertz
        </h1>
        <div className="w-[100%]">
          <h1 className="text-[16px] text-[#000000] pb-[8px] border-b-[1px] border-[#111727] border-solid mb-[12px]">
            Account
          </h1>
          <div className="py-[8px] text-[16px] text-[#6C7275]">Address</div>
          <div className="py-[8px] text-[16px] text-[#6C7275]">Orders</div>
          <div className="py-[8px] text-[16px] text-[#6C7275]">Wishlist</div>
          <div className="py-[8px] text-[16px] text-[#6C7275]">Log Out</div>
        </div>
      </div>
    </>
  );
};

export default AccountSideNAv;
