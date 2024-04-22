import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Common/Button";
import location from "../../assets/HeaderAndFooter/locationFooter.svg";
import cameraFooter from "../../assets/HeaderAndFooter/cameraFooter.svg";
import emailFooter from "../../assets/HeaderAndFooter/emailFooter.svg";
import phone from "../../assets/HeaderAndFooter/phoneFooter.svg";
import whatsp from "../../assets/HeaderAndFooter/whatspFooter.svg";
import facebook from "../../assets/HeaderAndFooter/facebookFooter.svg";

const FooterSection = ({ isShow }) => {
  const [openhours, setOpenHours] = useState([
    {
      title: "Openings hours",
      mon: "Mon - Closed",
      tue: "Tue - 08:30-17:30",
      wed: "Wed - 08:30-18:00",
      thurs: "Thu - 08:30-17:30",
      fri: "Fri - 09:00-17:30",
      sat: "Sat - 10am-2pm",
      sun: "Sun - Closed",
    },
  ]);

  return (
    <>
      <footer className="py-8 px-4 xs:px-6 bg-[#E9E6D6] relative">
        <section className="w-full absolute top-[-72px] left-[10%] justify-center bg-white rounded-2xl max-w-[78%] mx-auto gap-x-3 py-4 xs:py-6 px-4">
          <div className="flex flex-row xs:flex-col  xs:gap-2 gap-4 items-center justify-start xs:justify-between w-full">
            <div className="font-semibold text-[#000] text-lg xs:text-xl">
              Newsletter
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <div className="rounded-xl flex flex-1 w-full mt-2 xs:mt-0">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="bg-[#F5F4F8] w-full rounded-l-xl border-none outline-none px-4 py-2 text-sm xs:text-base"
                />
                <button className="bg-[#15803D] text-[#000] py-2 px-3 xs:px-4 rounded-r-xl font-semibold text-xs xs:text-base">
                  Subscribe
                </button>
              </div>
              <div className=" pt-2 text-xs  text-[#000] xs:text-sm">
                Subscribe to Our Newsletter and get updated every time.
              </div>
            </div>
          </div>
        </section>

        {/* footer top end */}

        <section className="flex  pt-[80px] justify-center sm:justify-normal gap-y-6 text-[#000] mt-4">
          <div className=" w-[50%] lg:w-[25%] md:w-[50%] sm:w-[50%]">
            <div className="mb-7 text-lg lg:text-3xl">Home</div>
            <div className="mt-5 text-sm">About Us</div>
            <div className="mt-5 text-sm">Impression</div>
            <div className="mt-5 text-sm">Custom Tables</div>
            <div className="mt-5">
              <Link to="/faq" className=" text-sm">
                FAQ
              </Link>
            </div>
            <div className="mt-5 text-sm">Contact</div>
            <div className="mt-5 text-sm">
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </div>
            <div className="mt-5">
              <Link to="privacy-policy">Privacy Policy</Link>
            </div>
          </div>

          <div className=" w-[50%] lg:w-[25%] md:w-[50%] sm:w-[50%]">
            {openhours.map((item, index) => (
              <div key={index}>
                <div className="mb-7 text-lg lg:text-3xl text-[#000]">
                  {item.title}
                </div>
                <div className="mt-5 text-sm">{item.mon}</div>
                <div className="mt-5 text-sm">{item.tue}</div>
                <div className="mt-5 text-sm">{item.wed}</div>
                <div className="mt-5 text-sm">{item.thurs}</div>
                <div className="mt-5 text-sm">{item.fri}</div>
                <div className="mt-5 text-sm">{item.sat}</div>
                <div className="mt-5 text-sm">{item.sun}</div>
              </div>
            ))}
          </div>

          <div className=" w-[50%] lg:w-[25%] md:w-[50%] sm:w-[50%]">
            <div>Contact Us</div>
            <div className="flex items-start gap-x-2">
              {" "}
              <img src={location} /> Lageweg 35K 2222AG <br /> Katwijk aan Zee
              The <br />
              Netherlands{" "}
            </div>
            <div className="flex items-center pt-5 gap-x-2">
              {" "}
              <img src={whatsp} /> +316 339 66 002
            </div>
            <div className="flex items-center pt-5 gap-x-2">
              {" "}
              <img src={phone} /> +31 71 203 40 90
            </div>
            <div className="flex items-center pt-5 gap-x-2">
              {" "}
              <img src={emailFooter} /> info@makeyourplank.nl
            </div>
            <div className="flex items-center pt-5   gap-x-6">
              <div className="flex items-center">
                <img src={facebook} />{" "}
              </div>
              <div>
                {" "}
                <img src={cameraFooter} />
              </div>
            </div>
          </div>

          <div className=" w-[50%] lg:w-[25%] md:w-[50%] sm:w-[50%]">
            <div className="mb-7 text-lg lg:text-3xl">Chamber of Commerce</div>
            <div className="mt-5 text-sm">61392421</div>
            <div className="mt-5 text-sm">Bank</div>
            <div className="mt-5 text-sm">NL65 BUNQ 2064 2611 33</div>
            <div className=" mt-5">
              {" "}
              <Button
                btnText="Pay"
                xl:paddingX="60px"
                lg:paddingX="30px"
                breakpoint="w-[100px] sm:w-[100px] md:w-[120px] lg:w-[130px] xl:w-[150px]"
              >
                {" "}
              </Button>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default FooterSection;
