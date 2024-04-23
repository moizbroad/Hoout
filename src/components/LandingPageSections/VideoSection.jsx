import React from "react";
// import oak from "../../assets/LandingPageImages/assortment/oak.svg";
import mianVideo from "../../assets/LandingPageImages/mianVideo.svg";

const VideoSection = () => {
  return (
    <>
      <section className=" bg-[#E9E6D6] py-[40px] md:py-[80px] lg:pt-[119px] xl:pt-[119px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="font-bold text-30 md:text-40 lg:text-50 xl:text-60 text-center ">Why Hout Total </div>
          <div className="text-16 md:text-18 lg:text-18 xl:text-18 text-center px-[30px] md:px-[60px] lg:px-[100px] xl:px-[100px] pt-[20px] md:pt-[25px] lg:pt-[30px] xl:pt-[30px]">
            Our extensive sustainable stock means we can almost always meet your
            needs. With a wide range of products, including oak wood for the
            furniture industry, gardeners and stair factories, thermally modified
            Fraké for facade cladding but also interiors, Suar for table tops,
            hardwood for terraces, window frames, scaffolding, buildings and much
            more. We are flexible and, if desired, can also carry out machining
            operations to deliver your custom work. We offer our customers the
            best types of wood for a low price. Our dedication and capabilities
            make us the ideal choice for your wood needs{" "}
          </div>
          <div className="font-bold text-60 px-[50px] md:px-[120px] lg:px-[200px] xl:px-[225px]  pt-[40px]">
            {" "}
            <img src={mianVideo} className="w-[100%]" />{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
