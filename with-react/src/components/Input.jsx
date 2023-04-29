import ErrorMessage from "./ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillWhiteA70033: "bg-white_A700_33",
  OutlineGray300: "bg-white_A700 border border-gray_300 border-solid",
  srcFillWhiteA700: "bg-white_A700",
};
const shapes = {
  CustomBorderTL10:
    "rounded-bl-[10px] rounded-br-[0] rounded-tl-[10px] rounded-tr-[0]",
  RoundedBorder10: "rounded-radius10",
  RoundedBorder50: "rounded-[20px]",
  srcRoundedBorder10: "rounded-radius10",
};
const sizes = {
  sm: "md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px]",
  smNav: "md:p-[5px] p-[9px] sm:px-[15px] sm:py-[8px]",
  md: "sm:pb-[10px] md:pb-[13px] pb-[20px] sm:pt-[12px] md:pt-[15px] pt-[23px] md:px-[13px] sm:px-[15px] px-[20px]",
  smSrc: "md:p-[13px] p-[20px] sm:px-[15px] sm:py-[10px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "CustomBorderTL10",
    "RoundedBorder10",
    "srcRoundedBorder10",
    "RoundedBorder40",
  ]),
  variant: PropTypes.oneOf([
    "FillWhiteA70033",
    "OutlineGray300",
    "srcFillWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "CustomBorderTL10",
  variant: "FillWhiteA70033",
  size: "md",
};

export default Input;
