import React from "react";
import Container from "./Container";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import ProductCart from "./productCart";
import Flex from "./Flex";

const RelatedProduct = () => {
  return (
    <section className="mt-[55px] mb-[104px]">
      <Container>
        <h1 className="text-[36px] font-medium text-[#3A3A3A] text-center">
          Related Product
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
              badgebg="bg-[#2EC1AC]"
              badge={true}
              title="New!!"
              description="Stylish cafe chair"
              heading="Syltherine"
              price="2.500.000"
            />
          </div>
        </Flex>

        <div className="flex justify-center">
          <Link to="/Shop">
            <CustomButton
              title="Show More"
              className="py-[12px] px-[80px] border border-solid border-[#B88E2F] text-[#B88E2F] mt-[32px]"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default RelatedProduct;
