import React from "react";
import profileImg from "../../assets/myAccount/profile.png";
import crossImg from "../../assets/myAccount/Shape.svg";
import profilebtn from "../../assets/myAccount/profileBtn.svg";
import productImg from "../../assets/myAccount/image 1.svg";
import productImg2 from "../../assets/myAccount/image 2.svg";
import productImg3 from "../../assets/myAccount/image 3.svg";

const Wishlist = () => {
  return (
    <section className="px-40 xs:px-8 sm:px-10 md:px-10 lg:px-12 my-20 xs:my-8 sm:my-10 md:my-13 lg:my-14">
      <h1 className="text-[48px] xs:text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] text-center text-[#000000] mb-[80px] xs:mb-[25px] sm:mb-[30px] md:mb-[50px] lg:mb-[70px]">
        My Account
      </h1>
      <div className="flex xs:flex-col xs:items-center sm:flex-col sm:items-center mb-32 justify-center">
        <div className="w-[100%]">
          <h1 className="text-20 font-semibold mb-[18px] sm:mt-12 sm:text-center xs:mt-10 xs:text-center">
            Your Wishlist
          </h1>
          <div className="xs:overflow-auto">
            <table className="w-[100%] xs:w-[574px]">
              <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] justify-between py-[22px]">
                <th className="text-[14px] text-[#6C7275] w-[40%] text-left">
                  Product
                </th>
                <th className="text-[14px] text-[#6C7275] w-[20%] text-left">
                  Price
                </th>
                <th className="text-[14px] text-[#6C7275] w-[40%] text-left flex justify-center items-center">
                  Action
                </th>
              </tr>
              <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] justify-between py-[22px] items-center">
                <td className="text-[14px] text-[#141718] w-[40%] text-left">
                  <div className="flex items-center ">
                    <button className="mr-[29px] md:mr-[15px] sm:mr-[10px]">
                      <span>
                        <img src={crossImg} />
                      </span>
                    </button>
                    <div className="w-[60px] h-[72px] mr-[16px] md:w-[50px] md:h-[60px] md:mr-[12px] sm:w-[40px] sm:h-[50px] sm:mr-[10px]">
                      <img src={productImg} className="w-[100%]" />
                    </div>
                    <div className="flex flex-col items-center content-center gap-[8px]">
                      <h1 className="text-[14px]">Tray Table</h1>
                      <p className="text-[#6C7275] text-[12px]">Color: Black</p>
                    </div>
                  </div>
                </td>
                <td className="w-[20%] text-left">$19.19</td>
                <td className="w-[40%] flex justify-center items-center">
                  <button className="px-[24px] py-[6px] bg-[#FBC700] rounded-[8px]">
                    <span className="text-[#fff]">Add to cart</span>
                  </button>
                </td>
              </tr>
              <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] justify-between py-[22px] items-center">
                <td className="text-[14px] text-[#141718] w-[40%] text-left">
                  <div className="flex items-center ">
                    <button className="mr-[29px] md:mr-[15px] sm:mr-[10px]">
                      <span>
                        <img src={crossImg} />
                      </span>
                    </button>
                    <div className="w-[60px] h-[72px] mr-[16px] md:w-[50px] md:h-[60px] md:mr-[12px] sm:w-[40px] sm:h-[50px] sm:mr-[10px]">
                      <img src={productImg2} className="w-[100%]" />
                    </div>
                    <div className="flex flex-col items-center content-center gap-[8px]">
                      <h1 className="text-[14px]">Tray Table</h1>
                      <p className="text-[#6C7275] text-[12px]">Color: Black</p>
                    </div>
                  </div>
                </td>
                <td className="w-[20%] text-left">$345</td>
                <td className="w-[40%] flex justify-center items-center">
                  <button className="px-[24px] py-[6px] bg-[#FBC700] rounded-[8px]">
                    <span className="text-[#fff]">Add to cart</span>
                  </button>
                </td>
              </tr>
              <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] justify-between py-[22px] items-center">
                <td className="text-[14px] text-[#141718] w-[40%] text-left">
                  <div className="flex items-center ">
                    <button className="mr-[29px] md:mr-[15px] sm:mr-[10px]">
                      <span>
                        <img src={crossImg} />
                      </span>
                    </button>
                    <div className="w-[60px] h-[72px] mr-[16px] md:w-[50px] md:h-[60px] md:mr-[12px] sm:w-[40px] sm:h-[50px] sm:mr-[10px]">
                      <img src={productImg3} className="w-[100%]" />
                    </div>
                    <div className="flex flex-col items-center content-center gap-[8px]">
                      <h1 className="text-[14px]">Tray Table</h1>
                      <p className="text-[#6C7275] text-[12px]">Color: Black</p>
                    </div>
                  </div>
                </td>
                <td className="w-[20%] text-left">$8.80</td>
                <td className="w-[40%] flex justify-center items-center">
                  <button className="px-[24px] py-[6px] bg-[#FBC700] rounded-[8px]">
                    <span className="text-[#fff]">Add to cart</span>
                  </button>
                </td>
              </tr>
              <tr className=" border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] justify-between py-[22px] items-center">
                <td className="text-[14px] text-[#141718] w-[40%] text-left">
                  <div className="flex items-center ">
                    <button className="mr-[29px] md:mr-[15px] sm:mr-[10px]">
                      <span>
                        <img src={crossImg} />
                      </span>
                    </button>
                    <div className="w-[60px] h-[72px] mr-[16px] md:w-[50px] md:h-[60px] md:mr-[12px] sm:w-[40px] sm:h-[50px] sm:mr-[10px]">
                      <img src={productImg} className="w-[100%]" />
                    </div>
                    <div className="flex flex-col items-center content-center gap-[8px]">
                      <h1 className="text-[14px]">Tray Table</h1>
                      <p className="text-[#6C7275] text-[12px]">Color: Black</p>
                    </div>
                  </div>
                </td>
                <td className="w-[20%] text-left">$8.80</td>
                <td className="w-[40%] flex justify-center items-center">
                  <button className="px-[24px] py-[6px] bg-[#FBC700] rounded-[8px]">
                    <span className="text-[#fff]">Add to cart</span>
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

export default Wishlist;
