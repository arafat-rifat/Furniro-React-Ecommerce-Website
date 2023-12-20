import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const BrowseTheRange = () => {
  return (
    <section className="mt-[90px]">
      <Container>
        <div>
          <h1 className="text-center text-[32px] font-bold text-[#333333]">
            Browse The Range
          </h1>
          <p className="text-center text-[20px] font-normal text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <Flex className="flex items-center gap-5 mt-12">
            <div className="flex flex-col items-center gap-5">
              <img
                src="assets/category1.png"
                alt="pic1"
                className="rounded-3xl"
              />
              <p className="text-2xl font-semibold text-[#333333]">Dining</p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <img
                src="assets/category2.png"
                alt="pic2"
                className="rounded-3xl"
              />
              <p className="text-2xl font-semibold text-[#333333]">Living</p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <img
                src="assets/category3.png"
                alt="pic3"
                className="rounded-3xl"
              />
              <p className="text-2xl font-semibold text-[#333333]">Bedroom</p>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default BrowseTheRange;
