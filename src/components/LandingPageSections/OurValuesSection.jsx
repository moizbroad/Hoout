import React from "react";
import valueOne from "../../assets/LandingPageImages/ourValues/valueOne.svg";
import valueTwo from "../../assets/LandingPageImages/ourValues/valueTwo.svg";
import valueThree from "../../assets/LandingPageImages/ourValues/valueThree.svg";
import valueFour from "../../assets/LandingPageImages/ourValues/valueFour.svg";

const OurValuesSection = () => {
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
    <section className="mt-[92px] bg-[#E9E6D6] pb-[114px]">
      <div className=" text-52 text-center font-bold  pt-[150px]">
        {" "}
        Our Values{" "}
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-x-[150px] px-[50px]  md:px-[80px] lg:px-[179px] xl:px-[179px]">
        {valueData.map((item, index) => {
          return (
            <div key={index} className="">
              <section className=" pt-[85px]  ">
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
