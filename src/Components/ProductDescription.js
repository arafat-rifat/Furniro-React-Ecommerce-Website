import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const ProductDescription = () => {
  return (
    <section className="border-b border-solid border-[#D9D9D9]">
      <Container>
        <Flex className="flex justify-center  gap-[52px] text-[24px] font-medium mt-[48px]">
          <h2>Description</h2>
          <h2 className="text-[#9F9F9F]">Additional Information</h2>
          <h2 className="text-[#9F9F9F]">Reviews [5]</h2>
        </Flex>
        <Flex className="flex flex-col text-center gap-[30px] mt-[32px] text-base text-[#9F9F9F] font-normal">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </Flex>
        <Flex className="flex justify-center gap-[30px] mt-[16px] mb-[60px]">
          <img
            src="assets/ProductDescription.png"
            alt="pic"
            className="max-w-[605px] max-h-[348px
            ] bg-[#F9F1E7] rounded-[10px] pb-[50px]"
          />
          <img
            src="assets/ProductDescription.png"
            alt="pic"
            className="max-w-[605px] max-h-[348px
            ] bg-[#F9F1E7]  rounded-[10px] pb-[50px] "
          />
        </Flex>
      </Container>
    </section>
  );
};

export default ProductDescription;
