import React from "react";
import oak from "../../assets/LandingPageImages/assortment/oak.svg";
import thermo from "../../assets/LandingPageImages/assortment/thermo.svg";
import fire from "../../assets/LandingPageImages/assortment/fire.svg";
import hardWood from "../../assets/LandingPageImages/assortment/hardWood.svg";
import beacon from "../../assets/LandingPageImages/assortment/beacon.svg";
import mahogany from "../../assets/LandingPageImages/assortment/mahogany.svg";
import brazil from "../../assets/LandingPageImages/assortment/brazil.svg";
import iron from "../../assets/LandingPageImages/assortment/iron.svg";
import parasols from "../../assets/LandingPageImages/assortment/parasols.svg";

const OurAssortmentSectio = () => {
  const WoodData = [
    {
      image: oak,
      heading: "OAK",
      text: "Our Oak wood, with its remarkable strength and beauty, provides a timeless basis for every creation.",
    },
    {
      image: thermo,
      heading: "THERMO HOUT",
      text: "Our Oak wood, with its remarkable strength and beauty, provides a timeless basis for every creation.",
    },
    {
      image: fire,
      heading: "FIRE",
      text: "Our Oak wood, with its remarkable strength and beauty, provides a timeless basis for every creation.",
    },
    {
      image: hardWood,
      heading: "HARDWOOD",
      text: "Our Oak wood, with its remarkable strength and beauty, provides a timeless basis for every creation.",
    },
    {
      image: beacon,
      heading: "BEACON",
      text: "Our Oak wood, with its remarkable strength and beauty, provides a timeless basis for every creation.",
    },
    {
      image: mahogany,
      heading: "MAHOGANY",
      text: "Our Oak wood, with its remarkable strength and beauty, provides a timeless basis for every creation.",
    },
    {
      image: brazil,
      heading: "BRAZILAIN NUTS",
      text: "Our Oak wood, with its remarkable strength and beauty, provides a timeless basis for every creation.",
    },
    {
      image: iron,
      heading: "IRON STORE",
      text: "Our Oak wood, with its remarkable strength and beauty, provides a timeless basis for every creation.",
    },
    {
      image: parasols,
      heading: "IRON STORE",
      text: "Our Oak wood, with its remarkable strength and beauty, provides a timeless basis for every creation.",
    },
  ];

  return (
    <section className="bg-[#000000] pb-[60px] ">
      <div className="text-56 font-bold text-[#fff] pt-[119px]  text-center ">
        {" "}
        Our assortment
      </div>
      <div className="  text-[#fff] text-center pt-7 text-18 ">
        {" "}
        Discover the world of wood through our extensive range.{" "}
      </div>

      <section className="grid grid-cols-3 px-[100px] gap-x-6 pt-[88px]">
        {WoodData.map((item, index) => {
          return (
            <div key={index} className="flex-col w-[85%] ">
              <div>
                <img src={item.image} className="max-w-[100%]" />
              </div>
              <div className="text-[#fff] text-center font-bold text-24 pt-[20px] ">
                {" "}
                {item.heading}
              </div>
              <div className="text-[#fff] text-center text-18  pb-[70px] pt-[20px] ">
                {item.text}
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default OurAssortmentSectio;
