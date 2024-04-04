import React from "react";
import cart from "../../assets/HeaderAndFooter/cart.svg";
import heart from "../../assets/HeaderAndFooter/heart.svg";
import persons from "../../assets/HeaderAndFooter/persons.svg";
import headerImage from "../../assets/HeaderAndFooter/headerImage.svg";
import search from "../../assets/HeaderAndFooter/searchh.svg";

const HeaderSection = () => {
  return (
    <section className="px-[100px] flex-between py-[27px] bg-[#E9E6D6] ">
      <section className="flex gap-x-[20px]  items-center ">
        <div>Home</div>
        <div>Values</div>
        <div>Product Range</div>
        <div>Why Hout Total</div>
        <div>Contact</div>
        <div className="flex items-center pl-7">
          {" "}
          <img src={headerImage} />
        </div>
      </section>

      <section className="flex  gap-x-[40px] ">
        <div> Shop </div>{" "}
        <div>
          {" "}
          <img src={persons} />{" "}
        </div>{" "}
        <div>
          {" "}
          <img src={search} />{" "}
        </div>{" "}
        <div>
          {" "}
          <img src={heart} />{" "}
        </div>
        <div>
          {" "}
          <img src={cart} />{" "}
        </div>
      </section>
    </section>
  );
};

export default HeaderSection;
