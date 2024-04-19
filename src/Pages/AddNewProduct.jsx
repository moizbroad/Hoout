import React from "react";
import InputField from "../components/Common/InputField";
import ArrowBack from "../assets/DashboardImages/arrowback.svg";
import PlusCircle from "../assets/DashboardImages/plusCricle.svg";
import Textarea from "../components/Common/Textarea";
import Button from "../components/Common/Button";
import Dropzone from "../components/Common/Dropzone";
import addImg from "../assets/DashboardImages/add.svg";
import { useNavigate } from "react-router-dom";

const AddNewProduct = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <form action="">
          <div className=" cursor-pointer pt-[80px] pb-[30px] px-[20px] bg-[rgb(250,250,250)] h-full min-h-[86vh]">
            <div
              onClick={() => {
                navigate("/products");
              }}
              className="flex gap-2 items-center mb-[49px]"
            >
              <img src={ArrowBack} alt="" />
              <h5 className="text-32 font-bold">Add New Product</h5>
            </div>
            {/* user profile card section */}
            {/* account detail card  */}
            <div className="myCard rounded-[4px] mb-[30px]">
              <div className="formSec">
                <div class=" mb-[24px]">
                  <div class="w-full md:mb-0">
                    <label
                      class="uppercase text-black text-xs font-semibold mb-[12px] block"
                      for="name"
                    >
                      Name
                    </label>
                    <InputField placeholder="Name" id="name" required />
                  </div>
                </div>
                <div class=" flex gap-[20px] mb-[25px]">
                  <div class="w-full  md:mb-0">
                    <label
                      class="uppercase text-black text-xs font-semibold mb-[12px] block"
                      for="name"
                    >
                      Group
                    </label>
                    <InputField
                      placeholder="please Add React Multi Select"
                      id="name"
                    />
                  </div>
                </div>
                <div class=" flex gap-[20px] mb-[24px]">
                  <div class="w-1/2 md:mb-0">
                    <label
                      class="uppercase text-black text-xs font-semibold mb-[12px] block"
                      for="tWood"
                    >
                      Type of Wood
                    </label>
                    <InputField placeholder="Type of wood" id="tWood" />
                  </div>
                  <div class="w-1/2">
                    <label
                      class="uppercase text-black text-xs font-semibold mb-[12px] block"
                      for="wGroup"
                    >
                      Wood Group
                    </label>
                    <InputField placeholder="Wood Group" id="wGroup" />
                  </div>
                </div>
                <div class=" flex gap-[20px] mb-[24px]">
                  <div class="w-1/2 md:mb-0">
                    <label
                      class="uppercase text-black text-xs font-semibold mb-[12px] block"
                      for="typeProd"
                    >
                      Type of Product
                    </label>
                    <InputField placeholder="Type of product" id="typeProd" />
                  </div>
                  <div class="w-1/2">
                    <label
                      class="uppercase text-black text-xs font-semibold mb-[12px] block"
                      for="durability"
                    >
                      Durability Glass
                    </label>
                    <InputField placeholder="Durability" id="durability" />
                  </div>
                </div>
                <div class=" flex gap-[20px] mb-[24px]">
                  <div class="w-1/2 md:mb-0">
                    <label
                      class="uppercase text-black text-xs font-semibold mb-[12px] block"
                      for="quality"
                    >
                      Quality
                    </label>
                    <InputField placeholder="Quality" id="quality" />
                  </div>
                  <div class="w-1/2">
                    <label
                      class="uppercase text-black text-xs font-semibold mb-[12px] block"
                      for="Edited"
                    >
                      Edited
                    </label>
                    <InputField placeholder="Edited" id="Edited" />
                  </div>
                </div>
                <div class=" flex gap-[20px] mb-[24px]">
                  <div class="w-1/2 md:mb-0">
                    <label
                      class="uppercase text-black text-xs font-semibold mb-[12px] block"
                      for="Application"
                    >
                      Application
                    </label>
                    <InputField placeholder="Application" id="Application" />
                  </div>
                  <div class="w-1/2">
                    <label
                      class="uppercase text-black text-xs font-semibold mb-[12px] block"
                      for="Thickness"
                    >
                      Thickness
                    </label>
                    <InputField placeholder="Thickness" id="Thickness" />
                  </div>
                </div>
                <div class=" flex gap-[20px] mb-[24px]">
                  <div class="w-1/2 md:mb-0">
                    <label
                      class="uppercase text-black text-xs font-semibold mb-[12px] block"
                      for="width"
                    >
                      Width
                    </label>
                    <InputField placeholder="width" id="width" />
                  </div>
                  <div class="w-1/2">
                    <label
                      class="uppercase text-black text-xs font-semibold mb-[12px] block"
                      for="Thickness"
                    >
                      Length
                    </label>
                    <InputField placeholder="length" id="length" />
                  </div>
                </div>
                <div class=" flex mb-[30px]">
                  <div class="w-full mb-6 md:mb-0">
                    <label
                      class="uppercase text-black text-xs font-semibold mb-[12px] block"
                      for="email"
                    >
                      Product Description
                    </label>
                    <Textarea />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* add new product price table row  */}
          <div className="pt-[0px] pb-[30px] px-[20px] bg-[rgb(250,250,250)] h-full min-h-[86vh] mb-[40px]">
            <div className="myCard rounded-[4px]">
              <h5 className="text-18 font-semibold mb-[25px]">Price</h5>

              {/* custom table type section  */}
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full  rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal ">
                    <thead>
                      <tr
                        className="
