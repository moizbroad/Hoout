import React from "react";
import image1 from "../../assets/LandingPageImages/products/image1.svg";
import image2 from "../../assets/LandingPageImages/products/image2.svg";
import image3 from "../../assets/LandingPageImages/products/image3.svg";
import image4 from "../../assets/LandingPageImages/products/image4.svg";
import image5 from "../../assets/LandingPageImages/products/image5.svg";
import image6 from "../../assets/LandingPageImages/products/image6.svg";
import image7 from "../../assets/LandingPageImages/products/image7.svg";
import image8 from "../../assets/LandingPageImages/products/image8.svg";
import productHeart from "../../assets/LandingPageImages/products/productHeart.svg";
import addToCart from "../../assets/LandingPageImages/products/addToCart.svg";
import Button from "../Common/Button";
import { useNavigate } from "react-router-dom";

const ProductsSection = ({ isthree, notRequired, isbuttonReqird }) => {
  const navigate = useNavigate();
  const productData = [
    {
      image: image1,
      heading: "Syltherine",
      subheading: "With Oak Wood",
      amount: "$2.500.000",
      subamount: "$ 3.500.000",
      cartImage: addToCart,
    },
    {
      image: image2,
      heading: "Syltherine",
      subheading: "With Oak Wood",
      amount: "$2.500.000",
      subamount: "$ 3.500.000",
      cartImage: addToCart,
      heartImage: productHeart,
    },

    {
      image: image3,
      heading: "Syltherine",
      subheading: "With Oak Wood",
      amount: "$2.500.000",
      subamount: "$ 3.500.000",
      cartImage: addToCart,
      heartImage: productHeart,
    },

    {
      image: image3,
      heading: "Syltherine",
      subheading: "With Oak Wood",
      amount: "$2.500.000",
      subamount: "$ 3.500.000",
      cartImage: addToCart,
      heartImage: productHeart,
    },

    {
      image: image3,
      heading: "Syltherine",
      subheading: "With Oak Wood",
      amount: "$2.500.000",
      subamount: "$ 3.500.000",
      cartImage: addToCart,
      heartImage: productHeart,
    },

    {
      image: image3,
      heading: "Syltherine",
      subheading: "With Oak Wood",
      amount: "$2.500.000",
      subamount: "$ 3.500.000",
      cartImage: addToCart,
      heartImage: productHeart,
    },

    {
      image: image3,
      heading: "Syltherine",
      subheading: "With Oak Wood",
      amount: "$2.500.000",
      subamount: "$ 3.500.000",
      cartImage: addToCart,
      heartImage: productHeart,
    },

    {
      image: image3,
      heading: "Syltherine",
      subheading: "With Oak Wood",
      amount: "$2.500.000",
      subamount: "$ 3.500.000",
      cartImage: addToCart,
      heartImage: productHeart,
    },
  ];
  return (
    <>
      <section
        className={
          notRequired
            ? ""
            : "pt-[30px] md:pt-[70px] lg:pt-[100px] xl:pt-[100px] px-[30px] md:px-[80px] lg:px-[100px] xl:px-[100px]"
        }
      >
        {notRequired ? null : (
          <div className="text-30 md:text-40 lg:text-50 xl:text-60 font-bold text-center pb-[30px] md:pb-[40px] lg:pb-[60px] xl:pb-[60px]">
            {" "}
            Products
          </div>
        )}

        <div
          className={
            isthree
              ? "grid grid-cols-3 sm:grid-cols-2  xs:grid-cols-1 gap-y-[30px]  gap-x-8 "
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1240px] mx-auto"
          }
        >
          {productData.map((item, index) => {
            return (
              // JSX code here
              <div key={index} className="">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/wood-page");
                  }}
                >
                  <img
                    src={item.image}
                    className="w-full object-cover h-full sm:h-[310px] lg:h-[310px] xl:h-[310px]"
                  />
                </div>
                <section className="bg-[#F4F5F7] pb-4 px-4">
                  <div className="font-semibold  text-24 pt-[15px]">
                    {item.heading}
                  </div>
                  <div className=" font-medium  text-16  text-gray2 pt-[15px]">
                    {item.subheading}
                  </div>
                  <section className="flex gap-x-3 pt-[15px] pb-[20px]">
                    <div>{item.amount}</div>
                    <div className="text-gray2 line-through">{item.subamount}</div>
                  </section>
                  <section className="flex gap-x-4 items-center justify-between">
                    <div
                      className="border-2 cursor-pointer border-[#898989] px-2 flex items-center justify-center py-3  gap-x-3  add-cart-btn"
                      onClick={() => {
                        navigate("/cart");
                      }}
                    >
                      <img src={item.addToCart} />
                      Add to Cart{" "}
                    </div>
                    <div>
                      <img src={item.heartImage} />{" "}
                    </div>
                  </section>
                </section>
              </div>
            );
          })}
        </div>
        {isbuttonReqird ? null : (
          <div className="flex  justify-center pt-[30px] md:pt-[40px] lg:pt-[70px] xl:pt-[70px] view-assortment-btn">
            {" "}
            <Button
              btnText="View Shop"
              paddingX="72px"
              fontbold
              paddingY="22px"
            />{" "}
          </div>
        )}
      </section>
    </>
  );
};

export default ProductsSection;
