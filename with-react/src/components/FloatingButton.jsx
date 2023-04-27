import React from "react";

const FloatingButton = ({ children, className, ...restProps }) => {
  return (
    <button className={`${className}`} {...restProps}>
      {children}
    </button>
  );
};

export default FloatingButton;
