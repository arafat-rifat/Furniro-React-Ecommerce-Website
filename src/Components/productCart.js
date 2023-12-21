import React from "react";
import Badge from "./Badge";
import Flex from "./Flex";
import CustomButton from "./CustomButton";
import { IoMdShare } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const productCart = ({
  badge,
  badgebg,
  src,
  title,
  description,
  price,
  heading,
}) => {
  return (
    <div className="bg-[#F4F5F7]">
      <div className="relative overflow-y-hidden group">
        <img src={src} alt="product pic" />

        {badge && <Badge title={title} bg={badgebg} />}

        <div className="absolute bottom-[-100%] group-hover:bottom-0 ease-in duration-500 left-0 h-full w-full bg-black opacity-75">
          <Flex className="flex justify-center mt-[100px]">
            <CustomButton
              className="text-[#B88E2F] text-base font-semibold px-[52px] py-[12px] bg-[#FFFFFF]"
              title="Add to cart"
            />
          </Flex>
          <Flex className="flex justify-center gap-4 mt-[24px]">
            <Flex className="flex items-center gap-1">
              <IoMdShare className="text-white text-base font-semibold" />
              <p className="text-white text-base font-semibold">Share</p>
            </Flex>
            <Flex className="flex items-center gap-1">
              <MdOutlineCompareArrows className="text-white text-base font-semibold" />
              <p className="text-white text-base font-semibold">Compare</p>
            </Flex>
            <Flex className="flex items-center gap-1">
              <FaRegHeart className="text-white text-base font-semibold" />
              <p className="text-white text-base font-semibold">Like</p>
            </Flex>
          </Flex>
        </div>
      </div>

      <div className="p-4 text-start flex flex-col gap-2">
        <h2 className="text-2xl font-semibold leading-6">{heading}</h2>
        <p className="text-base font-medium leading-6 text-[#898989]">
          {description}
        </p>
        <span className="text-xl font-semibold text-[#3A3A3A]">RP {price}</span>
      </div>
    </div>
  );
};

export default productCart;
