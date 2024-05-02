import React from "react";
import { useState } from "react";
import rightArrow from "../assets/customWoodPage/rightArrow.svg";
import ShoppingCart from "../components/CartSections/ShoppingCart";
import CheckoutDetail from "../components/CartSections/CheckoutDetail";
import OrderComplete from "../components/CartSections/OrderComplete";
import { Stepper, Step } from "react-form-stepper";
const AddToCart = () => {
  const [selectedDiv, setSelectedDiv] = useState({
    firstTab: true,
    secondTab: false,
    thirdTab: false,
  });
  const [selectedTab, setSelectedTab] = useState("firstTab");
  const [selectedThirdTab, setSelectedThirdTab] = useState(false);
  const tabs = [
    {
      id: 1,
      name: "firstTab",
      label: "Social Login",
      bgColor: "primary",
      textColor: "white",
    },
    {
      id: 2,
      name: "secondTab",
      label: "Pick Username",
      bgColor: "primary",
      textColor: "secondary",
    },
    {
      id: 3,
      name: "thirdTab",
      label: "Bank Details",
      bgColor: "primary",
      textColor: "secondary",
    },
  ];

  const handleDivClick = (tab) => {
    setSelectedTab(tab);
    setSelectedDiv((prev) => {
      let newSelectedDiv = { ...prev };

      if (tab === "firstTab") {
        setSelectedThirdTab(false);
        newSelectedDiv = {
          firstTab: true,
          secondTab: false,
          thirdTab: false,
        };
      } else if (tab === "secondTab") {
        setSelectedThirdTab(false);
        newSelectedDiv = {
          firstTab: true,
          secondTab: true,
          thirdTab: false,
        };
      } else if (tab === "thirdTab") {
        setSelectedThirdTab(true);
        newSelectedDiv = {
          firstTab: true,
          secondTab: true,
          thirdTab: true,
        };
      }

      return newSelectedDiv;
    });
  };
  return (
    <>
      <section className="xl:px-[100px] lg:px-[60px] md:px-[40px] px-[20px] bg-[#F4F5F7]">
        {/* <tr className="gap-x-6 flex  items-center  py-[40px]">
          <td className="text-[#9F9F9F] text-16">Home </td>
          <td>
            <img src={rightArrow} />
          </td>
          <td className="text-[#9F9F9F] xs:text-14 sm:text-15 text-16"> Shop</td>
          <td>
            <img src={rightArrow} />
          </td>
          <td className="h-[px] font-bold text-[#9F9F9F] ">| </td>
          <td>Cart </td>
        </tr> */}
        <div className="flex items-center gap-[24px]">
          <div className="gap-x-6 flex  items-center  xl:py-[31.5px] lg:py-[24px] md-[20px] py-[12px]">
            <h5 className="text-[#9F9F9F] xl:text-16 lg:text-15 md:text-14 text-[13px]">
              {" "}
              <a href="#"> Home </a>
            </h5>
            <div>
              <img
                src={rightArrow}
                className="xl:w-[20px] lg:w-[18px] w-[15px]"
              />
            </div>
          </div>
          <div className="gap-x-6 flex  items-center  xl:py-[31.5px] lg:py-[24px] md-[20px] py-[12px]">
            <h5 className="text-[#9F9F9F] xl:text-16 lg:text-15 md:text-14 text-[13px] ">
              <a href="#"> Shop </a>
            </h5>
            <div>
              <img
                src={rightArrow}
                className="xl:w-[20px] lg:w-[18px] w-[15px]"
              />
            </div>
          </div>
          <div className="gap-x-6 flex  items-center  xl:py-[31.5px] lg:py-[24px] md-[20px] py-[12px]">
            {/* <h5 className="font-bold text-[#9F9F9F]  text-16">|</h5> */}
            <h5 className="bcCartLink flex items-center xl:text-16 lg:text-15 md:text-14 text-[13px]">
              Cart
            </h5>
          </div>
        </div>
      </section>

      <section className="xl:pt-[50px] lg:pt-[35px] md:pt-[25px] pt-[15px] flex justify-center">
        <div className="font-medium xl:text-54 lg:text-50 md:text-46 sm:text-44 text-40  ">
          {" "}
          Cart{" "}
        </div>
      </section>
      {/* <Stepper activeStep={3}>
        <Step label="Children Step 1" />
        <Step label="Children Step 2" />
        <Step label="Children Step 3" />
      </Stepper> */}

      {/* <section className="pt-[50px] flex justify-center gap-x-28">
        <div className="font-medium  text-22  " onClick={stapper}> Cart </div>
        <div className="font-medium  text-22  "> Chekout </div>
        <div className="font-medium  text-22  "> Order Complete </div>
      </section> */}

      <section className="   flex-center flex-col ">
        {/* <div className="flex-center font-extrabold gap-x-3">
          <img
            src={blackLogoBackGround}
            className="xl:h-10 lg:h-9 md:h-8 h-6 xs:size-9 "
          />
          <p className="text-2xl"> Got Seven </p>
        </div> */}

        <section className="flex-center xs:px-[10px] xs:w-full xs:gap-[10px] gap-x-4  sm:gap-x-2   xs:gap-x-2     xl:mt-[40px] lg:mt-[30px] md:mt-[20px] sm:mt-[20px] xs:mt-[10px] xl:mb-[80px] lg:mb-[60px] md:mb-[40px] mb-[20px] ">
          {tabs.map((tab, idx) => (
            <div
              key={tab.name}
              className="  4xll:gap-x-16 4xl:gap-x-14 3xll:gap-x-12   3xl:gap-x-10 2xll:gap-x-8 2xl:gap-x-6   flex-center gap-x-4 xs:flex-col xs:w-[33%] xs:items-center xs:justify-center  sm:gap-x-2  xs:gap-[12px] cursor-pointer"
              onClick={() => handleDivClick(tab.name)}
            >
              <div
                className={`${
                  selectedDiv[tab.name]
                    ? "bg-secondary border rounded-full text-white  "
                    : "bg-primary text-secondary text-[#727272] "
                } border rounded-full  4xll:px-[3.6rem]  4xl:px-[3.5rem]  3xll:px-[3rem]  3xl:px-[2.5rem]  2xll:px-[2rem]  2xl:px-[1.9rem]   4xll:text-80  4xl:text-75 3xll:text-70  3xl:text-65 2xll:text-60 2xl:text-56    px-4 py-1.5 text-22 sm:text-14 sm:py-2.5 xs:py-2.5 xs:text-14 cursor-pointer`}
              >
                {tab.id}
              </div>
              <div className=" 4xll:text-65  4xl:text-60 3xll:text-56  3xl:text-50 2xll:text-46 2xl:text-32  text-20 sm:text-16 xs:text-14 xs:text-center font-bold ">
                {tab.label}
              </div>

              {idx !== tabs.length - 1 && (
                <>
                  <div className="border-b w-[40px] sm:w-[40px] xs:hidden  "></div>
                  {/* */}
                </>
              )}
            </div>
          ))}
          <h1 className="text-gray2  4xll:text-56 4xl:text-50 3xll:text-46  3xl:text-42 2xll:text-38 2xl:text-34 sm:hidden xs:hidden">
            {" "}
            (optional)
          </h1>
        </section>

        {selectedTab === "firstTab" ? (
          <ShoppingCart />
        ) : selectedTab === "secondTab" ? (
          <CheckoutDetail
            selectedThirdTab={selectedThirdTab}
            setSelectedThirdTab={setSelectedThirdTab}
            handleDivClick={handleDivClick}
          />
        ) : (
          <OrderComplete handleDivClick={handleDivClick} />
        )}
      </section>

      {/* <ShoppingCart/> */}
      {/* <CheckoutDetail/> */}
      {/* <OrderComplete /> */}
    </>
  );
};

export default AddToCart;
