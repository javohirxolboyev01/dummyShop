import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, InC, deCFromProduct } from "../redux/features/cartSlice";

const QuantityControl = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart || []);

  const cartItem = cartItems.find((item) => item.id === product.id);

  const handleAddToCart = () => dispatch(addToCart(product));
  const handleInC = () => dispatch(InC(product.id));
  const handleDeC = () => dispatch(deCFromProduct(product.id));

  return (
    <div>
      <div className="px-4 pb-4 pt-2  rounded-b-2xl">
        {cartItem ? (
          <div className="w-[200px] h-[40px] bg-gray-300 rounded-full flex items-center justify-center gap-4 text-black">
            <button
              onClick={handleDeC}
              className="w-7 h-7 cursor-pointer rounded-full flex items-center justify-center text-base font-bold hover:bg-gray-200 hover:!text-black transition"
            >
              −
            </button>
            <span className="text-sm font-semibold">{cartItem.quantity}</span>
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
            className="bg-[#F4B400] !text-black w-[200px] h-[40px] py-2 rounded-full text-sm font-medium cursor-pointer"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};
export default QuantityControl;
