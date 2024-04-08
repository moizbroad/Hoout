import React from "react";
// import oak from "../../assets/LandingPageImages/assortment/oak.svg";
import mianVideo from "../../assets/LandingPageImages/mianVideo.svg";

const VideoSection = () => {
  return (
    <>
      <section className=" bg-[#E9E6D6] py-[119px]">
        <div className="font-bold text-60 text-center ">Why Hout Total </div>
        <div className=" text-18 text-center pt-[40px]  ">
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
        <div className="font-bold text-60 px-[225px]  pt-[40px]">
          {" "}
          <img src={mianVideo} className="w-[100%]" />{" "}
        </div>
      </section>
    </>
  );
};

export default VideoSection;
