import React from "react";
import profileImg from "../../assets/myAccount/profile.png";
import invoiceImg from "../../assets/myAccount/invoiceimg.svg"
import profilebtn from "../../assets/myAccount/profileBtn.svg"

const OrderHistory = () => {
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
        <div className="w-[100%]">
          <h1 className="text-20 font-semibold mb-[18px] sm:mt-12 sm:text-center xs:mt-10 xs:text-center">Orders History</h1>
          <div className="xs:overflow-auto">
          <table className="w-[100%] ">
            <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] xs:w-[541px] justify-between py-[22px]">
              <th className="text-[14px] text-[#6C7275] w-[20%] md:w-[auto] sm:w-[auto] text-left">Number ID</th>
              <th className="text-[14px] text-[#6C7275] w-[20%] md:w-[auto] sm:w-[auto] text-left">Dates</th>
              <th className="text-[14px] text-[#6C7275] w-[20%] md:w-[auto] sm:w-[auto] text-left">Status</th>
              <th className="text-[14px] text-[#6C7275] w-[20%] md:w-[auto] sm:w-[auto] text-left">Price</th>
              <th className="text-[14px] text-[#6C7275] w-[20%] md:w-[auto] sm:w-[auto] text-left">Invoice</th>
            </tr>
            <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] xs:w-[541px] justify-between py-[22px]">
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">#3456_768</td>
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">October 17, 2024</td>
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">Delivered</td>
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">$1234.00</td>
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left"><button><span><img src={invoiceImg} /></span></button></td>
            </tr>
            <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] xs:w-[541px] justify-between py-[22px]">
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">#3456_768</td>
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">October 17, 2024</td>
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">Delivered</td>
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">$1234.00</td>
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left"><button><span><img src={invoiceImg} /></span></button></td>
            </tr>
            <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] xs:w-[541px] justify-between py-[22px]">
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">#3456_768</td>
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">October 17, 2024</td>
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">Delivered</td>
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">$1234.00</td>
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left"><button><span><img src={invoiceImg} /></span></button></td>
            </tr>
            <tr className=" flex w-[100%] xs:w-[541px] justify-between py-[22px]">
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">#3456_768</td>
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">October 17, 2024</td>
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">Delivered</td>
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">$1234.00</td>
              <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left"><button><span><img src={invoiceImg} /></span></button></td>
            </tr>
          </table></div>
        </div>
      </div>
    </section>
  );
};

export default OrderHistory;
