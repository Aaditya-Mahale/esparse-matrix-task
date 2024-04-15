import React from "react";

const sizes = {
  xs: "text-[9px] font-medium",
  lg: "text-base font-medium",
  s: "text-[13px] font-medium",
  "2xl": "text-xl font-normal",
  "3xl": "text-2xl font-medium md:text-[22px]",
  "4xl": "text-4xl font-medium md:text-[34px] sm:text-[32px]",
  xl: "text-lg font-medium",
  md: "text-sm font-medium",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
