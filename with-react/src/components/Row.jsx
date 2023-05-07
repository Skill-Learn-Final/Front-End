import React from "react";

const Row = ({ children, className, ...restProps }) => {
  return (
    <div className={`${className} common-row`} {...restProps}>
      {children}
    </div>
  );
};

export default Row;
