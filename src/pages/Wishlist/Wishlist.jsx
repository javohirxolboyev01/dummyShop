import React from "react";
import Products from "@/components/products/Products";
import { useSelector } from "react-redux";
import Heros from "@/components/ReusableHero/Heros";
import HeroShop from "@/assets/hero/HeroShop.svg";

import EmptyWishlist from "./EmptyWishlist";

const Wishlist = () => {
  const wishlistItem = useSelector((state) => state.wishlist.item);
  console.log(wishlistItem);

  if (wishlistItem.length === 0) {
    return (
      <div>
        <EmptyWishlist />
      </div>
    );
  }
  return (
    <div>
      <Heros
        title="Wishlist"
        breadcrumb={["Home", "Wishlist"]}
        linkMap={{ Home: "/", Wishlist: "/wishlsit" }}
        backgroundImage={HeroShop}
      />
      <div className="mt-10">
        <Products data={wishlistItem} />
      </div>
    </div>
  );
};

export default Wishlist;
