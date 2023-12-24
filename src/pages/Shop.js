import React from "react";
import ShopBanner from "../Components/ShopBanner";
import FilterSection from "../Components/FilterSection";
import ShopProduct from "../Components/ShopProduct";
import LowerBadge from "../Components/LowerBadge";

const Shop = () => {
  return (
    <>
      <ShopBanner title="Shop" breadCum="Shop" />
      <FilterSection />
      <ShopProduct />
      <LowerBadge />
    </>
  );
};

export default Shop;
