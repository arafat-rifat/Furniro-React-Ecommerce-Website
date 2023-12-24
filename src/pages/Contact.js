import React from "react";
import ShopBanner from "../Components/ShopBanner";
import LowerBadge from "../Components/LowerBadge";
import ContactFrom from "../Components/ContactFrom";
import ContactHeading from "../Components/ContactHeading";

const Contact = () => {
  return (
    <>
      <ShopBanner title="Contact" breadCum="contact" />
      <ContactHeading />
      <ContactFrom />
      <LowerBadge />
    </>
  );
};

export default Contact;
