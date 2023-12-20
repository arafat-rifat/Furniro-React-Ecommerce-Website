import React from "react";
import Container from "./Container";
import List from "./List";
import ListItem from "./ListItem";
import Flex from "./Flex";

const Footer = () => {
  return (
    <footer className="sticky top-full border-t border-solid border-[#0000002B]">
      <Container>
        <div className="grid grid-cols-2  lg:grid-cols-4 py-12 gap-[100px]">
          {/* branding */}
          <div className="flex flex-col gap-[50px]">
            <h2 className="text-2xl font-bold">Funiro.</h2>
            <p className="text-base font-normal text-[#9F9F9F]">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>
          {/* links */}
          <div>
            <p className="text-base text-[#9F9F9F]">Links</p>
            <List className="flex flex-col gap-[46px] mt-[55px]">
              <ListItem
                href="#"
                className="text-base font-medium"
                itemname="Home"
              />
              <ListItem
                href="#"
                className="text-base font-medium"
                itemname="Shop"
              />
              <ListItem
                href="#"
                className="text-base font-medium"
                itemname="About"
              />
              <ListItem
                href="#"
                className="text-base font-medium"
                itemname="Contact"
              />
            </List>
          </div>
          {/* Help coloum */}
          <div>
            <p className="text-base text-[#9F9F9F]">Help</p>
            <List className="flex flex-col gap-[46px] mt-[55px]">
              <ListItem
                href="#"
                className="text-base font-medium"
                itemname="Payment Options"
              />
              <ListItem
                href="#"
                className="text-base font-medium"
                itemname="Returns"
              />
              <ListItem
                href="#"
                className="text-base font-medium"
                itemname="Privacy Policies"
              />
            </List>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-base text-[#9F9F9F]">Newsletter</p>
            <Flex className="flex items-center gap-[11px] mt-[55px]">
              <input
                placeholder="Enter Your Email Adress"
                className="border-b border-solid border-[#000000] outline-none"
              />
              <button className="border-b border-solid border-[#000000] text-sm font-medium py-[2px]">
                SUBSCRIBE
              </button>
            </Flex>
          </div>
        </div>
        <p className="py-[35px] border-t border-solid border-[#D9D9D9] text-base font-normal">
          2023 furino. All rights reverved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
