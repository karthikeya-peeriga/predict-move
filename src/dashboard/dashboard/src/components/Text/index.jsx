import React from "react";

const sizes = {
  xs: "text-[11px] font-medium",
  lg: "text-2xl font-medium md:text-[22px]",
  s: "text-sm font-normal",
  md: "text-base font-medium",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-100 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
