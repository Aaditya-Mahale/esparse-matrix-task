import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[5px]",
};
const variants = {
  fill: {
    orange_A200_01: "bg-orange-A200_01 text-black-900",
    deep_orange_600: "bg-deep_orange-600 shadow-xs text-white-A700",
    yellow_900_01: "bg-yellow-900_01 shadow-xs text-black-900",
    blue_gray_100: "bg-blue_gray-100 shadow-xs text-black-900",
    white_A700: "bg-white-A700 text-black-900",
  },
};
const sizes = {
  sm: "h-[45px] px-[18px] text-[32px]",
  xl: "h-[122px] px-[35px] text-[32px]",
  lg: "h-[72px] px-[35px] text-[32px]",
  xs: "h-[43px] px-[9px] text-xl",
  md: "h-[67px] pl-[15px] pr-6 text-[32px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "blue_gray_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xl", "lg", "xs", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["orange_A200_01", "deep_orange_600", "yellow_900_01", "blue_gray_100", "white_A700"]),
};

export { Button };
