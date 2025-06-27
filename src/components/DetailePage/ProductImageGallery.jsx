import React from "react";

const ProductImageGallery = ({ images = [], selectedIndex, onSelect }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 ">
      <div className="flex sm:flex-col gap-2 sm:gap-3 overflow-x-auto sm:max-h-[420px]">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className={`bg-[#F9F1E7]  w-16 h-16 sm:w-20 sm:h-20 rounded border p-1 flex-shrink-0 transition duration-200 ${
              i === selectedIndex
                ? "border-blue-500 ring-2 ring-blue-400"
                : "border-gray-300 hover:border-gray-500"
            }`}
          >
            <img
              src={img}
              alt={`thumb-${i}`}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>

      <div className="bg-[#F9F1E7] border-gray-500 rounded-lg shadow-sm p-4 flex-1">
        <img
          src={images[selectedIndex]}
          alt="main product"
          className="w-full h-[300px] sm:h-[350px] md:h-[420px] object-contain"
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;
