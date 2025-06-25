import React from "react";
import { useSelector } from "react-redux";
import CartView from "../../components/Carts/CartView";
import Heros from "@/components/ReusableHero/Heros";
import HeroShop from "@/assets/hero/HeroShop.svg";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cart);
  console.log(cartItem);

  return (
    <>
      <Heros
        title="Cart"
        breadcrumb={["Home", "Cart"]}
        linkMap={{ Home: "/", Cart: "/cart" }}
        backgroundImage={HeroShop}
      />
      <CartView datas={cartItem} />
    </>
  );
};

export default React.memo(Cart);
