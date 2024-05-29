import React, { useEffect, useState } from "react";
import profileImg from "../../assets/myAccount/profile.png";
import crossImg from "../../assets/myAccount/Shape.svg";
import profilebtn from "../../assets/myAccount/profileBtn.svg";
import productImg from "../../assets/myAccount/image 1.svg";
import productImg2 from "../../assets/myAccount/image 2.svg";
import productImg3 from "../../assets/myAccount/image 3.svg";
import { getWishList } from "../../redux/actions/orderActions";

const Wishlist = () => {
  const [state, setState] = useState({
    wishlistData: null,
  });

  const fetchWishlist = async () => {
    try {
      const res = await getWishList();
      setState((prev) => ({
        ...prev,
        wishlistData: res,
      }));
      console.log(res, "fetchUser");
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  console.log(state, "state");

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <section className="">
      {/* <h1 className="text-[48px] xs:text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] text-center text-[#000000] mb-[80px] xs:mb-[25px] sm:mb-[30px] md:mb-[50px] lg:mb-[70px]">
        My Account
      </h1> */}
      <div className="flex xs:flex-col xs:items-center sm:flex-col sm:items-center mb-32 justify-center">
        <div className="w-[100%]">
          <h1 className="text-20 font-semibold mb-[18px] sm:mt-12 sm:text-center xs:mt-10 xs:text-center">
            Your Wishlist
          </h1>
          <div className="xs:overflow-auto">
            <table className="w-[100%] xs:w-[574px]">
              <thead>
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
              </thead>
              <tbody>
                {state?.wishlistData?.length > 0 ? (
                  state.wishlistData.map((item, index) => (
                    <tr
                      key={index}
                      className="border-solid border-b-[1px] border-[#E8ECEF] flex w-[100%] justify-between py-[22px] items-center"
                    >
                      <td className="text-[14px] text-[#141718] w-[40%] text-left">
                        <div className="flex items-center ">
                          <button className="mr-[29px] md:mr-[15px] sm:mr-[10px]">
                            <span>
                              <img src={crossImg} alt="Cross" />
                            </span>
                          </button>
                          <div className="w-[60px] h-[72px] mr-[16px] md:w-[50px] md:h-[60px] md:mr-[12px] sm:w-[40px] sm:h-[50px] sm:mr-[10px]">
                            <img
                              src={item.productImg}
                              className="w-[100%]"
                              alt="Product"
                            />
                          </div>
                          <div className="flex flex-col items-center content-center gap-[8px]">
                            <h1 className="text-[14px]">{item.productName}</h1>
                            <p className="text-[#6C7275] text-[12px]">
                              Color: {item.productColor}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="w-[20%] text-left">${item.price}</td>
                      <td className="w-[40%] flex justify-center items-center">
                        <button className="px-[24px] py-[6px] bg-[#FBC700] rounded-[8px]">
                          <span className="text-[#fff]">Add to cart</span>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="text-[14px] text-bold text-[#141718] text-center py-[22px]"
                    >
                      No data
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
