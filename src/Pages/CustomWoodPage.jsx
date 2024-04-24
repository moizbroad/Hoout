import React from "react";
import ProductDetailTable from "../components/CustomWood/ProductDetailTable";
import RelatedProduct from "../components/CustomWood/RelatedProduct";
import rightArrow from "../assets/customWoodPage/rightArrow.svg";
import wood1 from "../assets/customWoodPage/wood1.svg";
import wood2 from "../assets/customWoodPage/wood2.svg";
import wood3 from "../assets/customWoodPage/wood3.svg";
import wood4 from "../assets/customWoodPage/wood4.svg";
import bigOak from "../assets/customWoodPage/bigOak.svg";
import starGroup from "../assets/customWoodPage/starGroup.svg";
import line from "../assets/customWoodPage/line.svg";
import whatspp from "../assets/customWoodPage/whatspp.svg";
import facebook from "../assets/customWoodPage/facebook.svg";
import pintrest from "../assets/customWoodPage/pintrest.svg";
import twitter from "../assets/customWoodPage/twitter.svg";
import linkdln from "../assets/customWoodPage/linkdln.svg";
import email from "../assets/customWoodPage/email.svg";

const CustomWoodPage = () => {
  const productInfo = [{}];

  return (
    <>
      <section className="px-[30px] md:px-[80px] lg:px-[100px] bg-[#F4F5F7]">
        <tr className="xs:gap-x-3 gap-x-6 flex  items-center  py-[40px]">
          <td className="text-[#9F9F9F] xs:text-14 sm:text-15 text-16">
            Home{" "}
          </td>
          <td>
            <img src={rightArrow} />
          </td>
          <td className="text-[#9F9F9F] xs:text-14 sm:text-15 text-16">
            {" "}
            Shop
          </td>
          <td>
            <img src={rightArrow} />
          </td>
          <td className="h-[px] font-bold text-[#9F9F9F] xs:text-14 sm:text-15 text-16">
            |{" "}
          </td>
          <td>Oka Wood </td>
        </tr>
      </section>

      <section className="px-[30px] max-w-[1240px] mx-auto grid pt-[55px] grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <section className="">
          <section className="flex  gap-x-7">
            <div className="flex-col">
              <div className="">
                <img src={wood1} />
              </div>
              <div className="pt-[32px]">
                <img src={wood2} />
              </div>
              <div className="pt-[32px]">
                <img src={wood3} />
              </div>
              <div className="pt-[32px]">
                <img src={wood4} />
              </div>
            </div>

            <div className="flex-grow">
              {" "}
              <img src={bigOak} className="w-full" />{" "}
            </div>
          </section>

          <section className=" pt-[60px]">
            <span className="text-24 font-bold border-b-3 border-yellow">
              Description
            </span>
            <div className="pt-5 text-18 text-start">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </section>
        </section>

        {/* Right side Content  */}
        <section>
          <h1 className="text-20 font-bold">
            Angelium Vermelho, Planing, Rounded Corners with Points of 68*68mm
            FSC*{" "}
          </h1>
          <div className="flex gap-x-6 pt-6">
            <div>
              <img src={starGroup} />
            </div>
            <div>
              {" "}
              <img src={line} />
            </div>
            <div className="text-18"> 5 Customer Review</div>
          </div>

          <div className="pt-6 text-44">$ 2,500</div>

          <div className="flex items-center gap-x-4 pt-5 border-b-2 border-[#D9D9D9] pb-[26px]    ">
            <div className="text-14">SHARE THIS PAGE:</div>
            <div>
              <img src={whatspp} />
            </div>
            <div>
              <img src={facebook} />
            </div>
            <div>
              <img src={twitter} />
            </div>
            <div>
              <img src={linkdln} />
            </div>
            <div>
              <img src={pintrest} />
            </div>

            <div>
              <img src={email} />
            </div>
          </div>
          {/* product specfication  section  */}
          <section className=" bg-[#F8F8F8] px-[25px] mt-[35px] ml-2">
            <div className="text-18 font-bold pt-[15px]">
              Product specifications
            </div>

            <div className="flex items-center pt-5 border-b pb-2">
              <div className="text-16 font-bold w-[60%] ">Hout Type</div>
              <div className=" text-[#333333] w-[60%] text-16"> Hardout</div>
            </div>
            <div className="flex items-center pt-5 border-b pb-2 ">
              <div className="text-16 font-bold w-[60%] ">Hout Type</div>
              <div className=" text-[#333333] w-[60%] text-16"> Hardout</div>
            </div>
            <div className="flex items-center pt-5 border-b pb-2">
              <div className="text-16 font-bold w-[60%] ">Hout Type</div>
              <div className=" text-[#333333] w-[60%] text-16"> Hardout</div>
            </div>
            <div className="flex items-center pt-5 border-b pb-2">
              <div className="text-16 font-bold w-[60%] ">Hout Type</div>
              <div className=" text-[#333333] w-[60%] text-16"> Hardout</div>
            </div>
            <div className="flex items-center pt-5 border-b pb-2">
              <div className="text-16 font-bold w-[60%] ">Hout Type</div>
              <div className=" text-[#333333] w-[60%] text-16"> Hardout</div>
            </div>
            <div className="flex items-center pt-5 border-b pb-2">
              <div className="text-16 font-bold w-[60%] ">Hout Type</div>
              <div className=" text-[#333333] w-[60%] text-16"> Hardout</div>
            </div>
            <div className="flex items-center pt-5 border-b pb-2">
              <div className="text-16 font-bold w-[60%] ">Hout Type</div>
              <div className=" text-[#333333] w-[60%] text-16"> Hardout</div>
            </div>
            <div className="flex items-center pt-5 border-b pb-2">
              <div className="text-16 font-bold w-[60%] ">Hout Type</div>
              <div className=" text-[#333333] w-[60%] text-16"> Hardout</div>
            </div>
            <div className="flex items-center pt-5 border-b pb-2">
              <div className="text-16 font-bold w-[60%] ">Hout Type</div>
              <div className=" text-[#333333] w-[60%] text-16"> Hardout</div>
            </div>
            <div className="flex items-center pt-5 pb-2">
              <div className="text-16 font-bold w-[60%] ">Hout Type</div>
              <div className=" text-[#333333] w-[60%] text-16"> Hardout</div>
            </div>
          </section>
        </section>
      </section>
      <div>
        {" "}
        <ProductDetailTable />
      </div>

      <div>
        <RelatedProduct />
      </div>
    </>
  );
};

export default CustomWoodPage;
