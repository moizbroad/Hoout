import React from "react";
// import Sidebar from "./Sidebar";
import inventory from "../assets/DashboardImages/inventory.svg";
import skuImg from "../assets/DashboardImages/skuImg.svg";
import salesImg from "../assets/DashboardImages/salesImg.svg";
import trendUp from "../assets/DashboardImages/trendUp.svg";
import trendDown from "../assets/DashboardImages/trendDown.svg";
import sampleProductImg from "../assets/DashboardImages/sampleProductImg.svg";


const Dashboard = () => {
  return (
    <div>
      <div className="p-[30px] bg-[#fafafa] h-full min-h-[86vh]">
        <h1 className="text-32 font-bold mb-[39px] ">Dashboard</h1>
        {/* analytics row  */}
        <div className="dashCardRow flex justify-between items-center mb-[15.76px]">
          <div className="inventCard p-[21px] rounded-lg bg-[#fff] w-[32%]">
            <div className="flex justify-between items-center mb-[50px]">
              <div>
                <h6 className="text-20 font-semibold text-gray3 opacity-[0.7] mb-[25px]">
                  Total Inventory
                </h6>
                <h5 className="text-36 font-bold">40,689</h5>
              </div>
              <div>
                <img src={inventory} alt="" />
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={trendUp} alt="" />{" "}
              <span className="text-green1">8.5%</span>
              <p className="text-gray2"> Up from January</p>
            </div>
          </div>
          <div className="inventCard p-[21px] rounded-lg bg-[#fff] w-[32%]">
            <div className="flex justify-between items-center mb-[50px]">
              <div>
                <h6 className="text-20 font-semibold text-gray3 opacity-[0.7] mb-[25px]">
                  Total SKU
                </h6>
                <h5 className="text-36 font-bold">40</h5>
              </div>
              <div>
                <img src={skuImg} alt="" />
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={trendUp} alt="" />{" "}
              <span className="text-green1">1.3%</span>
              <p className="text-gray2"> Up from January</p>
            </div>
          </div>
          <div className="inventCard p-[21px] rounded-lg bg-[#fff] w-[32%]">
            <div className="flex justify-between items-center mb-[50px]">
              <div>
                <h6 className="text-20 font-semibold text-gray3 opacity-[0.7] mb-[25px]">
                  Total Sales
                </h6>
                <h5 className="text-36 font-bold">$89,000</h5>
              </div>
              <div>
                <img src={salesImg} alt="" />
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={trendDown} alt="" />{" "}
              <span className="text-red">4.3%</span>
              <p className="text-gray2"> Down from last month</p>
            </div>
          </div>
        </div>
        {/* analytics row end  */}

        {/* order detail card table row  */}
        <div className="myCard">
          <div className="flex justify-between items-center mb-[35px]">
            <h5 className="text-24  font-bold">Order Details</h5>
            {/* dropdown  */}
            <div>
              <div class="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Options
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {/* <div
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Account settings
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Support
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      License
                    </a>
                   
                  </div>
                </div> */}
              </div>
            </div>
            {/* dropdown end  */}
          </div>
          {/* order details table  */}
          <div className="">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full  rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr
                      className="bg-[#F1F4F9]
"
                    >
                      <th className="px-[24px] py-[16px]  text-left text-14 font-bold  rounded-l-2xl	">
                        Product Name
                      </th>
                      <th className="px-[24px] py-[16px]  text-left text-14 font-bold	">
                        Location
                      </th>
                      <th className="px-[24px] py-[16px]  text-left text-14 font-bold	">
                        Date - Time
                      </th>
                      <th className="px-[24px] py-[16px]  text-left text-14 font-bold	">
                        Piece
                      </th>
                      <th className="px-[24px] py-[16px]  text-left text-14 font-bold	">
                        Amount
                      </th>

                      <th className="px-[24px] py-[16px]  text-center text-14 font-bold rounded-r-2xl	">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-[0.4px] border-gray">
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                           <img src={sampleProductImg} alt="sample Product Name" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                             Name 
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center">
                         
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                             6096 Marjolaine Landing
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center">
                         
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                             12.09.2019 - 12.53 PM
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center">
                         
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                             423
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center">
                         
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                             $34,295
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center justify-center">
                         
                          <div className="ml-3">
                            <p className="rounded-full bg-green1 text-white px-[16px] py-[7px] text-14 font-bold text-center">
                           Delivered
                            </p>
                           
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b-[0.4px] border-gray">
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                           <img src={sampleProductImg} alt="sample Product Name" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                             Name 
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center">
                         
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                             6096 Marjolaine Landing
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center">
                         
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                             12.09.2019 - 12.53 PM
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center">
                         
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                             423
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center">
                         
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                             $34,295
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center justify-center">
                         
                          <div className="ml-3">
                            <p className="rounded-full bg-orange text-white px-[16px] py-[7px] text-14 font-bold text-center">
                           Pending
                            </p>
                           
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b-[0.4px] border-gray">
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                           <img src={sampleProductImg} alt="sample Product Name" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                             Name 
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center">
                         
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                             6096 Marjolaine Landing
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center">
                         
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                             12.09.2019 - 12.53 PM
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center">
                         
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                             423
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center">
                         
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                             $34,295
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                        <div className="flex gap-3 items-center justify-center">
                         
                          <div className="ml-3">
                            <p className="rounded-full bg-red text-white px-[16px] py-[7px] text-14 font-bold text-center">
                           Rejected
                            </p>
                           
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* order details table end */}
        </div>
        {/* order detail card table row end */}

        <div className="w-full mt-[106px] flex justify-end">
           <button className="bg-[#FBC700] block text-black text-center py-[14px] px-[20px] w-2/6 font-semibold mb-[23px] text-20 ">
                    Add New Product
                  </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
