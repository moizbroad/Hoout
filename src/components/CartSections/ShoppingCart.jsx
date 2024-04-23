import React from "react";
import cross from "../../assets/addToCart/cross.svg";
import image1 from "../../assets/addToCart/image1.svg";
import image2 from "../../assets/addToCart/image2.svg";
import image3 from "../../assets/addToCart/image3.svg";
import coupon from "../../assets/addToCart/coupon.svg";
import plus from "../../assets/addToCart/plus.svg";
import minus from "../../assets/addToCart/minus.svg";
import Button from "../../components/Common/Button";

const ShoppingCart = () => {
  return (
    <>
      <section className=" flex justify-between px-[100px]  pb-[100px] ">
        <section className="flex-1 ">
          <table>
            <thead className="">
              <tr className="border-b-2 pb-1 border-[#979797] ">
                <td className="text-18 min-w-[300px] ">Product</td>
                <td className="text-18 min-w-[140px] ">Quantity</td>
                <td className="text-18  min-w-[140px]">Price</td>
                <td className="text-18  min-w-[140px]">Subtotal</td>
              </tr>
            </thead>
          </table>
          <section className="flex items-center  gap-x-2">
            <section className="flex items-center gap-x-2 pt-5">
              <div>
                <img src={cross} />
              </div>
              <div>
                {" "}
                <img src={image1} />
              </div>

              <section className="flex-col">
                <div className="text-18"> Tray Table</div>
                <section>
                  <div className="text-12  font-medium ">thickness</div>
                  <div className="">25 mm </div>
                </section>
              </section>

              <section className="pt-6">
                <div className="text-12  font-medium ">width</div>
                <div>220 mm </div>
              </section>

              <section className="pt-6">
                <div className="text-12  font-medium ">Length</div>
                <div>220 mm </div>
              </section>
            </section>
            <div className="flex gap-x-3 border items-center px-1  rounded-md">
              <td>
                <img src={minus} />
              </td>
              <td>2</td>
              <td>
                <img src={plus} />
              </td>
            </div>

            <div className="min-w-[140px]">$19.00</div>
            <div className="min-w-[140px]">$38.00</div>
          </section>

          <section className="pt-[30px]">
            <div>Have a coupon?</div>
            <div className="pt-3">
              Add your code for an instant cart discount
            </div>
            <div className="flex border justify-between items-center rounded-md flex-1 w-[442px] px-3 mt-3">
              <div className="flex gap-x-2 py-[14px]">
                <img src={coupon} /> Coupon Code
              </div>
              <div> Apply</div>
            </div>
          </section>
        </section>

        {/* Right side of grid  */}
        <section className=" w-[36%] ">
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

          <div className="py-[30px]  ">
            <Button
              btnText="Checkout "
              paddingY="20px"
              breakpoint="xl:w-[447px]"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default ShoppingCart;
