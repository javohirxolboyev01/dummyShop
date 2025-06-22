import { useProducts } from "@/api/useProducts";
import ShopHero from "@/components/ShopHero/ShopHero";
import Shopping from "@/components/shopProducts/shopProducts";
import React from "react";

const Shop = () => {
  const { getProducts } = useProducts();
  const { data } = getProducts;
  return (
    <div>
      <ShopHero />
      <Shopping data={data?.data?.products} />
    </div>
  );
};

export default Shop;
