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
import frameImage from "../../assets/LandingPageImages/frameImage.svg";
import Rating from "../Common/Rating";

const TestimonialSection = () => {
  return (
    <>
      <section>
        <div className="text-20  font-semibold  pt-[100px] text-center">
          {" "}
          Share your setup with
        </div>
        <div className="text-40 font-bold text-center"> #HOUT</div>
        <div>
          {" "}
          <img src={frameImage} />{" "}
        </div>

        <div className="pt-[50px] pb-[121px]">
          {" "}
          <Rating />{" "}
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
