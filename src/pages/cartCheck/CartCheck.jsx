import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/components/redux/features/cartSlice";
import { FaTrashAlt } from "react-icons/fa";

const CartCheck = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm flex flex-col sm:flex-row items-center p-4 gap-4"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-32 h-32 object-contain border rounded-lg p-2 bg-white"
                />

                <div className="flex-1 w-full">
                  <h3 className="text-md font-medium text-gray-900">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex justify-between items-center">
                    <div className="flex items-center border rounded overflow-hidden">
                      <button
                        onClick={() =>
                          dispatch(decreaseQuantity({ id: item.id }))
                        }
                        className="px-3 py-1 text-gray-700 hover:bg-gray-100"
                      >
                        −
                      </button>
                      <span className="px-4 py-1 bg-white text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch(increaseQuantity({ id: item.id }))
                        }
                        className="px-3 py-1 text-gray-700 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right font-bold text-lg text-blue-700">
                      {(item.price * item.quantity).toLocaleString()} so'm
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                  className="text-red-500 hover:text-red-700 text-xl"
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-24 text-lg">
              Savatcha bo‘sh 😔
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartCheck;
