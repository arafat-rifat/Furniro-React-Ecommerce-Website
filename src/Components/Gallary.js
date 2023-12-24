import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const Gallary = () => {
  return (
    <section className="mb-[50px]">
      <Container>
        <p className="text-xl font-semibold text-[#616161] text-center">
          Share your setup with
        </p>
        <h2 className="text-[40px] font-bold text-[#3A3A3A] text-center">
          #FuniroFurniture
        </h2>
        <Flex className="flex justify-center items-center gap-4">
          <Flex className="flex flex-col gap-4">
            <div className="w-[450px]">
              <img src="assets/gallary1.png" alt="pic" />
            </div>
            <Flex className="flex gap-4 items-center">
              <div className="w-96">
                <img src="assets/gallary2.png" alt="pic" />
              </div>
              <div className="w-96">
                <img src="assets/gallary2.png" alt="pic" />
              </div>
            </Flex>
          </Flex>
          <div>
            <div className="w-72">
              {" "}
              <img src="assets/gallary2.png" alt="pic" />
            </div>
          </div>
          <Flex className="flex flex-col gap-4">
            <div className="w-[450px]">
              <img src="assets/gallary1.png" alt="pic" />
            </div>
            <Flex className="flex  gap-4">
              <div className=" w-96">
                <img src="assets/gallary2.png" alt="pic" />
              </div>
              <div className="w-96">
                <img src="assets/gallary2.png" alt="pic" />
              </div>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Gallary;
