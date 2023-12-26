import React from "react";
import ShopBanner from "../Components/ShopBanner";
import LowerBadge from "../Components/LowerBadge";
import CheckOutComponent from "../Components/CheckOutComponent";

const CheckOut = () => {
  return (
    <>
      <ShopBanner breadCum="Checkout" title="Checkout" />
      <CheckOutComponent />
      <LowerBadge />
    </>
  );
};

export default CheckOut;
