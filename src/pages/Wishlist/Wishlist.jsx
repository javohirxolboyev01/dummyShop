import React from "react";
import Products from "@/components/products/Products";
import { useSelector } from "react-redux";
import { wishlist } from "@/components/redux/features/wishlistSlice";

const Wishlist = () => {
  const wishlistItem = useSelector((state) => state.wishlist.item);
  console.log(wishlistItem);
  return (
    <div className="mt-10">
      <Products data={wishlistItem} />
    </div>
  );
};

export default Wishlist;
