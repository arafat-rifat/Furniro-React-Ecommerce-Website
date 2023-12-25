import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import CustomButton from "./CustomButton";
import { MdDelete } from "react-icons/md";

const CartPage = () => {
  return (
    <section className="mt-[72px]">
      <Container>
        <Flex className="flex items-baseline justify-center gap-[30px] ">
          <div>
            <table>
              <thead className="bg-[#F9F1E7]">
                <tr>
                  <th className="py-[15px] pl-[115px] text-base font-medium">
                    Product
                  </th>
                  <th className="py-[15px] pl-[115px] text-base font-medium">
                    Price
                  </th>
                  <th className="py-[15px] pl-[115px] text-base font-medium">
                    Quantity
                  </th>
                  <th className="py-[15px] px-[115px] text-base font-medium">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-[15px] pl-[115px] flex items-center gap-[35px]">
                    <div className="w-[111px]">
                      <img
                        src="assets/CartImage.png"
                        alt="pic"
                        className="w-full"
                      />
                    </div>
                    <p className="text-base font-normal text-[#9F9F9F]">
                      Asgaurd Sofa
                    </p>
                  </td>
                  <td className="py-[15px] pl-[115px] text-base font-normal text-[#9F9F9F]">
                    Rs. 250,000.00
                  </td>
                  <td className="py-[15px] pl-[115px]">
                    <span className="p-1 px-3 rounded-[5px] border border-solid border-[#9F9F9F] text-base font-normal">
                      1
                    </span>
                  </td>
                  <td className="py-[15px] pl-[56px] text-base font-normal">
                    Rs. 250,000.00
                  </td>

                  <td className=" text-2xl font-normal h-[28px] w-[28px] text-[#B88E2F]">
                    <MdDelete />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-[#F9F1E7]">
            <h1 className="text-center px-24 pb-14 pt-4 text-[32px] font-semibold">
              Cart Totals
            </h1>
            <div className="px-[75px] flex flex-col gap-[30px]">
              <Flex className="flex justify-between items-center gap-[62px]">
                <p className="text-base font-medium">Subtotal</p>
                <p className="text-base font-medium text-[#9F9F9F]">
                  Rs. 250,000.00
                </p>
              </Flex>
              <Flex className="flex justify-between items-center gap-[62px]">
                <p className="text-base font-medium">Total</p>
                <p className="text-xl font-medium text-[#B88E2F]">
                  Rs. 250,000.00
                </p>
              </Flex>
            </div>
            <div className="flex justify-center items-center my-[42px] px-[85px]">
              <CustomButton
                title="Check Out"
                className="border border-solid border-[#000000] py-[15px] px-[58px] rounded-[15px] text-xl font-normal"
              />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default CartPage;
