import React from "react";
import ShopBanner from "../Components/ShopBanner";
import CartPage from "../Components/CartPage";
import LowerBadge from "../Components/LowerBadge";

const Cart = () => {
  return (
    <>
      <ShopBanner breadCum="Cart" title="Cart" />
      <CartPage />
      <LowerBadge />
    </>
  );
};

export default Cart;
