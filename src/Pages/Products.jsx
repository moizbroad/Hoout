import React from "react";
// import sampleProductImg from "../assets/DashboardImages/sampleProductImg.svg";
import productName from "../assets/DashboardImages/productName.svg";
import woodImg from "../assets/DashboardImages/woodImg.svg";

const Products = () => {
  return (
    <div>
      <div className="py-[24px] px-[20px] bg-[#fafafa] h-full min-h-[86vh]">
        <div className="flex justify-between">
          <h1 className="text-32 font-bold mb-[30px] ">Products</h1>

          <div className="flex gap-4">
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
            <div class="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Date
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

        {/* order details table  */}
        <div className=" max-w-screen mx-auto overflow-x-auto">
          <table className="table-auto min-w-full">
            <thead>
              <tr
                className="bg-[#F1F4F9]
"
              >
                <th className="px-[12px] py-[12px]  text-left text-14 font-bold  rounded-l-2xl	">
                  ID
                </th>
                <th className="px-[12px] py-[12px]  text-left text-14 font-bold  	">
                  Image/Name
                </th>
                <th className="px-[12px] py-[12px]  text-left text-14 font-bold	">
                  Description
                </th>
                <th className="px-[12px] py-[12px]  text-left text-14 font-bold	">
                  Wood Type
                </th>
                <th className="px-[12px] py-[12px]  text-left text-14 font-bold	">
                  Hanging
                </th>
                <th className="px-[12px] py-[12px]  text-left text-14 font-bold	">
                  Sanded
                </th>
                <th className="px-[12px] py-[12px]  text-left text-14 font-bold	">
                  Stock
                </th>

                <th className="px-[12px] py-[12px]  text-center text-14 font-bold">
                  Price
                </th>

                <th className="px-[12px] py-[12px]  text-center text-14 font-bold">
                  After Discount
                </th>
                <th className="px-[12px] py-[12px]  text-center text-14 font-bold">
                  After Discount
                </th>

                
                <th className="px-[12px] py-[12px]  text-center text-14 font-bold rounded-r-2xl	">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-[0.4px] border-gray">
                <td className="px-[12px] py-[12px]  text-left text-14 font-semibold text-gray3">
                  <div className="">
                    <p className="text-gray-900 whitespace-no-wrap">#123456</p>
                  </div>
                </td>
                <td className="px-[12px] py-[12px]  text-left text-14 font-semibold text-gray3">
                  <div className="flex gap-2 items-center">
                    <div className="flex-shrink-0 w-[60px] h-[60px]">
                      <img src={productName} alt="sample Product Name" />
                    </div>
                    <div className="min-w-[100px]">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Product Name
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-[12px] py-[12px]  text-left text-14 font-semibold text-gray3 w-[12%]">
                  <p className="text-gray-900 overflow-hidden whitespace-normal line-clamp-3 min-w-[120px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </td>
                <td className="px-[12px] py-[12px]  text-left text-14 font-semibold text-gray3">
                  <div className="flex gap-2 items-center">
                    <div className="flex-shrink-0 w-[38.64px] h-[38.64px]">
                      <img src={woodImg} alt="sample Product Name" />
                    </div>
                    <div className="min-w-[40px]">
                      <p className="text-gray-900 whitespace-no-wrap">QAk</p>
                    </div>
                  </div>
                </td>
                <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                  <div className="flex gap-3 items-center">
                    <div className="">
                      <p className="text-gray-900 whitespace-no-wrap">
                        12.09.2019 - 12.53 PM
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                  <div className="flex gap-3 items-center">
                    <div className="">
                      <p className="text-gray-900 whitespace-no-wrap">423</p>
                    </div>
                  </div>
                </td>
                <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                  <div className="flex gap-3 items-center">
                    <div className="">
                      <p className="text-gray-900 whitespace-no-wrap">
                        $34,295
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-[24px] py-[24px]  text-left text-14 font-semibold text-gray3">
                  <div className="flex gap-3 items-center justify-center">
                    <div className="">
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
        {/* order details table end */}

        <div className="w-full mt-[60px] flex justify-end">
          <button className="bg-[#FBC700] block text-black text-center py-[14px] px-[20px] w-[26%] font-semibold mb-[23px] text-20 ">
            Add New Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
