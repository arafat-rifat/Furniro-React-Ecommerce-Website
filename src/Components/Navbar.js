import React from "react";
import Container from "./Container";
import List from "./List";
import ListItem from "./ListItem";
import { FaUser, FaRegHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import Flex from "./Flex";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-between items-center py-8">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-[50px]">
              <img src="assets/logo.png" alt="logo" className="w-full" />
            </div>
            <h1 className="text-4xl font-bold ">Furniro</h1>
          </div>

          {/* MenuBar */}
          <FaBars className="block lg:hidden ml-auto" />
          <div>
            <List className="flex justify-between items-center gap-[75px] text-base font-medium">
              <ListItem className="font-bold" itemname="Home" />
              <ListItem className="font-bold" itemname="Shop" to="/Shop" />
              <ListItem className="font-bold" itemname="About" />
              <ListItem
                className="font-bold"
                itemname="Contact"
                to="/Contact"
              />
            </List>
          </div>

          {/* Icon Bar */}
          <Flex className="lg:flex items-center text-[28px] gap-[45px] hidden md:block">
            <FaUser />
            <IoSearchSharp />
            <FaRegHeart />
            <GrCart />
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
