import React, { useEffect, useState } from "react";
import valueOne from "../../assets/LandingPageImages/ourValues/valueOne.svg";
import valueTwo from "../../assets/LandingPageImages/ourValues/valueTwo.svg";
import valueThree from "../../assets/LandingPageImages/ourValues/valueThree.svg";
import valueFour from "../../assets/LandingPageImages/ourValues/valueFour.svg";
import { axiosApi } from "../../providers";

const OurValuesSection = () => {
  const [state, setState] = useState({
    values: [],
  });

  useEffect(() => {
    handleGetOurValues();
  }, []);

  const handleGetOurValues = async () => {
    try {
      const response = await axiosApi.get("/our-value/");
      setState((prev) => ({
        ...prev,
        values: response.data,
      }));
    } catch (error) {}
  };

  const valueData = [
    {
      image: valueOne,
      head: "PROFESSIONAL IN PARTICULAR",
      subHead:
        "Construction professional, gardener or enthusiastic do-it-yourselfer? You are always welcome with us, regardless of the scale of your project.",
    },
    {
      image: valueOne,
      head: "PROFESSIONAL IN PARTICULAR",
      subHead:
        "Construction professional, gardener or enthusiastic do-it-yourselfer? You are always welcome with us, regardless of the scale of your project.",
    },
    {
      image: valueOne,
      head: "PROFESSIONAL IN PARTICULAR",
      subHead:
        "Construction professional, gardener or enthusiastic do-it-yourselfer? You are always welcome with us, regardless of the scale of your project.",
    },
    {
      image: valueOne,
      head: "PROFESSIONAL IN PARTICULAR",
      subHead:
        "Construction professional, gardener or enthusiastic do-it-yourselfer? You are always welcome with us, regardless of the scale of your project.",
    },
  ];

  return (
    <section
      className="mt-[30px] md:mt-[70px] lg:mt-[92px] xl:mt-[92px]  bg-[#E9E6D6] pb-[114px]"
      id="our-values"
    >
      <div className=" text-30 md:text-40 lg:text-52 xl:text-52 text-center font-bold  pt-[80px] md:pt-[100px] lg:pt-[150px] xl:pt-[150px]">
        {" "}
        Our Values{" "}
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-x-[150px] px-[50px] max-w-[1240px] mx-auto">
        {valueData.map((item, index) => {
          return (
            <div key={index} className="">
              <section className=" pt-[30px] md:pt-[70px] lg:pt-[85px] xl:pt-[85px]">
                <div className="flex justify-center  ">
                  {" "}
                  <img src={item.image} />{" "}
                </div>
                <div className="text-center  text-22  pt-[25px]">
                  {" "}
                  {item.head}
                </div>
                <div className="text-center  text-16  pt-[25px] text-[#838381]">
                  {item.subHead}
                </div>
              </section>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default OurValuesSection;
