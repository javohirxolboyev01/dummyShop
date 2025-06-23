import React from "react";
import Hero3 from "@/assets/hero/Hero3.svg";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist, wishlist } from "../redux/features/wishlistSlice";
import { addToCart } from "../redux/features/cartSlice";

const HomeProduct = ({ data }) => {
  const limitedData = data?.slice(10, 18);
  const rooms = data?.slice(10, 13);
  const dispatch = useDispatch();
  const wishlistItem = useSelector((state) => state.wishlist.item);
  console.log(wishlistItem);

  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-8">
        {limitedData?.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-xl overflow-hidden shadow group"
          >
            <div className="relative">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-52 object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/50  opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center space-y-2 text-white">
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="bg-white text-black text-sm px-4 py-1 rounded-full font-medium hover:bg-gray-200"
                >
                  Add to cart
                </button>
                <div className="flex gap-4 text-sm">
                  <span className="cursor-pointer hover:underline">Share</span>
                  <span className="cursor-pointer hover:underline">
                    Compare
                  </span>
                  <button
                    onClick={() =>
                      wishlistItem.some((wish) => wish.id === item.id)
                        ? dispatch(removeFromWishlist(item))
                        : dispatch(wishlist(item))
                    }
                    className="absolute top-2 right-2 bg-white p-1 rounded-full text-gray-500 hover:text-red-600 shadow"
                  >
                    {wishlistItem.some((wish) => wish.id === item.id) ? (
                      <FaHeart className="text-red-500 text-lg sm:text-xl" />
                    ) : (
                      <CiHeart className="text-lg sm:text-xl" />
                    )}
                  </button>
                </div>
              </div>

              {item.discountPercentage && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  -{item.discountPercentage}%
                </span>
              )}
            </div>

            <div className="p-4 bg-gray-100 h-full">
              <h2 className="text-gray-800 font-semibold text-base">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {item.shippingInformation}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <p className="text-lg font-bold text-gray-800">
                  {item.price.toLocaleString()}$
                </p>
                <p className="text-sm text-gray-400 line-through">
                  {(item.price * 1.2).toFixed(0)}$
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-10 px-4">
        <button
          onClick={() => navigate("/shop")}
          className="border border-yellow-600 text-yellow-600 font-medium px-6 py-2 rounded hover:bg-yellow-600 hover:text-white transition duration-300"
        >
          Show More
        </button>
      </div>

      <div className="mt-10 w-full flex flex-col lg:flex-row justify-between gap-6 p-4 md:p-8 bg-[#FDF7F2]">
        <div className="lg:w-1/3 space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            50+ Beautiful rooms <br /> inspiration
          </h3>
          <p className="text-gray-600">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <button className="bg-yellow-700 text-white px-6 py-2 rounded hover:bg-yellow-800 transition duration-300">
            Explore More
          </button>
        </div>

        <div className="lg:w-2/3 flex flex-col sm:flex-row gap-6">
          {rooms?.map((room) => (
            <div
              key={room.id}
              className="relative w-full sm:w-1/3 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:border-2 hover:border-yellow-600 transition duration-300 cursor-pointer"
            >
              <img
                src={room.thumbnail}
                alt={room.title}
                className="w-full h-48 object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/60 px-4 py-3">
                <p className="text-xs text-gray-600">{room.category}</p>
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg text-gray-800">
                    {room.title}
                  </h4>
                  <button className="bg-yellow-700 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm hover:bg-yellow-800">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full overflow-x-auto mt-10 px-4 mb-5">
        <div className="w-[1000px] sm:w-[1200px] md:w-[1400px] lg:w-[1799px] h-[300px] md:h-[500px] lg:h-[721px] mx-auto">
          <img
            src={Hero3}
            alt="Hero"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
