import React, { useState } from "react";
import { useProducts } from "@/api/useProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, InC, deCFromProduct } from "../redux/features/cartSlice";
import { wishlist } from "../redux/features/wishlistSlice";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Swipper = () => {
  const { getProduct } = useProducts();
  const { data } = getProduct();
  const slicedData = data?.data?.products?.slice(11, 19);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wishlistItems = useSelector((state) => state.wishlist.item || []);
  const cartItems = useSelector((state) => state.cart.cart || []);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {slicedData?.map((item) => {
        const cartItem = cartItems.find((ci) => ci.id === item.id);

        const handleAddToCart = () => dispatch(addToCart(item));
        const handleInC = () => dispatch(InC(item.id));
        const handleDeC = () => dispatch(deCFromProduct(item.id));
        const handleWishlist = () => dispatch(wishlist(item));

        return (
          <SwiperSlide key={item.id}>
            <div className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col justify-between h-full mb-15">
              <div className="relative w-full h-52 bg-white flex items-center justify-center p-4">
                <img
                  width={200}
                  src={item.thumbnail}
                  alt={item.title}
                  className="transition-transform duration-300 hover:scale-110 max-h-full object-contain cursor-pointer"
                />

                <button
                  onClick={handleWishlist}
                  className="absolute top-4 right-4 bg-white shadow p-1 rounded-full z-10 cursor-pointer"
                >
                  {wishlistItems.some((w) => w.id === item.id) ? (
                    <FaHeart className="text-[#F4B400] text-xl" />
                  ) : (
                    <CiHeart className="text-2xl" />
                  )}
                </button>

                {item.discountPercentage && (
                  <span className="absolute top-3 left-3 bg-sky-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    -{item.discountPercentage}%
                  </span>
                )}
              </div>

              <div className="p-4 flex-grow bg-gray-100">
                <h3
                  onClick={() => navigate(`/product/${item.id}`)}
                  className="text-base cursor-pointer font-medium text-gray-800 line-clamp-2 hover:text-[#F4B400] transition"
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {item.shippingInformation}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    {item.price.toLocaleString()}$
                  </span>
                  <span className="text-sm line-through text-gray-400">
                    {(item.price * 1.2).toFixed(0)}$
                  </span>
                </div>
              </div>

              <div className="px-4 pb-4 pt-2 bg-gray-100 rounded-b-2xl">
                {cartItem ? (
                  <div className="w-full h-[35px] bg-gray-300 rounded-full flex items-center justify-center gap-4 text-black">
                    <button
                      onClick={handleDeC}
                      className="w-7 h-7 cursor-pointer rounded-full flex items-center justify-center text-base font-bold hover:bg-gray-200 hover:!text-black transition"
                    >
                      −
                    </button>
                    <span className="text-sm font-semibold">
                      {cartItem.quantity}
                    </span>
                    <button
                      onClick={handleInC}
                      className="w-7 h-7 cursor-pointer rounded-full flex items-center justify-center text-base font-bold hover:bg-gray-200 hover:!text-black transition"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className="bg-[#F4B400] !text-black w-full h-[35px] py-2 rounded-full text-sm font-medium cursor-pointer"
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default React.memo(Swipper);
