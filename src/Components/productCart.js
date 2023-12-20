import React from "react";
import Flex from "./Flex";

const productCart = ({ title, description, price, src }) => {
  return (
    <Flex className="flex flex-col">
      <img src={src} alt="pic" />

      <div className="p-4 text-start flex flex-col gap-2">
        <h2 className="text-2xl font-semibold leading-6">{title}</h2>
        <p className="text-base font-medium leading-6 text-[#898989]">
          {description}
        </p>
        <span className="text-xl font-semibold text-[#3A3A3A]">RP {price}</span>
      </div>
    </Flex>
  );
};

export default productCart;
