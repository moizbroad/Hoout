import React from "react";
import rightArrow from "../assets/shopPage/rightArrow.svg";
import filter from "../assets/shopPage/filter.svg";
import gridView from "../assets/shopPage/gridView.svg";
import listView from "../assets/shopPage/listView.svg";
import ProductsSection from "../components/LandingPageSections/ProductsSection";
import Filters from "../components/ShopComponents/Filters";

const ShopPage = () => {
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

      <section className="flex ">
        <div className="w-[30%]">
          {" "}
          <Filters />
        </div>
        <div className="w-[90%] pt-[75px]">
          {" "}
          <ProductsSection isthree />{" "}
        </div>
      </section>
    </>
  );
};

export default ShopPage;
