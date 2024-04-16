import React from "react";
import Button from "./Button";

const TotalBalance = () => {
  return (
    <>
      <section className=" pt-[50px]  ">
        <section className="bg-[#F8F8F8] px-[32px]  pt-[44px] rounded-lg ">
          <section className="">
            <section className="flex justify-between">
              <div className="text-[#696C74] text-16">Subtotal</div>
              <div>$1,500</div>
            </section>

            <section className="flex justify-between pt-[25px]">
              <div className="text-[#696C74] text-16 ">Delivery Fee</div>
              <div>$30</div>
            </section>
            <section className="flex justify-between pt-[25px] border-b  border-[#D9D9D9] pb-3">
              <div className="text-[#696C74] text-16  ">Tax</div>
              <div> $30</div>
            </section>

            <section className="flex justify-between pt-[25px] pb-5 ">
              <div className="text-16 font-medium">Total</div>
              <div className="text-yellow font-medium text-18">
                USD $1,560.00
              </div>
            </section>
          </section>
        </section>

        <section>
          <div className="text-14 pt-[25px]">
            {" "}
            I Agree to the General Terms and Conditions and waive the Right of
            Withdrawal because this is a customized product.
          </div>
        </section>

        <div className="py-[30px] ">
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
