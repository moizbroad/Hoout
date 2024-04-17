import React from "react";
import profileImg from "../../assets/myAccount/profile.png";
import invoiceImg from "../../assets/myAccount/invoiceimg.svg"

const OrderHistory = () => {
  return (
    <section className="px-40 my-20">
      <h1 className="text-[48px] text-center text-[#000000] mb-[80px]">
        My Account
      </h1>
      <div className="flex">
        <div className="px-[16px] py-[40px] bg-[#F3F5F7] w-[262px] flex justify-center items-center flex-col rounded-[8px] mr-[79px]">
          <div className="w-[80px] h-[80px] rounded-[50%]">
            <img src={profileImg} className="w-[100%]" />
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
          <h1 className="text-20 font-semibold mb-[18px]">Orders History</h1>
          <table className="w-[100%]">
            <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] justify-between py-[22px]">
              <th className="text-[14px] text-[#6C7275] w-[20%] text-left">Number ID</th>
              <th className="text-[14px] text-[#6C7275] w-[20%] text-left">Dates</th>
              <th className="text-[14px] text-[#6C7275] w-[20%] text-left">Status</th>
              <th className="text-[14px] text-[#6C7275] w-[20%] text-left">Price</th>
              <th className="text-[14px] text-[#6C7275] w-[20%] text-left">Invoice</th>
            </tr>
            <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] justify-between py-[22px]">
              <td className="text-[14px] text-[#141718] w-[20%] text-left">#3456_768</td>
              <td className="text-[14px] text-[#141718] w-[20%] text-left">October 17, 2024</td>
              <td className="text-[14px] text-[#141718] w-[20%] text-left">Delivered</td>
              <td className="text-[14px] text-[#141718] w-[20%] text-left">$1234.00</td>
              <td className="text-[14px] text-[#141718] w-[20%] text-left"><button><span><img src={invoiceImg} /></span></button></td>
            </tr>
            <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] justify-between py-[22px]">
              <td className="text-[14px] text-[#141718] w-[20%] text-left">#3456_768</td>
              <td className="text-[14px] text-[#141718] w-[20%] text-left">October 17, 2024</td>
              <td className="text-[14px] text-[#141718] w-[20%] text-left">Delivered</td>
              <td className="text-[14px] text-[#141718] w-[20%] text-left">$1234.00</td>
              <td className="text-[14px] text-[#141718] w-[20%] text-left"><button><span><img src={invoiceImg} /></span></button></td>
            </tr>
            <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] justify-between py-[22px]">
              <td className="text-[14px] text-[#141718] w-[20%] text-left">#3456_768</td>
              <td className="text-[14px] text-[#141718] w-[20%] text-left">October 17, 2024</td>
              <td className="text-[14px] text-[#141718] w-[20%] text-left">Delivered</td>
              <td className="text-[14px] text-[#141718] w-[20%] text-left">$1234.00</td>
              <td className="text-[14px] text-[#141718] w-[20%] text-left"><button><span><img src={invoiceImg} /></span></button></td>
            </tr>
            <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] justify-between py-[22px]">
              <td className="text-[14px] text-[#141718] w-[20%] text-left">#3456_768</td>
              <td className="text-[14px] text-[#141718] w-[20%] text-left">October 17, 2024</td>
              <td className="text-[14px] text-[#141718] w-[20%] text-left">Delivered</td>
              <td className="text-[14px] text-[#141718] w-[20%] text-left">$1234.00</td>
              <td className="text-[14px] text-[#141718] w-[20%] text-left"><button><span><img src={invoiceImg} /></span></button></td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OrderHistory;
