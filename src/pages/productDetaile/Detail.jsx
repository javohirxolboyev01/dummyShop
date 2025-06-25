import { useProducts } from "@/api/useProducts";
import Products from "@/components/products/Products";
import React from "react";
import Img from "@/assets/noCart/detaile.png";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const { getProduct } = useProducts();
  const { data, isLoading } = getProduct({ limit: 4 });
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white py-10">
      <div className="mt-8 mb-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chap taraf – hech narsa yo‘q, lekin joy bor */}
          <div className="h-[300px]"></div>

          {/* O‘ng taraf – ma’lumotlar */}
          <div className="border-t border-gray-200 pt-6 text-sm text-gray-700 space-y-4 w-full">
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">SKU:</span>
              <span className="text-gray-800">SS001</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Category:</span>
              <span className="text-gray-800">Sofas</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Tags:</span>
              <span className="text-gray-800">Sofa, Chair, Home, Shop</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-600">Share:</span>
              <div className="flex space-x-3">
                <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-blue-600 font-semibold text-sm">
                  F
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-blue-700 font-semibold text-sm">
                  In
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-sky-500 font-semibold text-sm">
                  T
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="my-10">
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[650px] xl:h-[744px] max-w-[1440px] object-cover mx-auto mb-8"
            src={Img}
            alt="Rasm"
          />
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800  ">
            Related Products
          </h2>
        </div>

        {isLoading ? (
          <p className="text-center text-gray-500">Yuklanmoqda...</p>
        ) : (
          <Products data={data?.data?.products} count={4} />
        )}

        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 border border-yellow-600 !text-yellow-600 rounded-full text-base font-semibold hover:bg-yellow-600 hover:!text-white transition duration-200"
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
