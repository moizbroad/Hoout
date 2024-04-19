import React from "react";
import inventory from "../assets/DashboardImages/inventory.svg";
import skuImg from "../assets/DashboardImages/skuImg.svg";
import salesImg from "../assets/DashboardImages/salesImg.svg";
import trendUp from "../assets/DashboardImages/trendUp.svg";
import trendDown from "../assets/DashboardImages/trendDown.svg";
import sampleProductImg from "../assets/DashboardImages/sampleProductImg.svg";
import CountrySelector from "../components/Common/CountrySelector";
// import DatePicker from "../components/Common/DatePicker";

const OrderList = () => {
  const orderListTable = [
    {
      name: "Name",
      address: "6096 Marjolaine Landing",
      dateTime: "12.09.2019 - 12.53 PM",
      quantity: "423",
      price: "$34,295",
      status: "Delivered",
      image: sampleProductImg, // Make sure to define sampleProductImg
    },

    {
      name: "Name",
      address: "6096 Marjolaine Landing",
      dateTime: "12.09.2019 - 12.53 PM",
      quantity: "423",
      price: "$34,295",
      status: "Delivered",
      image: sampleProductImg, // Make sure to define sampleProductImg
    },

    {
      name: "Name",
      address: "6096 Marjolaine Landing",
      dateTime: "12.09.2019 - 12.53 PM",
      quantity: "423",
      price: "$34,295",
      status: "Delivered",
      image: sampleProductImg, // Make sure to define sampleProductImg
    },

    {
      name: "Name",
      address: "6096 Marjolaine Landing",
      dateTime: "12.09.2019 - 12.53 PM",
      quantity: "423",
      price: "$34,295",
      status: "Delivered",
      image: sampleProductImg, // Make sure to define sampleProductImg
    },

    {
      name: "Name",
      address: "6096 Marjolaine Landing",
      dateTime: "12.09.2019 - 12.53 PM",
      quantity: "423",
      price: "$34,295",
      status: "Delivered",
      image: sampleProductImg, // Make sure to define sampleProductImg
    },
    {
      name: "Name",
      address: "6096 Marjolaine Landing",
      dateTime: "12.09.2019 - 12.53 PM",
      quantity: "423",
      price: "$34,295",
      status: "Delivered",
      image: sampleProductImg, // Make sure to define sampleProductImg
    },
  ];
  return (
    <div>
      <div className="p-[30px] bg-[#fafafa] h-full min-h-[86vh]">
        <div className="flex justify-between">
          <h1 className="text-32 font-bold mb-[30px] ">Order Lists</h1>

          <div className="flex gap-4">
            <div class="relative inline-block text-left">
              <div>{/* <DatePicker /> */}</div>
            </div>
            <div class="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Filters
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
            </div>
          </div>
        </div>

        {/* order detail card table row  */}
        <div className="">
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

                  {orderListTable.map((rowData, index) => {
                    return (
                      <tbody>
                        <tr
                          key={index}
                          className="border-b-[0.4px] border-gray"
                        >
                          <td className="px-[24px] py-[24px] text-left text-14 font-semibold text-gray3">
                            <div className="flex gap-1 items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  src={rowData.image}
                                  alt="sample Product Name"
                                />
                              </div>
                              <div className="">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {rowData.name}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-[24px] py-[24px] text-left text-14 font-semibold text-gray3">
                            <div className="flex gap-2 items-center">
                              <div className="">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {rowData.address}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-[24px] py-[24px] text-left text-14 font-semibold text-gray3">
                            <div className="flex gap-1 items-center">
                              <div className="">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {rowData.dateTime}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-[24px] py-[24px] text-left text-14 font-semibold text-gray3">
                            <div className="flex gap-1 items-center">
                              <div className="">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {rowData.quantity}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-[24px] py-[24px] text-left text-14 font-semibold text-gray3">
                            <div className="flex gap-1 items-center">
                              <div className="">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {rowData.price}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-[24px] py-[24px] text-left text-14 font-semibold text-gray3">
                            <div className="flex gap-1 items-center justify-center">
                              <div className="">
                                <p className="rounded-full bg-green1 text-white px-[16px] py-[7px] text-14 font-bold text-center">
                                  {rowData.status}
                                </p>
                              </div>
                            </div>
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
      </div>

      <div className="mt-[50px]">
        <CountrySelector />
      </div>
    </div>
  );
};

export default OrderList;
