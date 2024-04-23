// import { useState } from "react";
import React, { useState } from "react";

const DropDown = ({
  firstOptionText,
  paddingX,
  paddingY,
  width,
  headerTextColor,
  useGrayColor,
}) => {
  const [selectedOption, setSelectedOption] = useState(""); // State to track the selected option
  const selectStyle = {
    paddingLeft: paddingX,
    paddingRight: paddingX,
    paddingTop: paddingY,
    paddingBottom: paddingY,
    width: width,
    color: useGrayColor ? "#D5D5D5" : "black",
  };

  // Function to handle change in the selected option
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select
      name="foods"
      id="hr-select"
      className={`border py-2 px-2  rounded-md border-[#CBCBCB] 4xll:py-2 ${width}  4xll:text-44 4xl:text-44 3xll:text-40   3xl:text-36 2xll:text-32 2xl:text-28 xl:text-18 lg:text-16 md:text-16 xs:text-16 text-14  outline-none `}
      style={selectStyle}
    >
      <option value="" style={{ color: headerTextColor }}>
        {firstOptionText}
      </option>

      <option className="text-gray1" value="apple">
        Visa card
      </option>
      <option value="banana">Bank card</option>
      <option value="cherry">Paypal</option>
      <option value="damson">Account</option>
    </select>
  );
};

export default DropDown;
