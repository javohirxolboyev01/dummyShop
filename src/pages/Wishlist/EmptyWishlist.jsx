import React from "react";
import EmptyWish from "@/assets/logo/wish.png";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useProducts } from "@/api/useProducts";
import Products from "@/components/products/Products";

const EmptyWishlist = () => {
  const navigate = useNavigate();
  const { getProduct } = useProducts();
  const { data } = getProduct({ limit: 4 });
  return (
    <>
      <div className="flex flex-col  items-center justify-center text-center py-10">
        <img
          src={EmptyWish}
          alt="Savatcha bo‘sh"
          className="w-60 h-60 object-contain mb-6 rounded-full bg-[#f4b400]"
        />
        <p className="text-lg font-bold">Yoqqan mahsulotlarni qo‘shing</p>
        <p className="text-sm mt-1">
          Mahsulot yonidagi <span className="text-[#f4b400]">♡</span> tugmasini
          bosing. Akkauntga kirsangiz, tanlanganlar saqlanadi.
        </p>
        <Button
          style={{
            backgroundColor: "#F4B400",
            borderColor: "#F4B400",
            color: "white",
          }}
          onClick={() => navigate("/")}
          type="primary"
          className="my-6 mb-20 "
        >
          <IoIosArrowBack /> Bosh sahifa
        </Button>
      </div>
      <div className="container mx-auto px-4 my-8">
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
          Ommabop mahsulotlar
        </p>
      </div>

      <Products data={data?.data?.products} count={4} />
    </>
  );
};

export default EmptyWishlist;
