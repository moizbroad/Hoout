import React, { useState } from "react";
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
import QualitySection from "../components/Common/QualitySection";
import Switch from "../components/Common/Switch";

const ShopPage = () => {
  const [openfilter, setOpenfilter] = useState(true);
  function toggle() {
    setOpenfilter(!openfilter);
  }
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

      <section className="flex justify-between   sm:flex-col xs:flex-col   items-center py-[36px] font-poppins bg-[#F4F5F7] xl:px-[100px] lg:px-[100px] md:px-[60px]  ">
        <div>
          {" "}
          <div className="flex items-center gap-x-6 md:gap-x-4 xs:gap-x-3 ">
            <div className="poppins" onClick={toggle}>
              <img src={filter} className="md:size-5 xs:size-5" />
            </div>
            <div onClick={openfilter}>Filter</div>
            <div>
              <img src={gridView} className="md:size-4  xs:size-3 " />
            </div>
            <div>
              <img src={listView} className="md:size-5 xs:size-3.5" />
            </div>
            <div className="pops md:text-14 sm:text-14 xs:text-12  ">
              Showing 1-16 of 32 results
            </div>
          </div>
        </div>

        <section className=" sm:pt-4  xs:pt-4">
          <div className="flex gap-x-6  md:gap-x-4 xs:gap-x-3 ">
            <div className="pops md:text-14  sm:text-14 xs:text-12  ">
              Show Prices
            </div>
            <div className="pops md:text-14 sm:text-14 xs:text-12 ">
              Incl. VAT
            </div>
            <div className="recPasswrd ">
              {" "}
              <Switch optional />{" "}
            </div>

            <div className="pops md:text-14 sm:text-14 xs:text-12 ">
              Ecxl.VAT
            </div>
          </div>
        </section>
      </section>

      <section className="flex pb-[200px]  md:flex-col sm:flex-col  xs:flex-col ">
        {openfilter && (
          <div className=" xl:w-[22%] md:w-full ">
            <Filters />
          </div>
        )}

        <div className="w-[100%] pt-[75px] xl:px-[100px] lg:px-[60px]  md:px-[40px]  sm:px-[40px]  xs:px-[40px]   ">
          {" "}
          <ProductsSection isthree isbuttonReqird notRequired />{" "}
        </div>
      </section>

      <section>
        {" "}
        <QualitySection />
      </section>
    </>
  );
};

export default ShopPage;
