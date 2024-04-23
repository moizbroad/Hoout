import React from "react";
import profileImg from "../../assets/myAccount/profile.png";
import editImg from "../../assets/myAccount/edit-icon.svg";
import profilebtn from "../../assets/myAccount/profileBtn.svg";

const AddressCard = () => {
  return (
    <section className="px-40 xs:px-8 sm:px-10 md:px-10 lg:px-12 my-20 xs:my-8 sm:my-10 md:my-13 lg:my-14">
      <h1 className="text-[48px] xs:text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] text-center text-[#000000] mb-[80px] xs:mb-[25px] sm:mb-[30px] md:mb-[50px] lg:mb-[70px]">
        My Account
      </h1>
      <div className="flex xs:flex-col xs:items-center sm:flex-col sm:items-center mb-32 justify-center">
        <div className="px-[16px] py-[40px] bg-[#F3F5F7] w-[262px] xs:w-[100%] sm:w-[100%] flex justify-center items-center flex-col rounded-[8px] mr-[79px] xs:mr-0 sm:mr-0 md:mr-7 h-[fit-content]">
          <div className="w-[80px] h-[80px] rounded-[50%] relative">
            <img src={profileImg} className="w-[100%]" />
            <button className="w-[30px] h-[30px] absolute bottom-0 right-0">
              <span>
                <img src={profilebtn} className="w-[100%]" />
              </span>
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
        <div className="xs:w-[100%]">
          <h1 className="text-[16px] font-semibold text-[#111727] mb-[19px] xs:text-center xs:mt-5 sm:mt-8 sm:text-center">
            Address
          </h1>
          <div className="flex gap-[23px] xs:flex-col ">
            <div className="px-[24px] py-[16px] border-solid border-[1px] border-[#6C7275] rounded-[8px] xs:w-[100%]">
              <div className="mb-[8px] flex justify-between">
                <h1 className="text-[16px] font-semibold text-[#111727]">
                  Billing Address
                </h1>
                <button>
                  <span className="text-[16px] font-semibold text-[#6C7275] flex gap-[6px]">
                    <img src={editImg} />
                    Edit
                  </span>
                </button>
              </div>
              <p className="text-[16px] text-[#535353] mt-[4px]">
                Sofia Havertz
              </p>
              <p className="text-[16px] text-[#535353] mt-[4px]">
                (+1) 234 567 890
              </p>
              <p className="text-[16px] text-[#535353] mt-[4px]">
                345 Long Island, NewYork, United States
              </p>
            </div>
            <div className="px-[24px] py-[16px] border-solid border-[1px] border-[#6C7275] rounded-[8px] xs:w-[100%] ">
              <div className="mb-[8px] flex justify-between">
                <h1 className="text-[16px] font-semibold text-[#111727]">
                  Shipping Address
                </h1>
                <button>
                  <span className="text-[16px] font-semibold text-[#6C7275] flex gap-[6px]">
                    <img src={editImg} />
                    Edit
                  </span>
                </button>
              </div>
              <p className="text-[16px] text-[#535353] mt-[4px]">
                Sofia Havertz
              </p>
              <p className="text-[16px] text-[#535353] mt-[4px]">
                (+1) 234 567 890
              </p>
              <p className="text-[16px] text-[#535353] mt-[4px]">
                345 Long Island, NewYork, United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressCard;
