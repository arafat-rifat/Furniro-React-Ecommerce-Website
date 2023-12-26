import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import ProductCart from "./productCart";
import { Link } from "react-router-dom";

const ShopProduct = () => {
  return (
    <section className="mt-[46px]">
      <Container>
        <Flex className="flex flex-wrap justify-center items-center gap-[32px]">
          <div className="max-w-[370px]">
            <Link to="/ProductDetails">
              <ProductCart
                src="assets/product6.jpg"
                badge={true}
                badgebg="bg-[#E97171]"
                title="-30%"
                description="Stylish cafe chair"
                heading="Syltherine"
                price="2.500.000"
              />
            </Link>
          </div>
          <div className="max-w-[370px]">
            <Link to="/ProductDetails">
              <ProductCart
                src="assets/product6.jpg"
                badge={true}
                badgebg="bg-[#E97171]"
                title="-30%"
                description="Stylish cafe chair"
                heading="Syltherine"
                price="2.500.000"
              />
            </Link>
          </div>
          <div className="max-w-[370px]">
            <Link to="/ProductDetails">
              <ProductCart
                src="assets/product6.jpg"
                badge={true}
                badgebg="bg-[#E97171]"
                title="-30%"
                description="Stylish cafe chair"
                heading="Syltherine"
                price="2.500.000"
              />
            </Link>
          </div>
          <div className="max-w-[370px]">
            <Link to="/ProductDetails">
              <ProductCart
                src="assets/product6.jpg"
                badge={true}
                badgebg="bg-[#E97171]"
                title="-30%"
                description="Stylish cafe chair"
                heading="Syltherine"
                price="2.500.000"
              />
            </Link>
          </div>
          <div className="max-w-[370px]">
            <Link to="/ProductDetails">
              <ProductCart
                src="assets/product6.jpg"
                badge={true}
                badgebg="bg-[#E97171]"
                title="-30%"
                description="Stylish cafe chair"
                heading="Syltherine"
                price="2.500.000"
              />
            </Link>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default ShopProduct;
