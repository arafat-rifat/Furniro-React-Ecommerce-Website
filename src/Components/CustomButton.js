import React from "react";

const CustomButton = ({ className, title, href }) => {
  return <button className={className}>{title}</button>;
};

export default CustomButton;
