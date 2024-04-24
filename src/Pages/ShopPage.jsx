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

      <section className="flex justify-between  md:flex-col sm:flex-col xs:flex-col   items-center py-[36px] font-poppins bg-[#F4F5F7] xl:px-[100px] lg:px-[100px]  ">
        <section>
          {" "}
          <tr className="flex gap-x-6">
            <td className="poppins" onClick={toggle}>
              <img src={filter} />
            </td>
            <td onClick={openfilter}>Filter</td>
            <td>
              <img src={gridView} />
            </td>
            <td>
              <img src={listView} />
            </td>
            <td className="pops">Showing 1-16 of 32 results</td>
          </tr>
        </section>
        <section>
          <tr className="flex gap-x-6">
            <td className="pops">Show Prices</td>
            <td className="pops">Incl. VAT</td>
            <td className="pops">fe</td>
            <td className="pops">Ecxl.VAT</td>
          </tr>
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
      <section className="bg-[#111727] flex flex-wrap justify-center items-center px-[50px] gap-[50px] md:gap-[50px] lg:gap-[40px] xl:gap-[60px] g pt-[100px] pb-[130px]">
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
