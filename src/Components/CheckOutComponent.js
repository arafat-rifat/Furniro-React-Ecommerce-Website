import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import CustomButton from "./CustomButton";

const CheckOutComponent = () => {
  return (
    <section className="mt-[63px]">
      <Container>
        <Flex className="flex items-baseline gap-[26px]">
          {/* Billing Details */}
          <div className="px-[80px] py-[35px]">
            <h1 className="text-[36px] font-semibold">Billing details</h1>
            <form className="mt-[36px] flex flex-col gap-[36px]">
              <Flex className="flex gap-[31px]">
                <div className="flex flex-col gap-[22px]">
                  <label>First Name</label>
                  <input className="py-[25px] px-[10px] outline-none border border-solid border-black rounded-[10px]" />
                </div>
                <div className="flex flex-col gap-[22px]">
                  <label>Last Name</label>
                  <input className="py-[25px] px-[10px] outline-none border border-solid border-black rounded-[10px]" />
                </div>
              </Flex>
              <div className="flex flex-col gap-[22px]">
                <label>Company Name</label>
                <input className="px-[30px] py-[25px] outline-none border border-solid border-black rounded-[10px]" />
              </div>
              <div className="flex flex-col gap-[22px]">
                <label>Country / Region</label>
                <input className="px-[30px] py-[25px] outline-none border border-solid border-black rounded-[10px]" />
              </div>
              <div className="flex flex-col gap-[22px]">
                <label>Street address</label>
                <input className="px-[30px] py-[25px] outline-none border border-solid border-black rounded-[10px]" />
              </div>
              <div className="flex flex-col gap-[22px]">
                <label>Town / City</label>
                <input className="px-[30px] py-[25px] outline-none border border-solid border-black rounded-[10px]" />
              </div>
              <div className="flex flex-col gap-[22px]">
                <label>ZIP code</label>
                <input className="px-[30px] py-[25px] outline-none border border-solid border-black rounded-[10px]" />
              </div>
              <div className="flex flex-col gap-[22px]">
                <label>Phone</label>
                <input
                  className="px-[30px] py-[25px] outline-none border border-solid border-black rounded-[10px]"
                  type="number"
                />
              </div>
              <div className="flex flex-col gap-[22px]">
                <label>Email address</label>
                <input
                  className="px-[30px] py-[25px] outline-none border border-solid border-black rounded-[10px]"
                  type="email"
                />
              </div>
            </form>
          </div>
          {/* Product Subtotal */}
          <div className="px-[38px] py-[80px]">
            <Flex className="flex flex-col gap-[14px] pb-[40px] border-b border-solid border-[#D9D9D9]">
              <Flex className="flex items-center gap-[336px]">
                <h3 className="text-2xl font-medium">Product</h3>
                <h3 className="text-2xl font-medium">Subtotal</h3>
              </Flex>
              <Flex className="flex items-center gap-[336px]">
                <p className="text-base font-normal text-[#9F9F9F]">
                  Asgaard sofa
                </p>
                <p className="text-base  font-normal">Rs. 250,000.00</p>
              </Flex>
              <Flex className="flex items-center gap-[400px]">
                <p className="text-base font-normal">total</p>
                <p className="text-base  font-normal">Rs. 250,000.00</p>
              </Flex>

              <Flex className="flex items-center gap-[336px]">
                <p className="text-base font-normal">Subtotal</p>
                <p className=" text-2xl font-bold text-[#B88E2F]">
                  Rs. 250,000.00
                </p>
              </Flex>
            </Flex>
            <div className="mt-[22px]">
              <Flex className="flex flex-col gap-[11px]">
                <h3 className="text-base font-normal">Direct Bank Transfer</h3>
                <p className="text-base font-light text-[#9F9F9F]">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </Flex>
              <Flex className="flex flex-col gap-[11px] my-[25px]">
                <p className="text-base text-[#9F9F9F]">Direct Bank Transfer</p>
                <p className="text-base text-[#9F9F9F]">Cash On Delivery</p>
              </Flex>
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <span className="font-bold">privacy policy</span>.
              </p>

              <div className="flex justify-center mt-[40px]">
                <CustomButton
                  className="px-[100px] py-[17px] rounded-[15px] border border-solid border-black"
                  title="Place order"
                />
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default CheckOutComponent;
