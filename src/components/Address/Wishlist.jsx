import React from "react";
import profileImg from "../../assets/myAccount/profile.png";
import crossImg from "../../assets/myAccount/Shape.svg";
import productImg from "../../assets/myAccount/image 1.svg";
import productImg2 from "../../assets/myAccount/product2.svg";
import productImg3 from "../../assets/myAccount/product3.svg";
import productImg4 from "../../assets/myAccount/product4.svg";
import profilebtn from "../../assets/myAccount/profileBtn.svg";

const Wishlist = () => {
  return (
    <section className="px-40 my-20">
      <h1 className="text-[48px] text-center text-[#000000] mb-[80px]">
        My Account
      </h1>
      <div className="flex">
        <div className="px-[16px] py-[40px] bg-[#F3F5F7] w-[262px] flex justify-center items-center flex-col rounded-[8px] mr-[79px] h-[fit-content]">
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
          <h1 className="text-20 font-semibold mb-[18px]">Your Wishlist</h1>
          <table className="w-[100%]">
            <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] justify-between py-[22px]">
              <th className="text-[14px] text-[#6C7275] w-[45%] text-left">
                Product
              </th>
              <th className="text-[14px] text-[#6C7275] w-[30%] text-left">
                Price
              </th>
              <th className="text-[14px] text-[#6C7275] w-[25%] text-left flex justify-start items-center">
                Action
              </th>
            </tr>
            <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] justify-between py-[22px]">
              <td className="text-[14px] text-[#141718] w-[45%] text-left">
                <div className="flex items-center ">
                  <button className="mr-[29px]">
                    <span>
                      <img src={crossImg} />
                    </span>
                  </button>
                  <div className="w-[60px] h-[72px] mr-[16px]">
                    <img src={productImg} className="w-[100%]" />
                  </div>
                  <div className="flex flex-col items-center content-center gap-[8px]">
                    <h1 className="text-[14px]">Tray Table</h1>
                    <p className="text-[#6C7275] text-[12px]">Color: Black</p>
                  </div>
                </div>
              </td>
              <td className="w-[30%] text-left flex items-center">$19.19</td>
              <td className="w-[25%] flex justify-start items-center">
                <button className="px-[24px] py-[6px] bg-[#FBC700] rounded-[8px]">
                  <span className="text-[#fff]">Add to cart</span>
                </button>
              </td>
            </tr>
            <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] justify-between py-[22px]">
              <td className="text-[14px] text-[#141718] w-[45%] text-left">
                <div className="flex items-center ">
                  <button className="mr-[29px]">
                    <span>
                      <img src={crossImg} />
                    </span>
                  </button>
                  <div className="w-[60px] h-[72px] mr-[16px]">
                    <img src={productImg2} className="w-[100%]" />
                  </div>
                  <div className="flex flex-col items-center content-center gap-[8px]">
                    <h1 className="text-[14px]">Tray Table</h1>
                    <p className="text-[#6C7275] text-[12px]">Color: Black</p>
                  </div>
                </div>
              </td>
              <td className="w-[30%] text-left flex items-center">$345</td>
              <td className="w-[25%] flex justify-start items-center">
                <button className="px-[24px] py-[6px] bg-[#FBC700] rounded-[8px]">
                  <span className="text-[#fff]">Add to cart</span>
                </button>
              </td>
            </tr>
            <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] justify-between py-[22px]">
              <td className="text-[14px] text-[#141718] w-[45%] text-left">
                <div className="flex items-center ">
                  <button className="mr-[29px]">
                    <span>
                      <img src={crossImg} />
                    </span>
                  </button>
                  <div className="w-[60px] h-[72px] mr-[16px]">
                    <img src={productImg3} className="w-[100%]" />
                  </div>
                  <div className="flex flex-col items-center content-center gap-[8px]">
                    <h1 className="text-[14px]">Tray Table</h1>
                    <p className="text-[#6C7275] text-[12px]">Color: Black</p>
                  </div>
                </div>
              </td>
              <td className="w-[30%] text-left flex items-center">$8.80</td>
              <td className="w-[25%] flex justify-start items-center">
                <button className="px-[24px] py-[6px] bg-[#FBC700] rounded-[8px]">
                  <span className="text-[#fff]">Add to cart</span>
                </button>
              </td>
            </tr>
            <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] justify-between py-[22px]">
              <td className="text-[14px] text-[#141718] w-[45%] text-left">
                <div className="flex items-center ">
                  <button className="mr-[29px]">
                    <span>
                      <img src={crossImg} />
                    </span>
                  </button>
                  <div className="w-[60px] h-[72px] mr-[16px]">
                    <img src={productImg4} className="w-[100%]" />
                  </div>
                  <div className="flex flex-col items-center content-center gap-[8px]">
                    <h1 className="text-[14px]">Tray Table</h1>
                    <p className="text-[#6C7275] text-[12px]">Color: Black</p>
                  </div>
                </div>
              </td>
              <td className="w-[30%] text-left flex items-center">$8.80</td>
              <td className="w-[25%] flex justify-start items-center">
                <button className="px-[24px] py-[6px] bg-[#FBC700] rounded-[8px]">
                  <span className="text-[#fff]">Add to cart</span>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
