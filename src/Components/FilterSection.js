import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { RiFilter3Line } from "react-icons/ri";

const FilterSection = () => {
  return (
    <section className="bg-[#F9F1E7] mt-1">
      <Container>
        <Flex className="flex justify-between items-center py-[35px]">
          <Flex className="flex items-center gap-[12px] text-xl font-normal">
            <RiFilter3Line />
            <p>Filter</p>
            <p className="px-[34px] border-l border-solid border-[#9F9F9F]">
              Showing 1-16 of 32 results
            </p>
          </Flex>
          <Flex className="flex items-center justify-center gap-[17px]">
            <label htmlFor="cars">Shorted By</label>
            <select name="Furnitures" id="furnitures" className="outline-none">
              <option value="Bed">Bed Set</option>
              <option value="Soofa">Soofa Set</option>
              <option value="Dining">Dining Set</option>
            </select>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default FilterSection;
