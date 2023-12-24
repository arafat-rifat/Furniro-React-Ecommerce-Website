import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const ContactHeading = () => {
  return (
    <section className="mt-[98px]">
      <Container>
        <h1 className="text-[36px] font-semibold text-[#000000] text-center">
          Get In Touch With Us
        </h1>
        <p className="text-base font-normal text-center text-[#9F9F9F] mt-[7px]">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us
          <br /> An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </Container>
    </section>
  );
};

export default ContactHeading;
