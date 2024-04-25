import React from "react";
import Button from "./Button";

const TotalBalance = () => {
  return (
    <>
      <section className=" xl:pt-[50px] lg:pt-[30px] md:pt-[20px] pt-[8px]  ">
        <section className="bg-[#F8F8F8] xl:px-[32px] lg:px-[25px] md:px-[18px] px-[10px]  xl:pt-[44px] lg:pt-[34px] md:pt-[20px] pt-[10px] rounded-lg ">
          <section className="">
            <section className="flex justify-between">
              <div className="text-[#696C74] xl:text-16 lg:text-15 text-14">Subtotal</div>
              <div>$1,500</div>
            </section>

            <section className="flex justify-between xl:pt-[25px] lg:pt-[20px] pt-[10px]">
              <div className="text-[#696C74] xl:text-16 lg:text-15 text-14 ">Delivery Fee</div>
              <div>$30</div>
            </section>
            <section className="flex justify-between xl:pt-[25px] lg:pt-[20px] pt-[10px] border-b  border-[#D9D9D9] pb-3">
              <div className="text-[#696C74] xl:text-16 lg:text-15 text-14  ">Tax</div>
              <div> $30</div>
            </section>

            <section className="flex justify-between xl:pt-[25px] lg:pt-[20px] pt-[10px] pb-5 ">
              <div className="text-16 font-medium">Total</div>
              <div className="text-yellow font-medium xl:text-18 lg:text-16 text-14
">
                USD $1,560.00
              </div>
            </section>
          </section>
        </section>

        <section>
          <div className="xl:text-14 lg:text-14 text-[13px] xl:pt-[25px] lg:pt-[20px] pt-[10px]">
            {" "}
            I Agree to the General Terms and Conditions and waive the Right of
            Withdrawal because this is a customized product.
          </div>
        </section>

        <div className="xl:py-[30px] lg:py-[25px] md:py-[20px] py-[10px] ">
          <Button
            btnText="Confirm Order "
            paddingY="20px"
            // breakpoint="xl:w-[407px]"
            widthfull
          />
        </div>
      </section>
    </>
  );
};

export default TotalBalance;
