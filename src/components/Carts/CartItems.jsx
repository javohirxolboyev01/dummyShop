import React from "react";
import { useDispatch } from "react-redux";
import { deC, InC, removeFromCart } from "../redux/features/cartSlice";
import { FiTrash2 } from "react-icons/fi";

const CartItems = (products) => {
  const dispatch = useDispatch();
  const { thumbnail, title, price, quantity } = products;

  return (
    <div className="flex items-center justify-between px-4 py-6 border-b">
      <div className="flex items-center gap-6 w-1/3">
        <div className="w-24 h-24 bg-[#F9F1E7] rounded flex items-center justify-center">
          <img
            src={thumbnail}
            alt={title}
            className="object-contain w-full h-full p-2"
          />
        </div>
        <p className="text-gray-600 font-medium">{title}</p>
      </div>

      <div className="w-1/6 text-center text-gray-600">
        Rs. {price}$
      </div>

      <div className="w-1/6 flex justify-center items-center">
        <div className="flex border rounded-md overflow-hidden">
          <button
            className="px-3 py-1 text-lg text-gray-500 disabled:opacity-30"
            onClick={() => dispatch(deC(products))}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="px-4 py-1 text-center">{quantity}</span>
          <button
            className="px-3 py-1 text-lg text-gray-700"
            onClick={() => dispatch(InC(products))}
          >
            +
          </button>
        </div>
      </div>

      <div className="w-1/6 text-center font-medium">
        Rs. {(price * quantity).toLocaleString()}
      </div>

      <div
        className="w-1/12 text-center text-[#B88E2F] text-xl cursor-pointer"
        onClick={() => dispatch(removeFromCart(products))}
      >
        <FiTrash2 />
      </div>
    </div>
  );
};

export default CartItems;
