import React, { useState } from "react";
import { Rate } from "antd";

const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("bg-black");

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
        {product.title}
      </h1>
      <div className="flex items-center gap-2 mt-2">
        <Rate defaultValue={5} disabled />
        <span className="text-sm text-gray-500">(5 Customer Review)</span>
      </div>
      <p className="text-gray-600 mt-4 text-sm sm:text-base">
        {product.description}
      </p>
      <div className="mt-5 text-2xl font-bold text-gray-600">
        {product.price.toLocaleString()} $
      </div>
      <div className="mt-6">
        <span className="block mb-2 text-sm text-gray-500">Size:</span>
        <div className="flex gap-2">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1 border rounded text-sm hover:bg-gray-100 ${
                selectedSize === size ? "border-gray-800 font-semibold" : ""
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <span className="block mb-2 text-sm text-gray-500">Color:</span>
        <div className="flex gap-2">
          {["bg-blue-700", "bg-black", "bg-yellow-500"].map((color, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded-full border cursor-pointer ${color} ${
                selectedColor === color ? "ring-2 ring-gray-700" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
