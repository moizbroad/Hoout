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
}) => {
  return (
    <button
      className={` ${
        disabled ? "bg-gray-500 opacity-80" : "hover:opacity-85"
      }  flex-center rounded-md  
       ${widthfull ? "w-full" : null}  ${breakpoint}  ${
        textColor ? "text-[#fff]" : "text-white"
      } py-3 px-2 xl:text-md bg-[#15803D]`}
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
