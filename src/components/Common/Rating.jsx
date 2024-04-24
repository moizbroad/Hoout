import React from "react";
import avatars from "../../assets/about/avatars.svg";
import stars from "../../assets/about/stars.svg";

const Rating = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-[30px] md:pt-[40px] lg:pt-[65px] xl:pt-[65px]">
        <section className="flex-col">
          <div className="flex items-center gap-x-3">
            <div className="flex items-center">
              <img src={avatars} />
            </div>
            <div className="flex-col">
              {" "}
              <div className="text-20 md:text-22 lg:text-24 xl:text-26 font-bold">2,874</div>
              <div>Satisfied Customers</div>
            </div>
          </div>
          <div className="flex gap-x-3 pt-3  ">
            <div className="text-20 md:text-22 lg:text-24 xl:text-26 font-bold">4.8/5</div>
            <div>
              <img src={stars} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Rating;
