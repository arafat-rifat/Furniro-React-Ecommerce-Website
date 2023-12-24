import React from "react";

const Badge = ({ title, bg }) => {
  console.log("🚀 ~ file: Badge.js:4 ~ Badge ~ bg:", bg);

  return (
    <span
      className={`${bg} text-white py-[12px] px-[5px] rounded-full absolute top-6 right-6`}
    >
      {title}
    </span>
  );
};

export default Badge;
