import React from "react";
import { useSelector } from "react-redux";
import CartView from "../../components/Carts/CartView";
import Heros from "@/components/ReusableHero/Heros";
import HeroShop from "@/assets/hero/HeroShop.svg";
import FeatureList from "@/components/featureList/FaetureList";
import EmptyCartWithProducts from "@/components/Carts/EmptyCartWithProducts";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cart);
  console.log(cartItem);

  if (cartItem.length === 0) {
    return (
      <div>
        <EmptyCartWithProducts />
      </div>
    );
  }

  return (
    <>
      <Heros
        title="Cart"
        breadcrumb={["Home", "Cart"]}
        linkMap={{ Home: "/", Cart: "/cart" }}
        backgroundImage={HeroShop}
      />
      <CartView datas={cartItem} />
      <FeatureList />
    </>
  );
};

export default React.memo(Cart);
