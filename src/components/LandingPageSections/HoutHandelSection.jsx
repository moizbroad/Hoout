import React from "react";
import Button from "../Common/Button";

const HoutHandelSection = () => {
  return (
    <div className="landing  pt-[217px] ">
      <section className="flex-col text-center    ">
        <div className="text-[#fff] text-60 ">HoutHandelSection</div>
        <div className="text-[#fff]  text-28  ">
          Eiken - Thermisch gemodificeerd Fraké - Hardhout - Terrasplanken -
          Steigerhout - Suar
        </div>
        <div className="flex justify-center pt-[50px] ">
          <Button
            btnText="VIEW ASSORTMENT"
            paddingY="25px"
            paddingX="72px"
            fontbold
          />
        </div>
      </section>
    </div>
  );
};

export default HoutHandelSection;
