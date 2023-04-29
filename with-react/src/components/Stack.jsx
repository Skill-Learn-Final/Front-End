import React from "react";

const Stack = ({ children, className, ...restProps }) => {
  return (
    <div className={`${className}`} {...restProps}>
      {children}
    </div>
  );
};

export default Stack;
