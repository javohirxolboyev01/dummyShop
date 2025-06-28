import React from "react";
import { useDispatch } from "react-redux";
import { deCFromCart, InC, removeFromCart } from "../redux/features/cartSlice";
import { FiTrash2 } from "react-icons/fi";

const CartItems = ({ id, thumbnail, title, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between px-4 py-4 ">
      <div className="flex items-center gap-4 w-1/3">
        <div className="w-20 h-20 bg-[#F9F1E7] flex items-center justify-center rounded">
          <img
            src={thumbnail}
            alt={title}
            className="w-[70px] h-[70px] object-contain"
          />
        </div>
        <p className="text-gray-700 font-medium text-sm line-clamp-2 leading-snug">
          {title}
        </p>
      </div>

      <div className="w-1/6 text-center text-gray-700 text-sm">
        {price.toLocaleString()}$
      </div>

      <div className="w-1/6 flex justify-center">
        <div className="w-full max-w-[200px] md:max-w-[160px] border rounded-md flex items-center justify-between">
          <button
            className="flex-1 py-2 text-base text-gray-600 disabled:opacity-30"
            onClick={() => dispatch(deCFromCart(id))}
            disabled={quantity <= 1}
          >
            −
          </button>

          <span className="px-2 py-2 text-sm md:text-base w-10 text-center">
            {quantity}
          </span>

          <button
            className="flex-1 py-2 text-base text-gray-800"
            onClick={() => dispatch(InC(id))}
          >
            +
          </button>
        </div>
      </div>

      <div className="w-1/6 text-center font-medium text-gray-800 text-sm">
        {(price * quantity).toLocaleString()}$
      </div>

      <div
        className="w-1/12 text-center text-[#B88E2F] text-xl cursor-pointer"
        onClick={() => dispatch(removeFromCart({ id }))}
      >
        <FiTrash2 />
      </div>
    </div>
  );
};

export default CartItems;
