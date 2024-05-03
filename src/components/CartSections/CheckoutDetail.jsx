import React from "react";
import InputField from "../../components/Common/InputField";
import Button from "../../components/Common/Button";
import { paymentMethods } from "../../utils/helper";
import PaymentCard from "../Common/PaymentCard";
import image1 from "../../assets/addToCart/image1.svg";
import minus from "../../assets/addToCart/minus.svg";
import plus from "../../assets/addToCart/plus.svg";
import TotalBalance from "../Common/TotalBalance";
import RadioButtons from "../Common/RadioButtons";

const CheckoutDetail = () => {
  return (
    <>
      <section className="xl:px-[100px] lg:px-[60px] px-[30px] xs:px-[15px]">
        <section className="grid grid-cols-12 gap-4 xs:gap-6 lg:gap-[45px] gap-x-12 ">
          <section className="col-span-12 xl:col-span-4">
            <div className="text-22 font-medium border-b  border-[#D9D9D9] pb-2">
              {" "}
              View Order{" "}
            </div>

            <section className="flex pt-5 items-center">
              <div>
                {" "}
                <img
                  src={image1}
                  className="xl:w-[80px] xl:h-[96px] lg:w-[70px] lg:h-[80px] min-w-[60px] min-h-[60px] xs:w-[60px] xs:h-[60px] "
                />
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

            <section className="flex justify-between items-center xl:pl-[80px] lg:pl-[60px] pl-[50px]  ">
              <div className="flex justify-between border items-center px-[10px] py-[6px]  rounded-md xs:min-w-[80px] w-[40%] ">
                <div>
                  <a href="#">
                    {" "}
                    <img src={minus} />
                  </a>
                </div>
                <h6>2</h6>
                <div>
                  <a href="#">
                    {" "}
                    <img src={plus} />{" "}
                  </a>
                </div>
              </div>

              <div className="xl:text-22 lg:text-20 md:text-18 text-16 font-bold  ">
                {" "}
                $60.25{" "}
              </div>
            </section>

            <div>
              {" "}
              <TotalBalance />
            </div>
          </section>

          {/* Right Side Section  */}

          <section className="col-span-12 xl:col-span-8 font-bold text-md">
            <div className="xl:text-22 lg:text-20 md:text-18 text-16 font-semibold border-b pb-2 border-[#D9D9D9]">
              {" "}
              Delivery Address
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 xl:col-span-6 mt-8">
                <div className="mb-4">
                  <InputField label="First Name" />
                </div>
                <div className="mb-4">
                  <InputField label="Company Name (Optional)" />
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
                  <InputField label="Last Name" />
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
                <div className="my-4 xl:w-2/3 w-full h-auto" key={item.id}>
                  <PaymentCard
                    img={item.img}
                    name={item.name}
                    isChecked={item.checked}
                    isRadioRequired
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
