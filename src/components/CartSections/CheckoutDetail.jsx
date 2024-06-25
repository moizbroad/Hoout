import React, { useState } from "react";
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
  const pricePerUnit = 30;
  const [items, setItems] = useState([
    {
      id: 1,
      image: image1,
      name: "Tray Table",
      thickness: 25,
      width: 220,
      length: 220,
      pricePerUnit: 19.0,
      quantity: 2,
    },
    // Add more items as needed
  ]);

  const handleIncrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
    );
  };

  const totalPrice = (id) => {
    const item = items.find((item) => item.id === id);
    return (item.quantity * item.pricePerUnit).toFixed(2);
  };

  const deliveryFee = 30.0;
  const taxRate = 0.02; // Assuming 2% tax rate

  const subtotal = items.reduce(
    (acc, item) => acc + item.pricePerUnit * item.quantity,
    0
  );

  const tax = subtotal * taxRate;
  const total = subtotal + deliveryFee + tax;

  return (
    <>
      <section className="xl:px-[100px] lg:px-[60px] px-[30px] xs:px-[15px]">
        <section className="grid grid-cols-12 gap-4 xs:gap-6 lg:gap-[45px] gap-x-12 ">
          <section className="col-span-12 xl:col-span-4">
            <div className="text-22 font-medium border-b border-[#D9D9D9] pb-2">
              View Order
            </div>

            {items.map((item) => (
              <div key={item.id}>
                <section className="flex pt-5 items-center">
                  <div>
                    <img
                      src={item.image}
                      className="xl:w-[80px] xl:h-[96px] lg:w-[70px] lg:h-[80px] min-w-[60px] min-h-[60px] xs:w-[60px] xs:h-[60px]"
                    />
                  </div>
                  <div>
                    <div className="px-2 text-18">{item.name}</div>
                    <section className="flex gap-x-4 px-2 pt-1">
                      <div>
                        <div className="text-12 font-medium text-[#BABABA]">
                          Thickness
                        </div>
                        <div>{item.thickness} mm</div>
                      </div>

                      <div>
                        <div className="text-12 font-medium text-[#BABABA]">
                          Width
                        </div>
                        <div>{item.width} mm</div>
                      </div>

                      <div>
                        <div className="text-12 font-medium text-[#BABABA]">
                          Length
                        </div>
                        <div>{item.length} mm</div>
                      </div>
                    </section>
                  </div>
                </section>

                <section className="flex justify-between items-center xl:pl-[80px] lg:pl-[80px] md:pl-[80px] sm:pl-[80px] xs:pl-[60px] pl-[50px]">
                  <div className="flex justify-between border items-center px-[10px] py-[6px] rounded-md xl:min-w-[118px] lg:w-[170px] md:w-[170px] sm:w-[170px] xs:w-[170px]">
                    <div className="cursor-pointer">
                      <span onClick={() => handleDecrement(item.id)}>
                        <img src={minus} alt="decrement" />
                      </span>
                    </div>
                    <h6>{item.quantity}</h6>
                    <div className="cursor-pointer">
                      <span onClick={() => handleIncrement(item.id)}>
                        <img src={plus} alt="increment" />
                      </span>
                    </div>
                  </div>
                  <div className="xl:text-22 lg:text-20 md:text-18 text-16 font-bold">
                    €{totalPrice(item.id)}
                  </div>
                </section>
              </div>
            ))}

            <div>
              <TotalBalance
                subtotal={subtotal}
                deliveryFee={deliveryFee}
                tax={tax}
                total={total}
              />
            </div>
          </section>

          {/* Right Side Section  */}

          <section className="col-span-12 xl:col-span-8 font-bold text-md">
            <div className="xl:text-22 lg:text-20 md:text-18 text-16 font-semibold border-b pb-2 border-[#D9D9D9]">
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
                <div className="">
                  <InputField label="City" />
                </div>
              </div>

              <div className="col-span-12 xl:col-span-6 xl:mt-8">
                <div className="mb-4">
                  <InputField label="Last Name" />
                </div>
                <div className="w-full md:h-20 md:w-0 col-span-6 mb-2 lg:hidden md:hidden sm:hidden xs:hidden"></div>
                <div className="mb-4 invisible lg:hidden md:hidden sm:hidden xs:hidden">
                  <InputField label="Zip Code" />
                </div>
                <div className="mb-4">
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

            <div className="mt-8 pb-[100px]">
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
