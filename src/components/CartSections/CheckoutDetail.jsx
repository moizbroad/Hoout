import React from "react";
import InputField from "../../components/Common/InputField";
import Button from "../../components/Common/Button";
import { paymentMethods } from "../../utils/helper";
import PaymentCard from "../Common/PaymentCard";
import image1 from "../../assets/addToCart/image1.svg";
import minus from "../../assets/addToCart/minus.svg";
import plus from "../../assets/addToCart/plus.svg";
import TotalBalance from "../Common/TotalBalance";

const CheckoutDetail = () => {
  return (
    <>
      <section className="px-[100px]">
        <section className="grid grid-cols-12 gap-4 xs:gap-6 lg:gap-[45px] gap-x-12 ">
          <section className="col-span-12 xl:col-span-4">
            <div className="text-22 font-medium border-b  border-[#D9D9D9] pb-2">
              {" "}
              View Order{" "}
            </div>

            <section className="flex pt-5 items-center">
              <div>
                {" "}
                <img src={image1} />
              </div>
              <div>
                <div className="px-2 text-18">Tray Tabel</div>
                <section className="flex  gap-x-4 px-2 pt-1">
                  <div>
                    <div className="text-12  font-medium  text-[#BABABA]">
                      thickness
                    </div>
                    <div className="">25 mm </div>
                  </div>

                  <div>
                    <div className="text-12  font-medium text-[#BABABA] ">
                      Width
                    </div>
                    <div className="">25 mm </div>
                  </div>

                  <div>
                    <div className="text-12  font-medium text-[#BABABA] ">
                      Length
                    </div>
                    <div className="">25 mm </div>
                  </div>
                </section>
              </div>
            </section>

            <section className="flex justify-between items-center px-[80px]  ">
              <div className="flex items-center ">
                <div className="border p-[10px]">
                  <img src={minus} className="size-3" />
                </div>
                <div className="border  px-3.5 py-1 ">1</div>
                <div className="border p-[10px]">
                  <img src={plus} className="size-3" />
                </div>
              </div>

              <div className="text-22 font-bold  "> $60.25 </div>
            </section>

            <div>
              {" "}
              <TotalBalance />
            </div>
          </section>

          {/* Right Side Section  */}

          <section className="col-span-12 xl:col-span-8 font-bold text-md">
            <div className="text-22 font-semibold border-b pb-2 border-[#D9D9D9]">
              {" "}
              Delivery Address
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 xl:col-span-6 mt-8">
                <div className="mb-4">
                  <InputField label="First Name" />
                </div>
                <div className="mb-4">
                  <InputField label="Company Name" />
                </div>
                <div className="mb-4">
                  <InputField label="Street & Number" />
                </div>
                <div className="mb-4">
                  <InputField label="City" />
                </div>
              </div>

              <div className="col-span-12 xl:col-span-6 xl:mt-8">
                <div className="mb-4">
                  <InputField label="First Name" />
                </div>
                <div className="w-full md:h-20  md:w-0 col-span-6 mb-2"></div>{" "}
                <div className="mb-4 invisible">
                  <InputField label="Zip Code" />
                </div>
                <div className="mb-4 ">
                  <InputField label="Zip Code" />
                </div>
                <div className="mb-4">
                  <InputField label="Country" />
                </div>
                <div className="mt-4 float-end w-[39%]">
                  <Button btnText="Save" widthfull />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold my-2 border-b border-[#D9D9D9] pb-3">
                Payment Method
              </h2>

              {paymentMethods.map((item) => (
                <div className="my-4 xl:w-2/3 w-full" key={item.id}>
                  <PaymentCard
                    img={item.img}
                    name={item.name}
                    isChecked={item.checked}
                  />
                </div>
              ))}
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default CheckoutDetail;
