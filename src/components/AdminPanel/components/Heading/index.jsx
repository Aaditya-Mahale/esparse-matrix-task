import React from "react";

const sizes = {
  "3xl": "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  "2xl": "text-3xl font-bold md:text-[28px] sm:text-[26px]",
  xl: "text-2xl font-semibold md:text-[22px]",
  "5xl": "text-4xl font-semibold md:text-[34px] sm:text-[32px]",
  "4xl": "text-[34px] font-semibold md:text-[32px] sm:text-3xl",
  s: "text-[13px] font-semibold",
  md: "text-sm font-semibold",
  "6xl": "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  xs: "text-[10px] font-semibold",
  lg: "text-xl font-semibold",
};

const Heading = ({ children, className = "", size = "xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-100_01 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
