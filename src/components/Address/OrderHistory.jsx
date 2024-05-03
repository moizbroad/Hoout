import React from "react";
import profileImg from "../../assets/myAccount/profile.png";
import invoiceImg from "../../assets/myAccount/invoiceimg.svg";
import profilebtn from "../../assets/myAccount/profileBtn.svg";

const OrderHistory = () => {
  return (
    <section className="px-40 xs:px-8 sm:px-10 md:px-10 lg:px-12 my-20 xs:my-8 sm:my-10 md:my-13 lg:my-14">
      {/* <h1 className="text-[48px] xs:text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] text-center text-[#000000] mb-[80px] xs:mb-[25px] sm:mb-[30px] md:mb-[50px] lg:mb-[70px]">
        My Account
      </h1> */}
      <div className="flex xs:flex-col xs:items-center sm:flex-col sm:items-center mb-32 justify-center">
        <div className="w-[100%]">
          <h1 className="text-20 font-semibold mb-[18px] sm:mt-12 sm:text-center xs:mt-10 xs:text-center">
            Orders History
          </h1>
          <div className="xs:overflow-auto">
            <table className="w-[100%] ">
              <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] xs:w-[541px] justify-between py-[22px]">
                <th className="text-[14px] text-[#6C7275] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  Number ID
                </th>
                <th className="text-[14px] text-[#6C7275] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  Dates
                </th>
                <th className="text-[14px] text-[#6C7275] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  Status
                </th>
                <th className="text-[14px] text-[#6C7275] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  Price
                </th>
                <th className="text-[14px] text-[#6C7275] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  Invoice
                </th>
              </tr>
              <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] xs:w-[541px] justify-between py-[22px]">
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  #3456_768
                </td>
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  October 17, 2024
                </td>
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  Delivered
                </td>
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  $1234.00
                </td>
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  <button>
                    <span>
                      <img src={invoiceImg} />
                    </span>
                  </button>
                </td>
              </tr>
              <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] xs:w-[541px] justify-between py-[22px]">
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  #3456_768
                </td>
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  October 17, 2024
                </td>
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  Delivered
                </td>
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  $1234.00
                </td>
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  <button>
                    <span>
                      <img src={invoiceImg} />
                    </span>
                  </button>
                </td>
              </tr>
              <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] xs:w-[541px] justify-between py-[22px]">
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  #3456_768
                </td>
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  October 17, 2024
                </td>
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  Delivered
                </td>
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  $1234.00
                </td>
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  <button>
                    <span>
                      <img src={invoiceImg} />
                    </span>
                  </button>
                </td>
              </tr>
              <tr className=" flex w-[100%] xs:w-[541px] justify-between py-[22px]">
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  #3456_768
                </td>
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  October 17, 2024
                </td>
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  Delivered
                </td>
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  $1234.00
                </td>
                <td className="text-[14px] text-[#141718] w-[20%] md:w-[auto] sm:w-[auto] text-left">
                  <button>
                    <span>
                      <img src={invoiceImg} />
                    </span>
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderHistory;
