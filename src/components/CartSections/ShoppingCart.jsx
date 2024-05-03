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
      <section className="w-full flex xl:gap-[40px] lg:gap-[30px] md:gap-[20px] gap-[10px] justify-between xl:px-[135px] lg:px-[80px] px-[20px]  xl:pb-[100px] lg:pb-[70px] md:pb-[80px] pb-[70px] md:flex-col sm:flex-col xs:flex-col  ">
        <section className="flex-1 ">
          <div className="overflow-auto">
          <table className="w-full ">
            <thead>
              <tr className="border-b-[1px] border-[#979797]  ">
                <th
                  className="text-left xl:text-18 lg:text-16 text-14 xl:pb-[24px] lg:pb-[18px] pb-[10px]
 "
                >
                  Product
                </th>
                <th
                  className="text-left xl:text-18 lg:text-16 text-14 px-[10px] xl:pb-[24px] lg:pb-[18px] pb-[10px]
  "
                >
                  Quantity
                </th>
                <th
                  className="text-left xl:text-18 lg:text-16 text-14 px-[10px] xl:pb-[24px] lg:pb-[18px] pb-[10px]
 "
                >
                  Price
                </th>
                <th
                  className="text-left xl:text-18 lg:text-16 text-14 px-[10px] xl:pb-[24px] lg:pb-[18px] pb-[10px]
"
                >
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              <td className="xl:pb-[24px] lg:pb-[18px] pb-[10px]">
                <section className="flex items-center gap-x-2 pt-5 xs:min-w-[300px]">
                  <div>
                    <a href="#">
                      {" "}
                      <img src={cross} />{" "}
                    </a>
                  </div>
                  <div>
                    {" "}
                    <img src={image1}  className="xl:w-[80px] xl:h-[96px] lg:w-[70px] lg:h-[80px] min-w-[60px] min-h-[60px] xs:w-[60px] xs:h-[60px] "/>
                  </div>

                  <div className="flex flex-col xl:min-w-[220px]">
                    <div
                      className="xl:text-18 lg:text-16 text-14
"
                    >
                      Tray Table
                    </div>

                    <div className="flex gap-[15px] items-center">
                      <div>
                        <div
                          className="text-12 text-[#24242480] font-medium "
                        >
                          THICKNESS
                        </div>
                        <div className="xl:text-14 text-[13px]">25 mm </div>
                      </div>

                      <div>
                        <div
                          className="text-12 text-[#24242480]
 font-medium "
                        >
                          width
                        </div>
                        <div className="xl:text-14 text-[13px]">220 mm </div>
                      </div>

                      <div>
                        <div
                          className="text-12 text-[#24242480]
 font-medium "
                        >
                          Length
                        </div>
                        <div className="xl:text-14 text-[13px]">220 mm </div>
                      </div>
                    </div>
                  </div>
                </section>
              </td>
              <td className="px-[10px] xl:pb-[24px] lg:pb-[18px] pb-[10px]">
                <div className="flex justify-between border items-center px-[10px] py-[6px]  rounded-md xs:min-w-[80px]">
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
              </td>
              <td className="px-[10px] xl:pb-[24px] lg:pb-[18px] pb-[10px]">$19.00</td>
              <td className="px-[10px] xl:pb-[24px] lg:pb-[18px] pb-[10px]">$38.00</td>
            </tbody>
          </table>
          </div>
          {/* <section className="flex items-center  gap-x-2">
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
          </section> */}

          <section className="pt-[30px]">
            <div>
              <h6
                className="xl:text-16 lg:text-14 text-[13px]
"
              >
                Have a coupon?{" "}
              </h6>
            </div>
            <div className="pt-2">
              <p className="xl:text-16 lg:text-14 text-[13px] text-[#6C7275]">
                Add your code for an instant cart discount
              </p>
            </div>
            <div className="flex border justify-between items-center rounded-md flex-1 xl:w-[442px] w-[100%] px-3 mt-3">
              <div className="flex gap-x-2 xl:py-[14px] lg:py-[12px] py-[8px] items-center">
                <img src={coupon} />
                <span className="pt-[4px] text-[#6C7275]">Coupon Code</span>
              </div>
              <div> Apply</div>
            </div>
          </section>
        </section>

        {/* Right side of grid  */}
        <section className=" xl:w-[38.2%] lg:w-[38.2%] ">
          <section className="bg-[#F8F8F8] xl:px-[32px] lg:px-[25px] md:px-[20px] px-[12px]  xl:pt-[44px] lg:pt-[30px] pt-[15px] rounded-lg ">
            <section className="">
              <section className="flex justify-between">
                <div className="text-[#696C74] xl:text-16 lg:text-15 md:text-14 text-[13px] ">
                  Subtotal
                </div>
                <div>$1,500</div>
              </section>

              <section className="flex justify-between pt-[25px]">
                <div className="text-[#696C74] xl:text-16 lg:text-15 md:text-14 text-[13px] ">
                  Delivery Fee
                </div>
                <div>$30</div>
              </section>
              <section className="flex justify-between pt-[25px] border-b  border-[#D9D9D9] pb-3">
                <div className="text-[#696C74] xl:text-16 lg:text-15 md:text-14 text-[13px]  ">
                  Tax
                </div>
                <div> $30</div>
              </section>

              <section className="flex justify-between pt-[25px] pb-5 ">
                <div className="xl:text-16 lg:text-15 md:text-14 text-[13px] font-medium">
                  Total
                </div>
                <div
                  className="text-yellow font-medium xl:text-18 lg:text-16 text-14
"
                >
                  USD $1,560.00
                </div>
              </section>
            </section>
          </section>

          <div className="xl:py-[30px] py-[15px] flex justify-center  ">
            <Button
              btnText="Checkout "
              paddingY="14px"
              breakpoint="xl:w-[93.5%] lg:w-[93.5%] w-[100%]"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default ShoppingCart;
