import React from "react";
import NoCart from "@/assets/noCart/noCart.png";
import { useProducts } from "@/api/useProducts";
import Products from "../products/Products";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const EmptyCartWithProducts = () => {
  const { getProduct } = useProducts();
  const { data, isLoading } = getProduct({ limit: 4 });
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center py-10">
        <img
          src={NoCart}
          alt="Savatcha bo‘sh"
          className="w-60 h-60 object-contain mb-6"
        />
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Savatchangiz bo‘sh
        </h2>
        <Button onClick={() => navigate("/")} type="primary" className="my-6 ">
          Xarid qilish
        </Button>
        <p className="text-gray-500 text-sm md:text-base">
          Lekin sizga tavsiya qiladigan mahsulotlarimiz bor
        </p>
      </div>

      <Products data={data?.data?.products} loading={isLoading} count={4} />
    </>
  );
};

export default EmptyCartWithProducts;
