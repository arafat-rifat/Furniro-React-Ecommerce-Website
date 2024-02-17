import React from "react";
import Flex from "../Components/Flex";
import { Link } from "react-router-dom";

const ShopBanner = ({ breadCum, title }) => {
  return (
    <section
      className="bg-cover bg-center h-[316px]"
      style={{ backgroundImage: "url('assets/Banner2.jpg')" }}
    >
      <div className="py-[121px] backdrop-blur-sm">
        <Flex className="flex flex-col items-center text-center">
          <h2 className="text-[48px] font-medium">{title}</h2>
          <span className="text-base font-medium">
            <Link to="/"> Home</Link>
            <span className="ml-2">></span>
            <span className="text-base font-light text-[#000000] ml-2">
              {breadCum}
            </span>
          </span>
        </Flex>
      </div>
    </section>
  );
};

export default ShopBanner;
