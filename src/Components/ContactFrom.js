import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import CustomButton from "./CustomButton";

const ContactFrom = () => {
  return (
    <section className="mt-[82px]">
      <Container>
        <Flex className="flex gap-[30px] justify-center items-baseline">
          <div className="flex flex-col gap-[40px] items-center px-[50px] pt-[58px]">
            <Flex className="flex justify-center items-center gap-[30px]">
              <FaLocationDot className="text-[24px]" />

              <div className="flex flex-col">
                <p className="text-[24px] font-medium">Address</p>
                <p className="text-base font-medium">
                  236 5th SE Avenue, New
                  <br /> York NY10000, United States
                </p>
              </div>
            </Flex>
            <Flex className="flex justify-center items-center gap-[30px]">
              <IoCall className="text-[24px]" />

              <div className="flex flex-col">
                <p className="text-[24px] font-medium">Phone</p>
                <p className="text-base font-medium">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </Flex>
            <Flex className="flex justify-center items-center gap-[30px]">
              <IoTime className="text-[24px]" />

              <div className="flex flex-col">
                <p className="text-[24px] font-medium">Working Time</p>
                <p className="text-base font-medium">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </Flex>
          </div>
          {/* Second part */}
          <div className="flex flex-col items-center justify-center px-[52px] gap-9">
            <div className="flex flex-col items-start gap-[22px]">
              <label className="text-base font-medium">Your Name</label>
              <input
                placeholder="Abc"
                type="text"
                className="pl-[30px] pr-[400px] py-[25px] outline-none border border-solid border-[#9F9F9F] rounded-[10px]"
              />
            </div>
            <div className="flex flex-col items-start gap-[22px]">
              <label className="text-base font-medium">Email address</label>
              <input
                placeholder="Abc@def.com"
                type="email"
                className="pl-[30px] pr-[400px] py-[25px] outline-none border border-solid border-[#9F9F9F] rounded-[10px]"
              />
            </div>
            <div className="flex flex-col items-start gap-[22px]">
              <label className="text-base font-medium">Subject</label>
              <input
                placeholder="This Is an optional"
                type="text"
                className="pl-[30px] pr-[400px] py-[25px] outline-none border border-solid border-[#9F9F9F] rounded-[10px]"
              />
            </div>
            <div className="flex flex-col items-start gap-[22px] mb-[50px]">
              <label className="text-base font-medium">Message</label>
              <input
                placeholder="Hi! i’d like to ask about"
                type="text"
                className="pl-[30px] pr-[400px] py-[25px] outline-none border border-solid border-[#9F9F9F] rounded-[10px]"
              />
            </div>
            <div>
              <CustomButton
                title="Submit"
                className="px-[90px] py-[13px] bg-[#B88E2F] rounded-md border border-solid border-[#B88E2F] text-white"
              />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default ContactFrom;
