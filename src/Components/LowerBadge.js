import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const LowerBadge = () => {
  return (
    <section className="bg-[#FAF3EA] mt-[85px]">
      <Container>
        <Flex className="flex justify-center items-center gap-[150px] py-[100px]">
          <Flex className="flex items-center gap-[10px]">
            <img src="assets/trophy 1.svg" alt="trophy" />
            <div>
              <h3 className="text-[25px] font-semibold text-[#242424]">
                High Quality
              </h3>
              <p className="text-[#898989] text-[20px] font-medium">
                crafted from top materials
              </p>
            </div>
          </Flex>
          <Flex className="flex items-center gap-[10px]">
            <img src="assets/guarantee.svg" alt="Wranty" />
            <div>
              <h3 className="text-[25px] font-semibold text-[#242424]">
                Warranty Protection
              </h3>
              <p className="text-[#898989] text-[20px] font-medium">
                Over 2 years
              </p>
            </div>
          </Flex>
          <Flex className="flex items-center gap-[10px]">
            <img src="assets/shipping.svg" alt="trophy" />
            <div>
              <h3 className="text-[25px] font-semibold text-[#242424]">
                Free Shipping
              </h3>
              <p className="text-[#898989] text-[20px] font-medium">
                Order over 150 $
              </p>
            </div>
          </Flex>
          <Flex className="flex items-center gap-[10px]">
            <img src="assets/customer-support.svg" alt="trophy" />
            <div>
              <h3 className="text-[25px] font-semibold text-[#242424]">
                24 / 7 Support
              </h3>
              <p className="text-[#898989] text-[20px] font-medium">
                Dedicated support
              </p>
            </div>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default LowerBadge;
