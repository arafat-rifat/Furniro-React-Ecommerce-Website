import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import ProductCart from "./productCart";
import CustomButton from "./CustomButton";

const OurProduct = () => {
  return (
    <section className="mt-[56px] mb-[70px]">
      <Container>
        <h1 className="text-[40px] font-bold text-[#3A3A3A] text-center">
          Our Products
        </h1>

        <Flex className="flex flex-wrap mt-8 gap-[32px]">
          <div className="max-w-[370px]">
            <ProductCart
              src="assets/product6.jpg"
              badge={true}
              badgebg="bg-[#E97171]"
              title="-30%"
              description="Stylish cafe chair"
              heading="Syltherine"
              price="2.500.000"
            />
          </div>
          <div className="max-w-[370px]">
            <ProductCart
              src="assets/product6.jpg"
              badge={true}
              badgebg="bg-[#E97171]"
              title="-30%"
              description="Stylish cafe chair"
              heading="Syltherine"
              price="2.500.000"
            />
          </div>
          <div className="max-w-[370px]">
            <ProductCart
              src="assets/product6.jpg"
              badgebg="bg-[#2EC1AC]"
              badge={true}
              title="New!!"
              description="Stylish cafe chair"
              heading="Syltherine"
              price="2.500.000"
            />
          </div>
          <div className="max-w-[370px]">
            <ProductCart
              src="assets/product6.jpg"
              badge={true}
              title="-50%"
              badgebg="bg-[#E97171]"
              description="Stylish cafe chair"
              heading="Syltherine"
              price="2.500.000"
            />
          </div>
          <div className="max-w-[370px]">
            <ProductCart
              src="assets/product6.jpg"
              badge={true}
              badgebg="bg-[#2EC1AC]"
              title="New"
              description="Stylish cafe chair"
              heading="Syltherine"
              price="2.500.000"
            />
          </div>
          <div className="max-w-[370px]">
            <ProductCart
              src="assets/product6.jpg"
              badgebg="bg-[#2EC1AC]"
              badge={true}
              title="New!!"
              description="Stylish cafe chair"
              heading="Syltherine"
              price="2.500.000"
            />
          </div>
          <div className="max-w-[370px]">
            <ProductCart
              src="assets/product6.jpg"
              badge={true}
              badgebg="bg-[#2EC1AC]"
              title="New"
              description="Stylish cafe chair"
              heading="Syltherine"
              price="2.500.000"
            />
          </div>
          <div className="max-w-[370px]">
            <ProductCart
              src="assets/product6.jpg"
              badge={true}
              title="-50%"
              badgebg="bg-[#E97171]"
              description="Stylish cafe chair"
              heading="Syltherine"
              price="2.500.000"
            />
          </div>
        </Flex>

        <div className="flex justify-center">
          <CustomButton
            title="Show More"
            className="py-[12px] px-[80px] border border-solid border-[#B88E2F] text-[#B88E2F] mt-[32px]"
          />
        </div>
      </Container>
    </section>
  );
};

export default OurProduct;
