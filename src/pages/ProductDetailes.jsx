import { useProducts } from "@/api/useProducts";
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailes = () => {
  const { id } = useParams();
  console.log(id);

  // const { getProduct } = useProducts();
  // const { data } = getProduct;
  // console.log(data);

  return <div>ProductDetailes</div>;
};

export default ProductDetailes;