"
                      >
                        <th className="px-[24px] py-[16px]  text-left text-14 font-bold  rounded-ss-2xl	 bg-[#cbcbcb]	">
                          Variant/Length
                        </th>
                        <th className="bg-[#cbcbcb] px-[24px] py-[16px]  text-left text-16 font-semibold	">
                          Product ID
                        </th>
                        <th className="bg-[#cbcbcb] px-[24px] py-[16px]  text-left text-16 font-semibold	">
                          Price
                        </th>
                        <th className="bg-[#cbcbcb] px-[24px] py-[16px]  text-left text-16 font-semibold	">
                          Discount
                        </th>

                        <th className="bg-[#cbcbcb] px-[24px] py-[16px]  text-left text-16 font-semibold rounded-se-2xl	">
                          Stock
                        </th>
                        <th className="px-[2px] py-[16px]  text-end text-16 font-semibold ">
                          <a href="#" className="flex justify-end">
                            {" "}
                            <img src={PlusCircle} alt="" />{" "}
                          </a>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <td className="px-[24px] py-[16px]  text-left text-16 font-normal text-[#6C7275] border border-[#D9D9D9] ">
                          Variant Length
                        </td>
                        <td className="px-[24px] py-[16px]  text-left text-16 font-normal text-[#6C7275] border border-[#D9D9D9] ">
                          Product ID
                        </td>
                        <td className="px-[24px] py-[16px]  text-left text-16 font-normal text-[#6C7275] border border-[#D9D9D9] ">
                          Price
                        </td>
                        <td className="px-[24px] py-[16px]  text-left text-16 font-normal text-[#6C7275] border border-[#D9D9D9] ">
                          Discount
                        </td>
                        <td className="px-[24px] py-[16px]  text-left text-16 font-normal text-[#6C7275] border border-[#D9D9D9] ">
                          Stock
                        </td>
                      </tr>
                      <tr className="">
                        <td className="px-[24px] py-[16px]  text-left text-16 font-normal text-[#6C7275] border border-[#D9D9D9] ">
                          Variant Length
                        </td>
                        <td className="px-[24px] py-[16px]  text-left text-16 font-normal text-[#6C7275] border border-[#D9D9D9] ">
                          Product ID
                        </td>
                        <td className="px-[24px] py-[16px]  text-left text-16 font-normal text-[#6C7275] border border-[#D9D9D9] ">
                          Price
                        </td>
                        <td className="px-[24px] py-[16px]  text-left text-16 font-normal text-[#6C7275] border border-[#D9D9D9] ">
                          Discount
                        </td>
                        <td className="px-[24px] py-[16px]  text-left text-16 font-normal text-[#6C7275] border border-[#D9D9D9] ">
                          Stock
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* custome price table end  */}

              <div class=" flex gap-[20px] mb-[24px]">
                <div class="w-1/2 md:mb-0 relative">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="Discount"
                  >
                    Discount
                  </label>
                  <InputField
                    placeholder="Discount                                                                                     %"
                    id="Discount"
                  />
                </div>
                <div class="w-1/2">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="wGroup"
                  >
                    Stock
                  </label>
                  <InputField placeholder="Stock" id="Stock" />
                </div>
              </div>
              <div class=" flex gap-[20px] mb-[24px]">
                <div class="w-1/2 md:mb-0 relative">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="weight"
                  >
                    Price per m3
                    <br />
                    <span className="text-[#6C7275] font-normal text-12">
                      length x width x thickness in meters
                    </span>
                  </label>
                  <InputField placeholder="Weight" id="weight" />
                </div>
              </div>
              <div class=" flex gap-[20px] mb-[24px]">
                <div class="w-full md:mb-0 relative">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="weight"
                  >
                    Product Image
                    <br />
                    <span className="text-[#6C7275] font-normal text-12">
                      You can Upload Multiple Images of product in different
                      dimensions
                    </span>
                  </label>
                  {/* dropzone sec  */}
                  <div className="flex gap-[14px] flex-wrap">
                    <Dropzone width={"215px"} />
                    <div
                      className=""
                      style={{
                        width: "215px",
                        height: "215px",
                        border: "0.93px dashed #4C5B66",
                        borderRadius: "7.8px",
                        padding: "12px",
                      }}
                    >
                      <a
                        href="#"
                        style={{
                          height: "100%",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {" "}
                        <img src={addImg} alt="" />{" "}
                      </a>
                    </div>
                  </div>
                  {/* dropzone sec end  */}
                </div>
              </div>
              <div>
                <Button
                  btnText="Add Product"
                  paddingX="20px"
                  breakpoint="w-[354px]"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
