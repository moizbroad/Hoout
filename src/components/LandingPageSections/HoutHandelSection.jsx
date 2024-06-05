import React from "react";
import Button from "../Common/Button";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../utils/helper";

const HoutHandelSection = () => {
  const navigate = useNavigate("/shop-page");
  return (
    <div className="landing flex justify-center items-center">
      <section className="flex-col text-center    ">
        <div className="text-[#fff] text-30 md:text-40 lg:text-50 xl:text-60">
          HoutHandel
        </div>
        <div className="text-[#fff]  text-16 md:text-20 lg:text-28 xl:text-28  ">
          Eiken - Thermisch gemodificeerd Fraké - Hardhout - Terrasplanken -
          Steigerhout - Suar
        </div>
        <div className="flex justify-center pt-[50px] view-assortment-btn">
          <Button
            btnText="VIEW ASSORTMENT"
            paddingY="25px"
            paddingX="72px"
            fontbold
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                document.getElementById("assortments-section")?.scrollIntoView({
                  behavior: "smooth",
                });
              }, 100);
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default HoutHandelSection;
