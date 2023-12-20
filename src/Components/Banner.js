import React from "react";
import Container from "./Container";
import CustomButton from "./CustomButton";

const Banner = () => {
  return (
    <section
      class="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: "url('assets/banner.jpg')" }}
    >
      <Container>
        <div className="flex flex-col justify-start gap-2 px-10 py-16 bg-[#FFF3E3] ml-[700px] absolute right-[-30px] top-[350px] rounded-[10px]">
          <p className="text-base font-semibold text-[#333333]">New Arrival</p>
          <h1 className="text-[52px] font-bold leading-[65px] text-[#B88E2F]">
            Discover Our
            <br /> New Collection
          </h1>
          <p className="text-[18px] font-medium text-[#333333]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            <br />
            elit tellus, luctus nec ullamcorper mattis.
          </p>
          <div>
            <CustomButton
              className="py-[25px] px-[70px] text-base font-bold text-white bg-[#B88E2F] mt-[46px]"
              title="BUY NOW"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
