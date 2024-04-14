import React from "react";
import rightArrow from "../assets/shopPage/rightArrow.svg";
import filter from "../assets/shopPage/filter.svg";
import gridView from "../assets/shopPage/gridView.svg";
import listView from "../assets/shopPage/listView.svg";
import ProductsSection from "../components/LandingPageSections/ProductsSection";
import Filters from "../components/ShopComponents/Filters";
import cup from "../assets/shopPage/cup.svg";
import guarantee from "../assets/shopPage/guarantee.svg";
import shipping from "../assets/shopPage/shipping.svg";
import supports from "../assets/shopPage/supports.svg";

const ShopPage = () => {
  const data = [
    { image: cup, head: "High Quality", subHead: "crafted from top materials" },
    {
      image: guarantee,
      head: "High Quality",
      subHead: "crafted from top materials",
    },

    {
      image: shipping,
      head: "High Quality",
      subHead: "crafted from top materials",
    },

    {
      image: supports,
      head: "High Quality",
      subHead: "crafted from top materials",
    },
  ];
  return (
    <>
      <div className="shop ">
        <section className="">
          <div className=" font-medium text-48 text-primary text-center pt-[145px]">
            {" "}
            Shop
          </div>
          <section className="flex bg-transparentGray   justify-center gap-x-3">
            <div className="text-primary ">Home</div>
            <div>
              <img src={rightArrow} />
            </div>
            <div className="text-[#FFFFFF]">Shop</div>
          </section>
        </section>
      </div>

      <section className="flex justify-between items-center py-[36px] font-poppins bg-[#F4F5F7] px-[100px]">
        <section>
          {" "}
          <tr className="flex gap-x-6">
            <td className="poppins">
              <img src={filter} />
            </td>
            <td>Filter</td>
            <td>
              <img src={gridView} />
            </td>
            <td>
              <img src={listView} />
            </td>
            <td>Showing 1-16 of 32 results</td>
          </tr>
        </section>
        <section>
          <tr className="flex gap-x-6">
            <td>Show Prices</td>
            <td>Incl. VAT</td>
            <td>fe</td>
            <td>Ecxl.VAT</td>
          </tr>
        </section>
      </section>

      <section className="flex pb-[200px]">
        <div className="w-[30%]">
          {" "}
          <Filters />
        </div>
        <div className="w-[90%] pt-[75px]">
          {" "}
          <ProductsSection isthree isbuttonReqird notRequired />{" "}
        </div>
      </section>
      <section className="bg-[#111727] flex justify-center items-center px-[50px] gap-x-[100px] pt-[100px] pb-[130px]">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex gap-x-3">
              <div>
                {" "}
                <img src={item.image} />{" "}
              </div>
              <div className="flex-col">
                {" "}
                <div className="text-primary">{item.head}</div>
                <div className="text-primary">{item.subHead}</div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ShopPage;
