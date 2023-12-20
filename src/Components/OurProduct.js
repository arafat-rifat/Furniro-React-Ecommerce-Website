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
        <Flex className="grid grid-cols-4 items-center mt-10 gap-[32px]">
          <ProductCart
            src="assets/product3.png"
            title="Syltherine"
            description="Stylish cafe chair"
            price="2.500.000"
          />
          <ProductCart
            src="assets/product3.png"
            title="Syltherine"
            description="Stylish cafe chair"
            price="2.500.000"
          />
          <ProductCart
            src="assets/product3.png"
            title="Syltherine"
            description="Stylish cafe chair"
            price="2.500.000"
          />
          <ProductCart
            src="assets/product3.png"
            title="Syltherine"
            description="Stylish cafe chair"
            price="2.500.000"
          />
          <ProductCart
            src="assets/product3.png"
            title="Syltherine"
            description="Stylish cafe chair"
            price="2.500.000"
          />
          <ProductCart
            src="assets/product3.png"
            title="Syltherine"
            description="Stylish cafe chair"
            price="2.500.000"
          />
          <ProductCart
            src="assets/product3.png"
            title="Syltherine"
            description="Stylish cafe chair"
            price="2.500.000"
          />
          <ProductCart
            src="assets/product3.png"
            title="Syltherine"
            description="Stylish cafe chair"
            price="2.500.000"
          />
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
