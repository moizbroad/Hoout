import React, { useState } from "react";
import profileImg from "../assets/myAccount/profile.png";
import profilebtn from "../assets/myAccount/profileBtn.svg";
import Account from "../components/Address/Account";
import AddressCard from "../components/Address/AddressCard";
import OrderHistory from "../components/Address/OrderHistory";
import Wishlist from "../components/Address/Wishlist";
import { useLocation, useNavigate } from "react-router-dom";
import { setAccessToken } from "../providers";

export const MyAccount = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const userData = JSON.parse(localStorage.getItem("userData"));

  const [selectedComponent, setSelectedComponent] = useState(
    state?.key === "wish" ? <Wishlist /> : <Account userData={userData} />
  );

  const data = [
    { id: 1, name: "Account", component: <Account userData={userData} /> },
    { id: 2, name: "Address", component: <AddressCard /> },
    { id: 3, name: "Orders", component: <OrderHistory /> },
    { id: 4, name: "Wishlist", component: <Wishlist /> },
    { id: 5, name: "LogOut", component: null },
  ];

  const handleLogout = () => {
    setAccessToken(null);
    localStorage.removeItem("userData");
    navigate("/sign-in");
  };

  return (
    <>
      <section className="px-40 xs:px-8 sm:px-10 md:px-10 lg:px-12 my-20 xs:my-8 sm:my-10 md:my-13 lg:my-14">
        <h1 className="text-[48px] xs:text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] text-center text-[#000000] mb-[80px] xs:mb-[25px] sm:mb-[30px] md:mb-[50px] lg:mb-[70px]">
          My Account
        </h1>
        <div className="flex xs:flex-col xs:items-center sm:flex-col sm:items-center mb-32 justify-center">
          <div className="px-[16px] py-[40px] bg-[#F3F5F7] w-[262px] xs:w-[100%] sm:w-[100%] flex justify-center items-center flex-col rounded-[8px] mr-[79px] xs:mr-0 sm:mr-0 md:mr-7 h-[fit-content]">
            <div className="w-[80px] h-[80px] rounded-[50%] relative">
              <img src={profileImg} className="w-[100%]" alt="Profile" />
              <button className="w-[30px] h-[30px] absolute bottom-0 right-0">
                <span>
                  <img
                    src={profilebtn}
                    className="w-[100%]"
                    alt="Edit Profile"
                  />
                </span>
              </button>
            </div>
            <h1 className="text-[16px] text-[#000000] text-center mt-[8px] mb-[48px] font-semibold">
              Sofia Havertz
            </h1>

            {data.map((item) => {
              const isSelected =
                selectedComponent?.type?.name === item.component?.type?.name;
              return (
                <div
                  key={item.id}
                  className={`w-[100%] cursor-pointer ${
                    isSelected ? "border-b-[#FBC700]" : ""
                  }`}
                  onClick={() => {
                    if (item.name === "LogOut") {
                      handleLogout();
                    } else {
                      setSelectedComponent(item.component);
                    }
                  }}
                >
                  <h1
                    className={`text-[16px] pb-[8px] mb-[12px] ${
                      isSelected ? "text-[#000000]" : "text-[#7b7b7b]"
                    }`}
                  >
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>

          <div className="w-[100%]">{selectedComponent}</div>
        </div>
      </section>
    </>
  );
};

export default MyAccount;
