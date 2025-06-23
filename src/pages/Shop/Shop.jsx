import { useProducts } from "@/api/useProducts";
import FaetureList from "@/components/featureList/FaetureList";
import ShopHero from "@/components/ShopHero/ShopHero";
import Shopping from "@/components/shopProducts/shopProducts";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Shop = () => {
  const { getProducts } = useProducts();
  // const [currentPage, setCurrentPage] = useState(1);
  const [params, setParams] = useSearchParams();

  const page = params.get("products") || 1;
  console.log(page);

  const { data } = getProducts({
    limit: 16,
    skip: 16 * (page - 1),
  });

  const handlePageChange = (page) => {
    params.set("products", page);
    setParams(params);
  };

  return (
    <div>
      <ShopHero
        total={data?.data?.total}
        currentPage={page}
        onPageChange={(page) => handlePageChange(page)}
      />
      <Shopping
        data={data?.data?.products}
        total={data?.data?.total}
        currentPage={page}
        onPageChange={(page) => handlePageChange(page)}
      />
      <FaetureList />
    </div>
  );
};

export default Shop;
