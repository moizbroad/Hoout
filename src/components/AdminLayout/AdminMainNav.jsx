import React from "react";
import { useNavigate } from "react-router-dom";
import notfiIcon from "../../assets/DashboardImages/notfiIcon.svg";
import country from "../../assets/DashboardImages/country.svg";
import ProfileDD from "../../assets/DashboardImages/ProfileDD.svg";
import CountrySelector from "../Common/CountrySelector";

const AdminMainNav = () => {
  const navigate = useNavigate();

  //   const handleDashboardClick = () => {
  //     navigate("/dashboard");
  //   };

  //   const handleInboxClick = () => {
  //     navigate("/inbox");
  //   };

  return (
    <div className="dashRightSide flex-1 ">
      <div className="dashHead xl:px-[30px] lg:px-[26px] px-[20px] xl:py-[16px] py-[10px] flex justify-between items-center">
        <div className="search w-[40%]">
          {/* <!-- component --> */}
          <div class="">
            <div className="relative flex items-center xl:w-[80%] w-[100%] h-12 rounded-full focus-within:shadow-lg bg-white overflow-hidden border-gray	border-[0.5px]">
              <div class="grid place-items-center h-full w-12 text-gray-300 bg-[#fefbeb]  min-w-[50px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 searchSvg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-[#fefbeb]"
                type="text"
                id="search"
                placeholder="Search"
              />
            </div>
          </div>
        </div>

        <div className="dashHeadRight xl:w-[40%] w-[51%] flex justify-end gap-[15px] items-center">
          <a href="#">
            <img src={notfiIcon} alt="" />
          </a>
          <div className="flagSelMain">
            <CountrySelector />
          </div>
          <a href="#">
            <img src={ProfileDD} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminMainNav;
