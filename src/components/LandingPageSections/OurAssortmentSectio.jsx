import React from "react";
import oak from "../../assets/LandingPageImages/assortment/oak.svg";
import thermo from "../../assets/LandingPageImages/assortment/thermo.svg";
// import fire from "../../assets/LandingPageImages/assortment/fire.svg";
// import hardWood from "../../assets/LandingPageImages/assortment/hardWood.svg";
// import beacon from "../../assets/LandingPageImages/assortment/beacon.svg";
// import mahogany from "../../assets/LandingPageImages/assortment/mahogany.svg";
// import brazil from "../../assets/LandingPageImages/assortment/brazil.svg";
// import iron from "../../assets/LandingPageImages/assortment/iron.svg";
// import parasols from "../../assets/LandingPageImages/assortment/parasols.svg";

const OurAssortmentSectio = () => {
  const WoodData = [
    {
      image: oak,
      heading: "OAK",
      text: "Our Oak wood, with its remarkable strength and beauty, provides a timeless basis for every creation.",
    },
    {
      image: thermo,
      heading: "OAK",
      text: "Our Oak wood, with its remarkable strength and beauty, provides a timeless basis for every creation.",
    },
    {
      image: oak,
      heading: "OAK",
      text: "Our Oak wood, with its remarkable strength and beauty, provides a timeless basis for every creation.",
    },
  ];

  return (
    <section className="bg-[#000000]  ">
      <div className="text-56 font-bold text-[#fff] pt-[119px]  text-center ">
        {" "}
        Our assortment
      </div>
      <div className="  text-[#fff] text-center pt-7 text-18 ">
        {" "}
        Discover the world of wood through our extensive range.{" "}
      </div>

      <section className="grid grid-cols-3">
        {WoodData.map((item, index) => {
          return (
            <div key={index} className="flex-col">
              <div>
                <img src={item.image} />
              </div>
              <div className="text-[#fff]"> {item.heading}</div>
              <div className="text-[#fff]">{item.text}</div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default OurAssortmentSectio;
