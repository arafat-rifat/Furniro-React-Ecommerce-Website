import React from "react";
import ProductHeader from "../Components/ProductHeader";
import ProductInformation from "../Components/ProductInformation";
import ProductDescription from "../Components/ProductDescription";
import RelatedProduct from "../Components/RelatedProduct";

const ProductDetails = () => {
  return (
    <>
      <ProductHeader />
      <ProductInformation />
      <ProductDescription />
      <RelatedProduct />
    </>
  );
};

export default ProductDetails;
