import React, { useState } from "react";
import cart from "../../assets/HeaderAndFooter/cart.svg";
import heart from "../../assets/HeaderAndFooter/heart.svg";
import persons from "../../assets/HeaderAndFooter/persons.svg";
import headerImage from "../../assets/HeaderAndFooter/headerImage.svg";
import search from "../../assets/HeaderAndFooter/searchh.svg";
import { useNavigate } from "react-router-dom";

const HeaderSection = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  const navigate = useNavigate();
  return (
    <section className="px-[10px] sm:px-[20px] md:px-[30px] lg:px-[30px] xl:px-[100px] flex-between py-[27px] bg-[#E9E6D6] ">
      <div className="menu-cons xl:hidden lg:hidden" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
      <section
        className={`navbar ${
          isActive ? "active" : null
        }    flex-wrap flex flex-col lg:flex-row xl:flex-row gap-[20px] xl:gap-[20px]  items-start lg:items-center xl:items-center px-6 lg:px-0 xl:px-0`}
      >
        <span className=" cursor-pointer " onClick={() => navigate('/')}>Home</span>
        <span className=" cursor-pointer " onClick={() => navigate('/sign-in')}> Login </span>
        <span className="cursor-pointer " onClick={() => navigate('/sign-up')}> Signup</span>
        <span className="cursor-pointer " onClick={() => navigate('/dashboard')}> Dashboard</span>
        {/* <div>Values</div> */}
        {/* <div>Product Range</div> */}
        {/* <div>Why Hout Total</div> */}
        {/* <div>Contact</div> */}
        <div className="header-logo flex items-center justify-between w-full lg:w-auto xl:w-auto pl-6 pr-6 md:pr-0">
          {" "}
          <img src={headerImage} className=" cursor-pointer " onClick={() => navigate('/')} />
          <div className="close-menu xl:hidden lg:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="flex  gap-x-[24px] xl:gap-x-[40px] ">
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate("/shop-page");
          }}
        >
          {" "}
          Shop{" "}
        </div>{" "}
        <div>
          {" "}
          <img src={persons} className=" cursor-pointer " onClick={() => navigate('/myaccount')}/>{" "}
        </div>{" "}
        <div>
          {" "}
          <img src={search} className=" cursor-pointer " />{" "}
        </div>{" "}
        <div>
          {" "}
          <img src={heart} className=" cursor-pointer " onClick={() => navigate('/myaccount', { state: { key: "wish" } })}/>{" "}
        </div>
        <div>
          {" "}
          <img src={cart} className=" cursor-pointer " />{" "}
        </div>
      </section>
    </section>
  );
};

export default HeaderSection;
