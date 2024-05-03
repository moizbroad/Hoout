/* eslint-disable react/prop-types */
// import  from "../../assets/landing/landArrowWhite.svg";

const Button = ({
  btnText,
  textColor = "#fff",
  onClick,
  type,
  disabled,
  paddingX = "16",
  paddingY = "4",
  color,
  breakpoint,
  widthfull,
  fontbold,
}) => {
  return (
    <button
      className={` ${
        disabled ? "bg-gray-500 opacity-80" : "hover:opacity-85"
      }  xl:text-22 lg:text-20 md:text-18 sm:text-16 xs:text-15
 flex-center rounded-md fontbold
       ${widthfull ? "w-full" : null}
       ${breakpoint} 
       ${fontbold ? "font-bold" : null} 
       ${
         textColor ? "text-[#fff]" : "text-white"
       } xl:py-3 py-2 px-2 xl:text-md bg-yellow text-16`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      color={color}
      style={{ paddingBlock: paddingY, paddingInline: paddingX }}
    >
      {btnText}
    </button>
  );
};

// breakpoint = "sm:w-[180px] md:w-[190px] lg:w-[350px] xl:w-[460px]";
//
export default Button;
