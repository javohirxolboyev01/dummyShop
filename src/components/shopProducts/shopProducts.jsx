import React from "react";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist, wishlist } from "../redux/features/wishlistSlice";
import { addToCart } from "../redux/features/cartSlice";

const Shopping = ({ data }) => {
  const dispatch = useDispatch();
  const wishlistItem = useSelector((state) => state.wishlist.item);
  const navigate = useNavigate();

  return (
    <div className="px-2 sm:px-4 md:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {data?.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-xl overflow-hidden shadow group transition duration-300 hover:shadow-md"
          >
            <div className="relative">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 sm:h-52 md:h-56 object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center space-y-2 text-white text-xs sm:text-sm">
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="bg-white text-black px-3 py-1 rounded-full font-medium hover:bg-gray-200 transition"
                >
                  Add to cart
                </button>
                <div className="flex gap-3 text-xs">
                  <span className="cursor-pointer hover:underline">Share</span>
                  <span className="cursor-pointer hover:underline">
                    Compare
                  </span>
                </div>

                <button className="absolute top-2 right-2 bg-white p-1 rounded-full text-gray-500 hover:text-red-600 shadow">
                  {wishlistItem.some((wish) => wish.id === item.id) ? (
                    <FaHeart
                      className="text-red-500 text-lg sm:text-xl"
                      onClick={() => dispatch(removeFromWishlist(item))}
                    />
                  ) : (
                    <CiHeart
                      className="text-lg sm:text-xl"
                      onClick={() => dispatch(wishlist(item))}
                    />
                  )}
                </button>
              </div>

              {item.discountPercentage && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] sm:text-xs px-2 py-1 rounded-full">
                  -{item.discountPercentage}%
                </span>
              )}
            </div>

            <div className="p-3 sm:p-4 bg-gray-100 h-full">
              <h2 className="text-gray-800 font-semibold text-sm sm:text-base line-clamp-2">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {item.shippingInformation}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <p className="text-base sm:text-lg font-bold text-gray-800">
                  {item.price.toLocaleString()}$
                </p>
                {item.oldPrice && (
                  <p className="text-xs sm:text-sm text-gray-400 line-through">
                    {item.oldPrice.toLocaleString()}$
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
