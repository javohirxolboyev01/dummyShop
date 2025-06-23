import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/components/redux/features/cartSlice";
import { AiFillDelete } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import HeroShop from "@/assets/hero/HeroShop.svg";
import { NavLink } from "react-router-dom";
import FaetureList from "@/components/featureList/FaetureList";

const CartCheck = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full">
      <div
        className="h-48 md:h-60 bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${HeroShop})` }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">Cart</h1>
        <p className="flex items-center gap-2 text-sm text-black">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <IoIosArrowForward />
          <NavLink to="/cart" className="hover:underline">
            Cart
          </NavLink>
        </p>
      </div>

      <div className="bg-gray-100 min-h-screen px-4 py-6 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.length > 0 ? (
              <div className="bg-white rounded-xl shadow-sm">
                <div className="hidden md:grid grid-cols-4 font-semibold text-gray-600 px-6 py-3 bg-[#F9F1E7] rounded-t-xl">
                  <span>Product</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Subtotal</span>
                </div>

                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`grid grid-cols-1 md:grid-cols-4 items-center gap-4 px-6 py-4 ${
                      index !== cartItems.length - 1 ? "" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-20 h-20 object-contain rounded border"
                      />
                      <p className="font-medium text-sm sm:text-base">
                        {item.title}
                      </p>
                    </div>

                    <div className="text-gray-600 text-sm sm:text-base">
                      {item.price.toLocaleString()} $
                    </div>

                    <div className="flex items-center border rounded w-fit">
                      <button
                        onClick={() =>
                          dispatch(decreaseQuantity({ id: item.id }))
                        }
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        −
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch(increaseQuantity({ id: item.id }))
                        }
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-gray-600 text-sm sm:text-base">
                        {(item.price * item.quantity).toLocaleString()} $
                      </span>
                      <button
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                        className=" text-yellow-600 hover:text-yellow-600 text-2xl"
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-24 text-lg col-span-2">
                Savatcha bo‘sh 😔
              </div>
            )}
          </div>

          <div className="bg-[#F9F1E7] rounded-xl shadow-sm p-6 h-fit">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Cart Totals
            </h2>

            <div className="flex justify-between text-gray-600 mb-2 text-sm sm:text-base">
              <span>Subtotal</span>
              <span>{total.toLocaleString()} $</span>
            </div>

            <div className="flex justify-between font-semibold text-lg text-gray-800 mb-6">
              <span>Total</span>
              <span className="text-yellow-600">
                {total.toLocaleString()} $
              </span>
            </div>

            <button className="w-full py-2  text-black border rounded hover:bg-gray-600  hover:text-white transition">
              Check Out
            </button>
          </div>
        </div>
      </div>
      <FaetureList/>
    </div>
  );
};

export default CartCheck;
