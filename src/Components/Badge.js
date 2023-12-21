import React from "react";

const Badge = ({ title, bg }) => {
  return (
    <span
      className={`${bg} text-white py-[12px] px-[5px] rounded-full absolute top-6 right-6`}
    >
      {title}
    </span>
  );
};

export default Badge;
