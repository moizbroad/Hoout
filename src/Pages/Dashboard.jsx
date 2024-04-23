import React from "react";
// import Sidebar from "./Sidebar";
import inventory from "../assets/DashboardImages/inventory.svg";
import skuImg from "../assets/DashboardImages/skuImg.svg";
import salesImg from "../assets/DashboardImages/salesImg.svg";
import trendUp from "../assets/DashboardImages/trendUp.svg";
import trendDown from "../assets/DashboardImages/trendDown.svg";
import sampleProductImg from "../assets/DashboardImages/sampleProductImg.svg";
import DropDown from "../components/Common/DropDown";
const Dashboard = () => {
  const tableData = [
    {
      name: "Name",
      image: sampleProductImg,
      address: "6096 Marjolaine Landing",
      dateTime: "12.09.2019 - 12.53 PM",
      quantity: "423",
      price: "$34,295",
      status: "Delivered",
    },
    {
      name: "Name",
      image: sampleProductImg,
      address: "6096 Marjolaine Landing",
      dateTime: "12.09.2019 - 12.53 PM",
      quantity: "423",
      price: "$34,295",
      status: "Delivered",
    },
    {
      name: "Name",
      image: sampleProductImg,
      address: "6096 Marjolaine Landing",
      dateTime: "12.09.2019 - 12.53 PM",
      quantity: "423",
      price: "$34,295",
      status: "Delivered",
    },
    {
      name: "Name",
      image: sampleProductImg,
      address: "6096 Marjolaine Landing",
      dateTime: "12.09.2019 - 12.53 PM",
      quantity: "423",
      price: "$34,295",
      status: "Delivered",
    },
    {
      name: "Name",
      image: sampleProductImg,
      address: "6096 Marjolaine Landing",
      dateTime: "12.09.2019 - 12.53 PM",
      quantity: "423",
      price: "$34,295",
      status: "Delivered",
    },
    {
      name: "Name",
      image: sampleProductImg,
      address: "6096 Marjolaine Landing",
      dateTime: "12.09.2019 - 12.53 PM",
      quantity: "423",
      price: "$34,295",
      status: "Delivered",
    },
    // Add more objects as needed
  ];

  const inventoryData = [
    {
      head: "Total Inventory",
      image: inventory,
      image1: trendUp,
      totalInventory: "40,689",
      trendPercentage: "8.5%",
      trendDescription: "Up from January",
    },

    {
      head: " Total SKU",
      image: skuImg,
      image1: trendUp,
      totalInventory: "40,689",
      trendPercentage: "8.5%",
      trendDescription: "Up from January",
    },

    {
      head: " Total Sales",
      image: salesImg,
      image1: trendDown,
      totalInventory: "40,689",
      trendPercentage: "8.5%",
      trendDescription: "Up from January",
    },
  ];
  return (
    <div>
      <div className="xl:p-[30px] lg:p-[24px] p-[20px] bg-[#fafafa] h-full min-h-[86vh]">
        <h1 className="xl:text-32 lg:text-28 text-26 font-bold xl:mb-[39px] lg:mb-[30px] mb-[25px] ">Dashboard</h1>
        {/* analytics row  */}
        <div className="dashCardRow flex justify-between items-center xl:mb-[15.76px] mb-[10px]">
          {inventoryData.map((items, index) => {
            return (
              <div
                key={index}
                className="  inventCard xl:p-[21px] lg:p-[16px] p-[10px] rounded-lg bg-[#fff] w-[32%]"
              >
                <div className="flex justify-between items-center xl:mb-[50px] lg:mb-[35px] mb-[20px] md:flex-col-reverse">
                  <div>
                    <h6 className="xl:text-20 lg:text-18 md:text-16 font-semibold text-gray3 opacity-[0.7] xl:mb-[25px] lg:mb-[20px] mb-[15px]">
                      {items.head}
                    </h6>
                    <h5 className="xl:text-36 lg:text-32 text-28 font-bold">40,689</h5>
                  </div>
                  <div className="md:mb-[7px]">
                    <img src={items.image} alt="" className="xl:w-[79px] lg:w-[70px] w-[60px]"  />
                  </div>
                </div>
                <div className="flex items-center xl:gap-[10px] gap-[3px]">
                  <img src={items.image1} alt="" className="xl:w-[32px] lg:w-[27px] w-[22px]" />{" "}
                  <span className="text-green1">{items.trendPercentage}</span>
                  <p className="text-gray2 text-12"> {items.trendDescription}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* analytics row end  */}

        {/* order detail card table row  */}
        <div className="myCard">
          <div className="flex justify-between items-center xl:mb-[35px] lg:mb-[28px] mb-[20px]">
            <h5 className="xl:text-24 lg:text-22 text-20  font-bold">Order Details</h5>
            {/* dropdown  */}
            <div>
              <div class="relative inline-block text-left">
                <div>
                  <DropDown
                    firstOptionText="October"
                    width="100%"
                    color="bg-#111727"
                    headerTextColor="#ABABAD"
                    useGrayColor
                  />
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
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full  rounded-lg overflow-hidden">
                <table className="w-full leading-normal">
                  <thead>
                    {tableData.map(() => {
                      return;
                    })}
                    <tr
                      className="bg-[#F1F4F9]
"
                    >
                      <th className="xl:px-[24px] lg:px-[20px] px-[12px] xl:py-[16px] lg:py-[14px] py-[12px] text-left xl:text-15 text-14 font-bold  rounded-l-2xl">
                        Product Name
                      </th>
                      <th className="xl:px-[24px] lg:px-[20px] px-[12px] xl:py-[16px] lg:py-[14px] py-[12px] text-left xl:text-15 text-14 font-bold	">
                        Location
                      </th>
                      <th className="xl:px-[24px] lg:px-[20px] px-[12px] xl:py-[16px] lg:py-[14px] py-[12px] text-left xl:text-15 text-14 font-bold">
                        Date - Time
                      </th>
                      <th className="xl:px-[24px] lg:px-[20px] px-[12px] xl:py-[16px] lg:py-[14px] py-[12px] text-left xl:text-15 text-14 font-bold	">
                        Piece
                      </th>
                      <th className="xl:px-[24px] lg:px-[20px] px-[12px] xl:py-[16px] lg:py-[14px] py-[12px] text-left xl:text-15 text-14 font-bold	">
                        Amount
                      </th>

                      <th className="xl:px-[24px] lg:px-[20px] px-[12px] xl:py-[16px] lg:py-[14px] py-[12px] text-center xl:text-15 text-14font-bold rounded-r-2xl	">
                        Status
                      </th>
                    </tr>
                  </thead>

                  {tableData.map((items, index) => {
                    return (
                      <tbody>
                        <tr className="border-b-[0.4px] border-gray">
                          <td className="xl:px-[24px] lg:px-[20px] px-[12px] xl:py-[16px] lg:py-[14px] py-[12px] text-left xl:text-15 text-14 font-semibold text-gray3">
                            <div className="flex xl:gap-3 gap-1 items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  src={sampleProductImg}
                                  alt="sample Product Name" className="xl:w-[36px] lg:w-[32px] w-[28px]"
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {items.name}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="xl:px-[24px] lg:px-[20px] px-[12px] xl:py-[16px] lg:py-[14px] py-[12px]  text-left xl:text-15 text-14 font-semibold text-gray3 ">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {items.address}
                                </p>
                              </div>
                          </td>
                          <td className="xl:px-[24px] lg:px-[16px] px-[8px] xl:py-[16px] lg:py-[14px] py-[12px]  text-left   font-semibold text-gray3">
                          
                                <p className="text-gray-900 whitespace-no-wrap xl:text-15 text-12">
                                  {items.dateTime}
                                </p>
                            
                          </td>
                          <td className="xl:px-[20px] lg:px-[16px] px-[8px] xl:py-[16px] lg:py-[14px] py-[12px]  text-left   font-semibold text-gray3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {items.quantity}
                                </p>
                          </td>
                          <td className="xl:px-[24px] lg:px-[16px] px-[8px] xl:py-[16px] lg:py-[14px] py-[12px]  text-left   font-semibold text-gray3">
                            <div className="flex gap-3 items-center">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {items.price}
                                </p>
                            </div>
                          </td>
                          <td className="xl:px-[24px] lg:px-[16px] px-[8px] xl:py-[16px] lg:py-[14px] py-[12px]  text-left font-semibold text-gray3">
                                <p className="rounded-full bg-green1 text-white px-[4px] py-[7px] text-14 font-bold text-center">
                                  {items.status}
                                </p>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
          {/* order details table end */}
        </div>
        {/* order detail card table row end */}

        <div className="w-full xl:mt-[106px] lg:mt-[80px] mt-[50px] flex justify-end">
          <button className="bg-[#FBC700] block text-black text-center py-[14px] px-[20px] w-2/6 font-semibold xl:mb-[23px] mb-[15px] xl:text-20 lg:text-18 md:text-16
">
            Add New Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
