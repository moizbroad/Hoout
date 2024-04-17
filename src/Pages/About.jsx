import React from "react";
import rightArrow from "../assets/shopPage/rightArrow.svg";
import gridGroup from "../assets/about/gridGroup.svg";
import avatars from "../assets/about/avatars.svg";
import stars from "../assets/about/stars.svg";
import QualitySection from "../components/Common/QualitySection";

const About = () => {
  return (
    <>
      <section className="about flex justify-center items-center ">
        <div className="w-[320px] m-auto  text-center bg-transparentGray text-white py-[35px] rounded-lg ">
          <div className="text-white text-48 font-medium">About US </div>
          <div className="text-white flex items-center justify-center gap-x-3 pt-5 ">
            <div className="flex items-center gap-x-3">
              Home <img src={rightArrow} />
            </div>
            <div>About us</div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-12 px-[100px] pt-[100px] gap-x-2 ">
        <section className="xl:col-span-6 text-16  ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essLorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.entially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </section>
        <section className="xl:col-span-6 ">
          <img src={gridGroup} />
        </section>
      </section>

      <div className="flex justify-center items-center pt-[65px]">
        <section className="flex-col">
          <div className="flex items-center gap-x-3">
            <div className="flex items-center">
              <img src={avatars} />
            </div>
            <div className="flex-col">
              {" "}
              <div className="text-26 font-bold">2,874</div>
              <div>Satisfied Customers</div>
            </div>
          </div>
          <div className="flex gap-x-3 pt-3  ">
            <div className="text-26 font-bold">4.8/5</div>
            <div>
              <img src={stars} />
            </div>
          </div>
        </section>
      </div>
      <div className="pt-[121px]">
        {" "}
        <QualitySection />
      </div>
    </>
  );
};

export default About;
