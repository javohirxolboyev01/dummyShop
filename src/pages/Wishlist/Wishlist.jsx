import React from "react";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../components/redux/features/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItem = useSelector((state) => state.wishlist.item);
  console.log(wishlistItem);
  return (
    <div className="p-6 min-h-screen bg-gray-100">
      {wishlistItem.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItem.map((item) => (
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

                <button
                  onClick={() => dispatch(removeFromWishlist(item))}
                  className="absolute top-2 right-2 bg-white p-1 rounded-full text-gray-600 hover:text-red-500 shadow z-10"
                >
                  <CiHeart className="text-2xl" />
                </button>

                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  Tez yetkazish
                </span>
              </div>

              <div className="p-4 bg-gray-100 h-full">
                <h2 className="text-gray-800 font-semibold text-base">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {item.description || "Yetkazib berish mavjud"}
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
      ) : (
        <div className="text-center text-gray-500 text-lg">
          Whislistda Hech narsa yo 😔
        </div>
      )}
    </div>
  );
};

export default Wishlist;
