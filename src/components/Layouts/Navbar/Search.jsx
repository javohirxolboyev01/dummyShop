import React from "react";
import { useNavigate } from "react-router-dom";

const SearchItem = ({ data }) => {
  const navigate = useNavigate();
  const handleSearch = (id) => {
    navigate(`/product/${id}`);
    setIsModalOpen(false)
  }
  return (
    <div>
      {data?.map((product) => (
        <div
          key={product.id}
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100  cursor-pointer transition"
        >
          <div
            className="flex"
            onClick={() => handleSearch(`/product/${product.id}`)
          
          }
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-8 h-8 rounded-full object-cover"
            />

            <span
              className="text-sm text-center mt-2 px-3 text-gray-800
            hover:!text-[#f4b400]"
            >
              {product.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchItem;
