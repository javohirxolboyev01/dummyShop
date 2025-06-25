import React from "react";
import { useProducts } from "@/api/useProducts";
import FaetureList from "@/components/featureList/FaetureList";
import Products from "@/components/products/Products";
import { Pagination } from "antd";
import HeroShop from "@/assets/hero/HeroShop.svg";

import { useSearchParams } from "react-router-dom";
import Heros from "@/components/ReusableHero/Heros";
import BottomHero from "@/components/BottomHero/BottomHero";

const Shop = () => {
  const { getProduct } = useProducts();

  const [params, setParams] = useSearchParams();

  const page = params.get("page") || 1;
  const pageSize = params.get("pageSize") || 16;

  const { data, isLoading } = getProduct({
    limit: pageSize,
    skip: pageSize * (page - 1),
  });

  const handleChangePage = (page, pageS) => {
    if (pageS !== pageSize) {
      params.set("pageSize", pageS);
      params.set("page", "1");
    } else {
      params.set("page", page);
    }
    setParams(params);
  };

  return (
    <div>
      <Heros
        title="Shop"
        breadcrumb={["Home", "Shop"]}
        linkMap={{ Home: "/", Shop: "/shop" }}
        backgroundImage={HeroShop}
        height={300}
      />
      <BottomHero />

      <Products data={data?.data?.products} loading={isLoading} count={16} />
      <div className="my-8 flex justify-center">
        <Pagination
          current={page}
          onChange={handleChangePage}
          total={data?.data?.total}
          pageSize={pageSize}
        />
      </div>
      <FaetureList />
    </div>
  );
};

export default Shop;
