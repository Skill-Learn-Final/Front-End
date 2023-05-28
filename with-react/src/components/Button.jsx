import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  RoundedBorder10: "rounded-radius10",
  CustomBorderLR10:
    "rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px]",
  icbRoundedBorder6: "rounded-radius6",
  icbCircleBorder30: "rounded-radius30",
  icbCircleBorder9: "rounded-radius9",
};
const variants = {
  OutlineRed300: "border border-red_300 border-solid text-red_300",
  OutlineGray300:
    "bg-white_A700 border border-gray_300 border-solid text-gray_700",
  FillRed300: "bg-red_300 text-white_A700",
  FillWhiteA700: "bg-white_A700",
  FillGray200: "bg-gray_200 text-gray_901",
  FillOrange200: "bg-orange_200",
  FillBlack900: "bg-black_900 text-white_A700",
  icbFillRed53: "bg-red_53",
  icbFillDeeporange400: "bg-deep_orange_400",
  icbFillRed300: "bg-red_300",
  icbFillWhiteA700: "bg-white_A700",
  OutlineGray500:
    "bg-white_A700 border border-gray_600 border-solid text-black",
  NavyBlue: "bg-navy_blue text-white_A700",
  DarkBlueBlack: "bg-dark_blueblack text-white_A700",
};
const sizes = {
  sm: "p-[12px] sm:p-[6px] md:p-[8px]",
  md: "md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px]",
  lg: "md:p-[13px] p-[20px] sm:px-[15px] sm:py-[10px]",
  smIcn: "p-[4px]",
  mdIcn: "p-[10px] sm:p-[5px] md:p-[6px]",
  lgIcn: "p-[13px] sm:p-[6px] md:p-[8px]",
  xlIcn: "md:p-[12px] p-[18px] sm:px-[15px] sm:py-[9px]",
  "2xlIcn": "md:p-[15px] p-[22px] sm:px-[15px] sm:py-[11px]",
  mdNavIcn: "p-[10px] sm:p-[5px] md:p-[6px]",
};
const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder5",
    "RoundedBorder10",
    "CustomBorderLR10",
    "icbRoundedBorder6",
    "icbCircleBorder30",
    "icbCircleBorder9",
  ]),
  variant: PropTypes.oneOf([
    "OutlineRed300",
    "OutlineGray300",
    "FillRed300",
    "FillWhiteA700",
    "FillGray200",
    "FillOrange200",
    "FillBlack900",
    "icbFillRed53",
    "icbFillDeeporange400",
    "icbFillRed300",
    "icbFillWhiteA700",
    "NavyBlue",
    "DarkBlueBlack",
    "OutlineGray500",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
    "mdNavIcn",
  ]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder10",
  variant: "FillRed300",
  size: "",
};

export default Button;
