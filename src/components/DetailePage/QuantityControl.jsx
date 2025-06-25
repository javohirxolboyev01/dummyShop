import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, InC, deC } from "../redux/features/cartSlice";

const QuantityControl = ({ product }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const item = useSelector((state) =>
    state.cart.cart.find((i) => i.id === product.id)
  );
  const quantity = item?.quantity || 0;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
      <div>

      <div className="flex items-center flex-wrap gap-3 mt-5 ">
        <button
          onClick={() => dispatch(deC(product))}
          disabled={quantity <= 1}
          className="w-9 h-9 rounded border text-xl font-semibold disabled:opacity-40 transition hover:bg-gray-100"
          >
          −
        </button>

        <span className="text-lg font-semibold w-8 text-center">
          {quantity}
        </span>

        <button
          onClick={() => dispatch(InC(product))}
          className="w-9 h-9 rounded border text-xl font-semibold transition hover:bg-gray-100 "
          >
          +
        </button>

        <button
          onClick={handleAddToCart}
          className={`text-sm px-8 py-4  rounded-full font-medium transition  ${
            added
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-gray-800 !text-white hover:bg-gray-700"
          }`}
          >
          {added ? "Qo‘shildi" : "Add to cart"}
        </button>
      </div>
    
          </div>
          
    
   
    
  );
};

export default QuantityControl;
