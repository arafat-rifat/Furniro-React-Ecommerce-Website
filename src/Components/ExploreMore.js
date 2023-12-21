import React from "react";
import Container from "./Container";
import CustomButton from "./CustomButton";
import Slider from "./Slider";
import { FaArrowRightLong } from "react-icons/fa6";
import Flex from "./Flex";

const ExploreMore = () => {
  return (
    <section className="bg-[#FCF8F3]">
      <Container>
        <Flex className="flex gap-[42px] pl-[100px] py-[44px]">
          <Flex className="flex flex-col py-[180px]">
            <h1 className="text-[40px] font-bold text-[#3A3A3A]">
              50+ Beautiful rooms <br />
              inspiration
            </h1>
            <p className="text-base font-medium text-[#616161]">
              Our designer already made a lot of beautiful
              <br /> prototipe of rooms that inspire you
            </p>
            <div>
              <CustomButton
                className="py-3 px-9 bg-[#B88E2F] text-white text-base font-semibold mt-[25px]"
                title="Explore More"
              />
            </div>
          </Flex>
          {/* Middle Part */}
          <div className="relative">
            <div className="ml-[42px] max-w-[404px]">
              <img src="assets/ExploreImg.png" alt="explore" />

              <Flex className="flex flex-col p-8 bg-white opacity-75 absolute bottom-14 left-24">
                <p className="text-[#616161] font-medium text-base">
                  01 -Bed Room
                </p>
                <h2 className="text-[28px] text-[#3A3A3A] font-semibold">
                  Inner Peace
                </h2>
              </Flex>
              <button className="p-3 bg-[#B88E2F] text-white absolute right-24   bottom-14">
                <FaArrowRightLong />
              </button>
            </div>
          </div>
          {/* Slider Part */}
          <div className="max-w-[372px]">
            <Slider />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default ExploreMore;
