import React from "react";
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WishIcon = () => {
  const wishlistItems = useSelector((state) => state.wishlist.item || []);
  return (
    <div>
      <Link to="/wishlist" className="relative block">
        <div className="relative">
          <CiHeart className="text-[22px] text-gray-800 hover:text-[#0074e9]" />
          {wishlistItems.length > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-[#ff4444] text-white text-[11px] leading-none w-[18px] h-[18px] rounded-full flex items-center justify-center font-semibold">
              {wishlistItems.length}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default WishIcon;
