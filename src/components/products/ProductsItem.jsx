import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { wishlist } from "../redux/features/wishlistSlice";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const ProductsItem = (product) => {
  const navigate = useNavigate();
  const { thumbnail, title, price, discountPercentage, shippingInformation } =
    product;
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const WhistlistItem = useSelector((state) => state.wishlist.item);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);

    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow group">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-52 object-contain transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center space-y-2 text-white">
          <button
            onClick={handleAddToCart}
            className={`text-sm px-4 py-1 rounded-full font-medium transition ${
              added
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-white !text-black hover:bg-gray-200"
            }`}
          >
            {added ? "Qo‘shildi" : "Add to cart"}
          </button>

          <div className="flex gap-4 text-sm">
            <span className="cursor-pointer hover:underline">Share</span>
            <span className="cursor-pointer hover:underline">Compare</span>
          </div>
        </div>
        <div>
          <button
            onClick={() => dispatch(wishlist(product))}
            className="absolute top-4 right-4 cursor-pointer size-8 grid place-items-center bg-white  rounded-full"
          >
            {WhistlistItem.some((item) => item.id === product.id) ? (
              <FaHeart className="text-red-600" />
            ) : (
              <CiHeart className="text-lg sm:text-xl" />
            )}
          </button>
        </div>

        {discountPercentage && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            -{discountPercentage}%
          </span>
        )}
      </div>

      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="p-4 bg-gray-100 h-full"
      >
        <h2 className="text-gray-800 font-semibold text-base">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">{shippingInformation}</p>
        <div className="mt-2 flex items-center gap-2">
          <p className="text-lg font-bold text-gray-800">
            {price.toLocaleString()}$
          </p>
          <p className="text-sm text-gray-400 line-through">
            {(price * 1.2).toFixed(0)}$
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
