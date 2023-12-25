import React from "react";
import Container from "./Container";

const ProductHeader = () => {
  return (
    <section className="bg-[#F9F1E7] mt-[14px]">
      <Container>
        <div>
          <p className="py-[38px] text-base font-normal">
            <span className="mr-[15px] text-[#9F9F9F]"> Home</span>>
            <span className="ml-[15px] mr-[15px] text-[#9F9F9F]"> Shop </span>>
            <span className="mx-[35px] text-xl">|</span>
            <span className="font-bold"> Asgaard Sofa</span>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ProductHeader;
