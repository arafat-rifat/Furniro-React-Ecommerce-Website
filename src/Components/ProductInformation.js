import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import CustomButton from "./CustomButton";
const ProductInformation = () => {
  return (
    <section className="border-b border-solid border-[#D9D9D9]">
      <Container>
        <Flex className="flex items-start py-[35px] px-[95px] gap-[106px] mb-[50px]">
          {/* Details Picture */}
          <div>
            <Flex className="flex gap-[35px] items-center">
              <div className="flex flex-col gap-[27px]">
                <img
                  src="assets/Outdoor sofa set_2 1.png"
                  alt="pic1"
                  className="bg-[#F9F1E7] pb-4 pt-[7px] px-1 rounded-[10px] max-w-[83px] max-h-[55px]"
                />
                <img
                  src="assets/Outdoor sofa set_2 1.png"
                  alt="pic1"
                  className="bg-[#F9F1E7] pb-4 pt-[7px] px-1 rounded-[10px] max-w-[83px] max-h-[55px]"
                />
                <img
                  src="assets/Outdoor sofa set_2 1.png"
                  alt="pic1"
                  className="bg-[#F9F1E7] pb-4 pt-[7px] px-1 rounded-[10px] max-w-[83px] max-h-[55px]"
                />
                <img
                  src="assets/Outdoor sofa set_2 1.png"
                  alt="pic1"
                  className="bg-[#F9F1E7] pb-4 pt-[7px] px-1 rounded-[10px] max-w-[83px] max-h-[55px]"
                />
              </div>
              {/* this is for big image */}
              <div className="bg-[#F9F1E7] max-w-[423px] max-h-[500px] rounded-[10px]">
                <img
                  src="assets/CartDetails.png"
                  alt="bigOne"
                  className="pt-[78px] pb-[31px]"
                />
              </div>
            </Flex>
          </div>
          {/* Details Information */}
          <div>
            {/* Details */}
            <div className="flex flex-col leading-none gap-[22px]">
              <h1 className="text-[42px] font-normal">Asgaard Sofa</h1>
              <p className="text-[24px] font-medium text-[#9F9F9F]">
                Rs. 250,000.00
              </p>
              <p className="text-[13px] font-normal">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              {/* for declearing size */}
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-normal text-[#9F9F9F]">Size</p>
                <Flex className="flex gap-3 items-center">
                  <p className="px-3 py-[5px] bg-[#B88E2F] rounded-[5px] text-white text-[13px]">
                    L
                  </p>
                  <p className="px-3 py-[5px] bg-[#F9F1E7] rounded-[5px] text-[13px]">
                    XL
                  </p>
                  <p className="px-3 py-[5px] bg-[#F9F1E7] rounded-[5px] text-[13px]">
                    Xs
                  </p>
                </Flex>

                {/* This part for choosing Color */}
                <p className="text-[14px] font-normal text-[#9F9F9F]">Color</p>
                <Flex className="flex gap-3 items-center">
                  <span className="px-3 py-[5px] text-[#816DFA] bg-[#816DFA] rounded-full">
                    .
                  </span>
                  <span className="px-3 py-[5px] text-[#000000] bg-[#000000] rounded-full">
                    .
                  </span>
                  <span className="px-3 py-[5px] text-[#B88E2F] bg-[#B88E2F] rounded-full">
                    .
                  </span>
                </Flex>
              </div>
            </div>
            <Flex className="flex items-center gap-[18px] mt-[32px] border-b border-solid border-[#D9D9D9] pb-[60px]">
              <Flex className="flex gap-[35px] py-5 px-[15px] rounded-[10px] border border-solid border-black">
                <button className="text-xl">-</button>
                <p className="text-xl">1</p>
                <button className="text-xl">+</button>
              </Flex>
              <CustomButton
                title="Add To Cart"
                className="text-[20px] py-[17px] px-[48px] border border-solid border-[#000000] rounded-[15px]"
              />
            </Flex>
            {/* short Details */}
            <div className="flex flex-col items-start gap-[12px] mt-[40px]">
              <p className="text-base font-normal text-[#9F9F9F]">
                SKU : SS001
              </p>
              <p className="text-base font-normal text-[#9F9F9F]">
                Category : Sofas
              </p>
              <p className="text-base font-normal text-[#9F9F9F]">
                Tags : Sofa, Chair, Home, Shop
              </p>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default ProductInformation;
