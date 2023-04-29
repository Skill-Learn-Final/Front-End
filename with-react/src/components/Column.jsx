import React from "react";

const Column = ({ children, className, ...restProps }) => {
  return (
    <div className={`${className} common-column`} {...restProps}>
      {children}
    </div>
  );
};

export default Column;
