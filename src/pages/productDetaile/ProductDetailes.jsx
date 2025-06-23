import { useParams } from "react-router-dom";
import { useProducts } from "@/api/useProducts";
import React, { useState } from "react";
import { Rate } from "antd";
import "antd/dist/reset.css";

const ProductDetailes = () => {
  const { id } = useParams();
  const { getProductt } = useProducts();
  const { data, isLoading, error } = getProductt(id);
  const [nechanchi, setNechanchi] = useState(0);

  if (isLoading) return <p className="text-center py-12">Yuklanmoqda...</p>;
  if (error)
    return <p className="text-center py-12 text-red-500">Xatolik yuz berdi</p>;

  const product = data?.data;
  if (!product) return <p className="text-center py-12">Mahsulot topilmadi</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Chap taraf ya'ni child img: Rasm va thumbnillar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex sm:flex-col gap-2 sm:gap-3 overflow-x-auto sm:overflow-y-auto sm:max-h-[400px]">
          {product.images?.map((img, i) => (
            <div
              key={i}
              onClick={() => setNechanchi(i)}
              className={`w-16 h-16 sm:w-20 sm:h-20 border rounded cursor-pointer p-1 flex-shrink-0 ${
                i === nechanchi ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <img
                src={img}
                alt={`thumb-${i}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Asosiy rasm : thumbnail */}
        <div className="bg-white border rounded-lg shadow-sm p-4 flex-1">
          <img
            src={product.images?.[nechanchi]}
            alt="main product"
            className="w-full h-[300px] sm:h-[350px] md:h-[420px] object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            {product.title}
          </h1>

          <div className="flex items-center gap-2 mt-2">
            <Rate defaultValue={0} disabled />
            <span className="text-sm text-gray-500">(5 Customer Review)</span>
          </div>

          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            {product.description}
          </p>

          <div className="mt-5 text-2xl font-bold text-blue-700">
            {product.price.toLocaleString()} $
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Size:</span>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-3 py-1 border rounded text-sm hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-sm text-gray-500">Color:</span>
            <div className="flex gap-2">
              {["bg-blue-700", "bg-black", "bg-yellow-500"].map(
                (color, idx) => (
                  <div
                    key={idx}
                    className={`w-5 h-5 rounded-full border ${color} cursor-pointer`}
                  />
                )
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-5">
            <button className="w-10 h-10 rounded border">-</button>
            <span className="text-lg">1</span>
            <button className="w-10 h-10 rounded border">+</button>
          </div>

          <button className="w-full py-3 bg-black text-white rounded hover:bg-gray-800 transition">
            Savatga qo‘shish
          </button>
          <button className="w-full py-3 border border-gray-400 text-gray-800 rounded hover:bg-gray-100  transition">
            Tanlanganlarga qo‘shish
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailes;
